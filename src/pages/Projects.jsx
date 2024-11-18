import React from 'react';
import { ProjectCard } from '../components/ProjectCard'; // Asumiendo que creaste este componente para mostrar proyectos
import '../styles/projects.css';
import nodirenada from '../assets/Johnny_Tightlips.png';

const projectsData = [
    {
        name:'HTML',
        description: `Pagina web para demostrar habilidades en HTML`,
        url: `https://proyecto-html-vert.vercel.app/`
    },
    {
        name: 'Lista de tareas',
        description: `Sistema de lista de tareas en Angular con local Storage.`,
        url: 'https://app-lista-tareas-angular-localstorage.vercel.app/'
    },
    {
        name: 'CRUD App React',
        description: 'Sistema de CRUD en React con autenticación via Auth0.',
        url: 'https://login-logout-crud-react-p3-frontend.vercel.app/'
    },
    {
        name: 'Flappy Bird',
        description: `Juego de Flappy Bird. Sin sonido.`,
        url: 'https://flappy-bird-ruby-eight.vercel.app/'
    },

];

export const Projects = () => {
    return (
        <div className="projects">
            <h1>Mis Proyectos</h1>
            <div className="projects-list">
                {/* <img className='johny' src={nodirenada} alt="Aca debería haber proyectos." /> */}
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

// export default Projects;
