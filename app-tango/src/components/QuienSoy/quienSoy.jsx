/* eslint-disable react/react-in-jsx-scope */
import "./quienSoy.css"; // Archivo CSS personalizado para los estilos

function QuienSoy() {
  return (
    <>
    <h2 id="quien-soy" className="titulo-section">
        <span className="decoracion">⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</span> ¿Quien Soy?{" "}
        <span className="decoracion">⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</span>
      </h2>
    <section className="historia-section">
      
      <div className="historia-content">
        <div className="historia-text">
          <p>
            <img
              src="../../../public/historia1.png"
              alt="Bailarines de Tango"
              className="historia-image"
            />
            ¡Hola! Soy Laura Glatigny, bailarina y profesora apasionada de
            tango. Con años de experiencia en la enseñanza y en la pista de
            baile, mi misión es compartir la magia del tango con quienes deseen
            aprender, ya sea desde cero o perfeccionar su estilo. Mi enfoque
            combina técnica, musicalidad y conexión, adaptándome a cada alumno
            para que descubra su propio camino en el tango. Las clases son
            dinámicas, accesibles y pensadas para que disfrutes mientras
            aprendes.
            <br />
            <br />
            Si querés sumarte a esta hermosa aventura del tango, ¡te espero para
            bailar juntos!
            <img
              src="./../../public/historia2.png"
              alt="Bailarines de Tango"
              className="historia-image historia-image-right"
            />
          </p>
        </div>
      </div>
    </section>
    </>
  );
}

export default QuienSoy;
