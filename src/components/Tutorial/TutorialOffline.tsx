import React from 'react';
import './TutorialOffline.css';

const TutorialOffline: React.FC = () => {
  return (
    <div className="tutorial-offline-container container mt-4 p-4 shadow-sm rounded">
      
      <h1 className="tutorial-offline-titulo text-center mb-3">
        Modo Offline: Información Limitada
      </h1>

      <p className="tutorial-offline-intro text-muted text-center mb-4">
        Actualmente estás navegando en modo offline. Algunas funciones y datos no estarán disponibles.
        A continuación encontrarás información básica sobre el proceso de votación en el Perú.
      </p>

      <h3 className="mt-4 mb-3">Guía rápida para votar como ciudadano en el Perú</h3>

      <ol className="tutorial-offline-lista">
        <li>Verifica tu local de votación con anticipación (normalmente vía web o plataformas oficiales).</li>
        <li>Acude al local con tu Documento Nacional de Identidad (DNI vigente o según normativa aplicable).</li>
        <li>Ubica tu mesa de sufragio y espera tu turno en la fila.</li>
        <li>Preséntate ante los miembros de mesa, identifícate y recibe tu cédula de votación.</li>
        <li>Ingresa a la cámara secreta y marca tu voto siguiendo las instrucciones oficiales.</li>
        <li>Entrega la cédula doblada, deposítala en el ánfora y recibe tu constancia de votación.</li>
      </ol>

      <div className="tutorial-offline-aviso alert alert-warning mt-4 text-center">
        Estás viendo una versión limitada. Conéctate a internet para acceder a información completa y actualizada.
      </div>
    </div>
  );
};

export default TutorialOffline;