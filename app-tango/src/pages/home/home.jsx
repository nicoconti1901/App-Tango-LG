/* eslint-disable react/react-in-jsx-scope */
import QuienSoy from "../../components/QuienSoy/quienSoy.jsx";
import Layout from "../../components/layout/layout.jsx";
import Footer from "../../components/layout/footer.jsx";
import Galeria from "../../components/Galeria/galeria.jsx";
import Plans from "../../components/Planes/planes.jsx";

const Home = () => {
  return (
    <Layout>
      <div id="quien-soy">
        <QuienSoy />
      </div>
      <div id="galeria">
        <Galeria />
      </div>
      <div id="planes">
        <Plans />
      </div>
      <div id="contacto">
        
        <Footer />
      </div>
    </Layout>
  );
};

export { Home };