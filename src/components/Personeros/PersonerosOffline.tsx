import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PersonerosOffline.css';

const PersonerosOffline: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleOnline = () => {
      navigate('/');
    };

    if (navigator.onLine) {
      navigate('/');
    }

    window.addEventListener('online', handleOnline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
    };
  }, [navigate]);

  const cronograma = [
    { hora: '7:00 AM', actividad: 'Llegada temprana a la mesa de votación', icono: '🕖' },
    { hora: '8:00 AM', actividad: 'Inicio de votación - Supervisar apertura', icono: '🗳️' },
    { hora: '8:00 AM - 4:00 PM', actividad: 'Supervisión continua del proceso', icono: '👀' },
    { hora: '4:00 PM', actividad: 'Cierre de mesa de votación', icono: '🔒' },
    { hora: '5:00 PM', actividad: 'Recuento de votos', icono: '📊' },
    { hora: '6:00 PM', actividad: 'Firma de actas electorales', icono: '✍️' }
  ];

  const derechos = [
    'Presenciar toda la jornada electoral',
    'Observar el conteo de votos',
    'Firmar actas electorales',
    'Presentar observaciones ante irregularidades'
  ];

  const deberes = [
    'Portar credencial y DNI en todo momento',
    'Respetar el proceso electoral',
    'No interferir con los votantes',
    'Mantener orden y respeto'
  ];

  const instrucciones = [
    'Llegar antes de las 8:00 AM con credencial y DNI',
    'Presentarse ante los miembros de mesa',
    'Observar sin interferir en el proceso',
    'Verificar el correcto conteo de votos',
    'Revisar y firmar las actas al final'
  ];

  const preguntasFrecuentes = [
    {
      pregunta: '¿Cómo me identifico como personero?',
      respuesta: 'Debes portar tu credencial oficial y DNI durante toda la jornada electoral.'
    },
    {
      pregunta: '¿Puedo intervenir si detecto irregularidades?',
      respuesta: 'Sí, puedes presentar observaciones de manera respetuosa ante los miembros de mesa.'
    },
    {
      pregunta: '¿Cuándo firmo las actas?',
      respuesta: 'Al finalizar el escrutinio, después de revisar que todo esté correcto.'
    },
    {
      pregunta: '¿Qué no puedo hacer como personero?',
      respuesta: 'No puedes influir en el voto, manipular material electoral ni interrumpir el proceso.'
    }
  ];

  return (
    <div className="personeros-offline-wrapper">
      <div className="personeros-offline-container">
        <div className="offline-header-section">
          <div className="offline-icon-badge">👤</div>
          <h1 className="offline-title">Personeros Electorales</h1>
          <p className="offline-subtitle">Información esencial sin conexión</p>
        </div>

        <section className="offline-section">
          <div className="section-header">
            <span className="section-icon">ℹ️</span>
            <h2>¿Qué es un Personero Electoral?</h2>
          </div>
          <div className="info-card">
            <p>
              Un personero es un ciudadano designado por una organización política para representarla durante el proceso electoral.
            </p>
            <p>
              Actúa como observador y garante de la transparencia en las mesas de votación, asegurando que el proceso se lleve a cabo conforme a la ley electoral.
            </p>
          </div>
        </section>

        <section className="offline-section">
          <div className="section-header">
            <span className="section-icon">❓</span>
            <h2>Preguntas Frecuentes</h2>
          </div>
          <div className="faq-grid">
            {preguntasFrecuentes.map((faq, idx) => (
              <div key={idx} className="faq-card">
                <h3 className="faq-question">{faq.pregunta}</h3>
                <p className="faq-answer">{faq.respuesta}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="offline-section">
          <div className="derechos-deberes-container">
            <div className="dd-column">
              <div className="section-header">
                <span className="section-icon">✅</span>
                <h2>Derechos</h2>
              </div>
              <ul className="dd-list">
                {derechos.map((derecho, idx) => (
                  <li key={idx} className="dd-item">
                    <span className="check-icon">✓</span>
                    <span>{derecho}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="dd-column">
              <div className="section-header">
                <span className="section-icon">📋</span>
                <h2>Deberes</h2>
              </div>
              <ul className="dd-list">
                {deberes.map((deber, idx) => (
                  <li key={idx} className="dd-item">
                    <span className="check-icon">•</span>
                    <span>{deber}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="offline-section">
          <div className="section-header">
            <span className="section-icon">📅</span>
            <h2>Cronograma del Día Electoral</h2>
          </div>
          <div className="cronograma-grid">
            {cronograma.map((item, idx) => (
              <div key={idx} className="cronograma-card">
                <div className="cronograma-icon">{item.icono}</div>
                <div className="cronograma-info">
                  <div className="cronograma-hora">{item.hora}</div>
                  <div className="cronograma-actividad">{item.actividad}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="offline-section">
          <div className="section-header">
            <span className="section-icon">📝</span>
            <h2>Instrucciones Importantes</h2>
          </div>
          <div className="instrucciones-card">
            <ol className="instrucciones-list">
              {instrucciones.map((instruccion, idx) => (
                <li key={idx} className="instruccion-item">
                  <span className="instruccion-numero">{idx + 1}</span>
                  <span>{instruccion}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <div className="nota-importante">
          <div className="nota-icon">⚠️</div>
          <div>
            <strong>Importante:</strong> Esta es una versión sin conexión con información básica. 
            Para acceder a recursos completos, tutoriales y documentos descargables, 
            conecte a internet y visite la sección de Personeros.
          </div>
        </div>

        <button 
          className="btn-volver"
          onClick={() => navigate('/inicio-offline')}
        >
          ← Volver al inicio offline
        </button>
      </div>
    </div>
  );
};

export default PersonerosOffline;