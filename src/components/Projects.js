import React from 'react';
import './styles/Projects.css';

const Projects = () => {
    const projects = [
     
        {
            title: "internships web platform",
            description: "A web platform dedicated to the search for internships for students.",
            technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            link: "#"
        },
        {
            title: "Parking Management System",
            description: "A comprehensive Parking management system designed to streamline the operations of parking facilities",
            technologies: ["Java", "JavaFX", "MySQL"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="technologies">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <a href={project.link} className="project-link">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
