import axios from "axios";
import { useEffect, useState } from "react";
import { marked } from "marked";  // Importar la librería marked
import '../styles/github.css';
import { FaReact } from 'react-icons/fa'; // React
import { SiAngular, SiTypescript, SiGo, SiNodedotjs } from 'react-icons/si'; // Angular, TypeScript, Go, Node.js
import { SiCss3, SiHtml5, SiJavascript } from 'react-icons/si'; // CSS, HTML, JavaScript
import { DiPython } from 'react-icons/di'; // Python
import johny from '../assets/Johnny_Tightlips.png'; // Imagen de Johnny Boca cerrada

// Mapeo de tecnologías a iconos
const getTechIcon = (tech) => {
    if (!tech || tech === 'Desconocido') {
        // Si no hay tecnología o es "Desconocido", mostramos la imagen de Johnny
        return <img src={johny} alt="Johnny" style={{ width: '45px', height: '45px', objectFit: 'cover' }} />;
    }

    switch (tech.toLowerCase()) {
        case 'react':
            return <FaReact style={{ width: '30px', height: '30px', margin: '0 5px' }} />;
        case 'angular':
            return <SiAngular style={{ width: '30px', height: '30px', margin: '0 5px' }} />;
        case 'typescript':
            return <SiTypescript style={{ width: '30px', height: '30px', margin: '0 5px' }} />;
        case 'go':
            return <SiGo style={{ width: '30px', height: '30px', margin: '0 5px' }} />;
        case 'css':
            return <SiCss3 style={{ width: '30px', height: '30px', margin: '0 5px' }} />;
        case 'html':
            return <SiHtml5 style={{ width: '30px', height: '30px', margin: '0 5px' }} />;
        case 'javascript':
            return <SiJavascript style={{ width: '30px', height: '30px', margin: '0 5px' }} />;
        case 'python':
            return <DiPython style={{ width: '30px', height: '30px', margin: '0 5px' }} />;
        default:
            return null;
    }
};

// Función para determinar el icono de framework/librería
const getFrameworkIcon = (tech, languages) => {
    if (tech === 'JavaScript' && languages === 'JavaScript') {
        return <SiNodedotjs style={{ width: '30px', height: '30px', margin: '0 5px' }} />; // Logo de Node.js si solo es JS
    }
    return getTechIcon(tech); // Icono normal en caso de que no sea solo JS
};

