import React from 'react';
import './App.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import { Inicio } from './components/Inicio/Inicio';
import Candidatos from './components/Candidatos/Candidatos';
import PartidosPoliticos from './components/PartidosPoliticos/PartidosPoliticos';
import ReniecConsultas from './components/reniec/ReniecConsultas';
import { getCandidatoById } from './data/candidatos.js';

const App = () => {
  const location = useLocation();
  const candidatoEjemplo = getCandidatoById('fuerza-popular');

  // Ocultar navbar azul solo en la página de Inicio
  const mostrarNavAzul = location.pathname !== '/';

  return (
    <div className="App">
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
          <div style={{ display: 'flex', gap: '1rem', marginLeft: 'auto' }}>
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
              Inicio
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
            Candidatos
          </Link>
          <Link to="/partidos" style={{
            padding: '0.5rem 1.5rem',
            backgroundColor: location.pathname === '/partidos' ? '#0066cc' : 'transparent',
            color: '#fff',
            border: '1px solid #0066cc',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'all 0.3s'
          }}>
            Partidos Políticos
          </Link>
          <Link to="/reniec" style={{
            padding: '0.5rem 1.5rem',
            backgroundColor: location.pathname === '/reniec' ? '#0066cc' : 'transparent',
            color: '#fff',
            border: '1px solid #0066cc',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'all 0.3s'
          }}>
            Consulta RENIEC
          </Link>
        </div>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/candidatos" element={<Candidatos candidato={candidatoEjemplo} />} />
        <Route path="/partidos" element={<PartidosPoliticos />} />
        <Route path="/reniec" element={<ReniecConsultas />} />
      </Routes>
    </div>
  );
};

export default App;