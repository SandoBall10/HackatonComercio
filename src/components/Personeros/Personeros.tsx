
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Personeros.css';

interface ActividadPersonero {
  hora: string;
  actividad: string;
  icono: string;
}

const Personeros: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'cronograma' | 'instrucciones' | 'derechos' | 'capacitacion'>('cronograma');

  const actividades: ActividadPersonero[] = [
    { hora: '7:00 AM', actividad: t('personeros.cronograma.llegada'), icono: '🕖' },
    { hora: '8:00 AM', actividad: t('personeros.cronograma.inicioVotacion'), icono: '🗳️' },
    { hora: '8:00 AM - 4:00 PM', actividad: t('personeros.cronograma.supervision'), icono: '👀' },
    { hora: '4:00 PM', actividad: t('personeros.cronograma.cierreMesa'), icono: '🔒' },
    { hora: '5:00 PM', actividad: t('personeros.cronograma.recuentoVotos'), icono: '📊' },
    { hora: '6:00 PM', actividad: t('personeros.cronograma.firmaActas'), icono: '✍️' }
  ];

  const instrucciones = [
    {
      titulo: t('personeros.instrucciones.acreditacion.titulo'),
      pasos: [
        t('personeros.instrucciones.acreditacion.paso1'),
        t('personeros.instrucciones.acreditacion.paso2'),
        t('personeros.instrucciones.acreditacion.paso3')
      ],
      icono: '🪪'
    },
    {
      titulo: t('personeros.instrucciones.supervision.titulo'),
      pasos: [
        t('personeros.instrucciones.supervision.paso1'),
        t('personeros.instrucciones.supervision.paso2'),
        t('personeros.instrucciones.supervision.paso3'),
        t('personeros.instrucciones.supervision.paso4')
      ],
      icono: '👀'
    },
    {
      titulo: t('personeros.instrucciones.actas.titulo'),
      pasos: [
        t('personeros.instrucciones.actas.paso1'),
        t('personeros.instrucciones.actas.paso2'),
        t('personeros.instrucciones.actas.paso3')
      ],
      icono: '✍️'
    }
  ];

  const derechos = [
    { texto: t('personeros.derechos.derecho1'), icono: '✓' },
    { texto: t('personeros.derechos.derecho2'), icono: '✓' },
    { texto: t('personeros.derechos.derecho3'), icono: '✓' },
    { texto: t('personeros.derechos.derecho4'), icono: '✓' }
  ];

  const deberes = [
    { texto: t('personeros.deberes.deber1'), icono: '•' },
    { texto: t('personeros.deberes.deber2'), icono: '•' },
    { texto: t('personeros.deberes.deber3'), icono: '•' },
    { texto: t('personeros.deberes.deber4'), icono: '•' }
  ];

  const recursos = [
    { id: 1, titulo: 'Rol del Personero', descripcion: 'Guía del rol y responsabilidades (PDF)', url: '/documentos/rol-personero.pdf' },
    { id: 2, titulo: 'Cartilla del Personero', descripcion: 'Cartilla completa para personeros (PDF)', url: '/documentos/cartilla-personero.pdf' }
  ];

  const tutoriales = [
    { id: 1, titulo: 'Curso virtual para personeros y personeras de mesa', url: 'https://youtu.be/Rtv50xlfZoo?si=KU2aLwfO0SmoIcgQ' },
    { id: 2, titulo: 'Funciones como personero', url: 'https://youtu.be/e97mHCJSDTI?si=kCSygnk-vDTu-jlY' }
  ];

  return (
    <div className="personeros-container">
      <section className="hero-miembros">
        <div className="hero-content">
          <h1 className="hero-title">{t('personeros.titulo') || 'Personeros electorales'}</h1>
          <p className="hero-subtitle">{t('personeros.subtitulo') || 'Información esencial para personeros en el proceso electoral.'}</p>
        </div>
      </section>

      <div className="tabs-navigation">
        <div className="tabs-wrapper">
          <button className={`tab-btn ${activeTab === 'cronograma' ? 'active' : ''}`} onClick={() => setActiveTab('cronograma')}>
            {t('personeros.tabs.cronograma') || 'Cronograma del Día'}
          </button>

          <button className={`tab-btn ${activeTab === 'instrucciones' ? 'active' : ''}`} onClick={() => setActiveTab('instrucciones')}>
            {t('personeros.tabs.instrucciones') || 'Instrucciones'}
          </button>

          <button className={`tab-btn ${activeTab === 'derechos' ? 'active' : ''}`} onClick={() => setActiveTab('derechos')}>
            {t('personeros.tabs.derechos') || 'Derechos y Deberes'}
          </button>

          <button className={`tab-btn ${activeTab === 'capacitacion' ? 'active' : ''}`} onClick={() => setActiveTab('capacitacion')}>
            {t('personeros.tabs.capacitacion') || 'Capacitación'}
          </button>
        </div>
      </div>

      <div className="personeros-tab-content">
        {activeTab === 'cronograma' && (
          <>
            <div className="cronograma-section cronograma-img-layout">
              <div className="cronograma-img-col">
                <img
                  src={"/Imagenes-Pagina/personeros1.png?" + new Date().getTime()}
                  className="cronograma-personeros-img"
                />
              </div>
              <div className="cronograma-list-col">
                <h2 className="cronograma-title">{t('personeros.cronograma.titulo')}</h2>
                <ul className="cronograma-list">
                  {actividades.map((act, idx) => {
                    // Iconos SVG mejorados, rojo y blanco, animados
                    const iconosSVG = [
                      // Calendario (llegada)
                      <svg key="calendar" className="cronograma-svg-icon" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="5" y="8" width="28" height="22" rx="5" fill="#fff" stroke="#B30227" strokeWidth="3" />
                        <rect x="5" y="14" width="28" height="4" fill="#B30227" />
                        <rect x="11" y="5" width="3" height="6" rx="1.5" fill="#B30227" />
                        <rect x="24" y="5" width="3" height="6" rx="1.5" fill="#B30227" />
                        <circle cx="19" cy="22" r="2.5" fill="#B30227" />
                      </svg>,
                      // Urna con voto (inicio votación)
                      <svg key="urna" className="cronograma-svg-icon" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8" y="14" width="22" height="16" rx="3" fill="#fff" stroke="#B30227" strokeWidth="3" />
                        <rect x="14" y="8" width="10" height="8" rx="2" fill="#B30227" />
                        <rect x="17" y="11" width="4" height="5" rx="1.5" fill="#fff" />
                        <rect x="18.5" y="17" width="1" height="7" rx="0.5" fill="#B30227" />
                        <rect x="17" y="23" width="4" height="3" rx="1.5" fill="#B30227" />
                      </svg>,
                      // Lupa (supervisión)
                      <svg key="lupa" className="cronograma-svg-icon" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="17" cy="17" r="8" fill="#fff" stroke="#B30227" strokeWidth="3" />
                        <rect x="23.5" y="23.5" width="8" height="3" rx="1.5" transform="rotate(45 23.5 23.5)" fill="#B30227" />
                        <circle cx="17" cy="17" r="3" fill="#B30227" />
                      </svg>,
                      // Candado abierto (cierre mesa)
                      <svg key="lock" className="cronograma-svg-icon" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="18" width="18" height="12" rx="4" fill="#fff" stroke="#B30227" strokeWidth="3" />
                        <rect x="16" y="24" width="6" height="6" rx="3" fill="#B30227" />
                        <path d="M13 18v-4a6 6 0 0 1 12 0v4" stroke="#B30227" strokeWidth="2" fill="none" />
                      </svg>,
                      // Gráfica de barras (recuento)
                      <svg key="chart" className="cronograma-svg-icon" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="9" y="22" width="4" height="8" rx="2" fill="#B30227" />
                        <rect x="17" y="16" width="4" height="14" rx="2" fill="#fff" stroke="#B30227" strokeWidth="2" />
                        <rect x="25" y="12" width="4" height="18" rx="2" fill="#B30227" />
                      </svg>,
                      // Pluma y papel (firma)
                      <svg key="firma" className="cronograma-svg-icon" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="8" y="28" width="22" height="4" rx="2" fill="#B30227" />
                        <rect x="20" y="10" width="8" height="10" rx="2" fill="#fff" stroke="#B30227" strokeWidth="2" />
                        <rect x="10" y="14" width="8" height="6" rx="2" fill="#B30227" />
                        <path d="M12 28 Q18 18 26 28" stroke="#fff" strokeWidth="2.5" fill="none" />
                      </svg>
                    ];
                    return (
                      <li key={idx} className="cronograma-item">
                        <span className="cronograma-icono-animada">{iconosSVG[idx]}</span>
                        <span className="cronograma-hora">{act.hora}</span>
                        <span className="cronograma-actividad">{act.actividad}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* Dato importante para personeros debajo de los recuadros */}
            <div className="dato-importante-personeros">
              <h3>Importante</h3>
              <p>El personero debe identificarse y acreditarse antes del inicio de la votación. Recuerda portar tu credencial y DNI durante toda la jornada electoral.</p>
            </div>
          </>
        )}
        {activeTab === 'instrucciones' && (
          <>
            <div className="instrucciones-section">
              <h2 style={{ textAlign: 'center', fontWeight: 800, fontSize: '2rem', marginBottom: '2.2rem', color: '#23272b' }}>{t('personeros.instrucciones.titulo')}</h2>
              <div className="instrucciones-grid">
                {instrucciones.map((inst, idx) => (
                  <div key={idx} className="instruccion-card">
                    <div className="instruccion-header">
                      <span className="instruccion-icono">
                        {idx === 0 && (
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="8" y="12" width="16" height="12" rx="4" fill="#fff" />
                            <path d="M12 18h8M12 22h5" stroke="#B30227" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="16" cy="16" r="14" stroke="#fff" strokeWidth="2" />
                          </svg>
                        )}
                        {idx === 1 && (
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="14" stroke="#fff" strokeWidth="2" />
                            <path d="M11 16l3 3 7-7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                        {idx === 2 && (
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="10" y="20" width="12" height="4" rx="2" fill="#fff" />
                            <path d="M12 22l4-8 4 8" stroke="#B30227" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="16" cy="16" r="14" stroke="#fff" strokeWidth="2" />
                          </svg>
                        )}
                      </span>
                      <h3>{inst.titulo}</h3>
                    </div>
                    <ol className="instruccion-lista">
                      {inst.pasos.map((paso, i) => (
                        <li key={i}>{paso}</li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </div>
            {/* Recuadro informativo con video de funciones de personeros */}
            <div className="cedula-sufragio-box">
              <h2 className="cedula-sufragio-title">Funciones de los personeros</h2>
              <p className="cedula-sufragio-desc">
                Los personeros cumplen un rol fundamental en el proceso electoral: supervisan el desarrollo de la votación, defienden los votos de su organización, observan el conteo y firman las actas. Su presencia garantiza la transparencia y legalidad de las elecciones.
              </p>
              <p className="cedula-sufragio-desc2">
                Mira el video que hemos preparado para ti sobre las funciones de los personeros:
              </p>
              <div className="cedula-sufragio-video">
                <iframe width="800" height="450" src="https://www.youtube.com/embed/e97mHCJSDTI" title="Funciones de los personeros" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>

            {/* Preguntas Frecuentes para Personeros */}
            <div className="faq-personeros-section">
              <h2 className="faq-personeros-title">Preguntas Frecuentes para Personeros</h2>
              <div className="faq-personeros-grid">
                <div className="faq-personeros-card">
                  <div className="faq-personeros-q"><b>¿Cómo me identifico como personero el día de la elección?</b></div>
                  <div className="faq-personeros-a">Debes portar tu credencial oficial de personero y tu DNI durante toda la jornada electoral. Preséntalos ante los miembros de mesa y autoridades cuando te lo soliciten.</div>
                </div>
                <div className="faq-personeros-card">
                  <div className="faq-personeros-q"><b>¿Puedo intervenir si detecto una irregularidad?</b></div>
                  <div className="faq-personeros-a">Sí, puedes presentar observaciones ante los miembros de mesa y dejar constancia en el acta. Hazlo siempre de manera respetuosa y siguiendo el procedimiento electoral.</div>
                </div>
                <div className="faq-personeros-card">
                  <div className="faq-personeros-q"><b>¿En qué momento puedo firmar las actas?</b></div>
                  <div className="faq-personeros-a">Al finalizar el escrutinio, los personeros tienen derecho a revisar y firmar las actas electorales antes de que sean entregadas a la ONPE.</div>
                </div>
                <div className="faq-personeros-card">
                  <div className="faq-personeros-q"><b>¿Qué no está permitido hacer como personero?</b></div>
                  <div className="faq-personeros-a">No puedes influir en el voto de los electores, manipular material electoral ni interrumpir el proceso. Tu función es observar, supervisar y defender los intereses de tu organización.</div>
                </div>
              </div>
            </div>
          </>
        )}
        {activeTab === 'derechos' && (
          <>
            {/* Bloque informativo institucional */}
            <div className="personero-info-box">
              <div className="personero-info-icon">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" rx="16" fill="#b30227"/>
                  <path d="M28 18a6 6 0 1 1 0 12a6 6 0 0 1 0-12zm0 16c-6.075 0-11 3.134-11 7v2a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-2c0-3.866-4.925-7-11-7z" fill="#fff"/>
                </svg>
              </div>
              <div className="personero-info-content">
                <h2 className="personero-info-title">¿Qué es un Personero Electoral?</h2>
                <p className="personero-info-desc">
                  Un personero es un ciudadano designado por una organización política para representarla durante el proceso electoral.<br/>
                  Actúa como observador y garante de la transparencia en las mesas de votación, asegurando que el proceso se lleve a cabo conforme a la ley electoral.
                </p>
              </div>
            </div>

            <div className="derechos-deberes-modern">
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center', margin: '32px 0'}}>
                {/* Fila 1: Imagen izquierda, tarjeta derecha */}
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 32, gridColumn: '1 / span 2'}}>
                  <img src="/Imagenes-Pagina/Derechos.png" alt="Ilustración capacitación" style={{maxWidth: 340, width: '100%'}} />
                  <div style={{background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px 0 #e3eaff', padding: '24px 32px', border: '2px solid #b30227', minWidth: 260, flex: 1}}>
                    <h2 style={{color: '#b30227', fontWeight: 900, fontSize: '1.3rem', marginBottom: 18}}>Derechos de los personeros</h2>
                    <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                      {derechos.map((d, idx) => (
                        <li key={idx} style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
                          <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', border: '2px solid #b30227', borderRadius: '50%', width: 36, height: 36}}>
                            <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" fill="#fff" stroke="#b30227" strokeWidth="2" /><path d="M10 17l4 4 8-8" stroke="#b30227" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                          <span style={{color: '#23272b', fontWeight: 500, fontSize: 16}}>{d.texto}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Fila 2: Tarjeta izquierda, imagen derecha */}
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 32, gridColumn: '1 / span 2', marginTop: 32}}>
                  <div style={{background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px 0 #ffe6ec', padding: '24px 32px', border: '2px solid #b30227', minWidth: 260, flex: 1}}>
                    <h2 style={{color: '#b30227', fontWeight: 900, fontSize: '1.3rem', marginBottom: 18}}>Deberes de los personeros</h2>
                    <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                      {deberes.map((d, idx) => (
                        <li key={idx} style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12}}>
                          <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', border: '2px solid #b30227', borderRadius: '50%', width: 36, height: 36}}>
                            <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect x="6" y="4" width="20" height="24" rx="4" fill="#fff" stroke="#b30227" strokeWidth="2" /><rect x="10" y="10" width="12" height="2.5" rx="1.2" fill="#b30227" /><rect x="10" y="16" width="12" height="2.5" rx="1.2" fill="#b30227" /><rect x="10" y="22" width="8" height="2.5" rx="1.2" fill="#b30227" /></svg>
                          </span>
                          <span style={{color: '#23272b', fontWeight: 500, fontSize: 16}}>{d.texto}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <img src="/Imagenes-Pagina/image2.png" alt="Ilustración deberes" style={{maxWidth: 340, width: '100%'}} />
                </div>
              </div>
              {/* Recursos Disponibles para Personeros */}
              <div className="recursos-disponibles-box" style={{marginTop: 40}}>
                <h2 className="recursos-disponibles-title">Recursos Disponibles</h2>
                <div className="recursos-disponibles-list">
                  <div className="recurso-disponible-item">
                    <div className="recurso-disponible-num">1</div>
                    <div className="recurso-disponible-body">
                        <div className="recurso-disponible-titulo">Rol del Personero</div>
                        <a
                          href="/documentos/Personero.pdf"
                          download
                          className="recurso-disponible-desc recurso-disponible-link"
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          Guía completa en PDF - Haz clic para descargar
                        </a>
                    </div>
                  </div>
                  <div className="recurso-disponible-item">
                    <div className="recurso-disponible-num">2</div>
                    <div className="recurso-disponible-body">
                        <div className="recurso-disponible-titulo">Cartilla del Personero</div>
                        <a
                          href="/documentos/cartilla-personero-ve.pdf"
                          download
                          className="recurso-disponible-desc recurso-disponible-link"
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          Guía completa en PDF - Haz clic para descargar
                        </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </>
        )}
        {activeTab === 'capacitacion' && (
          <div className="capacitacion-section">
            <h2>{t('personeros.capacitacion.titulo')}</h2>
            <p>{t('personeros.capacitacion.descripcion')}</p>
            <a href="https://www.onpe.gob.pe/capacitacion-personeros/" target="_blank" rel="noopener noreferrer" className="capacitacion-link">
              {t('personeros.capacitacion.enlace')}
            </a>

            {/* --- nueva estructura: dos columnas iguales --- */}
            <div className="recursos-videos-grid" style={{ marginTop: 24 }}>
              <div className="recursos-column">
                <h3 className="recursos-titulo">Recursos</h3>
                <div className="recursos-card">
                  {recursos.map((r, i) => (
                    <div key={r.id} className="recurso-item">
                      <div className="recurso-num">{i + 1}</div>
                      <div className="recurso-body">
                        <div className="recurso-titulo">{r.titulo}</div>
                        <div className="recurso-desc">{r.descripcion}</div>
                      </div>
                      <div className="recurso-action">
                        {r.url ? (
                          <a
                            href={r.url.startsWith('http') ? r.url : `${window.location.origin}${r.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="recurso-btn"
                          >
                            Descargar
                          </a>
                        ) : (
                          <button className="recurso-btn disabled" disabled>NO DISPONIBLE</button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="videos-column">
                <h3 className="recursos-titulo">Tutoriales</h3>
                <div className="videos-card">
                  {tutoriales.map(v => (
                    <div key={v.id} className="tutorial-item-compact">
                      <div className="tutorial-text">
                        <strong>{v.titulo}</strong>
                        <div className="tutorial-sub">Video tutorial</div>
                      </div>
                      <a href={v.url} target="_blank" rel="noopener noreferrer" className="tutorial-btn">Ver</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Personeros;