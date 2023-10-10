import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


function ReviewData(props) {

    const [reviewData, setReviewData] = useState([]);

    const { id } = useParams()

    const getData = async () => {

        const response = await fetch("https://jsonplaceholder.typicode.com/comments")

        const data = await response.json();

        console.log(data);

        setReviewData(data)

    }

    useEffect(() => {
        getData();
    }, [])


    let fdata = reviewData.filter((v) => v.id === parseInt(id))


    return (
        <section id="testimonials" className="testimonials">
            <div className="container">

                {

                    fdata.map((v) => {
                        return (
                            <div className='ReviewDetails'>
                                <h1>{v.id}</h1>
                                <h2>{v.name}</h2>
                                <p>{v.body}</p>
                                 <h5>email: <Link>{v.email}</Link></h5>
                            </div>
                        )
                    })

                }

            </div>
        </section>
    )
}

export default ReviewData;