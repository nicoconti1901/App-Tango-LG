import { Card } from "antd";
import { motion } from "framer-motion"; // Para animaciones sutiles
import "./planes.css";

const { Meta } = Card;

const PlanCard = ({ title, description, price, style }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="plan-card-container"
    >
      <Card
        className="text-white font-semibold plan-card"
        style={style}
        hoverable
      >
        <Meta
          title={
            <div>
              <h2 className="text-3xl text-center">{title}</h2>
              <div className="separator"></div> {/* Línea decorativa */}
            </div>
          }
        />
        <div className="flex-grow flex flex-col justify-center">
          <p className="text-lg mt-4">{description}</p>
          <div className="separator"></div> {/* Línea decorativa */}
        </div>
        <div className="text-2xl font-bold text-center mt-6 mb-4">{price}</div>
        <div className="separator"></div> {/* Línea decorativa */}
      </Card>
    </motion.div>
  );
};

const Plans = () => {
  return (
    <>
      <h2 id="planes" className="titulo-section">
        <span className="decoracion">⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</span> Planes{" "}
        <span className="decoracion">⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</span>
      </h2>
      <div className="plans-container">
        <PlanCard
          title="Clases Personalizadas"
          description="Clase privada para 1 o 2 personas, ajustada a tu nivel y objetivos."
          price="Desde $50 por clase"
          style={{
            background: "linear-gradient(100deg,rgb(55, 54, 54), #8b0000)", // Degradado rojo oscuro
            borderColor: "#ff4d4f", // Borde rojo oscuro
            boxShadow: "0 8px 16px rgba(255, 77, 79, 0.6)", // Sombra roja
          }}
        />
        <PlanCard
          title="Clases Grupales"
          description="Clases grupales dos veces por semana, perfectas para socializar."
          price="$30 por clase"
          style={{
            background: "linear-gradient(135deg, #b22222,#333)", // Degradado negro a rojo oscuro
            borderColor: "#0f0f0f", // Borde dorado
            boxShadow: "0 8px 16px #0f0f0f", // Sombra dorada
          }}
        />
      </div>
    </>
  );
};

export default Plans;
