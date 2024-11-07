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