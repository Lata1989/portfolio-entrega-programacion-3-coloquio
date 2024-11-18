import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/projects">Proyectos</Link>
            {/* <Link to="/contact">Enviar Mail</Link> */}
            <Link to="/github">GitHub</Link>
        </nav>
    );
};

// export default Navbar;
