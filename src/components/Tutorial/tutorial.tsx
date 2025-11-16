import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './tutorial.css';

const Tutorial: React.FC = () => {
  const { t } = useTranslation();
  const [videoError, setVideoError] = useState(false);

  // Reemplaza este link con el ID de tu video de YouTube
  // Ejemplo: si tu link es https://www.youtube.com/watch?v=dQw4w9WgXcQ
  // entonces videoId = "dQw4w9WgXcQ"
  const videoId = "dQw4w9WgXcQ"; // REEMPLAZAR CON TU VIDEO ID

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className="tutorial-container">
      <div className="tutorial-header">
        <h1 className="tutorial-titulo">{t('tutorial.titulo')}</h1>
        <p className="tutorial-descripcion">{t('tutorial.descripcion')}</p>
      </div>

      <div className="tutorial-content">
        {/* Video Principal */}
        <div className="video-wrapper">
          <div className="video-container">
            {!videoError ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                title={t('tutorial.tituloVideo')}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onError={handleVideoError}
              ></iframe>
            ) : (
              <div className="video-error">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 7l-7 5 7 5V7z"></path>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
                <p>{t('tutorial.errorVideo')}</p>
              </div>
            )}
          </div>
          <div className="video-info">
            <h2>{t('tutorial.tituloVideo')}</h2>
            <p>{t('tutorial.descripcionVideo')}</p>
          </div>
        </div>

        {/* Secciones de ayuda */}
        <div className="ayuda-grid">
          <div className="ayuda-card">
            <div className="ayuda-icon">📍</div>
            <h3>{t('tutorial.seccion1.titulo')}</h3>
            <p>{t('tutorial.seccion1.descripcion')}</p>
            <ul className="ayuda-lista">
              <li>{t('tutorial.seccion1.paso1')}</li>
              <li>{t('tutorial.seccion1.paso2')}</li>
              <li>{t('tutorial.seccion1.paso3')}</li>
            </ul>
          </div>

          <div className="ayuda-card">
            <div className="ayuda-icon">🗳️</div>
            <h3>{t('tutorial.seccion2.titulo')}</h3>
            <p>{t('tutorial.seccion2.descripcion')}</p>
            <ul className="ayuda-lista">
              <li>{t('tutorial.seccion2.paso1')}</li>
              <li>{t('tutorial.seccion2.paso2')}</li>
              <li>{t('tutorial.seccion2.paso3')}</li>
            </ul>
          </div>

          <div className="ayuda-card">
            <div className="ayuda-icon">👥</div>
            <h3>{t('tutorial.seccion3.titulo')}</h3>
            <p>{t('tutorial.seccion3.descripcion')}</p>
            <ul className="ayuda-lista">
              <li>{t('tutorial.seccion3.paso1')}</li>
              <li>{t('tutorial.seccion3.paso2')}</li>
              <li>{t('tutorial.seccion3.paso3')}</li>
            </ul>
          </div>

          <div className="ayuda-card">
            <div className="ayuda-icon">🔍</div>
            <h3>{t('tutorial.seccion4.titulo')}</h3>
            <p>{t('tutorial.seccion4.descripcion')}</p>
            <ul className="ayuda-lista">
              <li>{t('tutorial.seccion4.paso1')}</li>
              <li>{t('tutorial.seccion4.paso2')}</li>
              <li>{t('tutorial.seccion4.paso3')}</li>
            </ul>
          </div>
        </div>

        {/* Sección Cédula de Sufragio */}
        <div className="cedula-section">
          <h2 className="cedula-titulo">Cédula de sufragio</h2>
          <p className="cedula-descripcion">
            En las Elecciones Generales 2026, contaremos con una cédula de sufragio con cinco columnas, cada una representa una elección distinta: fórmula presidencial, senadores a nivel nacional, senadores a nivel regional, diputados y representantes ante el Parlamento Andino.
          </p>
          <p className="cedula-subtitulo">Mira el video que hemos preparado para ti sobre la cédula</p>
          
          <div className="cedula-video-wrapper">
            <div className="cedula-video-container">
              <iframe
                src="https://www.youtube.com/embed/1l0783CZRWA?start=1"
                title="Cédula de sufragio"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Preguntas frecuentes */}
        <div className="faq-section">
          <h2 className="faq-titulo">{t('tutorial.faq.titulo')}</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>{t('tutorial.faq.pregunta1')}</h4>
              <p>{t('tutorial.faq.respuesta1')}</p>
            </div>
            <div className="faq-item">
              <h4>{t('tutorial.faq.pregunta2')}</h4>
              <p>{t('tutorial.faq.respuesta2')}</p>
            </div>
            <div className="faq-item">
              <h4>{t('tutorial.faq.pregunta3')}</h4>
              <p>{t('tutorial.faq.respuesta3')}</p>
            </div>
            <div className="faq-item">
              <h4>{t('tutorial.faq.pregunta4')}</h4>
              <p>{t('tutorial.faq.respuesta4')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
