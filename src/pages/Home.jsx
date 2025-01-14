import React from "react";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAngular,
  SiKotlin,
  SiGo,
  SiCsharp,
  SiMysql,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiTypescript,
  SiGradle,
  SiJetpackcompose,
  SiCplusplus,
  SiGodotengine,
  SiTsnode,
} from "react-icons/si"; // Iconos de lenguajes y tecnologías
import cv from "../assets/cv/CV_delaIglesiaPabloAlejandro.pdf";
import "../styles/home.css";
import foto from "../assets/images/profile.jpg";
import { RiNextjsLine } from "react-icons/ri";

export const Home = () => {
  return (
    <>
      <h1>Bienvenido a mi portfolio</h1>
      <div className="home">
        <div className="left-content">
          <p>
            Hola, soy Pablo Alejandro de la Iglesia, desarrollador fullstack
            especializado en el stack MERN. Actualmente, me estoy capacitando en
            TypeScript y Godot con GDScript, con el objetivo de crear
            experiencias web intuitivas y videojuegos con mecánicas bien
            desarrolladas en 2D y 3D.
          </p>
          <p>
            Este portafolio, desarrollado con React, refleja mi pasión por este
            stack tecnológico. También estoy profundizando en Next.js y Node.js
            con TypeScript, ampliando mis habilidades en desarrollo web moderno.
          </p>
          <p>
            Aquí encontrarás proyectos destacados y la opción de descargar mi
            currículum. ¡Estoy abierto a nuevas ideas y colaboraciones!
          </p>

          <div className="social-icons">
            <a
              href="https://github.com/Lata1989"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/pablo-alejandro-de-la-iglesia-84360b234/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href={cv} download="Pablo_Alejandro_de_la_Iglesia_CV.pdf">
              <FaDownload title="Download CV"></FaDownload>
            </a>
          </div>
        </div>
        <div className="right-content">
          <img src={foto} alt="Imagen de presentación" />
        </div>
      </div>

      {/* Sección de tecnologías */}
      <div className="tech-logos">
        <h2>Tecnologías que estoy aprendiendo</h2>
        <div className="tech-icons">
          <SiGodotengine title="Godot Engine - GDScript"></SiGodotengine>
          <RiNextjsLine title="NextJS"></RiNextjsLine>
          <SiTsnode></SiTsnode>
        </div>
      </div>
      <div className="tech-logos">
        <h2>Tecnologías nivel trainee</h2>
        <div className="tech-icons">
          <SiCplusplus title="C++"></SiCplusplus>
          <SiTypescript title="Typescript" />
          <SiAngular title="Angular" />
          <SiNodedotjs title="Node.js" />
          <SiReact title="React" />
          <SiKotlin title="Kotlin" />
          <SiGradle title="Gradle"></SiGradle>
          <SiJetpackcompose title="Jetpack Compose"></SiJetpackcompose>
          <SiGo title="Go" />
        </div>
      </div>

      <div className="tech-logos">
        <h2>Tecnologías nivel junior</h2>
        <div className="tech-icons">
          <SiCsharp title="C#" />
          <SiHtml5 title="HTML5" />
          <SiCss3 title="CSS3" />
          <SiJavascript title="JavaScript" />
          <SiMongodb title="MongoDB" />
          <SiMysql title="MySQL" />
          <SiMicrosoftsqlserver title="SQL Server" />
          <SiPostgresql title="Postgres" />
        </div>
      </div>
    </>
  );
};
