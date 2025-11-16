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

      <div className="reniec-header-red">
        <h1>Consulta de Datos Personales y Local de Votación</h1>
        <p>Consulta tu información del RENIEC y tus datos de votación</p>
      </div>


      <div className="reniec-card reniec-form-card">
        <h3 className="reniec-desc">Consulta tu Información</h3>
        <form onSubmit={handleConsulta} className="reniec-form" style={{ flexDirection: 'column', gap: 18 }}>

          <input
            type="text"
            placeholder="Ingresa tu DNI de 8 dígitos"
            value={dni}
            onChange={(e) => setDni(e.target.value.replace(/\D/g, '').slice(0, 8))}
            maxLength={8}
            className="reniec-input"
          />
          <button
            type="submit"
            disabled={dni.length !== 8 || loading}
            className="reniec-btn reniec-btn-red"
          >
            {loading ? 'Consultando...' : 'Consultar'}
          </button>
          {error && <p className="reniec-error">{error}</p>}
        </form>
      </div>

      {resultado && simulado && (
        <div className="reniec-results-grid reniec-results-grid-custom">
          {/* Datos de DNI: ocupa dos filas a la izquierda */}
          <div className="reniec-card reniec-dni-card">
            <h4 className="reniec-title-red">Datos del DNI</h4>
            <div className="reniec-foto-barcode-section">
              <img
                src={FOTO_URL}
                alt="Foto simulada"
                className="reniec-foto-circular"
              />
            </div>
            <div className="reniec-info-list" style={{ width: '100%', textAlign: 'center', margin: '10px 0 0 0' }}>
              <div><strong>DNI:</strong> {resultado.dni}</div>
              <div><strong>Nombres:</strong> {resultado.nombres}</div>
              <div><strong>Apellido paterno:</strong> {resultado.apellidoPaterno}</div>
              <div><strong>Apellido materno:</strong> {resultado.apellidoMaterno}</div>
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
              <span className="reniec-horizontal-icon"><IconDoc /></span>
              <h4 className="reniec-title-red">Rol y Fecha</h4>
            </div>
            <div className="reniec-info-list" style={{ textAlign: 'center' }}>
              <div>
                <span style={{
                  display: 'inline-block',
                  marginLeft: 8,
                  padding: '0.2em 0.8em',
                  borderRadius: '1em',
                  background: simulado.rol === 'Miembro de mesa' ? '#fee2e2' : '#f3f4f6',
                  color: '#b91c1c',
                  fontWeight: 700,
                  fontSize: '1.1em'
                }}>
                  {simulado.rol}
                </span>
              </div>
              <div style={{ marginTop: 12 }}>
                <strong>Fecha de votación:</strong>
                <div style={{
                  marginTop: 4,
                  fontSize: '1.1em',
                  color: '#7f1d1d',
                  fontWeight: 600
                }}>
                  {simulado.fecha}
                </div>
              </div>
            </div>
          </div>

          {/* Mesa de Votación */}
          <div className="reniec-card reniec-horizontal-card reniec-mesa-card">
            <div className="reniec-horizontal-header">
              <span className="reniec-horizontal-icon"><IconMoney /></span>
              <h4 className="reniec-title-red">Mesa de Votación</h4>
            </div>
            <div className="reniec-info-list" style={{ textAlign: 'center' }}>
              <div><strong>Mesa:</strong> {simulado.mesa}</div>
              <div><strong>Piso:</strong> {simulado.piso}</div>
              <div><strong>Salón:</strong> {simulado.salon}</div>
            </div>
          </div>

          {/* Localización: ocupa el espacio debajo de Rol y Mesa */}
          <div className="reniec-card reniec-horizontal-card reniec-localizacion-card">
            <div className="reniec-horizontal-header">
              <span className="reniec-horizontal-icon"><IconClock /></span>
              <h4 className="reniec-title-red">Localización</h4>
            </div>
            <div className="reniec-info-list" style={{ textAlign: 'center' }}>
              <div><strong>Colegio:</strong> {simulado.ubicacion.nombre}</div>
              <div><strong>Ubicación:</strong> {simulado.ubicacion.direccion}</div>
              <div className="reniec-map-container" style={{ marginTop: 10 }}>
                <iframe
                  title="Mapa"
                  width="100%"
                  height="140"
                  style={{ border: 0, borderRadius: '8px' }}
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
        <div className="reniec-card reniec-instrucciones-card">
          <h4 className="reniec-title-red">
            {simulado?.rol === 'Miembro de mesa'
              ? 'Guía para Miembros de Mesa'
              : 'Instrucciones para votar'}
          </h4>
          {simulado?.rol === 'Miembro de mesa' ? (
            <div className="reniec-mesa-pasos-grid">
              {pasosMiembroMesa.map((paso, idx) => (
                <div className="reniec-mesa-paso-card" key={idx}>
                  <span className="reniec-mesa-paso-num">{idx + 1}</span>
                  <div className="reniec-mesa-paso-title">{paso.titulo}</div>
                  <div className="reniec-mesa-paso-desc">{paso.descripcion}</div>
                </div>
              ))}
            </div>
          ) : (
            <ol className="reniec-pasos-list">
              {pasosVotante.map((paso, idx) => (
                <li key={idx}>
                  <span className="reniec-paso-num">{idx + 1}</span>
                  <div>
                    <strong>{paso.titulo}</strong>
                    <div className="reniec-paso-desc">{paso.descripcion}</div>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}

      {resultado && (
        <div className="reniec-horizontal-boxes">
          <div className="reniec-card reniec-recomendaciones-card reniec-horizontal-card">
            <div className="reniec-horizontal-header">
              <span className="reniec-horizontal-icon"><IconShield /></span>
              <h4 className="reniec-title-red">Recomendaciones de Seguridad</h4>
            </div>
            <ul>
              {recomendaciones.map((rec, idx) => (
                <li key={idx}>• {rec}</li>
              ))}
            </ul>
          </div>
          <div className="reniec-card reniec-marcolegal-card reniec-horizontal-card">
            <div className="reniec-horizontal-header">
              <span className="reniec-horizontal-icon"><IconLaw /></span>
              <h4 className="reniec-title-red">Base Legal Electoral</h4>
            </div>
            <ul>
              {marcoLegal.map((ley, idx) => (
                <li key={idx}>{ley}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReniecConsultas;