import React from 'react';
import './Candidatos.css';
import { Candidato } from '../../data/candidatos';

interface CandidatosProps {
  candidato: Candidato;
}

const Candidatos: React.FC<CandidatosProps> = ({ candidato }) => {
  return (
    <div className="candidatos-container">
      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          <div className="layout-content">
            {/* ProfileHeader */}
            <div className="profile-header">
              <div className="profile-info">
                <div className="profile-main">
                  <div 
                    className="profile-avatar" 
                    style={{backgroundImage: `url("${candidato.foto}")`}}
                  ></div>
                  <div className="profile-details">
                    <p className="profile-name">{candidato.nombre}</p>
                    <p className="profile-role">{candidato.cargo} por {candidato.partido}</p>
                    <div className="profile-party">
                      <img 
                        className="party-logo" 
                        src={candidato.logoPartido} 
                        alt="Logo del partido"
                      />
                      <p>{candidato.partido}</p>
                    </div>
                  </div>
                </div>
                <button className="btn-download">
                  <span className="material-symbols-outlined">download</span>
                  <span>Plan de Gobierno</span>
                </button>
              </div>

              {/* ActionsBar */}
              <div className="actions-bar">
                <div className="social-links">
                  {candidato.redesSociales.facebook && (
                    <a href={candidato.redesSociales.facebook} className="social-link" target="_blank" rel="noopener noreferrer">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYF6rbDZYIvz3WzHbIdf6XR231pjPUNk9iwImFt8SdHVDaDg7z1mk3Gn7KBHKJgSFSqGizozbAilhJoDzFwy9rqqdS-SBQ0LhOdS_75kF8-UAzKyhL301km9a9jyTJVHoLLDf5NSBp5lSK4FgBOKO6X5G8GTpP_Z2XUhSb3IZVmfe0FYu-HFqLWKMO7dlor475na58bA-H_NTWjmxxIYlR37XlbVJUBbDDdCCsik2WlROpVYFSP-fOsR3g2f5vemq6-NLNKBfVmQ" alt="Facebook" />
                      <p>Facebook</p>
                    </a>
                  )}
                  {candidato.redesSociales.twitter && (
                    <a href={candidato.redesSociales.twitter} className="social-link" target="_blank" rel="noopener noreferrer">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDezstiy-TpW-Az77ng_Z0XGaWLbdpV903WRGSTwPeMCGJPhXvxBiRVMrxnL4v1ZAMwrsoU792uK_gQ6_gJIndxlfnI55DejjIHX6vGi_O0gnNXoROUhTXHeWm7j_tQG5mtIQUbj8lvH_T0jQ-UDUi91eGmXoY9_8oz7Q3g0nw4BKX066kecy134XksNFmkSbIyZpjf684lviejZRPpzjL2pZA3by-0EKSN2n48UEDAIJEenltrv5JGFeeX6fWnhmHSBep39atltw" alt="X" />
                      <p>Twitter</p>
                    </a>
                  )}
                  {candidato.redesSociales.instagram && (
                    <a href={candidato.redesSociales.instagram} className="social-link" target="_blank" rel="noopener noreferrer">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVkzDUPyf9JIeBU5_BAhb-PF6yyoufIUHKkIpx810MWCvZKu45HUbqL6ehiN1DgLrIUXgazAfWedq6R8zHqVB1ObWnlqze08NhAEAKJbmyAU-cEZyZWTF3Ur_Y2X7XEmL3R1TiWg_whWXq-qKV9iigFi6GsU9Bb51-bZ1hQpoTtYE1cTCdczjOQQ62mAjbvPqzkJ7GM2OPKv3TBSbGlf9Fa8HTmU-aAHj7eRfLeKf_5PXcLVo66OQgL9bCL6Rfm0nNZiwggTsyOg" alt="Instagram" />
                      <p>Instagram</p>
                    </a>
                  )}
                  {candidato.redesSociales.tiktok && (
                    <a href={candidato.redesSociales.tiktok} className="social-link" target="_blank" rel="noopener noreferrer">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHKIyg9yHp8BFzpvulkoX7LChEGIYyL2TOWKiqSUZiwUimBy-3C2om6djPsC6XG9grFFFm8CXwE6968vEsjFxqr093PTbc8XDb4ymC8JYHipfjNcJm0ccjZiyBqpFjIY6dQfrlyhbKtpQhgwL82bPHhtUeNPJ0njCUhP6Oqnp7MoqCTwemYg57Azpyr-4elc07IhHrvsNna-KCG14Pi71ip5_AeWSI-zcmlqAL14W6wYu60hPfCb5P6xxlDaI4SOrAuFDXUvf5lw" alt="TikTok" />
                      <p>TikTok</p>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="tabs-navigation">
              <div className="tabs-container">
                <a href="#" className="tab active">
                  <p>Hoja de Vida</p>
                </a>
                <a href="#" className="tab">
                  <p>Propuestas</p>
                </a>
                <a href="#" className="tab">
                  <p>Noticias</p>
                </a>
                <a href="#" className="tab">
                  <p>Actividades</p>
                </a>
              </div>
            </div>

            {/* Page Content (Two Columns) */}
            <div className="page-content">
              {/* Main Column (Left) */}
              <div className="main-column">
                {/* PageHeading */}
                <div className="page-heading">
                  <div className="heading-content">
                    <p className="heading-title">Hoja de Vida</p>
                    <p className="heading-subtitle"></p>
                  </div>
                </div>

                {/* Info Cards Section */}
                <div className="info-cards">
                  <div className="info-card">
                    <h3>Formación Académica</h3>
                    <ul>
                      {candidato.hojaDeVida.formacionAcademica.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="info-card">
                    <h3>Experiencia Laboral</h3>
                    <ul>
                      {candidato.hojaDeVida.experienciaLaboral.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="info-card">
                    <h3>Declaraciones Juradas</h3>
                    <p>{candidato.hojaDeVida.declaracionesJuradas}</p>
                  </div>
                  <div className="info-card alert">
                    <h3>Sentencias Judiciales</h3>
                    <p>{candidato.hojaDeVida.sentenciasJudiciales}</p>
                  </div>
                </div>

                {/* Timeline Section */}
                <div className="timeline-section">
                  <h2>Trayectoria Política y Profesional</h2>
                  <div className="timeline">
                    {candidato.trayectoria.map((item, index) => (
                      <div className="timeline-item" key={index}>
                        <div className="timeline-dot"></div>
                        <p className="timeline-date">{item.fecha}</p>
                        <p className="timeline-description">{item.descripcion}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Secondary Column (Right) */}
              <div className="secondary-column">
                {/* News Section */}
                <div className="news-section">
                  <h2>Últimas Noticias</h2>
                  <div className="news-list">
                    {candidato.noticias.map((noticia, index) => (
                      <div className="news-card" key={index}>
                        <img 
                          src={noticia.imagen} 
                          alt="Noticia"
                        />
                        <div className="news-content">
                          <p className="news-title">{noticia.titulo}</p>
                          <p className="news-meta">{noticia.fuente} - {noticia.fecha}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activities Section */}
                <div className="activities-section">
                  <h2>Actividades Públicas</h2>
                  <div className="activities-list">
                    {candidato.actividades.map((actividad, index) => (
                      <div className="activity-card" key={index}>
                        <div className="activity-date">
                          <span className="date-day">{actividad.dia}</span>
                          <span className="date-month">{actividad.mes}</span>
                        </div>
                        <div className="activity-details">
                          <p className="activity-title">{actividad.titulo}</p>
                          <p className="activity-info">Lugar: {actividad.lugar}</p>
                          <p className="activity-info">Hora: {actividad.hora}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="candidatos-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="logo-icon">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <h2>Elecciones Perú 2026</h2>
            </div>
            <div className="footer-links">
              <a href="#">Sobre Nosotros</a>
              <a href="#">Contacto</a>
              <a href="#">Términos de Servicio</a>
              <a href="#">Política de Privacidad</a>
            </div>
            <p className="footer-copyright">
              © 2024 Portal Electoral. Todos los derechos reservados.<br/>
              Fuente de datos: JNE, ONPE.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Candidatos;
