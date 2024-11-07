import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';  // Asegúrate de importar tanto 'toast' como 'ToastContainer'
import 'react-toastify/dist/ReactToastify.css';  // Estilos predeterminados de los toasts
import '../styles/contact.css';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Aquí puedes añadir la lógica para enviar el correo a través de tu backend.
        console.log('Formulario enviado:', formData);

        // Mostramos un toast de éxito, asegurándonos de usar la posición correcta
        toast.success('¡Mensaje enviado con éxito!', {
            position: "top-center",  // Usamos el string de la posición directamente
            autoClose: 3000,  // Duración del toast en milisegundos
        });

        // Limpiamos el formulario
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="contact">
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Correo Electrónico:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Mensaje:
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </label>
                <button type="submit">Enviar</button>
            </form>
            
            {/* Aquí es donde se coloca el contenedor para los toasts */}
            <ToastContainer />
        </div>
    );
};
