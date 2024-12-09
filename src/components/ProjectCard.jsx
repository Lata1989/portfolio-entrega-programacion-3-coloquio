export const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            {project.url.endsWith('.rar') ? (
                <a href={project.url} download>
                    Descargar {project.name}
                </a>
            ) : (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Ver Proyecto
                </a>
            )}
        </div>
    );
};


/*
import React from 'react';
import '../styles/projectCard.css';

export const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
                Ver Proyecto
            </a>
        </div>
    );
};
*/
// export default ProjectCard;
