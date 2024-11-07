import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';  // Ejemplo de íconos de redes sociales
import '../styles/home.css';
import foto from "../assets/io.jpg";

export const Home = () => {
    return (
        <>
            <h1>Bienvenido a mi Portafolio</h1>
            <div className="home">
                <div className="left-content">
                    <p>
                        Hola, soy Pablo Alejandro de la Iglesia, también conocido como Latita. Soy un desarrollador fullstack especializado en
                        tecnologías web modernas como React, Node.js y MongoDB. Explora mis proyectos, mis repositorios en GitHub o contáctame para más información.
                    </p>
                    <div className="social-icons">
                        <a href="https://github.com/Lata1989" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://linkedin.com/in/pablo-alejandro-de-la-iglesia-84360b234/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>
                <div className="right-content">
                    <img src={foto} alt="Imagen de presentación" />
                </div>
            </div>
        </>
    );
};
