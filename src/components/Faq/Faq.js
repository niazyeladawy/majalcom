import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Faq.css';

export default function Faq() {

    const [questions, setQuestions] = useState([]);

    const getQuestions = async () => {
        let { data } = await axios.get("https://mgalbackend.augresearch.com/api/General/home");
        setQuestions(data.data.fqa);
    }


    useEffect(() => {
        getQuestions();
    }, [])

    return (
        <div className='faq bg-main section-padding'>
            <div className='container'>
                <div className='section__title text-center  mb-5'>
                    <h2>Frequently Asked Questions</h2>
                </div>

                <div className="accordion" id="accordionExample">
                    {
                        questions && questions.map((question, idx) => (
                            <div className="accordion-item mb-3" key={idx}>
                                <h2 className="accordion-header" id={"heading" + idx}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + idx} aria-expanded="false" aria-controls={"collapse" + idx}>
                                        {question.question}
                                    </button>
                                </h2>
                                <div id={"collapse" + idx} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {question.answer}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='text-center'>
                    <button className='main-btn mt-5'>See More</button>
                </div>
            </div>
        </div>
    )
}
