import React, { useEffect, useState } from 'react';
import './Workeres.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';

function Workers() {
    const [worker, setWorker] = useState([]);

    const getData = async () => {
        let { data } = await axios.get("https://mgalbackend.augresearch.com/api/General/home");
        setWorker(data.data.cats);
    }

    useEffect(() => {
        getData();
    }, [])

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };

    const items = worker?.map((item) => (
        <div className='item mx-3'>
            <img src={item.image} className='worker__image' alt={item.name} />
            <h3>{item.name}</h3>
        </div>
    ))

    const Carousel = () => (
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive} infinite disableDotsControls
            controlsStrategy="alternate"

        />
    );

    return (
        <div className='workers bg-main section-padding'>
            <div className='container'>
                <div className='section__title d-flex justify-content-between mb-5'>
                    <h2>Workers</h2>
                   
                </div>
                <Carousel/>
               
                <div className='text-center'>
                    <button className='main-btn mt-5'>View All Services</button>
                </div>
            </div>
        </div>
    )
}

export default Workers
