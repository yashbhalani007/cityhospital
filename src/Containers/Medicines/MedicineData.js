import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMedichines } from '../../redux/action/medichine.action';
import { useDispatch, useSelector } from 'react-redux';


function MedicineData(props) {

    const dispatch = useDispatch()

    const usermedichine = useSelector((state) => state.medicines)
    console.log(usermedichine);


    useEffect(() => {
        dispatch(getMedichines())
    },[])

    const { id } = useParams()

    let fdata = usermedichine.medichines.filter((v) => v.id === parseInt(id))

    return (
        <section id="testimonials" className="testimonials">
            <div className="container">

                {

                    fdata.map((v) => {
                        return (
                            <div className='ReviewDetails'>
                                <h1>{v.id}</h1>
                                <h2>Name: {v.name}</h2>
                                <h3>Price: {v.price}</h3>
                                <h5>Expiry date: {v.date}</h5>
                                <p>Details: {v.description}</p>
                            </div>
                        )
                    })

                }

            </div>
        </section>
    );
}

export default MedicineData;