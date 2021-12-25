import React from 'react';
import testi1 from '../../assets/testimonials/2-1@2x.png';
import testi2 from '../../assets/testimonials/3-2.png';
import testi3 from '../../assets/testimonials/1-1@2x.png';
import './Testimonials.css';

function Testimonials() {
    return (
        <div className='testimonials bg-main section-padding'>
            <div className='container'>
                <div className='section__title text-center  mb-5'>
                    <h2>Customer opinions about our services</h2>
                </div>
                <div className='row'>
                    <div className='col-lg-3 mb-sm-3'>
                        <div className='item py-4 bg-white'>
                            <img src={testi1} alt="test"/>
                            <h4>Ahmed Mohamed Ali</h4>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                        </div>
                    </div>
                    <div className='col-lg-3 mb-sm-3'>
                        <div className='item py-4 bg-white'>
                            <img src={testi2} alt="test"/>
                            <h4>Ahmed Mohamed Ali</h4>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                        </div>
                    </div>
                    <div className='col-lg-3 mb-sm-3'>
                        <div className='item py-4 bg-white'>
                            <img src={testi3} alt="test"/>
                            <h4>Ahmed Mohamed Ali</h4>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                        </div>
                    </div>
                    <div className='col-lg-3 mb-sm-3'>
                        <div className='item py-4 bg-white'>
                            <img src={testi1} alt="test"/>
                            <h4>Ahmed Mohamed Ali</h4>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
