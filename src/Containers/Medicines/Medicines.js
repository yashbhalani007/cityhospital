import React, { useEffect, useState } from 'react';
import Card from '../../components/UI/Card/Card';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';




let localdata = JSON.parse(localStorage.getItem("medicines"));

function Medicines({ CartIncDec , setfavvalue ,fav }) {

    const [mData,setMdata] = useState([])



    const getData = () => {
        let localdata = JSON.parse(localStorage.getItem("medicines"));

        setMdata(localdata)
    }

    useEffect(() => {
        getData();
    },[])

    

    const HandleAddtocart = (event) => {
        event.preventDefault();

        CartIncDec((prev) => prev + 1)
        
    }

    const handlefav = (id) => {
        // event.preventDefault();
        if (fav.includes(id)) {
            let RmvSame = fav.filter((v) => v !== id);
            setfavvalue(RmvSame);
        } else {
            setfavvalue((prev) => [...prev, id]);
        }
    }

    return (
        <section id="testimonials" className="testimonials">
            <div className="container medicine">
            
                {
                    mData.map((v) => {
                        return (

                            // <Link to={"/Medicine_Details/" + v.id}>
                                <Card
                                    image={v.img}
                                    handlefavourite={() => handlefav(v.id)}
                                    fav={fav.includes(v.id) ? true : false}
                                    name={v.name}
                                    price={v.price}
                                    btnvalue={'Add to cart'}
                                    btnClick={HandleAddtocart}
                                />
                            // </Link>

                        )
                    })
                }

            </div>
        </section>
    );
}

export default Medicines;