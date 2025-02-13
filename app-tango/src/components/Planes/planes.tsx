// filepath: /c:/Users/tisic/OneDrive/Documentos/Proyectos/Tango-UTN-IA/app-tango/src/components/Planes/planes.tsx
import './planes.css';

interface PlanCardProps {
  title: string;
  description: string;
  price: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, description, price }) => (
  <div className="card">
    <h2 className="card-title">{title}</h2>
    <p className="card-description">{description}</p>
    <div className="card-price">{price}</div>
  </div>
);

const Plans: React.FC = () => {
  return (
    <>
    <h2 className="historia-title">
        <span className="decoracion">⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</span> Planes{" "}
        <span className="decoracion">⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</span>
      </h2>
    <div className="plans">
      <PlanCard
        title="Clases Personalizadas"
        description="Clase privada para 1 o 2 personas, ajustada a tu nivel y objetivos. El costo varía según la frecuencia de las clases por semana."
        price="Desde $50 por clase"
      />
      <PlanCard
        title="Plan Grupal"
        description="Clases grupales dos veces por semana, perfectas para socializar y mejorar con el ritmo de otros bailarines."
        price="$30 por clase"
      />
    </div>
    
    </>
  );
};

export default Plans;