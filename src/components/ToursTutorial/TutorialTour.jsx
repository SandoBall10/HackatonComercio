import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './TutorialTour.css';
import yachayImg from '../../../public/avatar/avatar-Tutorial.png';

// Define los pasos y la ruta a navegar (si aplica)
const steps = [
  {
    title: 'Bienvenido a la Plataforma',
    content: 'Aquí puedes informarte sobre las Elecciones Generales 2026, ver candidatos, partidos y mucho más.',
    selector: '.chatbot-button',
    route: '/',
  },
  {
    title: 'Inicio',
    content: 'Esta es la página de inicio. Aquí verás información general y noticias importantes.',
    selector: '.inicio-container',
    route: '/',
  },
  {
    title: 'Navegación Principal',
    content: 'Utiliza el menú superior para acceder a las secciones principales: Inicio, Partidos, RENIEC, Miembros de Mesa, Personeros, Tutorial.',
    selector: 'nav',
    route: '/',
  },
  {
    title: 'Consulta RENIEC',
    content: 'En la sección RENIEC puedes consultar tu local y mesa de votación ingresando tu DNI.',
    selector: '.reniec-section',
    route: '/reniec',
  },
  {
    title: 'Partidos Políticos',
    content: 'Explora los partidos políticos y conoce sus propuestas y candidatos.',
    selector: '.partidos-section',
    route: '/partidos',
  },
  {
    title: 'Miembros de Mesa',
    content: 'Si fuiste seleccionado, aquí encontrarás toda la información y capacitación necesaria.',
    selector: '.miembros-mesa-section',
    route: '/miembros-mesa',
  },
  {
    title: 'Personeros',
    content: 'En la sección Personeros puedes informarte sobre el rol y responsabilidades de los personeros en el proceso electoral.',
    selector: '.personeros-section',
    route: '/personeros',
  },
  {
    title: '¡Listo!',
    content: 'Ya sabes cómo navegar la plataforma. Usa el chatbot para cualquier duda.',
    selector: '.chatbot-button',
    route: '/',
  },
];

const TutorialTour = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < steps.length - 1) {
      const nextStep = step + 1;
      // Navegar si la ruta cambia
      if (steps[nextStep].route && window.location.pathname !== steps[nextStep].route) {
        navigate(steps[nextStep].route);
        setTimeout(() => setStep(nextStep), 350); // Espera a que cargue la página
      } else {
        setStep(nextStep);
      }
    }
  };
  const handlePrev = () => {
    if (step > 0) {
      const prevStep = step - 1;
      if (steps[prevStep].route && window.location.pathname !== steps[prevStep].route) {
        navigate(steps[prevStep].route);
        setTimeout(() => setStep(prevStep), 350);
      } else {
        setStep(prevStep);
      }
    }
  };
  const handleClose = () => {
    // Quitar cualquier highlight al cerrar
    document.querySelectorAll('.tutorial-highlight-persistent').forEach(el => {
      el.classList.remove('tutorial-highlight-persistent');
    });
    setStep(-1);
  };

  const { title, content, selector } = steps[step] || {};
  const [spotlight, setSpotlight] = useState(null);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Actualiza tamaño de ventana para recalcular spotlight
  useEffect(() => {
    const onResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Calcula el área del spotlight según el selector
  useEffect(() => {
    if (!selector) return;
    const el = document.querySelector(selector);
    if (el) {
      const rect = el.getBoundingClientRect();
      setSpotlight({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height
      });
    } else {
      setSpotlight(null);
    }
  }, [selector, step, windowSize]);

  useEffect(() => {
    if (step === -1) return;
    // Quitar highlight anterior
    document.querySelectorAll('.tutorial-highlight-persistent').forEach(el => {
      el.classList.remove('tutorial-highlight-persistent');
    });
    // Agregar highlight al actual
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      target.classList.add('tutorial-highlight-persistent');
    }
    // Limpiar highlight al desmontar
    return () => {
      if (target) target.classList.remove('tutorial-highlight-persistent');
    };
  }, [step, selector]);

  if (step === -1) return null;

  // Spotlight CSS
  let spotlightStyle = {};
  if (spotlight) {
    const pad = 8; // padding extra para el área visible
    const t = spotlight.top - pad;
    const l = spotlight.left - pad;
    const w = spotlight.width + pad * 2;
    const h = spotlight.height + pad * 2;
    spotlightStyle = {
      WebkitClipPath: `polygon(0 0, 0 100%, 100% 100%, 100% 0, 0 0, 0 0, 0 0, 0 0, 0 0),
        inset(${t}px ${window.innerWidth - (l + w)}px ${window.innerHeight - (t + h)}px ${l}px round 12px)` ,
      clipPath: `polygon(0 0, 0 100%, 100% 100%, 100% 0, 0 0, 0 0, 0 0, 0 0, 0 0),
        inset(${t}px ${window.innerWidth - (l + w)}px ${window.innerHeight - (t + h)}px ${l}px round 12px)` ,
      pointerEvents: 'none',
      transition: 'clip-path 0.3s, -webkit-clip-path 0.3s',
    };
  }

  const overlayClass = step === 0 ? 'tutorial-tour-overlay center' : 'tutorial-tour-overlay right';
  const contentClass = step === 0 ? 'tutorial-tour-content center' : 'tutorial-tour-content right row-normal';
  return (
    <>
      <div className="tutorial-spotlight-overlay" style={spotlight ? spotlightStyle : {}}></div>
      <div className={overlayClass}>
        <div className={contentClass}>
          <img src={yachayImg} alt="Yachay guía" className="tutorial-yachay-img animated-img" />
          <div className="tutorial-tour-box tutorial-tour-box-small animated-box">
            <h3>{title}</h3>
            <p>{content}</p>
            <div className="tutorial-tour-actions">
              <button onClick={handlePrev} disabled={step === 0}>Anterior</button>
              <button onClick={handleNext} disabled={step === steps.length - 1}>Siguiente</button>
              <button onClick={handleClose}>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialTour;
