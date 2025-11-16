import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getDniData } from '../api/sunat';
import { getSimulatedVotingData } from '../../simulation/dni_mesa';
import {
  pasosVotante,
  pasosMiembroMesa,
  recomendaciones,
  marcoLegal,
} from './constants';
import {
  IconClock,
  IconDoc,
  IconMoney,
  IconShield,
  IconLaw,
  IconUser,
  IconCalendar,
  IconMapPin,
  IconVoteBox,
} from './Icons';
import './ReniecConsultas.css';

const FOTO_URL = 'https://randomuser.me/api/portraits/men/75.jpg';

const ReniecConsultas: React.FC = () => {
  const { t } = useTranslation();
  const [dni, setDni] = useState('');
  const [resultado, setResultado] = useState<any>(null);
  const [simulado, setSimulado] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleConsulta = async (e: React.FormEvent) => {
    e.preventDefault();
    if (dni.length !== 8) {
      setError('El DNI debe tener 8 dígitos');
      return;
    }

    setLoading(true);
    setError('');
    setResultado(null);
    setSimulado(null);

    try {
      const data = await getDniData(dni);
      setResultado({
        dni: data.document_number,
        nombres: data.first_name,
        apellidoPaterno: data.first_last_name,
        apellidoMaterno: data.second_last_name,
      });
      setSimulado(getSimulatedVotingData(dni));
    } catch {
      setError('No se pudo obtener la información. Verifica el DNI o intenta más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reniec-main-container reniec-theme-red">
      {/* Layout con formulario e información importante */}
      <div className="reniec-top-layout">
        {/* Formulario de Consulta - Izquierda */}
        <div className="reniec-consulta-box-left">
          <div className="reniec-header-box">
            <div className="reniec-title-with-icons">
              <svg className="title-icon-left" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <h2 className="reniec-consulta-title-main">Consulta de Datos Personales y Local de Votación</h2>
              <svg className="title-icon-right" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <p className="reniec-consulta-subtitle">
              <svg className="subtitle-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Consulta tu información del RENIEC y tus datos de votación
            </p>
          </div>
          <form onSubmit={handleConsulta} className="reniec-form-modern">
            <div className="reniec-form-group">
              <label className="reniec-label">Número de DNI</label>
              <input
                type="text"
                placeholder="Ingresa tu DNI de 8 dígitos"
                value={dni}
                onChange={(e) => setDni(e.target.value.replace(/\D/g, '').slice(0, 8))}
                maxLength={8}
                className="reniec-input-modern"
              />
            </div>
            <button
              type="submit"
              disabled={dni.length !== 8 || loading}
              className="reniec-btn-modern"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              {loading ? 'Consultando...' : 'Buscar Local de Votación'}
            </button>
            {error && <p className="reniec-error-modern">{error}</p>}
          </form>
        </div>

        {/* Información Importante - Derecha */}
        <div className="reniec-info-box-right">
          <h3 className="reniec-info-title">Información Importante</h3>
          
          <div className="reniec-info-item-box reniec-horario">
            <div className="reniec-info-header">
              <IconClock />
              <span>Horario de Votación</span>
            </div>
            <div className="reniec-info-content">
              <strong>8:00 AM - 4:00 PM</strong>
              <p>Se recomienda llegar temprano</p>
            </div>
          </div>

          <div className="reniec-info-item-box">
            <h4 className="reniec-info-subtitle">Documentos Requeridos</h4>
            <div className="reniec-doc-list">
              <div className="reniec-doc-item reniec-doc-success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
                <span>DNI original y vigente</span>
              </div>
              <div className="reniec-doc-item reniec-doc-error">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M15 9l-6 6M9 9l6 6"/>
                </svg>
                <span>No se aceptan fotocopias</span>
              </div>
            </div>
          </div>

          <div className="reniec-info-item-box reniec-multa">
            <h4 className="reniec-info-subtitle">¿Multa por no votar?</h4>
            <p className="reniec-multa-text">Entre S/. 23.00 y S/. 92.00 según tu nivel de pobreza</p>
          </div>
        </div>
      </div>

        {/* Resultados debajo del buscador */}
        {resultado && simulado && (
          <div className="reniec-results-below-search">
            {/* Datos en fila horizontal */}
            <div className="reniec-inline-cards">
              {/* Datos del DNI */}
              <div className="reniec-card-inline reniec-dni-inline">
                <div className="reniec-dni-header-inline">
                  <IconUser />
                  <h4>Datos del DNI</h4>
                </div>
                <div className="reniec-foto-section-inline">
                  <img src={FOTO_URL} alt="Foto" className="reniec-foto-circular-small" />
                </div>
                <div className="reniec-dni-data">
                  <p><strong>DNI:</strong> {resultado.dni}</p>
                  <p><strong>Nombres:</strong> {resultado.nombres}</p>
                  <p><strong>Apellido Paterno:</strong> {resultado.apellidoPaterno}</p>
                  <p><strong>Apellido Materno:</strong> {resultado.apellidoMaterno}</p>
                </div>
              </div>

              {/* Rol y Fecha */}
              <div className="reniec-card-inline">
                <div className="reniec-dni-header-inline">
                  <IconUser />
                  <h4>Rol y Fecha</h4>
                </div>
                <div className="reniec-inline-content">
                  <div className="reniec-badge-inline">
                    <IconDoc />
                    <span className="reniec-rol-badge-small">{simulado.rol}</span>
                  </div>
                  <div className="reniec-fecha-inline">
                    <IconCalendar />
                    <div>
                      <strong>Fecha de votación:</strong>
                      <div className="reniec-fecha-value">{simulado.fecha}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mesa de Votación */}
              <div className="reniec-card-inline">
                <div className="reniec-dni-header-inline">
                  <IconVoteBox />
                  <h4>Mesa de Votación</h4>
                </div>
                <div className="reniec-mesa-data-inline">
                  <div className="reniec-mesa-item-inline">
                    <span>Mesa:</span>
                    <strong>{simulado.mesa}</strong>
                  </div>
                  <div className="reniec-mesa-item-inline">
                    <span>Piso:</span>
                    <strong>{simulado.piso}</strong>
                  </div>
                  <div className="reniec-mesa-item-inline">
                    <span>Salón:</span>
                    <strong>{simulado.salon}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa debajo */}
            <div className="reniec-map-section">
              <div className="reniec-card-full-width">
                <div className="reniec-dni-header-inline">
                  <IconMapPin />
                  <h4>Localización del Local de Votación</h4>
                </div>
                <div className="reniec-location-data">
                  <div className="reniec-location-text">
                    <div className="reniec-location-item">
                      <IconVoteBox />
                      <div>
                        <strong>Colegio:</strong> {simulado.ubicacion.nombre}
                      </div>
                    </div>
                    <div className="reniec-location-item">
                      <IconMapPin />
                      <div>
                        <strong>Dirección:</strong> {simulado.ubicacion.direccion}
                      </div>
                    </div>
                  </div>
                  <div className="reniec-map-container-inline">
                    <iframe
                      title="Mapa"
                      width="100%"
                      height="300"
                      style={{ border: 0, borderRadius: '12px' }}
                      loading="lazy"
                      allowFullScreen
                      src={`https://www.openstreetmap.org/export/embed.html?bbox=${simulado.ubicacion.lon - 0.001},${simulado.ubicacion.lat - 0.001},${simulado.ubicacion.lon + 0.001},${simulado.ubicacion.lat + 0.001}&layer=mapnik&marker=${simulado.ubicacion.lat},${simulado.ubicacion.lon}`}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      {/* Secciones antiguas omitidas */}
      {false && resultado && simulado && (
        <div className="reniec-results-grid reniec-results-grid-custom" style={{ display: 'none' }}>
          <div className="reniec-card reniec-dni-card">
            <div className="reniec-dni-header">
              <IconUser />
              <h4 className="reniec-title-red">Datos del DNI</h4>
            </div>
            <div className="reniec-foto-barcode-section">
              <img
                src={FOTO_URL}
                alt="Foto simulada"
                className="reniec-foto-circular"
              />
            </div>
            <div className="reniec-info-list" style={{ width: '100%', textAlign: 'center', margin: '10px 0 0 0' }}>
              <div className="reniec-dni-info-item">
                <strong>DNI:</strong> 
                <span className="reniec-dni-value">{resultado.dni}</span>
              </div>
              <div className="reniec-dni-info-item">
                <strong>Nombres:</strong> 
                <span className="reniec-dni-value">{resultado.nombres}</span>
              </div>
              <div className="reniec-dni-info-item">
                <strong>Apellido paterno:</strong> 
                <span className="reniec-dni-value">{resultado.apellidoPaterno}</span>
              </div>
              <div className="reniec-dni-info-item">
                <strong>Apellido materno:</strong> 
                <span className="reniec-dni-value">{resultado.apellidoMaterno}</span>
              </div>
            </div>
            <div className="reniec-foto-barcode-section" style={{ marginTop: 18 }}>
              <div className="reniec-barcode">
                {/* ...SVG código de barras... */}
                <svg width="220" height="50" viewBox="0 0 220 50">
                  <rect x="2" y="5" width="8" height="40" fill="#222" />
                  <rect x="14" y="5" width="4" height="40" fill="#222" />
                  <rect x="22" y="5" width="12" height="40" fill="#222" />
                  <rect x="38" y="5" width="4" height="40" fill="#222" />
                  <rect x="46" y="5" width="8" height="40" fill="#222" />
                  <rect x="58" y="5" width="4" height="40" fill="#222" />
                  <rect x="66" y="5" width="16" height="40" fill="#222" />
                  <rect x="86" y="5" width="4" height="40" fill="#222" />
                  <rect x="94" y="5" width="8" height="40" fill="#222" />
                  <rect x="106" y="5" width="4" height="40" fill="#222" />
                  <rect x="114" y="5" width="12" height="40" fill="#222" />
                  <rect x="130" y="5" width="4" height="40" fill="#222" />
                  <rect x="138" y="5" width="8" height="40" fill="#222" />
                  <rect x="150" y="5" width="4" height="40" fill="#222" />
                  <rect x="158" y="5" width="16" height="40" fill="#222" />
                  <rect x="178" y="5" width="4" height="40" fill="#222" />
                  <rect x="186" y="5" width="8" height="40" fill="#222" />
                  <rect x="198" y="5" width="4" height="40" fill="#222" />
                  <rect x="206" y="5" width="12" height="40" fill="#222" />
                </svg>
              </div>
              <div className="reniec-constancia">
                {/* ...SVG constancia... */}
                <svg width="120" height="32">
                  <rect x="0" y="0" width="120" height="32" fill="#f3f4f6" stroke="#bbb" strokeWidth="1"/>
                  <g stroke="#bbb" strokeWidth="1">
                    {[...Array(6)].map((_, i) => (
                      <line key={i} x1={20 * (i + 1)} y1="0" x2={20 * (i + 1)} y2="32" />
                    ))}
                    {[...Array(3)].map((_, i) => (
                      <line key={i} x1="0" y1={8 * (i + 1)} x2="120" y2={8 * (i + 1)} />
                    ))}
                  </g>
                  <text x="60" y="20" textAnchor="middle" fill="#888" fontSize="10" fontFamily="monospace">
                    Constancia de sufragio
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Rol y Fecha */}
          <div className="reniec-card reniec-horizontal-card reniec-rol-card">
            <div className="reniec-horizontal-header">
              <span className="reniec-horizontal-icon"><IconUser /></span>
              <h4 className="reniec-title-red">Rol y Fecha</h4>
            </div>
            <div className="reniec-info-list" style={{ textAlign: 'center' }}>
              <div className="reniec-badge-container">
                <IconDoc />
                <span className="reniec-rol-badge" style={{
                  display: 'inline-block',
                  marginLeft: 8,
                  padding: '0.3em 1em',
                  borderRadius: '1.5em',
                  background: simulado.rol === 'Miembro de mesa' ? 'linear-gradient(135deg, #fee2e2, #fecaca)' : 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
                  color: '#b91c1c',
                  fontWeight: 700,
                  fontSize: '1.1em',
                  boxShadow: '0 4px 12px rgba(185, 28, 28, 0.15)',
                  border: '2px solid #b91c1c'
                }}>
                  {simulado.rol}
                </span>
              </div>
              <div style={{ marginTop: 16 }} className="reniec-fecha-container">
                <IconCalendar />
                <div style={{ marginLeft: 8 }}>
                  <strong>Fecha de votación:</strong>
                  <div style={{
                    marginTop: 4,
                    fontSize: '1.2em',
                    color: '#7f1d1d',
                    fontWeight: 700
                  }}>
                    {simulado.fecha}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mesa de Votación */}
          <div className="reniec-card reniec-horizontal-card reniec-mesa-card">
            <div className="reniec-horizontal-header">
              <span className="reniec-horizontal-icon"><IconVoteBox /></span>
              <h4 className="reniec-title-red">Mesa de Votación</h4>
            </div>
            <div className="reniec-info-list" style={{ textAlign: 'center' }}>
              <div className="reniec-mesa-info-item">
                <span className="reniec-mesa-label">Mesa:</span>
                <span className="reniec-mesa-value">{simulado.mesa}</span>
              </div>
              <div className="reniec-mesa-info-item">
                <span className="reniec-mesa-label">Piso:</span>
                <span className="reniec-mesa-value">{simulado.piso}</span>
              </div>
              <div className="reniec-mesa-info-item">
                <span className="reniec-mesa-label">Salón:</span>
                <span className="reniec-mesa-value">{simulado.salon}</span>
              </div>
            </div>
          </div>

          {/* Localización: ocupa el espacio debajo de Rol y Mesa */}
          <div className="reniec-card reniec-horizontal-card reniec-localizacion-card">
            <div className="reniec-horizontal-header">
              <span className="reniec-horizontal-icon"><IconMapPin /></span>
              <h4 className="reniec-title-red">Localización del Local de Votación</h4>
            </div>
            <div className="reniec-info-list" style={{ textAlign: 'left', width: '100%' }}>
              <div className="reniec-location-info">
                <div className="reniec-location-item">
                  <IconVoteBox />
                  <div>
                    <strong>Colegio:</strong> {simulado.ubicacion.nombre}
                  </div>
                </div>
                <div className="reniec-location-item">
                  <IconMapPin />
                  <div>
                    <strong>Dirección:</strong> {simulado.ubicacion.direccion}
                  </div>
                </div>
              </div>
              <div className="reniec-map-container" style={{ marginTop: 20 }}>
                <iframe
                  title="Mapa"
                  width="100%"
                  height="280"
                  style={{ border: 0, borderRadius: '12px', boxShadow: '0 4px 20px rgba(185, 28, 28, 0.2)' }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${simulado.ubicacion.lon - 0.001},${simulado.ubicacion.lat - 0.001},${simulado.ubicacion.lon + 0.001},${simulado.ubicacion.lat + 0.001}&layer=mapnik&marker=${simulado.ubicacion.lat},${simulado.ubicacion.lon}`}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}


      {resultado && (
        <div className="reniec-pasos-section">
          <h2 className="reniec-pasos-title">¿Cómo Votar? - Paso a Paso</h2>
          <div className="reniec-pasos-grid">
            {(simulado?.rol === 'Miembro de mesa' ? pasosMiembroMesa : pasosVotante).map((paso, idx) => (
              <div className="reniec-paso-card" key={idx}>
                <div className="reniec-paso-icon-circle">
                  {idx === 0 && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>}
                  {idx === 1 && <IconMapPin />}
                  {idx === 2 && <IconUser />}
                  {idx === 3 && <IconDoc />}
                  {idx === 4 && <IconVoteBox />}
                  {idx === 5 && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>}
                </div>
                <div className="reniec-paso-number">{idx + 1}</div>
                <h4 className="reniec-paso-title">{paso.titulo}</h4>
                <p className="reniec-paso-desc">{paso.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {resultado && (
        <div className="reniec-cards-bottom-grid">
          <div className="reniec-bottom-card reniec-security">
            <div className="reniec-bottom-card-header">
              <IconShield />
              <h3>Recomendaciones de Seguridad</h3>
            </div>
            <ul className="reniec-bottom-list">
              {recomendaciones.map((rec, idx) => (
                <li key={idx} className="reniec-bottom-list-item">
                  <span className="reniec-bullet">•</span>
                  {rec}
                </li>
              ))}
            </ul>
          </div>
          <div className="reniec-bottom-card reniec-legal">
            <div className="reniec-bottom-card-header">
              <IconLaw />
              <h3>Marco Legal Electoral</h3>
            </div>
            <div className="reniec-legal-content">
              <h4>Voto Obligatorio</h4>
              <p>Para ciudadanos de 18 a 70 años. Después es facultativo.</p>
              <h4>Multas por No Votar</h4>
              <p>Varía según nivel de pobreza: entre S/. 23.00 y S/. 92.00</p>
              <h4>Derechos del Elector</h4>
              <p>Voto personal, igual, libre y secreto garantizado por ley</p>
              <a href="#" className="reniec-legal-link">Leer Ley Orgánica de Elecciones Completa</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReniecConsultas;