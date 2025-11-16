import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeaderOffline.css';

const HeaderOffline: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="top-header">
        <div className="top-header-content">
          <div className="logo-section">
            <img src="/Imagenes-Pagina/Logo-Oficial.png" alt="ONPE" className="top-logo" />
            <div className="election-info">
              <h2>Elecciones Generales 2026</h2>
              <p>12 de abril de 2026</p>
            </div>
          </div>
          <div
            style={{
              fontWeight: 900,
              fontSize: 22,
              background: 'linear-gradient(90deg, #b30227, #000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '1px 1px 4px #fff8',
              marginLeft: 24,
              letterSpacing: 1,
            }}
          >
            Modo sin internet
          </div>
        </div>
      </div>

      <header className="header">
        <nav className="navbar">
          <div className="nav-links-container">
            <button className="nav-link" onClick={() => navigate('/candidatos-offline')}>
              Candidatos
            </button>
            <button className="nav-link" onClick={() => navigate('/partidos-offline')}>
              Partidos
            </button>
            <button className="nav-link" onClick={() => navigate('/lenguaje-offline')}>
              Idioma
            </button>
            <button className="nav-link" onClick={() => navigate('/')}>
              Inicio
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderOffline;