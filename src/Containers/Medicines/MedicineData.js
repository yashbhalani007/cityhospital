import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


let localdata = JSON.parse(localStorage.getItem("medicines"));

function MedicineData(props) {

    const { id } = useParams()

    let fdata = localdata.filter((v) => v.id === parseInt(id))

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