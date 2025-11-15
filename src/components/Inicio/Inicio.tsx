import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inicio.css';

type EventItem = { date: string; title: string; bullets?: string[]; icon?: string };

const TIMELINE: Record<string, Record<string, EventItem[]>> = {
  '2025': {
    MARZO: [{ date: '26 Marzo', title: 'Convocatoria a Elecciones Generales 2026' }],
    ABRIL: [{ date: '12 Abril', title: 'Fecha límite para la inscripción de partidos políticos en el ROP' }],
    JUNIO: [
      { date: '11 Junio', title: 'Registro de normativa actualizada de las organizaciones políticas' },
      { date: '30 Junio', title: 'Fecha límite para que la Dirección Nacional de Registro de Organizaciones Políticas (DNROP) remita al Reniec los padrones de electores afiliados para las elecciones primarias (EG 2026)', icon: 'ic_JNE.png' },
    ],
    AGOSTO: [
      { date: '2 Agosto', title: 'Inscripción de alianzas partidarias para las Elecciones Generales 2026', icon: 'ic_doc-write.png' },
      { date: '30 Agosto', title: 'Reniec remite al JNE los padrones de electores afiliados para las elecciones primarias', icon: 'ic_docs.png' },
    ],
    SEPTIEMBRE: [
      {
        date: '1 Septiembre',
        title: 'La Organización política informa la modalidad y tipo de candidaturas para las elecciones primarias (EG 2026)',
        bullets: [
          'Fecha límite para que las alianzas partidarias logren inscripción (EG 2026)',
          'Fecha límite para que las OP* presenten a la DNROP** la relación de electores no afiliados para las elecciones primarias',
        ],
      },
      { date: '8 Septiembre', title: 'Fecha límite para que la DNROP** remita al Reniec los padrones de electores no afiliados', icon: 'ic_JNE.png' },
      { date: '15 Septiembre', title: 'OP* presentan candidatos a delegados para las elecciones primarias', icon: 'ic_people-check.png' },
      { date: '16 Septiembre', title: 'Reniec remite al JNE los padrones de electores no afiliados', icon: 'ic_docs.png' },
    ],
    OCTUBRE: [
      { date: '14 Octubre', title: 'Cierre del padrón electoral para las Elecciones Generales 2026', icon: 'ic_reniec.png' },
      { date: '19 Octubre', title: 'Fecha límite para aprobación de padrones, en el marco de las elecciones primarias', icon: 'ic_list-check.png' },
      { date: 'Del 28 al 31 Octubre', title: 'OP* realizan la inscripción de precandidaturas', icon: 'ic_doc-write.png' },
    ],
    NOVIEMBRE: [
      { date: '7 Noviembre', title: 'Fecha límite de entrega de candidatos finales a la ONPE por parte de la OP*', icon: 'ic_calendar.png' },
      { date: '10 Noviembre', title: 'OP* realizan el registro de personeros para las elecciones primarias (EG 2026)', icon: 'ic_doc-write.png' },
      { date: '13 Noviembre', title: 'Envío del padrón preliminar al JNE y a la ONPE para las Elecciones Generales 2026', icon: 'ic_reniec.png' },
      { date: '30 Noviembre', title: 'Elecciones primarias (Afiliados)', icon: 'ic_anfora.png' },
    ],
    DICIEMBRE: [
      { date: '13 Diciembre', title: 'Fecha límite de aprobación del padrón electoral definitivo para las Elecciones Generales 2026', icon: 'ic_JNE.png' },
      { date: '23 Diciembre', title: 'Fecha límite para inscripción de fórmulas y listas de candidatos', icon: 'ic_people-check.png' },
      {
        date: '24 Diciembre',
        title: 'Fecha límite para la publicación de instrucciones para la ubicación en la cédula de sufragio y publicación del diseño de cédula para la presentación de tachas',
        icon: 'ic_onpe.png',
      },
      { date: '26 Diciembre al 15 Enero', title: 'Impugnaciones y resolución de tachas a la cédula de sufragio', icon: 'ic_list-write.png' },
    ],
  },
  '2026': {
    ENERO: [
      { date: '26 Diciembre al 15 Enero', title: 'Impugnaciones y resolución de tachas a la cédula de sufragio', icon: 'ic_list-write.png' },
      { date: '22 Enero', title: 'Publicación definitiva del diseño de cédula para las Elecciones Generales 2026', icon: 'ic_onpe.png' },
      { date: '29 Enero', title: 'Sorteo de miembros de mesa', icon: 'ic_onpe.png' },
      { date: '30 Enero al 11 Febrero', title: 'Proceso de impugnación, apelaciones y resolución de tachas a miembros de mesa', icon: 'ic_person-check.png' },
    ],
    FEBRERO: [
      {
        date: '12 Febrero',
        title: 'Sorteo de ubicación de candidaturas o símbolos en la cédula de sufragio, Publicación definitiva de la lista de miembros de mesa, Fecha límite para el retiro y/o renuncia de listas de candidatos',
        icon: 'ic_onpe.png',
      },
    ],
    MARZO: [
      { date: '29 Marzo', title: '1ra jornada de capacitación a miembros de mesa para las Elecciones Generales 2026', icon: 'ic_onpe.png' },
    ],
    ABRIL: [
      { date: '5 Abril', title: 'Simulacro del Sistema de Cómputo Electoral y 2da jornada de capacitación a miembros de mesa', icon: 'ic_onpe.png' },
      { date: '12 Abril', title: 'Elecciones Generales 2026', icon: 'ic_voto.png' },
    ],
  },
};

