import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PARTIDOS, Partido, DetalleCandidato } from "../../data/partidos";
import { candidatos } from "../../data/candidatos";

const pestañas = [
  "Plancha Presidencial",
  "Cámara de Diputados",
  "Cámara de Senadores",
  "Parlamento Andino",
];

// Datos de ejemplo para Diputados y Senadores
const diputadosEjemplo = [
  { id: "d1", nombre: "Ana María González", circunscripcion: "Lima", foto: "" },
  { id: "d2", nombre: "Roberto Silva", circunscripcion: "Arequipa", foto: "" },
  { id: "d3", nombre: "Carmen Rojas", circunscripcion: "Cusco", foto: "" },
  { id: "d4", nombre: "Luis Fernández", circunscripcion: "La Libertad", foto: "" },
];

const senadoresEjemplo = [
  { id: "s1", nombre: "Diego Martínez", ambito: "Nacional", foto: "" },
  { id: "s2", nombre: "Isabel Castro", ambito: "Regional - Norte", foto: "" },
  { id: "s3", nombre: "Pedro Vásquez", ambito: "Regional - Sur", foto: "" },
  { id: "s4", nombre: "Rosa Quispe", ambito: "Nacional", foto: "" },
];

const PartidoDetalle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const partido: Partido | undefined = PARTIDOS.find((p) => String(p.id) === String(id));
  const [activeTab, setActiveTab] = useState(0);

  if (!partido) return <div className="container py-5">Partido no encontrado</div>;

  // Buscar candidatos del partido desde candidatos.js
  const candidatosReales = candidatos.filter(c => {
    const partidoNormalizado = c.partido.toLowerCase().replace(/[^a-z0-9]/g, '');
    const nombrePartidoNormalizado = partido.nombre.toLowerCase().replace(/[^a-z0-9]/g, '');
    return partidoNormalizado.includes(nombrePartidoNormalizado.substring(0, 10)) ||
           nombrePartidoNormalizado.includes(partidoNormalizado.substring(0, 10));
  });

  // Crear plancha presidencial completa (Presidente + 2 Vicepresidentes)
  const planchaPresidencial: DetalleCandidato[] = [
    candidatosReales.length > 0 && candidatosReales[0]
      ? {
          id: candidatosReales[0].id,
          nombre: candidatosReales[0].nombre,
          cargo: "Presidente",
          foto: candidatosReales[0].foto
        }
      : partido.candidatos && partido.candidatos.length > 0 && partido.candidatos[0]
      ? partido.candidatos[0]
      : {
          id: "presidente",
          nombre: "Por confirmar",
          cargo: "Presidente",
          foto: ""
        },
    partido.candidatos && partido.candidatos.length > 1 && partido.candidatos[1]
      ? partido.candidatos[1]
      : {
          id: "vice1",
          nombre: "Por confirmar",
          cargo: "1er Vicepresidente",
          foto: ""
        },
    partido.candidatos && partido.candidatos.length > 2 && partido.candidatos[2]
      ? partido.candidatos[2]
      : {
          id: "vice2",
          nombre: "Por confirmar",
          cargo: "2do Vicepresidente",
          foto: ""
        }
  ];

  return (
    <div className="min-vh-100 bg-light">
      <div className="container py-4">
        <header className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center gap-3">
            <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white" style={{ width: 44, height: 44 }}>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor"/></svg>
            </div>
            <h2 className="h5 mb-0">Elecciones Perú 2026</h2>
          </div>
        </header>

        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <div className="d-flex align-items-center gap-4 mb-4">
              <div
                className="rounded bg-white shadow-sm"
                style={{
                  width: 96,
                  height: 96,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url('${partido.logo || `/logos/${partido.id}.svg`}')`,
                }}
                aria-hidden
              />
              <div className="flex-grow-1">
                <h3 className="h5 mb-1">{partido.nombre}</h3>
                <div className="text-muted">Símbolo: {partido.siglas || "-"}</div>
              </div>
            </div>
            <button 
              className="btn btn-danger w-100"
              onClick={() => navigate(`/candidatos/${partido.siglas?.toLowerCase() || partido.id}`)}
              style={{
                background: 'linear-gradient(135deg, #c31432 0%, #a01028 100%)',
                border: 'none',
                fontWeight: '600',
                padding: '0.85rem',
                borderRadius: '8px',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(195, 20, 50, 0.25)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(195, 20, 50, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(195, 20, 50, 0.25)';
              }}
            >
              Ver Candidato
            </button>
          </div>
        </div>

        <ul className="nav nav-tabs mb-3">
          {pestañas.map((t, i) => (
            <li className="nav-item" key={t}>
              <button
                className={`nav-link ${activeTab === i ? "active" : ""}`}
                onClick={() => setActiveTab(i)}
                type="button"
                style={{
                  color: activeTab === i ? "#000" : "#666",
                  fontWeight: activeTab === i ? "600" : "normal"
                }}
              >
                {t}
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content">
          {/* Plancha Presidencial */}
          {activeTab === 0 && (
            <div className="tab-pane active">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row g-4">
                    {planchaPresidencial.map((candidato) => (
                      <div className="col-12 col-md-6 col-lg-4" key={candidato.id}>
                        <div className="card h-100 shadow-sm">
                          <img 
                            src={candidato.foto || partido.logo || `/logos/${partido.id}.svg`}
                            alt={candidato.nombre}
                            className="card-img-top"
                            style={{ 
                              width: '100%', 
                              height: '350px', 
                              objectFit: 'cover',
                              opacity: candidato.nombre === "Por confirmar" ? 0.3 : 1
                            }}
                            onError={(e) => {
                              if (candidato.nombre === "Por confirmar") {
                                e.currentTarget.src = partido.logo || `/logos/${partido.id}.svg`;
                              } else {
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(candidato.nombre)}&size=350&background=dc3545&color=fff&bold=true`;
                              }
                            }}
                          />
                          <div className="card-body text-center py-4">
                            <h5 className="card-title mb-2 fw-bold" style={{
                              color: candidato.nombre === "Por confirmar" ? "#999" : "#000"
                            }}>
                              {candidato.nombre}
                            </h5>
                            <p className="mb-0" style={{
                              color: candidato.nombre === "Por confirmar" ? "#999" : "#6c757d"
                            }}>
                              <i className="bi bi-person-badge me-2"></i>
                              <strong>{candidato.cargo}</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Cámara de Diputados */}
          {activeTab === 1 && (
            <div className="tab-pane active">
              <div className="card mb-4 border-0 shadow-sm">
                <div className="card-header bg-danger text-white py-3">
                  <h4 className="mb-0">
                    <i className="bi bi-file-text me-2"></i>
                    Cámara de Diputados
                  </h4>
                  <p className="mb-0 small mt-1">Candidatos por circunscripción electoral</p>
                </div>
                <div className="card-body p-4">
                  <div className="list-group list-group-flush">
                    {diputadosEjemplo.map((diputado, index) => (
                      <div 
                        key={diputado.id}
                        className="list-group-item border-0 border-bottom py-4 hover-shadow"
                        style={{ 
                          transition: 'all 0.3s',
                          cursor: 'pointer',
                          backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#fff'
                        }}
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div 
                            className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center"
                            style={{ 
                              width: 60, 
                              height: 60,
                              fontSize: '1.5rem',
                              fontWeight: 'bold'
                            }}
                          >
                            {diputado.nombre.charAt(0)}
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="mb-1 fw-bold">{diputado.nombre}</h5>
                            <p className="mb-0 text-muted">{partido.nombre}</p>
                          </div>
                          <div className="text-end">
                            <span className="badge bg-primary px-3 py-2" style={{ fontSize: '0.9rem' }}>
                              {diputado.circunscripcion}
                            </span>
                          </div>
                          <i className="bi bi-chevron-right text-muted" style={{ fontSize: '1.5rem' }}></i>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Cámara de Senadores */}
          {activeTab === 2 && (
            <div className="tab-pane active">
              <div className="card mb-4 border-0 shadow-sm">
                <div className="card-header bg-success text-white py-3">
                  <h4 className="mb-0">
                    <i className="bi bi-globe me-2"></i>
                    Cámara de Senadores
                  </h4>
                  <p className="mb-0 small mt-1">Representantes nacionales y regionales</p>
                </div>
                <div className="card-body p-4">
                  <div className="list-group list-group-flush">
                    {senadoresEjemplo.map((senador, index) => (
                      <div 
                        key={senador.id}
                        className="list-group-item border-0 border-bottom py-4 hover-shadow"
                        style={{ 
                          transition: 'all 0.3s',
                          cursor: 'pointer',
                          backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#fff'
                        }}
                      >
                        <div className="d-flex align-items-center gap-3">
                          <div 
                            className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center"
                            style={{ 
                              width: 60, 
                              height: 60,
                              fontSize: '1.5rem',
                              fontWeight: 'bold'
                            }}
                          >
                            {senador.nombre.charAt(0)}
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="mb-1 fw-bold">{senador.nombre}</h5>
                            <p className="mb-0 text-muted">{partido.nombre}</p>
                          </div>
                          <div className="text-end">
                            <span 
                              className="badge px-3 py-2" 
                              style={{ 
                                fontSize: '0.9rem',
                                backgroundColor: senador.ambito.includes('Nacional') ? '#ffc107' : '#17a2b8',
                                color: '#000'
                              }}
                            >
                              {senador.ambito}
                            </span>
                          </div>
                          <i className="bi bi-chevron-right text-muted" style={{ fontSize: '1.5rem' }}></i>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Parlamento Andino */}
          {activeTab === 3 && (
            <div className="card mb-4">
              <div className="card-body">
                <p className="mb-0">Sección "{pestañas[activeTab]}". Añade contenido en src/data/partidos.ts si lo deseas.</p>
              </div>
            </div>
          )}
        </div>

        <footer className="text-center text-muted py-3">
          <small>Datos obtenidos del Jurado Nacional de Elecciones - JNE. © 2024 Elecciones Perú 2026.</small>
        </footer>
      </div>
    </div>
  );
};

export default PartidoDetalle;