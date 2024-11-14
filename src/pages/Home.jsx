import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiHtml5, SiCss3, SiAngular, SiKotlin, SiGo, SiCsharp } from 'react-icons/si'; // Iconos de lenguajes y tecnologías
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

            {/* Sección de tecnologías */}
            <div className="tech-logos">
                <h2>Tecnologías que domino</h2>
                <div className="tech-icons">
                    <SiHtml5 title="HTML5" />
                    <SiCss3 title="CSS3" />
                    <SiJavascript title="JavaScript" />
                    <SiNodedotjs title="Node.js" />
                    <SiReact title="React" />
                    <SiAngular title='Angular'></SiAngular>
                    <SiMongodb title="MongoDB" />
                    <SiKotlin title='Kotlin'></SiKotlin>
                    <SiGo title='Go'></SiGo>
                    <SiCsharp title='C#'></SiCsharp>
                </div>
            </div>
        </>
    );
};
