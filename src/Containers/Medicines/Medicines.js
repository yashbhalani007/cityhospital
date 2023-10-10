import React, { useEffect, useState } from 'react';
import Card from '../../components/UI/Card/Card';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';



let localdata = JSON.parse(localStorage.getItem("medicines"));

function Medicines({ CartIncDec }) {

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
        console.log("yyyyyyyyyyyy");

        CartIncDec((prev) => prev + 1)

        
    }

    return (
        <section id="testimonials" className="testimonials">
            <div className="container medicine">
            
                {
                    mData.map((v) => {
                        return (

                            <Link to={"/Medicine_Details/" + v.id}>
                                <Card
                                    favouriteval='aa'
                                    name={v.name}
                                    price={v.price}
                                    btnvalue={'Add to cart'}
                                    btnClick={HandleAddtocart}
                                    Emptybtw={FavoriteBorderIcon}
                                    fillBtw={FavoriteIcon}
                                />
                            </Link>

                        )
                    })
                }

            </div>
        </section>
    );
}

export default Medicines;