import React, { useRef, useEffect, useState } from 'react';
import './About.scss';

function About() {
    const nodeRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    useEffect(() => {
        if (animate && nodeRef.current) {
            const skillLevels = nodeRef.current.querySelectorAll('.skill-level');
            skillLevels.forEach((skillLevel) => {
                const width = skillLevel.getAttribute('data-width');
                skillLevel.style.width = width;
            });
        }
    }, [animate]);

    const skills = [
        { name: 'HTML', level: 85 },
        { name: 'CSS', level: 80 },
        { name: 'JavaScript', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'Drupal', level: 90 },
        { name: 'MERN Stack', level: 70 },
    ];

    return (
        <div 
            ref={nodeRef} 
            className={`main offset-lg-3 col-md-12 col-lg-9 d-flex text-white ${animate ? 'slide-fade-enter-active' : ''}`}
        >
            <div className="about">
                <h2>About Me</h2>
                <p>Hi, I'm a Drupal web developer at Codeetechs. I have been with the company for the past two years, starting as an intern, then getting promoted to frontend developer, and later to full-stack Drupal developer.</p>
                <p>During my time at Codeetechs, I have learned various technologies to a proficient level. I am always eager to learn new skills and upskill myself.</p>

                <h3>Skills</h3>
                <ul className="skills">
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <p>{skill.name}</p>

                            <div className="skill-bar">
                                <div 
                                    className="skill-level" 
                                    style={{ width: '0%' }} 
                                    data-width={`${skill.level}%`}
                                >
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default About;
