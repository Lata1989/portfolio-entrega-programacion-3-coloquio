import React from 'react';
// import { ProjectCard } from '../components/ProjectCard'; // Asumiendo que creaste este componente para mostrar proyectos
import '../styles/projects.css';
import nodirenada from '../assets/Johnny_Tightlips.png';

// const projectsData = [
//     {
//         name: 'Gestor de Colas',
//         description: 'Sistema de gestión de colas para comercios.',
//     },
//     {
//         name: 'Generador de Respuestas con Gemini AI',
//         description: 'Sistema de generación automática de respuestas usando Google Generative AI.',
//     }
// ];

export const Projects = () => {
    return (
        <div className="projects">
            <h1>Mis Proyectos</h1>
            <div className="projects-list">
                <img className='johny' src={nodirenada} alt="Aca debería haber proyectos." />
                {/* {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))} */}
            </div>
        </div>
    );
};

// export default Projects;
