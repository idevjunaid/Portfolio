import React, { useState, useRef, useEffect } from 'react';
import './Work.scss';
import projects from './Projects';

function Work() {
    const [activeTab, setActiveTab] = useState('fixes');
    const [tabIndex, setTabIndex] = useState(0);
    const sectionRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    const renderProjects = (category) => {
        const filteredProjects = projects.filter((project) => project.category === category);

        return (
            <div className={`project-list ${activeTab === category ? 'visible' : ''}`}>
                {filteredProjects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p><strong>Role:</strong> {project.role}</p>
                        <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    const handleTabChange = (tab, index) => {
        setActiveTab(tab);
        setTabIndex(index);
    };

    useEffect(() => {
        if (sectionRef.current) {
            const sectionWidth = sectionRef.current.clientWidth;
            sectionRef.current.style.transform = `translateX(-${tabIndex * sectionWidth}px)`;
        }
    }, [tabIndex]);

    useEffect(() => {
        setAnimate(true);
    }, []);

    const tabs = [
        { name: 'fixes', label: 'Fixes' },
        { name: 'personal', label: 'Personal Projects' },
        { name: 'apis', label: 'APIs' }
    ];

    return (
        <>
            <div className={`main offset-lg-3 col-md-12 col-lg-9 d-flex align-items-center text-white ${animate ? 'slide-fade-enter-active' : ''}`}>
                <div className="work">
                    <h2>Work</h2>
                    <div className="tabs">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab.name}
                                className={activeTab === tab.name ? 'active' : ''}
                                onClick={() => handleTabChange(tab.name, index)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <section ref={sectionRef} className="project-section">
                        {tabs.map((tab) => (
                            <div key={tab.name} className="tab-content">
                                {renderProjects(tab.name)}
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </>
    );
}

export default Work;
