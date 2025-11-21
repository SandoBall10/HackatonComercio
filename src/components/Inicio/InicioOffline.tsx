import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InicioOffline.css';

const eventosOffline = [
  { fecha: '12 Abril 2026', titulo: 'Elecciones Generales 2026' },
  { fecha: '30 Noviembre 2025', titulo: 'Elecciones primarias (Afiliados)' },
];

export default function InicioOffline() {
  const navigate = useNavigate();

  return (
    <div className="inicio-offline-wrapper">
      <div className="inicio-offline-container">
        <div className="offline-icon-large">⛔</div>
        
        <h1>No hay conexión a internet</h1>
        <p className="offline-subtitle">Verifique su conexión para continuar usando la plataforma.</p>
        
        <div className="offline-divider"></div>
        
        <h2>Próximos eventos electorales:</h2>
        <ul>
          {eventosOffline.map((ev, i) => (
            <li key={i}>
              <strong>{ev.fecha}:</strong> {ev.titulo}
            </li>
          ))}
        </ul>

        <h2 style={{ marginTop: 32 }}>Accesos rápidos offline</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16 }}>
          <button
            className="offline-link-btn"
            onClick={() => navigate('/tutorial-offline')}
          >
            Tutorial offline
          </button>
          <button
            className="offline-link-btn"
            onClick={() => navigate('/candidatos-offline')}
          >
            Ver candidatos
          </button>
          <button
            className="offline-link-btn"
            onClick={() => navigate('/partidos-offline')}
          >
            Ver partidos políticos
          </button>
          <button
            className="offline-link-btn"
            onClick={() => navigate('/personeros-offline')}
          >
            Información Personeros
          </button>
        </div>
      </div>
    </div>
  );
}