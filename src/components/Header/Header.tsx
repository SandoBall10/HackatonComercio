import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState({ meses: 0, dias: 0, horas: 0, minutos: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-04-12T00:00:00').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const meses = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
        const dias = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setCountdown({ meses, dias, horas, minutos });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* TOP HEADER CON COUNTDOWN */}
      <div className="top-header">
        <div className="top-header-content">
          <div className="logo-section">
            <img src="src/assets/Loog-Onpe.png" alt="ONPE" className="top-logo" />
            <div className="election-info">
              <h2>Elecciones Generales</h2>
              <p>12 de abril de 2026</p>
            </div>
          </div>
          <div className="countdown">
            <span className="countdown-label">Faltan:</span>
            <div className="countdown-items">
              <div className="countdown-item">
                <div className="countdown-value">{String(countdown.meses).padStart(2, '0')}</div>
                <div className="countdown-label-small">Meses</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-value">{String(countdown.dias).padStart(2, '0')}</div>
                <div className="countdown-label-small">Días</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-value">{String(countdown.horas).padStart(2, '0')}</div>
                <div className="countdown-label-small">Horas</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-value">{String(countdown.minutos).padStart(2, '0')}</div>
                <div className="countdown-label-small">Minutos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="header">
        <nav className="navbar">
          <div className="nav-links-container">
            <a href="/" className="nav-link" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Inicio</a>
            <a href="/partidos" className="nav-link" onClick={(e) => { e.preventDefault(); navigate('/partidos'); }}>Partidos Politicos</a>
            <a href="/candidatos" className="nav-link" onClick={(e) => { e.preventDefault(); navigate('/candidatos'); }}>Candidatos</a>
            <a href="/reniec" className="nav-link" onClick={(e) => { e.preventDefault(); navigate('/reniec'); }}>Consulta RENIEC</a>
            <a href="#lo-nuevo" className="nav-link">Lo nuevo</a>
            <a href="#voto-digital" className="nav-link">Voto Digital</a>
            <a href="#verifica-mesa" className="nav-link nav-link-highlight">Verifica si eres miembro de mesa</a>
          </div>
        </nav>
      </header>

      {/* SUBTABS */}
      <div className="subtabs">
        <button className="subtab-btn active">Información general</button>
        <button className="subtab-btn">Enlaces relacionados</button>
        <div className="subtab-underline"></div>
      </div>
    </>
  );
};