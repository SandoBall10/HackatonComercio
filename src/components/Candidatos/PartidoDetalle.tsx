import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PARTIDOS, Partido, DetalleCandidato } from "../../data/partidos";


const pestañas = [
  "Plancha Presidencial",
  "Plan de Gobierno",
  "Cámara de Diputados",
  "Cámara de Senadores",
  "Parlamento Andino",
];

const PartidoDetalle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const partido: Partido | undefined = PARTIDOS.find((p) => String(p.id) === String(id));
  const [activeTab, setActiveTab] = useState(0);

  if (!partido) return <div className="container py-5">Partido no encontrado</div>;

  const candidatos: DetalleCandidato[] =
    partido.candidatos && partido.candidatos.length > 0
      ? partido.candidatos.slice(0, 3)
      : [
          { id: "p1", nombre: "Candidato 1", cargo: "Presidente", foto: "" },
          { id: "p2", nombre: "Candidato 2", cargo: "Vicepresidente", foto: "" },
          { id: "p3", nombre: "Candidato 3", cargo: "Candidato", foto: "" },
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
          <div className="card-body d-flex align-items-center gap-4">
            <div
              className="rounded bg-white shadow-sm"
              style={{
                width: 96,
                height: 96,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: url('${partido.logo || `/logos/${partido.id}.svg}')`,
              }}
              aria-hidden
            />
            <div>
              <h3 className="h5 mb-1">{partido.nombre}</h3>
              <div className="text-muted">Símbolo: {partido.siglas || "-"}</div>
            </div>
          </div>
        </div>

        <ul className="nav nav-tabs mb-3">
          {pestañas.map((t, i) => (
            <li className="nav-item" key={t}>
              <button
                className={nav-link ${activeTab === i ? "active" : ""}}
                onClick={() => setActiveTab(i)}
                type="button"
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
                  <div className="row g-3">
                    {candidatos.map((c) => (
                      <div className="col-12 col-sm-6 col-md-4" key={c.id}>
                        <div className="card h-100">
                          <img 
                            src={c.foto || partido.logo || /logos/${partido.id}.svg}
                            alt={c.nombre}
                            className="card-img-top"
                            style={{ 
                              width: '100%', 
                              height: '300px', 
                              objectFit: 'cover' 
                            }}
                          />
                          <div className="card-body">
                            <h6 className="card-title mb-1">{c.nombre}</h6>
                            <p className="text-muted mb-0">{c.cargo || "-"}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="tab-pane active">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
                    <p className="mb-0 text-muted">{partido.descripcion || "Descripción del plan de gobierno no disponible."}</p>
                    <a
                      className={btn btn-danger ${partido.planUrl ? "" : "disabled"}}
                      href={partido.planUrl || "#"}
                      target={partido.planUrl ? "_blank" : undefined}
                      rel={partido.planUrl ? "noopener noreferrer" : undefined}
                    >
                      Descargar Plan Completo (PDF)
                    </a>
                  </div>

                  <div className="accordion mt-4" id="planAccordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#acc1">Reactivación Económica</button>
                      </h2>
                      <div id="acc1" className="accordion-collapse collapse" data-bs-parent="#planAccordion">
                        <div className="accordion-body">Fomentaremos la inversión privada con incentivos fiscales, apoyo a PYMEs y modernización de infraestructura.</div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#acc2">Lucha contra la Corrupción</button>
                      </h2>
                      <div id="acc2" className="accordion-collapse collapse" data-bs-parent="#planAccordion">
                        <div className="accordion-body">Sistema de transparencia, fiscalización ciudadana y fortalecimiento institucional.</div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#acc3">Educación y Salud</button>
                      </h2>
                      <div id="acc3" className="accordion-collapse collapse" data-bs-parent="#planAccordion">
                        <div className="accordion-body">Mayor inversión en educación, capacitación docente y acceso universal a servicios de salud.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


          {activeTab > 1 && (
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