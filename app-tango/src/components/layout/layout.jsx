/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';
import WhatsAppIcon from '../WhatsAppIcon/WhatsAppIcon';

const Layout = ({ children }) => {
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

  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };

  return (
    <div id='home' className={`main-container ${scrolled ? 'scrolled' : ''}`}>
      <header>
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="navbar-left">
            <img src="/Insignia.png" alt="Logo" className="logo" />
            <span className="brand">
              {"  La Vida Es Un Tango......!!!!!!".split("").map((char, index) => (
                <span key={index} style={{ marginRight: char === ' ' ? '0.5rem' : '0' }}>{char}</span>
              ))}
            </span>
            
          </div>
          <img src="/Insignia.png" alt="Logo" className="logo" />
          <ul className="navbar-right">
            <li><a href="#home" onClick={(e) => handleNavLinkClick(e, 'home')}>Home</a></li>
            <li><a href="#quien-soy" onClick={(e) => handleNavLinkClick(e, 'quien-soy')}>Quien soy</a></li>
            <li><a href="#galeria" onClick={(e) => handleNavLinkClick(e, 'galeria')}>Galería</a></li>
            <li className="dropdown">
              <a href="#planes" onClick={(e) => handleNavLinkClick(e, 'planes')}>Clases</a>
              <div className="dropdown-content">
                <a href="#plan-general" onClick={(e) => handleNavLinkClick(e, 'plan-general')}>Plan General</a>
                <a href="#plan-personalizado" onClick={(e) => handleNavLinkClick(e, 'plan-personalizado')}>Plan Personalizado</a>
              </div>
            </li>
            <li><a href="#contacto" onClick={(e) => handleNavLinkClick(e, 'contacto')}>Contacto</a></li>
          </ul>
        </nav>
      </header>
      <div className="content">
        {children} {/* Contenido principal */}
      </div>
      <WhatsAppIcon />
    </div>
  );
};

export default Layout;