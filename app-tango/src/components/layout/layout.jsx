
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap
import './layout.css'; // Archivo CSS personalizado

const Layout = () => {
  return (
    <div className="main-container">
      <header>
        <nav className="navbar transparent-navbar">
          <div className="navbar-left">
            <img src="/public/Logo.PNG" alt="Logo" className="logo" />
            <span className="brand">
              {Array.from("La Vida Es Un Tango.").map((char, index) => (
               <span key={index} style={{ marginRight: char === ' ' ? '0.5rem' : '0' }}>{char}</span>
              ))}
            </span>
          </div>
          <ul className="navbar-right">
            <li><a href="#home">Home</a></li>
            <li><a href="#quien-soy">Quien soy</a></li>
            <li><a href="#galeria">Galeria</a></li>
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
        {/* Aquí va el contenido principal de la página */}
      </div>
    </div>
  );
};

export default Layout;