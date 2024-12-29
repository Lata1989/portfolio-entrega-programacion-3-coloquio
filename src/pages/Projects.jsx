import React from 'react';
import { ProjectCard } from '../components/ProjectCard'; // Asumiendo que creaste este componente para mostrar proyectos
import '../styles/projects.css';
import nodirenada from '../assets/images/Johnny_Tightlips.png';

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
        description: `Juego de Flappy Bird. Sin sonido. Hecho con HTML, CSS y JS.`,
        url: 'https://flappy-bird-ruby-eight.vercel.app/'
    },
    {
        name: 'Dodge the Creeps',
        description: `Un juego hecho en Godot. ¡Descárgalo y juegalo! Completamente con GDScript. Es parte de la documentación oficial de Godot.`,
        url: '/assets/projects/DodgeTheCreeps.rar'
    },
    {
        name: 'Pong Game',
        description: 'Un juego de Pong hecho en Godot. ¡Descárgalo y juegalo! Completamente con GDScript.',
        url: '/assets/projects/Pong.rar'
    },
    {
        name: 'Flappy Bird',
        description: 'Un Flappy Bird hecho en Godot. ¡Descárgalo y juegalo! Completamente con GDScript. Un juego que fue mi primer juego realizado en HTML, CSS y Javascript pero ahora mas divertido!',
        url: '/assets/projects/FlappyBird.rar'
    }
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
