import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Inicio } from './components/Inicio/Inicio';
import InicioOffline from './components/Inicio/InicioOffline';
import Candidatos from './components/Candidatos/Candidatos';
import CandidatoOffline from './components/Candidatos/CandidatoOffline';
import PartidoDetalleOffline from './components/Candidatos/PartidoDetalleOffline';
import PartidosPoliticos from './components/PartidosPoliticos/PartidosPoliticos';
import PartidoDetalle from './components/Candidatos/PartidoDetalle';
import ReniecConsultas from './components/reniec/ReniecConsultas';
import MiembrosMesa from './components/MiembrosMesa/MiembrosMesa';
import Tutorial from './components/Tutorial/tutorial';
import TutorialOffline from './components/Tutorial/TutorialOffline';
import Chatbot from './components/Chatbot/Chatbot';
import TutorialTour from './components/ToursTutorial/TutorialTour';
import { getCandidatoById } from './data/candidatos.js';
import Personeros from './components/Personeros/Personeros';
import PersonerosOffline from './components/Personeros/PersonerosOffline';

const App = () => {
  const candidatoEjemplo = getCandidatoById('fuerza-popular');
  const location = useLocation();
  const [isOfflineRoute, setIsOfflineRoute] = useState(false);

  const offlineRoutes = [
    '/offline',
    '/inicio-offline',
    '/candidatos-offline',
    '/partidos-offline',
    '/tutorial-offline',
    '/personeros-offline'
  ];

  useEffect(() => {
    const isOffline = offlineRoutes.includes(location.pathname);
    setIsOfflineRoute(isOffline);
  }, [location.pathname]);

  return (
    <div className="App">
      {!isOfflineRoute && <Header />}

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/candidatos" element={<Candidatos candidato={candidatoEjemplo} />} />
        <Route path="/candidatos/:partidoId" element={<Candidatos candidato={candidatoEjemplo} />} />
        <Route path="/candidatos-offline" element={<CandidatoOffline />} />
        <Route path="/partidos-offline" element={<PartidoDetalleOffline />} />
        <Route path="/partidos" element={<PartidosPoliticos />} />
        <Route path="/partido/:id" element={<PartidoDetalle />} />
        <Route path="/reniec" element={<ReniecConsultas />} />
        <Route path="/miembros-mesa" element={<MiembrosMesa />} />
        <Route path="/personeros" element={<Personeros />} />
        <Route path="/personeros-offline" element={<PersonerosOffline />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/tutorial-offline" element={<TutorialOffline />} />
        <Route path="/offline" element={<InicioOffline />} />
        <Route path="/inicio-offline" element={<InicioOffline />} />
      </Routes>

      {!isOfflineRoute && <>
        <Chatbot />
        <TutorialTour />
      </>}
    </div>
  );
};

export default App;