import React from 'react';
import './CandidatoOffline.css';
import { candidatos } from '../../data/candidatos.js';

const CandidatoOffline: React.FC = () => {
  return (
    <div className="candidatos-offline-container">
      <h1>Candidatos (Modo Offline)</h1>
      <p className="candidatos-offline-desc">
        Solo puedes ver información básica de los candidatos sin conexión a internet.
      </p>
      <div className="candidatos-offline-list">
        {candidatos.map((c, i) => (
          <div className="candidato-offline-card" key={i}>
            <img
              src={c.foto}
              alt={c.nombre}
              className="candidato-offline-foto"
              onError={e => (e.currentTarget.src = '/avatar/default.png')}
            />
            <div className="candidato-offline-nombre">{c.nombre}</div>
            <div className="candidato-offline-cargo">{c.cargo}</div>
            <div className="candidato-offline-partido">{c.partido}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandidatoOffline;