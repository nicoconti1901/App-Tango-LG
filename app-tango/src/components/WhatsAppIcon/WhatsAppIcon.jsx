/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import './WhatsAppIcon.css';

const WhatsAppIcon = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [vibrateTooltip, setVibrateTooltip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTooltip(true);
      setVibrateTooltip(true);
      setTimeout(() => {
        setVibrateTooltip(false);
        setShowTooltip(false);
      }, 3000); // Mostrar el globito de texto por 2 segundos
    }, 5000); // Repetir cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="https://wa.me/2213189146" // Reemplaza con tu número de WhatsApp
      className="whatsapp-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp"></i>
      <div className={`whatsapp-tooltip ${showTooltip ? 'show' : ''} ${vibrateTooltip ? 'vibrate' : ''}`}>
        MANDÁME <br />MENSAJE !!
      </div>
    </a>
  );
};

export default WhatsAppIcon;