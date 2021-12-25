import React, { useEffect, useState } from 'react';
import servie from '../../assets/services/Group 210.svg';
import './Services.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';

function Services() {

    const [service, setService] = useState([]);

    const getData = async ()=>{
        let {data} = await axios.get("https://mgalbackend.augresearch.com/api/General/home");
        setService(data.data.service);
    }
    
    useEffect(() => {
        getData();
    }, [])

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    
    const items = service?.map((item) => (
        <div className='service_slider_item position-relative mx-3'  >
            
            <img src={item.image} alt={item.name} className='w-100 service__image'/>
            <h3 className='position-absolute service_slider_title fs-1'>sds</h3>
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
        <div className='services section-padding bg-white'>
            <div className='container'>
                <div className='section__title d-flex justify-content-between mb-5'>
                    <h2>Services</h2>
                </div>
                <div>
                    <Carousel/>
                </div>
                <div className='services__desc'>
                    <div className='row align-items-center'>
                        <div className='col-lg-4 px-5 mb-md-3'>
                            <div className='item'>
                                <img src={servie} className='w-100' alt="services"/>
                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <div className='item'>
                                <h3>We Provide Services that Help your Business Grow</h3>
                                <p>Al Majal Advanced Services Company (Majalcom) is a Saudi company of origin and management based in Jeddah. It was established by a group of specialists with practical experience spanning more than 20 years in the field of support services in various activities and fields. Majalcom provides a range of services to its clients within the framework of flexible pricing programs and distinctive services supported by long management experience. Majalcom is inspired by its name for its activity, as it provides, in addition to basic services, cleaning, operation and maintenance of many specialized services in many fields</p>
                                <button className='main-btn mt-5'>Request For Service</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
