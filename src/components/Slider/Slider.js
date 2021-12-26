import React, { useEffect, useState } from 'react';
import './Slider.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';



function Slider() {

    const [images, setImages] = useState([]);

    const getData = async () => {
        let { data } = await axios.get("https://mgalbackend.augresearch.com/api/General/slider");
        setImages(data.data);
    }

    useEffect(() => {
        getData();
    }, [])

    const responsive = {
        0: { items: 1 },
        
    };

    const items = images?.map((item) => (
        <div className='silder-single-item  position-relative   '>
            <img src={item.image} className='h-100 w-100' alt={item.name} />
            <h3 className='position-absolute slider-caption'>{item.text}</h3>
        </div>
    ))

    const Carousel = () => (
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive} infinite autoPlay autoPlayInterval={2000}
            controlsStrategy="alternate"

        />
    );
    return (
        <div className='slider '>
            <Carousel />
        </div>
    )
}

export default Slider
