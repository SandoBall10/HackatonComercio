import React from 'react';
import './App.css';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
=======
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
>>>>>>> f737fb7964eba6a4ea3998319dab19cd58463403

import { Header } from './components/Header/Header';
import { Inicio } from './components/Inicio/Inicio';
import Candidatos from './components/Candidatos/Candidatos';
import PartidosPoliticos from './components/PartidosPoliticos/PartidosPoliticos';
import PartidoDetalle from './components/Candidatos/PartidoDetalle';
import ReniecConsultas from './components/reniec/ReniecConsultas';
import Chatbot from './components/Chatbot/Chatbot';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import { getCandidatoById } from './data/candidatos.js';

const App = () => {
<<<<<<< HEAD
=======
  const { t } = useTranslation();
  const location = useLocation();
>>>>>>> f737fb7964eba6a4ea3998319dab19cd58463403
  const candidatoEjemplo = getCandidatoById('fuerza-popular');

  return (
    <div className="App">
<<<<<<< HEAD
      <Header />
=======
      {mostrarNavAzul && (
        <nav style={{
          backgroundColor: '#1a1a2e',
          padding: '1rem 2rem',
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}>
          <h1 style={{ 
            color: '#fff', 
            margin: 0, 
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>
            Elecciones Perú 2026
          </h1>
          <div style={{ display: 'flex', gap: '1rem', marginLeft: 'auto', alignItems: 'center' }}>
            <LanguageSelector />
            <Link to="/" style={{
              padding: '0.5rem 1.5rem',
              backgroundColor: location.pathname === '/' ? '#0066cc' : 'transparent',
              color: '#fff',
              border: '1px solid #0066cc',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '1rem',
              transition: 'all 0.3s'
            }}>
              {t('nav.inicio')}
            </Link>
            <Link to="/candidatos" style={{
              padding: '0.5rem 1.5rem',
            backgroundColor: location.pathname === '/candidatos' ? '#0066cc' : 'transparent',
            color: '#fff',
            border: '1px solid #0066cc',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'all 0.3s'
          }}>
            {t('nav.candidatos')}
          </Link>
          <Link to="/partidos" style={{
            padding: '0.5rem 1.5rem',
            backgroundColor: location.pathname === '/partidos' ? '#fff' : 'transparent',
            color: location.pathname === '/partidos' ? '#000' : '#fff',
            border: '1px solid #fff',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'all 0.3s'
          }}>
            {t('nav.partidos')}
          </Link>
          <Link to="/reniec" style={{
            padding: '0.5rem 1.5rem',
            backgroundColor: location.pathname === '/reniec' ? '#fff' : 'transparent',
            color: location.pathname === '/reniec' ? '#000' : '#fff',
            border: '1px solid #fff',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'all 0.3s'
          }}>
            {t('nav.reniec')}
          </Link>
        </div>
        </nav>
      )}
>>>>>>> f737fb7964eba6a4ea3998319dab19cd58463403

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/candidatos" element={<Candidatos candidato={candidatoEjemplo} />} />
        <Route path="/candidatos/:partidoId" element={<Candidatos candidato={candidatoEjemplo} />} />
        <Route path="/partidos" element={<PartidosPoliticos />} />
        <Route path="/partido/:id" element={<PartidoDetalle />} />
        <Route path="/reniec" element={<ReniecConsultas />} />
      </Routes>

      {/* Chatbot flotante */}
      <Chatbot />
    </div>
  );
};

export default App;