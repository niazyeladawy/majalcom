import React from 'react';
import './Header.css';
import logo from '../../assets/Group 2293.svg'

function Header() {
    return (
        <div className='navbar navbar-dark  header position-absolute w-100 py-4 navbar-expand-lg'>
            <div className='container '>
                <a href="#gg" className='logolink'><img className='logoimg' src={logo} alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className='row align-items-center collapse navbar-collapse' id='navbarSupportedContent'>
                    <div className='col-lg-2'>
                        <div className='item'>
                            <div className='header__left d-flex align-items-center justify-content-md-between justify-content-lg-start'>
                                <div className="dropdown">
                                    <button className="btn text-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Language
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">SA-English</a></li>
                                        <li><a className="dropdown-item" href="#">AR-Arabic</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <div className='item'>

                            <div className='header__center'>
                                <ul className='list-unstyled d-flex m-0 justify-content-md-between justify-content-lg-center'>
                                    <li><a href="#fd">Home</a></li>
                                    <li><a href="#fd">About Us</a></li>
                                    <li><a href="#fd">Services</a></li>
                                    <li><a href="#fd">FAQs</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-2'>
                        <div className='item text-center mt-md-3'>
                            <button className='btn bg-white contactus'>Contact Us</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Header
