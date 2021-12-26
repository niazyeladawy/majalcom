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

                <div className='row'>
                    {
                        clients && clients.map((client) => (
                            <div className='col-lg-2 col-lg-4 col-sm-6 mb-sm-4' key={client.id}>
                                <div className='item d-flex  align-items-center ' >
                                    <img className='client__img' src={client.image} alt={client.name} />
                                    <h3 className='ms-3'>{client.name}</h3>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Clients
