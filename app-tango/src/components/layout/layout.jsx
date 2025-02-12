import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';

const Layout = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      document.querySelector(".brand").classList.add("finished");
    }, 4000); // Mismo tiempo que la animación writeText
  
    return () => clearTimeout(timeout);
  }, []);
  

  return (
    <div className="main-container">
      <header>
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="navbar-left">
            <img src="/Logo.PNG" alt="Logo" className="logo" />
            <span className="brand">
              {"La Vida Es Un Tango.".split("").map((char, index) => (
                <span key={index} style={{ marginRight: char === ' ' ? '0.5rem' : '0' }}>{char}</span>
              ))}
            </span>
          </div>
          <ul className="navbar-right">
            <li><a href="#home">Home</a></li>
            <li><a href="#quien-soy">Quien soy</a></li>
            <li><a href="#galeria">Galería</a></li>
            <li className="dropdown">
              <a href="#clases">Clases</a>
              <div className="dropdown-content">
                <a href="#plan-general">Plan General</a>
                <a href="#plan-personalizado">Plan Personalizado</a>
              </div>
            </li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <div className="content">
        {/* Contenido principal */}
      </div>
    </div>
  );
};

export default Layout;
