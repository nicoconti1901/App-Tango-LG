import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css'; // Asegúrate de tener un archivo CSS para los estilos personalizados

const Layout = () => {
  return (
    <div className="main-container">
      <header>
        <nav className="navbar transparent-navbar">
          <div className="navbar-left">
            <img src="/public/Logo.PNG" alt="Logo" className="logo" />
            <span className="brand">La Vida Es Un Tango</span>
          </div>
          <ul className="navbar-right">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#quien-soy">Quien soy</a>
            </li>
            <li>
              <a href="#galeria">Galeria</a>
            </li>
            <li className="dropdown">
              <a href="#clases">Clases</a>
              <div className="dropdown-content">
                <a href="#plan-general">Plan General</a>
                <a href="#plan-personalizado">Plan Personalizado</a>
              </div>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src="../../../public/foto4.png" alt="Tango Shoes" className="footer-icon" />
          </div>
          <div className="footer-center">
            <p>© 2023 La Vida Es Un Tango. Todos los derechos reservados.</p>
            <div className="social-media">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="footer-right">
            <img src="../../../public/foto6.png" alt="Bandoneon" className="footer-icon" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;