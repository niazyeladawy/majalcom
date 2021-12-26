import axios from 'axios';
import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import './Footer.css'

function Footer() {

    const [socials, setSocials] = useState();

    const getSocials = async () => {
        let { data } = await axios.get("https://mgalbackend.augresearch.com/api/General/home");
        setSocials(data.data.setting.socials);
    }

    
    useEffect(() => {
        getSocials(socials);
    }, []);

    return (
        <div className='footer py-4'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-xl-2'>
                        <div className='item d-flex'>
                            <a className='footer__logo' href="ss"><img src={logo} alt="logo"/></a>
                        </div>
                    </div>
                    <div className='col-xl-8'>
                        <div className='item text-center'>
                            <ul className='list-unstyled d-flex justify-content-around navs'>
                                <li><a href="#ss">About Us </a></li>
                                <li><a href="#ss"> Contact Us </a></li>
                                <li><a href="#ss">  Privacy Policy </a></li>
                                <li><a href="#ss"> Terms & Conditions </a></li>
                                <li><a href="#ss"> Regulations</a></li>
                            </ul>
                            <p className='copyright'>Copyright © 2021. Majalcom. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className='col-xl-2'>
                        <div className='item'>
                            <ul className='socials list-unstyled d-flex justify-content-center'>
                                <li><a href={socials && socials.facebook}><i className='fab fa-facebook-f'></i></a></li>
                                <li><a href={socials && socials.facebook}><i className='fab fa-twitter'></i></a></li>
                                <li><a href={socials && socials.facebook}><i className='fab fa-youtube'></i></a></li>
                                <li><a href={socials && socials.facebook}><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
