import React, { useEffect, useState } from 'react';
import './Experience.scss';
import experienceData from './experienceData';

function Experience() {
    const [animate, setAnimate] = useState(false);
    
    useEffect(() => {
        setAnimate(true);
    }, []);
    
    return (
        <>
            <div className={`main offset-lg-3 col-md-12 col-lg-9 d-flex align-items-center text-white ${animate ? 'slide-fade-enter-active' : ''}`}>
                <div className="experience">
                    <h2>Experience</h2>
                    <section className="experience-section">
                        {experienceData.map((experience, index) => (
                            <div
                                key={index}
                                className="experience-card"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className='title d-lg-flex gap-3 align-items-center'>
                                    <h3>{experience.title}</h3> 
                                    <p className='dash'> - </p>
                                    <h4>{experience.company}</h4>
                                </div>
                                <p className='dates'>{experience.startDate} - {experience.endDate}</p>
                                <p className='position'>{experience.position}</p>
                                <p className='description'>{experience.description}</p>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </>
    );
}

export default Experience;
