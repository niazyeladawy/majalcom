import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Clients.css'

function Clients() {

    const [clients, setClients] = useState([]);

    const getClients = async () => {
        let { data } = await axios.get("https://mgalbackend.augresearch.com/api/General/home");
        setClients(data.data.clients);
    }
    

    useEffect(() => {
        getClients();
    }, [])

    return (
        <div className='clients bg-white  section-padding'>
            <div className='container'>
                <div className='section__title text-center  mb-5'>
                    <h2>Our Clients</h2>
                </div>
                { }
                <div className='clients__content d-flex justify-content-between'>
                    {
                        clients && clients.map((client) => (
                            <div className='d-flex flex-wrap align-items-center' key={client.id}>
                                <img className='client__img' src={client.image} alt={client.name}/>
                                <h3 className='ms-3'>{client.name}</h3>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Clients
