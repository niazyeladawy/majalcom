import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import './contanct.css';
import shape from '../../assets/contact/Group 2241.svg';

function Contact() {
    const [settings, setSettings] = useState([]);
    const initialFormData = Object.freeze({ name: "", email: "", phone: "", subject: "", message: "" });
    const [formData, updateFormData] = React.useState(initialFormData);

    const getUser = (e) => {
        updateFormData({
            ...formData,

            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
        });

    }

    const handleReset = async () => {
        Array.from(document.querySelectorAll("input,textarea")).forEach(
            input => (input.value = "")
        );
        this.setState({
            itemvalues: [{}]
        });
    };

    const getSettings = async () => {
        let { data } = await axios.get("https://mgalbackend.augresearch.com/api/General/home");
        setSettings(data.data.setting);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let { data } = await axios.post("https://mgalbackend.augresearch.com/api/General/sendMessage", formData);
        window.alert(data.message);
        handleReset();


    };

    useEffect(() => {
        getSettings();
    }, [])

    return (
        <div className='contact position-relative'>
            <div className='contact-content position-absolute '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 mb-sm-3 mb-lg-0'>
                            <div className='item bg-white shadow-lg h-100' >
                                <h3>Contact Us</h3>
                                <div className='contact__info'>
                                    <div className='contact__item d-flex align-items-center mb-4'>
                                        <i className='fas fa-envelope'></i>
                                        <div className='ms-3'>
                                            <h5>EMAIL ADDRESS</h5>
                                            <p>{settings && settings.email}</p>
                                        </div>
                                    </div>
                                    <div className='contact__item d-flex align-items-center mb-4'>
                                        <i className='fas fa-phone'></i>
                                        <div className='ms-3'>
                                            <h5>MOBILE NUMBER</h5>
                                            <p>{settings && settings.phone}</p>
                                        </div>
                                    </div>
                                    <div className='contact__item d-flex align-items-center mb-4'>
                                        <i className='fas fa-map-marker-alt'></i>
                                        <div className='ms-3'>
                                            <h5>ADDRESS</h5>
                                            <p>{settings && settings.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <div className='item bg-white shadow-lg' >
                                <h3 className='mb-4'>Request for Quotation</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className='d-flex mb-3'>
                                        <input onChange={getUser} className='form-control ' type="text" name="name" placeholder='Full Name' />
                                        <input onChange={getUser} className='form-control ms-3' type="email" name="email" placeholder='Email Address' />
                                    </div>
                                    <div className='d-flex mb-3'>
                                        <input onChange={getUser} className='form-control ' type="number" name="phone" placeholder='Mobile Number' />
                                        <input onChange={getUser} className='form-control ms-3' type="text" name="subject" placeholder='Subject' />
                                    </div>
                                    <div className='d-flex mb-3'>
                                        <textarea onChange={getUser} className='form-control' name='message' placeholder='Message' rows="3" cols=""></textarea>
                                    </div>
                                    <button className='main-btn ' type='submit'>Send Request</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='position-absolute bottom-0 footer__shape'>
                <img src={shape} alt="shape"/>
            </div>
        {<Footer />}
        </div>
    )
}

export default Contact
