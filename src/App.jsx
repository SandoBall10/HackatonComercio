import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Inicio } from './components/Inicio/Inicio';
import Candidatos from './components/Candidatos/Candidatos';
import PartidosPoliticos from './components/PartidosPoliticos/PartidosPoliticos';
import PartidoDetalle from './components/Candidatos/PartidoDetalle';
import ReniecConsultas from './components/reniec/ReniecConsultas';
import { getCandidatoById } from './data/candidatos.js';

const App = () => {
  const candidatoEjemplo = getCandidatoById('fuerza-popular');

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/candidatos" element={<Candidatos candidato={candidatoEjemplo} />} />
        <Route path="/partidos" element={<PartidosPoliticos />} />
        <Route path="/partido/:id" element={<PartidoDetalle />} />
        <Route path="/reniec" element={<ReniecConsultas />} />
      </Routes>
    </div>
  );
};

export default App;