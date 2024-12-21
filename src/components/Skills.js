import React from 'react';
import './styles/Skills.css';

const Skills = () => {
    const skills = {
        "Programming": ["Java", "Python", "C++"],
        "Web Development": ["HTML", "CSS", "JavaScript", "PHP", "Django", "Node.js"],
        "Databases": ["MySQL", "PostgreSQL", "MongoDB"],
        "Android Apps Developement": ["Flutter", "Kotlin"],
        "Cloud Computing": ["Google Cloud", "AWS"],
        "Containerization and Orchestration": ["Docker", "Kubernetes"],
        


    };

    return (
        <section id="skills" className="skills-section">
            <h2>Skills</h2>
            <div className="skills-container">
                {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="skill-category">
                        <h3>{category}</h3>
                        <div className="skill-list">
                            {skillList.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