export const Github = () => {
    const [repos, setRepos] = useState([]);
    const [readmeVisible, setReadmeVisible] = useState({}); // Estado para manejar visibilidad de README
    const [modalContent, setModalContent] = useState(""); // Contenido del README para el modal
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para manejar el modal

    const username = process.env.REACT_APP_GITHUB_USERNAME;
    const token = process.env.REACT_APP_GITHUB_TOKEN;

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
                    headers: {
                        Authorization: `token ${token}`
                    }
                });
                const reposData = response.data;

                const reposWithDetails = await Promise.all(reposData.map(async (repo) => {
                    const languagesResponse = await axios.get(repo.languages_url, {
                        headers: {
                            Authorization: `token ${token}`
                        }
                    });
                    const languages = Object.keys(languagesResponse.data).join(', ');

                    let readme = '';
                    let tech = 'Desconocido';
                    try {
                        const readmeResponse = await axios.get(`https://api.github.com/repos/${username}/${repo.name}/readme`, {
                            headers: {
                                Accept: 'application/vnd.github.v3.raw',
                                Authorization: `token ${token}`
                            }
                        });

                        if (readmeResponse.status === 200) {
                            readme = readmeResponse.data;
                        } else {
                            readme = 'No disponible';
                        }

                        // Identificar tecnologías en el README.md
                        if (/react/i.test(readme)) {
                            tech = 'React';
                        } else if (/angular/i.test(readme)) {
                            tech = 'Angular';
                        } else if (/typescript/i.test(readme)) {
                            tech = 'TypeScript';
                        } else if (/go/i.test(readme)) {
                            tech = 'Go';
                        } else if (/css/i.test(readme)) {
                            tech = 'CSS';
                        } else if (/html/i.test(readme)) {
                            tech = 'HTML';
                        } else if (/javascript/i.test(readme)) {
                            tech = 'JavaScript';
                        } else if (/python/i.test(readme)) {
                            tech = 'Python';
                        }
                    } catch (error) {
                        readme = error.response && error.response.status === 404 ? 'README.md no disponible' : 'Error al cargar README.md';
                    }

                    return {
                        ...repo,
                        languages,
                        readme,
                        tech
                    };
                }));

                setRepos(reposWithDetails);
            } catch (error) {
                console.error('Error al traer los repositorios:', error);
            }
        };

        fetchRepos();
    }, [username, token]);

    // Función para manejar el toggle de visibilidad del README
    const toggleModal = (repoReadme) => {
        setModalContent(marked(repoReadme)); // Convertir el README a HTML y asignarlo al modal
        setIsModalOpen(true); // Abrir el modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Cerrar el modal
        setModalContent(""); // Limpiar el contenido del modal
    };

    return (
        <div>
            <h1>Mis Repositorios de GitHub</h1>
            <table>
                <thead>
                    <tr>
                        <th>Repositorio</th>
                        <th>Tecnologías</th>
                        <th>Framework/Library</th>
                        <th>README.md</th>
                    </tr>
                </thead>
                <tbody>
                    {repos.length > 0 ? (
                        repos.map((repo) => (
                            <tr key={repo.id}>
                                <td>
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                        {repo.name}
                                    </a>
                                </td>
                                <td>
                                    {repo.languages.split(', ').map((lang) => (
                                        <span key={lang} style={{ margin: '0 5px' }}>
                                            {getTechIcon(lang)}
                                        </span>
                                    ))}
                                </td>
                                <td>
                                    {getFrameworkIcon(repo.tech, repo.languages)}
                                </td>
                                <td>
                                    <button onClick={() => toggleModal(repo.readme)}>
                                        Mostrar README
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No se encontraron repositorios.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={closeModal}>×</span>
                        <div dangerouslySetInnerHTML={{ __html: modalContent }} />
                    </div>
                </div>
            )}
        </div>
    );
};


/*
import axios from "axios";
import { useEffect, useState } from "react";
import '../styles/github.css';

export const Github = () => {
    const [repos, setRepos] = useState([]);
    const username = process.env.REACT_APP_GITHUB_USERNAME;
    const token = process.env.REACT_APP_GITHUB_TOKEN;

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                // Llamada a la API con autenticación
                const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
                    headers: {
                        Authorization: `token ${token}`
                    }
                });
                const reposData = response.data;

                const reposWithDetails = await Promise.all(reposData.map(async (repo) => {
                    // Obtener lenguajes
                    const languagesResponse = await axios.get(repo.languages_url, {
                        headers: {
                            Authorization: `token ${token}`
                        }
                    });
                    const languages = Object.keys(languagesResponse.data).join(', ');

                    // Obtener README.md con el nuevo manejo de errores
                    let readme = '';
                    let tech = 'Desconocido';
                    try {
                        const readmeResponse = await axios.get(`https://api.github.com/repos/${username}/${repo.name}/readme`, {
                            headers: {
                                Accept: 'application/vnd.github.v3.raw',
                                Authorization: `token ${token}`
                            }
                        });

                        if (readmeResponse.status === 200) {
                            readme = readmeResponse.data;
                        } else {
                            readme = 'No disponible';
                        }

                        // Identificar tecnologías en el README.md
                        if (/react/i.test(readme)) {
                            tech = 'React';
                        } else if (/angular/i.test(readme)) {
                            tech = 'Angular';
                        } else if (/vite/i.test(readme)) {
                            tech = 'Vite';
                        }

                    } catch (error) {
                        if (error.response && error.response.status === 404) {
                            readme = 'README.md no disponible';
                        } else {
                            readme = 'Error al cargar README.md';
                        }
                    }

                    return {
                        ...repo,
                        languages,
                        readme,
                        tech
                    };
                }));

                setRepos(reposWithDetails);
            } catch (error) {
                console.error('Error al traer los repositorios:', error);
            }
        };

        fetchRepos();
    }, [username, token]);

    return (
        <div>
            <h1>Mis Repositorios de GitHub</h1>
            <table>
                <thead>
                    <tr>
                        <th>Repositorio</th>
                        <th>Tecnologías</th>
                        <th>Framework/Library</th>
                        <th>README.md</th>
                    </tr>
                </thead>
                <tbody>
                    {repos.length > 0 ? (
                        repos.map((repo) => (
                            <tr key={repo.id}>
                                <td>
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                        {repo.name}
                                    </a>
                                </td>
                                <td>{repo.languages}</td>
                                <td>{repo.tech}</td>
                                <td>
                                    <pre style={{ maxHeight: '200px', overflowY: 'scroll', backgroundColor: '#f1f1f1', padding: '10px' }}>
                                        {repo.readme}
                                    </pre>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No se encontraron repositorios.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
*/

/*
import axios from "axios";
import { useEffect, useState } from "react";

export const Github = () => {
    const [repos, setRepos] = useState([]);
    const username = process.env.REACT_APP_GITHUB_USERNAME;
    const token = process.env.REACT_APP_GITHUB_TOKEN;

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                // Llamada a la API con autenticación
                const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
                    headers: {
                        Authorization: `token ${token}`
                    }
                });
                const reposData = response.data;

                const reposWithDetails = await Promise.all(reposData.map(async (repo) => {
                    // Obtener lenguajes
                    const languagesResponse = await axios.get(repo.languages_url, {
                        headers: {
                            Authorization: `token ${token}`
                        }
                    });
                    const languages = Object.keys(languagesResponse.data).join(', ');

                    // Obtener README.md
                    let readme = '';
                    let tech = 'Desconocido';
                    try {
                        // Solo se intenta obtener el README.md si existe
                        const readmeResponse = await axios.get(`https://api.github.com/repos/${username}/${repo.name}/readme`, {
                            headers: {
                                Accept: 'application/vnd.github.v3.raw',
                                Authorization: `token ${token}`
                            }
                        });

                        if (readmeResponse.status === 200) {
                            readme = readmeResponse.data;
                        } else {
                            readme = 'No disponible';
                        }

                        // Identificar tecnologías en el README.md
                        if (/react/i.test(readme)) {
                            tech = 'React';
                        } else if (/angular/i.test(readme)) {
                            tech = 'Angular';
                        } else if (/vite/i.test(readme)) {
                            tech = 'Vite';
                        }

                    } catch (error) {
                        if (error.response && error.response.status === 404) {
                            readme = 'README.md no disponible';
                        } else {
                            readme = 'Error al cargar README.md';
                        }
                    }

                    return {
                        ...repo,
                        languages,
                        readme,
                        tech
                    };
                }));

                setRepos(reposWithDetails);
            } catch (error) {
                console.error('Error al traer los repositorios:', error);
            }
        };

        fetchRepos();
    }, [username, token]);

    return (
        <div>
            <h1>Mis Repositorios de GitHub</h1>
            <table>
                <thead>
                    <tr>
                        <th>Repositorio</th>
                        <th>Tecnologías</th>
                        <th>Framework/Library</th>
                        <th>README.md</th>
                    </tr>
                </thead>
                <tbody>
                    {repos.length > 0 ? (
                        repos.map((repo) => (
                            <tr key={repo.id}>
                                <td>
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                        {repo.name}
                                    </a>
                                </td>
                                <td>{repo.languages}</td>
                                <td>{repo.tech}</td>
                                <td>
                                    <pre style={{ maxHeight: '200px', overflowY: 'scroll', backgroundColor: '#f1f1f1', padding: '10px' }}>
                                        {repo.readme}
                                    </pre>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No se encontraron repositorios.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
*/