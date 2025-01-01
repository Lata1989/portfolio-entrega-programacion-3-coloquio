import React from 'react';
import '../styles/footer.css';

export const Footer = () => {
    // Obtiene la fecha de la última modificación del documento
    const lastModified = new Date(document.lastModified).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Pablo Alejandro de la Iglesia. - Última actualización: {lastModified}</p>
        </footer>
    );
};


/*
import React from 'react';
import '../styles/footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Pablo Alejandro de la Iglesia</p>
        </footer>
    );
};
*/
// export default Footer;
