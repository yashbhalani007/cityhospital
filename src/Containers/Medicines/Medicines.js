import React, { useEffect, useState } from 'react';
import Card from '../../components/UI/Card/Card';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMedichines } from '../../redux/action/medichine.action';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';


function Medicines({ CartIncDec, setfavvalue, fav }) {

    const dispatch = useDispatch()

    const usermedichine = useSelector((state) => state.medicines)
    console.log(usermedichine);


    useEffect(() => {
        dispatch(getMedichines())
    }, [])


    const HandleAddtocart = (event) => {
        event.preventDefault();

        CartIncDec((prev) => prev + 1)

    }

    const handlefav = (event , id) => {
        event.preventDefault();
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
                    usermedichine.isLoading ? <CircularProgress color="secondary" /> :
                        usermedichine.medichines.map((v) => {
                            return (

                                <Link to={"/Medicine_Details/" + v.id}>
                                    <Card
                                        handlefavourite={(event) => handlefav(v.id)}
                                        fav={fav.includes(v.id) ? true : false}
                                        name={v.name}
                                        price={v.price}
                                        btnvalue={'Add to cart'}
                                        btnClick={HandleAddtocart}
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