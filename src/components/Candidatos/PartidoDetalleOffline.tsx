import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PartidoDetalleOffline.css';
import PARTIDOS from '../../data/partidos';

const PartidoDetalleOffline: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleOnline = () => {
      navigate('/');
    };

    if (navigator.onLine) {
      navigate('/');
    }

    window.addEventListener('online', handleOnline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
    };
  }, [navigate]);

  return (
    <div className="partidos-offline-container">
      <h1 style={{ color: '#b30227', margin: '32px 0 18px' }}>Partidos Políticos (Modo Offline)</h1>
      <p className="partidos-offline-desc">
        Solo puedes ver información básica de los partidos políticos sin conexión a internet.
      </p>
      <div className="partidos-offline-list">
        {PARTIDOS.map((p) => (
          <div className="partido-offline-card" key={p.id}>
            <img
              src={p.logo}
              alt={p.nombre}
              className="partido-offline-logo"
              onError={e => (e.currentTarget.src = '/logos/default.png')}
            />
            <div className="partido-offline-nombre">{p.nombre}</div>
            <div className="partido-offline-siglas">{p.siglas}</div>
            <div className="partido-offline-desc">{p.descripcion}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartidoDetalleOffline;