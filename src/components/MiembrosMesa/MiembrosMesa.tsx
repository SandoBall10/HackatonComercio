import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './MiembrosMesa.css';

interface ActividadMesa {
  hora: string;
  actividad: string;
  icono: string;
}

const MiembrosMesa: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'calendario' | 'instrucciones' | 'derechos' | 'capacitacion'>('calendario');

  const actividadesDia: ActividadMesa[] = [
    { hora: '6:00 AM', actividad: t('miembrosMesa.cronograma.actividades.llegada'), icono: '1' },
    { hora: '7:00 AM', actividad: t('miembrosMesa.cronograma.actividades.instalacion'), icono: '2' },
    { hora: '7:30 AM', actividad: t('miembrosMesa.cronograma.actividades.verificacion'), icono: '3' },
    { hora: '8:00 AM', actividad: t('miembrosMesa.cronograma.actividades.inicio'), icono: '4' },
    { hora: '8:00 AM - 4:00 PM', actividad: t('miembrosMesa.cronograma.actividades.desarrollo'), icono: '5' },
    { hora: '4:00 PM', actividad: t('miembrosMesa.cronograma.actividades.cierre'), icono: '6' },
    { hora: '5:00 PM - 7:00 PM', actividad: t('miembrosMesa.cronograma.actividades.actas'), icono: '7' }
  ];

  const instrucciones = [
    {
      titulo: t('miembrosMesa.instrucciones.instalacion.titulo'),
      pasos: [
        t('miembrosMesa.instrucciones.instalacion.paso1'),
        t('miembrosMesa.instrucciones.instalacion.paso2'),
        t('miembrosMesa.instrucciones.instalacion.paso3'),
        t('miembrosMesa.instrucciones.instalacion.paso4')
      ],
      icono: 'A'
    },
    {
      titulo: t('miembrosMesa.instrucciones.sufragio.titulo'),
      pasos: [
        t('miembrosMesa.instrucciones.sufragio.paso1'),
        t('miembrosMesa.instrucciones.sufragio.paso2'),
        t('miembrosMesa.instrucciones.sufragio.paso3'),
        t('miembrosMesa.instrucciones.sufragio.paso4'),
        t('miembrosMesa.instrucciones.sufragio.paso5')
      ],
      icono: 'B'
    },
    {
      titulo: t('miembrosMesa.instrucciones.conteo.titulo'),
      pasos: [
        t('miembrosMesa.instrucciones.conteo.paso1'),
        t('miembrosMesa.instrucciones.conteo.paso2'),
        t('miembrosMesa.instrucciones.conteo.paso3'),
        t('miembrosMesa.instrucciones.conteo.paso4'),
        t('miembrosMesa.instrucciones.conteo.paso5')
      ],
      icono: 'C'
    }
  ];

  const derechos = [
    { texto: t('miembrosMesa.derechos.derecho1'), icono: '✓' },
    { texto: t('miembrosMesa.derechos.derecho2'), icono: '✓' },
    { texto: t('miembrosMesa.derechos.derecho3'), icono: '✓' },
    { texto: t('miembrosMesa.derechos.derecho4'), icono: '✓' },
    { texto: t('miembrosMesa.derechos.derecho5'), icono: '✓' }
  ];

  const deberes = [
    { texto: t('miembrosMesa.deberes.deber1'), icono: '•' },
    { texto: t('miembrosMesa.deberes.deber2'), icono: '•' },
    { texto: t('miembrosMesa.deberes.deber3'), icono: '•' },
    { texto: t('miembrosMesa.deberes.deber4'), icono: '•' },
    { texto: t('miembrosMesa.deberes.deber5'), icono: '•' }
  ];

  return (
    <div className="miembros-mesa-container">
      {/* Hero Section */}
      <section className="hero-miembros">
        <div className="hero-content">
          <h1 className="hero-title">
            {t('miembrosMesa.titulo')}
          </h1>
          <p className="hero-subtitle">
            {t('miembrosMesa.subtitulo')}
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <div className="tabs-navigation">
        <button 
          className={`tab-btn ${activeTab === 'calendario' ? 'active' : ''}`}
          onClick={() => setActiveTab('calendario')}
        >
          {t('miembrosMesa.tabs.cronograma')}
        </button>
        <button 
          className={`tab-btn ${activeTab === 'instrucciones' ? 'active' : ''}`}
          onClick={() => setActiveTab('instrucciones')}
        >
          {t('miembrosMesa.tabs.instrucciones')}
        </button>
        <button 
          className={`tab-btn ${activeTab === 'derechos' ? 'active' : ''}`}
          onClick={() => setActiveTab('derechos')}
        >
          {t('miembrosMesa.tabs.derechos')}
        </button>
        <button 
          className={`tab-btn ${activeTab === 'capacitacion' ? 'active' : ''}`}
          onClick={() => setActiveTab('capacitacion')}
        >
          {t('miembrosMesa.tabs.capacitacion')}
        </button>
      </div>

      {/* Contenido según tab activo */}
      <div className="tab-content">
        {activeTab === 'calendario' && (
          <div className="calendario-section">
            <h2 className="section-title">{t('miembrosMesa.cronograma.titulo')}</h2>
            <p className="section-description">
              {t('miembrosMesa.cronograma.descripcion')}
            </p>
            
            <div className="cronograma-container">
              {/* Cronograma en layout serpiente */}
              <div className="cronograma-serpiente">
                <div className="actividades-serpiente">
                  {actividadesDia.map((actividad, index) => (
                    <div key={index} className="actividad-card">
                      <div className="actividad-icono">{actividad.icono}</div>
                      <div className="actividad-hora">{actividad.hora}</div>
                      <div className="actividad-descripcion">{actividad.actividad}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Imagen al lado */}
              <div className="cronograma-imagen">
                <img src="/Imagenes-Pagina/Imagen-MiembrosMesa.png" alt="Cronograma" />
              </div>
            </div>

            <div className="importante-box">
              <h3>{t('miembrosMesa.cronograma.importante')}</h3>
              <p>{t('miembrosMesa.cronograma.mensajeImportante')}</p>
            </div>
          </div>
        )}

        {activeTab === 'instrucciones' && (
          <div className="instrucciones-section">
            <h2 className="section-title">{t('miembrosMesa.instrucciones.titulo')}</h2>
            <p className="section-description">
              {t('miembrosMesa.instrucciones.descripcion')}
            </p>

            <div className="instrucciones-grid">
              {instrucciones.map((seccion, index) => (
                <div key={index} className="instruccion-card">
                  <div className="instruccion-header">
                    <span className="instruccion-icono">{seccion.icono}</span>
                    <h3>{seccion.titulo}</h3>
                  </div>
                  <ol className="instruccion-lista">
                    {seccion.pasos.map((paso, pIndex) => (
                      <li key={pIndex}>{paso}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>

            <div className="tips-box">
              <h3>{t('miembrosMesa.instrucciones.consejos.titulo')}</h3>
              <ul>
                <li>{t('miembrosMesa.instrucciones.consejos.consejo1')}</li>
                <li>{t('miembrosMesa.instrucciones.consejos.consejo2')}</li>
                <li>{t('miembrosMesa.instrucciones.consejos.consejo3')}</li>
                <li>{t('miembrosMesa.instrucciones.consejos.consejo4')}</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'derechos' && (
          <div className="derechos-section">
            <div className="derechos-grid">
              <div className="derechos-column">
                <h2 className="section-title">{t('miembrosMesa.derechos.titulo')}</h2>
                <p className="section-description">{t('miembrosMesa.derechos.descripcion')}</p>
                <div className="lista-items">
                  {derechos.map((derecho, index) => (
                    <div key={index} className="item-card">
                      <span className="item-icono">{derecho.icono}</span>
                      <p>{derecho.texto}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="derechos-column">
                <h2 className="section-title">{t('miembrosMesa.deberes.titulo')}</h2>
                <p className="section-description">{t('miembrosMesa.deberes.descripcion')}</p>
                <div className="lista-items">
                  {deberes.map((deber, index) => (
                    <div key={index} className="item-card">
                      <span className="item-icono">{deber.icono}</span>
                      <p>{deber.texto}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="compensacion-box">
              <h3>{t('miembrosMesa.compensacion.titulo')}</h3>
              <p>{t('miembrosMesa.compensacion.mensaje')} <strong>{t('miembrosMesa.compensacion.monto')}</strong> {t('miembrosMesa.compensacion.detalle')}</p>
            </div>
          </div>
        )}

        {activeTab === 'capacitacion' && (
          <div className="capacitacion-section">
            <h2 className="section-title">{t('miembrosMesa.capacitacion.titulo')}</h2>
            <p className="section-description">
              {t('miembrosMesa.capacitacion.descripcion')}
            </p>

            <div className="capacitacion-grid">
              <div className="capacitacion-card">
                <div className="capacitacion-icono">1</div>
                <h3>{t('miembrosMesa.capacitacion.presencial.titulo')}</h3>
                <p>{t('miembrosMesa.capacitacion.presencial.descripcion')}</p>
                <ul>
                  <li>{t('miembrosMesa.capacitacion.presencial.item1')}</li>
                  <li>{t('miembrosMesa.capacitacion.presencial.item2')}</li>
                  <li>{t('miembrosMesa.capacitacion.presencial.item3')}</li>
                </ul>
              </div>

              <div className="capacitacion-card">
                <div className="capacitacion-icono">2</div>
                <h3>{t('miembrosMesa.capacitacion.virtual.titulo')}</h3>
                <p>{t('miembrosMesa.capacitacion.virtual.descripcion')}</p>
                <ul>
                  <li>{t('miembrosMesa.capacitacion.virtual.item1')}</li>
                  <li>{t('miembrosMesa.capacitacion.virtual.item2')}</li>
                  <li>{t('miembrosMesa.capacitacion.virtual.item3')}</li>
                  <li>{t('miembrosMesa.capacitacion.virtual.item4')}</li>
                </ul>
              </div>

              <div className="capacitacion-card">
                <div className="capacitacion-icono">3</div>
                <h3>{t('miembrosMesa.capacitacion.app.titulo')}</h3>
                <p>{t('miembrosMesa.capacitacion.app.descripcion')}</p>
                <ul>
                  <li>{t('miembrosMesa.capacitacion.app.item1')}</li>
                  <li>{t('miembrosMesa.capacitacion.app.item2')}</li>
                  <li>{t('miembrosMesa.capacitacion.app.item3')}</li>
                  <li>{t('miembrosMesa.capacitacion.app.item4')}</li>
                </ul>
              </div>
            </div>

            <div className="recursos-box">
              <h3>{t('miembrosMesa.capacitacion.recursos.titulo')}</h3>
              <div className="recursos-lista">
                <a href="/documentos/manual-miembro-mesa.pdf" download="Manual-Miembro-Mesa.pdf" target="_blank" rel="noopener noreferrer" className="recurso-link">
                  <span className="recurso-numero">1</span>
                  <div>
                    <strong>{t('miembrosMesa.capacitacion.recursos.manual')}</strong>
                    <small>{t('miembrosMesa.capacitacion.recursos.manualDesc')}</small>
                  </div>
                </a>
                <a href="https://www.youtube.com/watch?v=DW5-XnnNSjo" className="recurso-link" target="_blank" rel="noopener noreferrer">
                <span className="recurso-numero">2</span>
                <div>
                    <strong>{t('miembrosMesa.capacitacion.recursos.videos')}</strong>
                    <small>{t('miembrosMesa.capacitacion.recursos.videosDesc')}</small>
                </div>
                </a>
                <a href="/documentos/preguntas-miembros-mesa.pdf" download="Preguntas-Frecuentes-Miembros-Mesa.pdf" target="_blank" rel="noopener noreferrer" className="recurso-link">
                  <span className="recurso-numero">3</span>
                  <div>
                    <strong>{t('miembrosMesa.capacitacion.recursos.preguntas')}</strong>
                    <small>{t('miembrosMesa.capacitacion.recursos.preguntasDesc')}</small>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>{t('miembrosMesa.cta.titulo')}</h2>
        <p>{t('miembrosMesa.cta.descripcion')}</p>
        <button className="cta-button" onClick={() => navigate('/reniec')}>
          {t('miembrosMesa.cta.boton')}
        </button>
      </section>
    </div>
  );
};

export default MiembrosMesa;