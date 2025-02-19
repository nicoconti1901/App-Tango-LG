

const Card = ({ children, className }) => {
  return <div className={`rounded-xl p-6 shadow-md ${className}`}>{children}</div>;
};

const CardContent = ({ children }) => {
  return <div className="mt-4">{children}</div>;
};

export { Card, CardContent };
