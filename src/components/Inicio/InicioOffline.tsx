import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InicioOffline.css';

const eventosOffline = [
  { fecha: '12 Abril 2026', titulo: 'Elecciones Generales 2026' },
  { fecha: '30 Noviembre 2025', titulo: 'Elecciones primarias (Afiliados)' },
];

export default function InicioOffline({ onExitOffline }: { onExitOffline?: () => void }) {
  const navigate = useNavigate();

  return (
    <div className="inicio-offline-container">
      <h1>Modo sin Internet</h1>
      <p>Estás usando la versión ligera de la plataforma. Solo información esencial está disponible.</p>
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
          onClick={() => navigate('/tutorial-offline')}
        >
          Tutorial offline
        </button>
        <button
          className="offline-link-btn"
          onClick={() => navigate('/lenguaje-offline')}
        >
          Volver al inicio normal
        </button>
      </div>

      {onExitOffline && (
        <button
          style={{
            marginTop: 32,
            background: '#0a66b3',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '10px 24px',
            fontWeight: 700,
            fontSize: 15,
            cursor: 'pointer'
          }}
          onClick={onExitOffline}
        >
          Volver al modo normal
        </button>
      )}
    </div>
  );
}