export const Inicio: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeYear, setActiveYear] = useState<'2025' | '2026'>('2025');
  const [activeMonth, setActiveMonth] = useState<string>('MARZO');
  const [countdown, setCountdown] = useState({ meses: 0, dias: 0, horas: 0, minutos: 0 });

  const slides = [
    { id: 1, image: 'https://picsum.photos/1200/400?random=1', alt: 'Imagen de prueba 1' },
    { id: 2, image: 'https://picsum.photos/1200/400?random=2', alt: 'Imagen de prueba 2' },
    { id: 3, image: 'https://picsum.photos/1200/400?random=3', alt: 'Imagen de prueba 3' },
  ];

  const months2025 = ['MARZO', 'ABRIL', 'JUNIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
  const months2026 = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL'];
  const months = activeYear === '2025' ? months2025 : months2026;

  // Calcular countdown
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
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Cambiar mes cuando cambia el año
  React.useEffect(() => {
    if (!months.includes(activeMonth)) {
      setActiveMonth(months[0]);
    }
  }, [activeYear]);

  const yearData = TIMELINE[activeYear] || {};
  const monthEvents = (yearData[activeMonth] || []) as EventItem[];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="inicio-container">
      {/* TOP HEADER CON COUNTDOWN */}
      <div className="top-header">
        <div className="top-header-content">
          <div className="logo-section">
            <img src="src/assets/onpe_logo.png" alt="ONPE" className="top-logo" />
            <div className="election-info">
              <h2>Elecciones Generales</h2>
              <p>12 de abril de 2026</p>
            </div>
          </div>
          <div className="countdown">
            <span className="countdown-label">Faltan:</span>
            <div className="countdown-items">
              <div className="countdown-item">
                <div className="countdown-value">{String(countdown.meses).padStart(2, '0')}</div>
                <div className="countdown-label-small">Meses</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-value">{String(countdown.dias).padStart(2, '0')}</div>
                <div className="countdown-label-small">Días</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-value">{String(countdown.horas).padStart(2, '0')}</div>
                <div className="countdown-label-small">Horas</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-value">{String(countdown.minutos).padStart(2, '0')}</div>
                <div className="countdown-label-small">Minutos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* NAVBAR */}
      <header className="header">
        <nav className="navbar">
          <div className="nav-links-container">
            <a href="/" className="nav-link" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Inicio</a>
            <a href="/partidos" className="nav-link" onClick={(e) => { e.preventDefault(); navigate('/partidos'); }}>Partidos Politicos</a>
            <a href="/candidatos" className="nav-link" onClick={(e) => { e.preventDefault(); navigate('/candidatos'); }}>Candidatos</a>
            <a href="/reniec" className="nav-link" onClick={(e) => { e.preventDefault(); navigate('/reniec'); }}>Consulta RENIEC</a>
            <a href="#lo-nuevo" className="nav-link">Lo nuevo</a>
            <a href="#voto-digital" className="nav-link">Voto Digital</a>
            <a href="#verifica-mesa" className="nav-link nav-link-highlight">Verifica si eres miembro de mesa</a>
          </div>
        </nav>
      </header>
      {/* SUBTABS */}
      <div className="subtabs">
        <button className="subtab-btn active">Información general</button>
        <button className="subtab-btn">Enlaces relacionados</button>
        <div className="subtab-underline"></div>
      </div>

      <main>
        {/* CARRUSEL */}
        <section className="carousel-section">
          <div className="carousel-container">
            <div className="carousel">
              <img src={slides[currentSlide].image} alt={slides[currentSlide].alt} className="carousel-image" />
              <button className="carousel-btn prev" onClick={prevSlide} aria-label="Anterior">❮</button>
              <button className="carousel-btn next" onClick={nextSlide} aria-label="Siguiente">❯</button>
            </div>
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section className="timeline-wrapper">
          <h1 className="timeline-title">Sigue la línea de tiempo de este proceso electoral:</h1>

          {/* YEAR TABS */}
          <div className="tabs-link">
            <button
              role="tab"
              aria-selected={activeYear === '2025'}
              className={`tab-link ${activeYear === '2025' ? 'active' : ''}`}
              onClick={() => setActiveYear('2025')}
            >
              2025
            </button>
            <button
              role="tab"
              aria-selected={activeYear === '2026'}
              className={`tab-link ${activeYear === '2026' ? 'active' : ''}`}
              onClick={() => setActiveYear('2026')}
            >
              2026
            </button>
          </div>

          {/* MONTH TABS */}
          <div className="tab-buttons" role="tablist" aria-label={`Contenido de pestaña ${activeYear}`}>
            {months.map((m) => (
              <button
                key={m}
                role="tab"
                aria-selected={activeMonth === m}
                className={`month-btn ${activeMonth === m ? 'active' : ''}`}
                onClick={() => setActiveMonth(m)}
              >
                {m}
              </button>
            ))}
          </div>

          {/* TIMELINE AREA */}
          <div className="timeline-area">
            <div className="timeline-line-vertical"></div>
            <div className="entries">
              {monthEvents.length === 0 && <div className="no-events">No hay eventos para este mes.</div>}

              {monthEvents.map((ev, idx) => (
                <div key={idx} className={`entry-wrapper ${idx % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-marker"></div>
                  <div className="entry">
                    {ev.icon && <img src={`src/assets/img/${ev.icon}`} alt="icon" className="entry-icon" />}
                    <p className="title">{ev.date}</p>
                    <p className="description">{ev.title}</p>
                    {ev.bullets && (
                      <div className="bullets">
                        {ev.bullets.map((b, i) => (
                          <p key={i}>■ {b}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

        {/* FOOTER */}
          <footer className="site-footer">
            <div className="footer-container">
              <div className="footer-col">
                <h4>Oficina central</h4>
                <p>Jr. Washington 1894, Cercado de Lima</p>
                <p>Lunes a viernes de 8:30 a. m. a 5:00 p. m.</p>
              </div>

              <div className="footer-col">
                <h4>Contáctanos:</h4>
                <p><a href="mailto:informes@onpe.gob.pe">informes@onpe.gob.pe</a></p>
                <p>(01) 4170630</p>
                <p>WhatsApp: 995 404 991</p>
              </div>

              <div className="footer-col">
                <h4>Síguenos:</h4>
                <div className="socials" role="navigation" aria-label="Redes sociales">
                  <a href="#" className="social" aria-label="Facebook">F</a>
                  <a href="#" className="social" aria-label="X">X</a>
                  <a href="#" className="social" aria-label="TikTok">t</a>
                  <a href="#" className="social" aria-label="Instagram">ig</a>
                  <a href="#" className="social" aria-label="YouTube">yt</a>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              © 2026 Portal Electoral - Todos los derechos reservados
            </div>
          </footer>
    </div>
  );
};