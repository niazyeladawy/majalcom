import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Workeres.css';

function Workers() {
    const [worker, setWorker] = useState([]);

    const getData = async () => {
        let { data } = await axios.get("https://mgalbackend.augresearch.com/api/General/home");
        setWorker(data.data.cats);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='workers bg-main section-padding'>
            <div className='container position-relative'>
                <div className='section__title d-flex justify-content-between mb-5'>
                    <h2>Workers</h2>

                </div>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    navigation
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                          },
                          768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                          },
                          1000: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                          },
                          1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                          },
                    }}
                    loop={true}
                    spaceBetween={0}
                    
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                
                >

                    {
                        worker && worker.map((item) => (

                            <SwiperSlide key={item.id}><div className='item mx-3'>
                                <img src={item.image} className='worker__image' alt={item.name} />
                                <h3>{item.name}</h3>
                            </div></SwiperSlide>
                        ))
                    }




                </Swiper>

                <div className='text-center'>
                    <button className='main-btn mt-5'>View All Services</button>
                </div>
            </div>
        </div>
    )
}

export default Workers
