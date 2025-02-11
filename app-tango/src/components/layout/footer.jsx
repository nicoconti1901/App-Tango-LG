import "./layout.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img
            src="../../../public/vecteezy_tango-dancing_36651566.svg"
            alt="Tango Shoes"
            className="footer-icon"
          />
        </div>
        <div className="footer-center">
          <p>© 2023 La Vida Es Un Tango. Todos los derechos reservados.</p>
          <div className="social-media">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <img
            src="../../../public/vecteezy_tango-dancing_36651568.svg"
            alt="Tango Shoes"
            className="footer-icon"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
