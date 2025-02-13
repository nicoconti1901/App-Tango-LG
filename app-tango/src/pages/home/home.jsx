import QuienSoy from "../../components/QuienSoy/quienSoy.jsx";
import Layout from "../../components/layout/layout.jsx";
import Footer from "../../components/layout/footer.jsx";
import Separador from "../../components/separador/separador.jsx";
import Galeria from "../../components/Galeria/galeria.jsx";
import TangoCards from "../../components/Planes/planes.jsx";


const Home = () => {
  return (
    <>
      <Layout />
      <Separador />
      <QuienSoy />
      <Separador />
      <Galeria />
      <Separador />
      <TangoCards />
      <Footer />
    </>
  );
};

export { Home };
