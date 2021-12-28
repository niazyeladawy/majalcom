import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './Slider.css'



function Slider() {
    const [images, setImages] = useState([]);

    const getData = async () => {
        let { data } = await axios.get("https://mgalbackend.augresearch.com/api/General/slider");
        setImages(data.data);
    }

    useEffect(() => {
        getData();
    }, [])

    console.log(images);

    return (
        <div className='slider'>
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
            >
                {
                    images && images.map((item) => (

                        <SwiperSlide key={item.id}><div className='silder-single-item  position-relative vh-100   ' style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: 'center' }}>

                            <h3 className='position-absolute slider-caption'>{item.text}</h3>
                        </div></SwiperSlide>
                    ))
                }


            </Swiper>
        </div>
    )
}

export default Slider
