import React, { useEffect, useState } from 'react';
import Card from '../../components/UI/Card/Card';
import { Link } from 'react-router-dom';
import { getMedichines } from '../../redux/action/medichine.action';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { addtocart } from '../../redux/slice/cart.slice';


function Medicines({ CartIncDec, setfavvalue, fav }) {

    const dispatch = useDispatch()

    const m1 = useSelector((state) => state.medicines)

    const c1 = useSelector((state) => state.cart)
    console.log(c1);

    useEffect(() => {
        dispatch(getMedichines())
    }, [])


    const HandleAddtocart = (event ,id) => {
        event.preventDefault();

        dispatch(addtocart({id: id, qty: 1}))
        
        CartIncDec((prev) => prev + 1)

    }

    const handlefav = (event, id) => {
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
                    m1.isLoading ? <CircularProgress color="secondary" /> :
                        m1.error ? <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                This is an error alert — <strong>{m1.error}</strong>
                            </Alert>
                        </Stack> :
                            m1.medichines.map((v) => {
                                return (

                                    <Link to={"/Medicine_Details/" + v.id}>
                                        <Card
                                            handlefavourite={(event) => handlefav(event,v.id)}
                                            fav={fav.includes(v.id) ? true : false}
                                            name={v.name}
                                            price={v.price}
                                            btnvalue={'Add to cart'}
                                            btnClick={(event) => HandleAddtocart(event,v.id)}
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