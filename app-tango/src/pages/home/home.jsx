import QuienSoy from "../../components/QuienSoy/quienSoy.jsx";
import Layout from "../../components/layout/layout.jsx";
import Footer from "../../components/layout/footer.jsx";
import Separador from "../../components/separador/separador.jsx";


const Home = () => {
  return (
    <>
      <Layout />
      <Separador />
      <QuienSoy />
      <Separador />
      <Footer />
    </>
  );
};

export { Home };
