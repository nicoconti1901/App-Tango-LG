/* eslint-disable react/react-in-jsx-scope */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./galeria.css";
import carrusel1 from "../../assets/pexels-marko-2188012.jpg";
import carrusel2 from "../../assets/carrusel1.jpg";
import carrusel3 from "../../assets/pexels-cristian-rojas-8281156.jpg";

const Galeria = () => {
  return (
    <>
      <h2 id="galeria" className="titulo-section">
        <span className="decoracion">⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</span> Galería{" "}
        <span className="decoracion">⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</span>
      </h2>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={carrusel1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={carrusel2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={carrusel3} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev custom-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next custom-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Galeria;
