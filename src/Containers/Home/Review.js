import React, { useEffect, useState } from 'react';
import Card from '../../components/UI/Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Heading2 } from '../../components/UI/Heading/Heading';
import { Link, NavLink } from 'react-router-dom';



function Review(props) {

    const [review, setReview] = useState([]);


    const getData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments")

        const data = await response.json();

        console.log(data);

        setReview(data)

    }

    useEffect(() => {
        getData();
    }, [])

    return (

        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="section-title"><Heading2>Reviews</Heading2></div>
                <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay={100}>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={5}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {
                            review.map((v) => {
                                return (
                                    <SwiperSlide>
                                        <NavLink to={"/Review_Details/" + v.id}>
                                        <Card
                                            id={v.id}
                                            name={v.name}
                                            description={v.body}
                                        />
                                        </NavLink>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </section>

    );
}

export default Review;