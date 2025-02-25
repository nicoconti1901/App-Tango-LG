/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import emailjs from "emailjs-com";
import "./contacto.css"; // Archivo CSS personalizado para los estilos

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validar los campos
    switch (name) {
      case "nombre":
      case "apellido":
        if (!/^[a-zA-Z]+$/.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "Solo se permiten letras",
          }));
        } else {
          setErrors((prevErrors) => {
            const { [name]: removed, ...rest } = prevErrors;
            return rest;
          });
        }
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "Email no válido",
          }));
        } else {
          setErrors((prevErrors) => {
            const { [name]: removed, ...rest } = prevErrors;
            return rest;
          });
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar el correo electrónico usando EmailJS
    emailjs
      .send(
        "service_0ebjz9c", // Reemplaza con tu service_id
        "template_npzil6d", // Reemplaza con tu template_id
        {
          nombre: formData.nombre,
          apellido: formData.apellido,
          email: formData.email,
          mensaje: formData.mensaje,
        },
        "_TeywUkZo-L0V9ugB" // Reemplaza con tu user_id (public key)
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setMessageSent(true);
        document
          .getElementById("contacto")
          .scrollIntoView({ behavior: "smooth" }); // Desplazar la ventana hacia el formulario para mostrar el mensaje de éxito
      })
      .catch((err) => {
        console.error("FAILED...", err);
      });
  };

  return (
    <>
      <h2 id="quien-soy" className="titulo-section">
        <span className="decoracion">⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</span> Contacto{" "}
        <span className="decoracion">⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</span>
      </h2>
      <div id="contacto" className="contact-form-container">
        {messageSent && (
          <p className="success-message">¡Mensaje enviado con éxito!</p>
        )}
        <form
          id="contact-form"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <img src="/Insignia.png" alt="Logo" className="logo-top-left" />
          <img src="/Insignia.png" alt="Logo" className="logo-top-right" />
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className={errors.nombre ? "input-error" : "input-success"}
            />
            {errors.nombre && (
              <span className="error-message">{errors.nombre}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
              className={errors.apellido ? "input-error" : "input-success"}
            />
            {errors.apellido && (
              <span className="error-message">{errors.apellido}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={errors.email ? "input-error" : "input-success"}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Enviar
          </button>
          <div className="form-group logoCentrado">
            <img src="/Insignia.png" alt="Logo" className="logoCentrado" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Contacto;
