import React, { useEffect, useState } from 'react';
import './Download.css';
import play from '../../assets/download/Group 2236.png';
import apple from '../../assets/download/Image 4.png';
import phone1 from '../../assets/download/Rectangle Copy 3.png';
import phone2 from '../../assets/download/Rectangle Copy 4@2x.png';
import phone3 from '../../assets/download/Rectangle@2x.png';
import axios from 'axios';

function Download() {

    const [settings, setSettings] = useState([]);

    const getSettings = async () => {
        let { data } = await axios.get("https://mgalbackend.augresearch.com/api/General/home");
        setSettings(data.data.setting);
    }

    useEffect(() => {
        getSettings();
    }, [])

    return (
        <div className='download section-padding position-relative overflow-hidden'>
            <div className='container text-white position-relative'>
                <h2>Download Majalcom <br/> app in your mobile.</h2>
                <h4>Download our mobile app in your IOS & Android  <br/> app store and start shopping from it hurry now</h4>
                <div className='apps mt-5'>
                    <a href={settings && settings.appleLink} className='me-3'><img src={apple} alt="apple"/></a>
                    <a href={settings && settings.androidLink}><img src={play} alt="play"/></a>
                </div>
            </div>
            <div className='phone1 position-absolute'>
                <img src={phone1} alt="phone1"/>
            </div>
            <div className='phone2 position-absolute'>
                <img src={phone2} alt="phone2"/>
            </div>
            <div className='phone3 position-absolute'>
                <img src={phone3} alt="phone3"/>
            </div>
        </div>
    )
}

export default Download
