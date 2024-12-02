import React from 'react';
import './ProjectPage.css';

const ProjectPage = () => {
    const projects = [
        { title: "Infrenox Pvt Ltd", description: "Simplify your billing process with our innovative solutions.", link: "https://infrenoxpvtltd.vercel.app/" }
    ];

    return (
        <div className="project-page">
            <h1 className="page-title">Our Projects</h1>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} className="project-link">View Details</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;
