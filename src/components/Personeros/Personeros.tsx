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

  return (
    <div className="personeros-container">
      <section className="hero-personeros">
        <div className="hero-content">
          <h1 className="hero-title">{t('personeros.titulo')}</h1>
          <p className="hero-subtitle">{t('personeros.subtitulo')}</p>
        </div>
      </section>

      <div className="tabs-navigation">
        <button className={`tab-btn ${activeTab === 'cronograma' ? 'active' : ''}`} onClick={() => setActiveTab('cronograma')}>
          {t('personeros.tabs.cronograma')}
        </button>
        <button className={`tab-btn ${activeTab === 'instrucciones' ? 'active' : ''}`} onClick={() => setActiveTab('instrucciones')}>
          {t('personeros.tabs.instrucciones')}
        </button>
        <button className={`tab-btn ${activeTab === 'derechos' ? 'active' : ''}`} onClick={() => setActiveTab('derechos')}>
          {t('personeros.tabs.derechos')}
        </button>
        <button className={`tab-btn ${activeTab === 'capacitacion' ? 'active' : ''}`} onClick={() => setActiveTab('capacitacion')}>
          {t('personeros.tabs.capacitacion')}
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'cronograma' && (
          <div className="cronograma-section">
            <h2>{t('personeros.cronograma.titulo')}</h2>
            <ul className="cronograma-list">
              {actividades.map((act, idx) => {
                const iconos = ['🕖', '🗳️', '👀', '🔒', '📊', '✍️'];
                return (
                  <li key={idx} className="cronograma-item">
                    <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>{iconos[idx] || act.icono}</div>
                    <span className="cronograma-hora">{act.hora}</span>
                    <span className="cronograma-actividad">{act.actividad}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {activeTab === 'instrucciones' && (
          <div className="instrucciones-section">
            <h2>{t('personeros.instrucciones.titulo')}</h2>
            <div className="instrucciones-grid">
              {instrucciones.map((inst, idx) => (
                <div key={idx} className="instruccion-card">
                  <div className="instruccion-header">
                    <span className="instruccion-icono">{inst.icono}</span>
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
        )}
        {activeTab === 'derechos' && (
          <div className="derechos-deberes-grid">
            <div className="derechos-section">
              <h2>{t('personeros.derechos.titulo')}</h2>
              <ul className="derechos-list">
                {derechos.map((d, idx) => (
                  <li key={idx} style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <div style={{fontSize: '2rem', minWidth: '50px', textAlign: 'center'}}>✓</div>
                    <span>{d.texto}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="deberes-section">
              <h2>{t('personeros.deberes.titulo')}</h2>
              <ul className="deberes-list">
                {deberes.map((d, idx) => (
                  <li key={idx} style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <div style={{fontSize: '2rem', minWidth: '50px', textAlign: 'center'}}>📋</div>
                    <span>{d.texto}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {activeTab === 'capacitacion' && (
          <div className="capacitacion-section">
            <h2>{t('personeros.capacitacion.titulo')}</h2>
            <p>{t('personeros.capacitacion.descripcion')}</p>
            <a href="https://www.onpe.gob.pe/capacitacion-personeros/" target="_blank" rel="noopener noreferrer" className="capacitacion-link">
              {t('personeros.capacitacion.enlace')}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Personeros;
