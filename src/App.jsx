import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio';
import DetalleCandidatos from './components/Candidatos/DetalleCandidatos';
import PartidoDetalle from './components/Candidatos/PartidoDetalle';
import Candidatos from './components/Candidatos/Candidatos';
import { PARTIDOS } from './data/partidos';
import './App.css';

function getCandidatoById(id) {
  if (!id) return null;
  for (const partido of PARTIDOS) {
    if (!partido.candidatos) continue;
    const candidato = partido.candidatos.find(c => String(c.id) === String(id));
    if (candidato) return candidato;
  }
  return null;
}

function CandidatoByParam() {
  const { id } = useParams();
  const candidato = getCandidatoById(id);
  if (!candidato) return <div style={{ padding: 16 }}>Candidato no encontrado</div>;
  return <Candidatos candidato={candidato} />;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav style={{ padding: 12 }}>
          <Link to="/" style={{ marginRight: 8 }}>Inicio</Link>
          <Link to="/candidatos" style={{ marginRight: 8 }}>Partidos / Candidatos</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/candidatos" element={<DetalleCandidatos />} />
          <Route path="/partido/:id" element={<PartidoDetalle />} />
          <Route path="/candidato/:id" element={<CandidatoByParam />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;