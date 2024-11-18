import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiHtml5, SiCss3, SiAngular, SiKotlin, SiGo, SiCsharp, SiMysql, SiPostgresql, SiMicrosoftsqlserver, SiTypescript } from 'react-icons/si'; // Iconos de lenguajes y tecnologías
import '../styles/home.css';
import foto from "../assets/io.jpg";

export const Home = () => {
    return (
        <>
            <h1>Bienvenido a mi portfolio</h1>
            <div className="home">
                <div className="left-content">
                    <p>
                        Hola, soy Pablo Alejandro de la Iglesia, un desarrollador fullstack apasionado por crear soluciones innovadoras utilizando tecnologías modernas como React, Node.js y MongoDB.
                        Mi objetivo es desarrollar experiencias web intuitivas y eficientes que marquen la diferencia.
                    </p>
                    <p>
                        En mi portafolio encontrarás proyectos que reflejan mi dedicación y habilidades. Además, puedes explorar mis repositorios en GitHub para conocer más sobre mi trabajo.
                        Si deseas conectarte conmigo, no dudes en contactarme a través de LinkedIn. ¡Estoy siempre abierto a nuevas ideas y colaboraciones!
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
                <h2>Tecnologías</h2>
                <div className="tech-icons">
                    <SiHtml5 title="HTML5" />
                    <SiCss3 title="CSS3" />
                    <SiJavascript title="JavaScript" />
                    <SiTypescript title='Typescript'></SiTypescript>
                    <SiNodedotjs title="Node.js" />
                    <SiReact title="React" />
                    <SiAngular title='Angular'></SiAngular>
                    <SiMysql title='MySQL'></SiMysql>
                    <SiMicrosoftsqlserver title='SQL Server'></SiMicrosoftsqlserver>
                    <SiMongodb title="MongoDB" />
                    <SiKotlin title='Kotlin'></SiKotlin>
                    <SiGo title='Go'></SiGo>
                    <SiCsharp title='C#'></SiCsharp>
                </div>
            </div>
        </>
    );
};
