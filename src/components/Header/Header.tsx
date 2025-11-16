import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import ThemeSelector from '../ThemeSelector/ThemeSelector';
import './Header.css';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [countdown, setCountdown] = useState({ meses: 0, dias: 0, horas: 0, minutos: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

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
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      {/* TOP HEADER CON COUNTDOWN */}
      <div className="top-header">
        <div className="top-header-content">
          <div className="logo-section">
            <img src="public/Imagenes-Pagina/Logo-Oficial.png" alt="ONPE" className="top-logo" />
            <div className="election-info">
              <h2>{t('inicio.titulo')}</h2>
              <p>{t('inicio.fecha')}</p>
            </div>
          </div>
          <div className="countdown">
            <span className="countdown-label">{t('inicio.faltan')}</span>
            <div className="countdown-items">
              <div className="countdown-item">
                <div className="countdown-value" key={`meses-${countdown.meses}`}>{String(countdown.meses).padStart(2, '0')}</div>
                <div className="countdown-label-small">{t('inicio.mesesLabel')}</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-value" key={`dias-${countdown.dias}`}>{String(countdown.dias).padStart(2, '0')}</div>
                <div className="countdown-label-small">{t('inicio.diasLabel')}</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-value" key={`horas-${countdown.horas}`}>{String(countdown.horas).padStart(2, '0')}</div>
                <div className="countdown-label-small">{t('inicio.horasLabel')}</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-value" key={`minutos-${countdown.minutos}`}>{String(countdown.minutos).padStart(2, '0')}</div>
                <div className="countdown-label-small">{t('inicio.minutosLabel')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="header">
        <nav className="navbar">
          {/* Hamburger button - only visible on mobile */}
          <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Mobile menu modal */}
          {menuOpen && (
            <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
              <div className="mobile-menu-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>
                <div className="mobile-nav-links">
                  <a 
                    href="/" 
                    className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick('/'); }}
                  >
                    {t('nav.inicio')}
                  </a>
                  <a 
                    href="/partidos" 
                    className={`mobile-nav-link ${location.pathname === '/partidos' ? 'active' : ''}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick('/partidos'); }}
                  >
                    {t('nav.partidos')}
                  </a>
                  <a 
                    href="/reniec" 
                    className={`mobile-nav-link ${location.pathname === '/reniec' ? 'active' : ''}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick('/reniec'); }}
                  >
                    {t('nav.reniec')}
                  </a>
                  <a 
                    href="/miembros-mesa" 
                    className={`mobile-nav-link ${location.pathname === '/miembros-mesa' ? 'active' : ''}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick('/miembros-mesa'); }}
                  >
                    {t('nav.miembrosMesa')}
                  </a>
                  <a 
                    href="/tutorial" 
                    className={`mobile-nav-link ${location.pathname === '/tutorial' ? 'active' : ''}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick('/tutorial'); }}
                  >
                    {t('nav.tutorial')}
                  </a>
                </div>
                {/* Mobile Selectors */}
                <div className="mobile-selectors">
                  <div className="mobile-selector-item">
                    <LanguageSelector />
                  </div>
                  <div className="mobile-selector-item">
                    <ThemeSelector />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Desktop nav links */}
          <div className="nav-links-container">
              <a href="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); navigate('/'); }}>{t('nav.inicio')}</a>
              <a href="/partidos" className={`nav-link ${location.pathname === '/partidos' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); navigate('/partidos'); }}>{t('nav.partidos')}</a>
              <a href="/reniec" className={`nav-link ${location.pathname === '/reniec' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); navigate('/reniec'); }}>{t('nav.reniec')}</a>
              <a href="/miembros-mesa" className={`nav-link ${location.pathname === '/miembros-mesa' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); navigate('/miembros-mesa'); }}>{t('nav.miembrosMesa')}</a>
              <a href="/tutorial" className={`nav-link ${location.pathname === '/tutorial' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); navigate('/tutorial'); }}>{t('nav.tutorial')}</a>
          </div>
          
          {/* Desktop Theme Selector */}
          <div className="desktop-theme-selector">
            <ThemeSelector />
          </div>
        </nav>
      </header>
    </>
  );
};