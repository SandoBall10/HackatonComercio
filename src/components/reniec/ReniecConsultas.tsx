import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { getDniData } from '../api/sunat';
import { getSimulatedVotingData } from '../../simulation/dni_mesa';
import { generarPDFConsulta } from '../../services/DatosConsulta';
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

const ReniecConsultas: React.FC = () => {
  const { t } = useTranslation();
  const [dni, setDni] = useState('');
  const [resultado, setResultado] = useState<any>(null);
  const [simulado, setSimulado] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userLocation, setUserLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [geoError, setGeoError] = useState('');
  
  const [captchaTexto, setCaptchaTexto] = useState('');
  const [captchaRespuesta, setCaptchaRespuesta] = useState('');
  const [captchaResuelto, setCaptchaResuelto] = useState(false);
  const [captchaError, setCaptchaError] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    generarNuevoCaptcha();
  }, []);

  const generarNuevoCaptcha = () => {
    const caracteres = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let texto = '';
    for (let i = 0; i < 6; i++) {
      texto += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    setCaptchaTexto(texto);
    setCaptchaRespuesta('');
    setCaptchaResuelto(false);
    setCaptchaError('');
    
    setTimeout(() => dibujarCaptcha(texto), 100);
  };

  const dibujarCaptcha = (texto: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100}, 0.3)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }
    
    ctx.font = 'bold 32px Arial';
    ctx.textBaseline = 'middle';
    
    let x = 20;
    for (let i = 0; i < texto.length; i++) {
      const char = texto[i];
      const angle = (Math.random() - 0.5) * 0.4;
      const y = 35 + (Math.random() - 0.5) * 10;
      
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
    
      const gradient = ctx.createLinearGradient(0, -20, 0, 20);
      gradient.addColorStop(0, `rgb(${179 + Math.random() * 30}, ${2 + Math.random() * 30}, ${39 + Math.random() * 30})`);
      gradient.addColorStop(1, `rgb(${100 + Math.random() * 50}, ${0}, ${20 + Math.random() * 20})`);
      ctx.fillStyle = gradient;
      
      ctx.fillText(char, 0, 0);
      ctx.restore();
      
      x += 28 + Math.random() * 8;
    }
    
    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = `rgba(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100}, 0.3)`;
      ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
    }
  };

  const verificarCaptcha = () => {
    if (captchaRespuesta.toUpperCase() === captchaTexto) {
      setCaptchaResuelto(true);
      setCaptchaError('');
      return true;
    } else {
      setCaptchaError(t('reniec.captchaIncorrecto', 'Código incorrecto. Intenta de nuevo.'));
      generarNuevoCaptcha();
      return false;
    }
  };

  const handleConsulta = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (dni.length !== 8) {
      setError('El DNI debe tener 8 dígitos');
      return;
    }

    if (!captchaResuelto) {
      if (!verificarCaptcha()) {
        return;
      }
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

      generarNuevoCaptcha();
    } catch {
      setError('No se pudo obtener la información. Verifica el DNI o intenta más tarde.');
      generarNuevoCaptcha();
    } finally {
      setLoading(false);
    }
  };

  const handleActivarAyuda = () => {
    if (!navigator.geolocation) {
      setGeoError('Tu navegador no soporta geolocalización');
      return;
    }

    setGeoError('');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      },
      (error) => {
        setGeoError('No se pudo obtener tu ubicación. Verifica los permisos.');
        console.error(error);
      }
    );
  };

  const handleDescargarPDF = () => {
    if (!resultado || !simulado) return;

    generarPDFConsulta({
      dni: resultado.dni,
      nombres: resultado.nombres,
      apellidoPaterno: resultado.apellidoPaterno,
      apellidoMaterno: resultado.apellidoMaterno,
      rol: simulado.rol,
      fecha: simulado.fecha,
      mesa: simulado.mesa,
      piso: simulado.piso,
      salon: simulado.salon,
      ubicacion: {
        nombre: simulado.ubicacion.nombre,
        direccion: simulado.ubicacion.direccion
      }
    });
  };

  const FOTO_PERFIL_NEUTRA = 'https://ui-avatars.com/api/?name=Usuario&background=b30227&color=fff&size=200&bold=true';
  const fotoURL = resultado ? FOTO_PERFIL_NEUTRA : '';

  return (
    <div className="reniec-main-container reniec-theme-red">
      <div className="reniec-top-layout">
        <div className="reniec-consulta-box-left">
          <div className="reniec-header-box">
            <div className="reniec-title-with-icons">
              <svg className="title-icon-left" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <h2 className="reniec-consulta-title-main">{t('reniec.titulo')}</h2>
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
              {t('reniec.descripcion')}
            </p>
          </div>
          <form onSubmit={handleConsulta} className="reniec-form-modern">
            <div className="reniec-form-group">
              <label className="reniec-label">{t('reniec.dni')}</label>
              <input
                type="text"
                placeholder={t('reniec.placeholderDni')}
                value={dni}
                onChange={(e) => setDni(e.target.value.replace(/\D/g, '').slice(0, 8))}
                maxLength={8}
                className="reniec-input-modern"
              />
            </div>

            <div className="reniec-captcha-container">
              <label className="reniec-label">
                {t('reniec.captcha', 'Verifica que no eres un robot')}
              </label>
              <div className="reniec-captcha-box-image">
                <canvas 
                  ref={canvasRef} 
                  width="220" 
                  height="70"
                  style={{
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    background: '#fff',
                    cursor: 'pointer'
                  }}
                  onClick={generarNuevoCaptcha}
                  title={t('reniec.clickRefresh', 'Click para generar nuevo código')}
                />
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.5rem' }}>
                  <input
                    type="text"
                    value={captchaRespuesta}
                    onChange={(e) => setCaptchaRespuesta(e.target.value.toUpperCase())}
                    className="reniec-captcha-input"
                    placeholder="Ingresa el código"
                    disabled={captchaResuelto}
                    maxLength={6}
                    style={{ flex: 1 }}
                  />
                  <button
                    type="button"
                    onClick={generarNuevoCaptcha}
                    className="reniec-captcha-refresh"
                    title={t('reniec.regenerarCaptcha', 'Regenerar CAPTCHA')}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
                    </svg>
                  </button>
                </div>
              </div>
              {captchaResuelto && (
                <div className="reniec-captcha-success">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                  <span>{t('reniec.captchaResuelto', '¡Verificado correctamente!')}</span>
                </div>
              )}
              {captchaError && <p className="reniec-captcha-error">{captchaError}</p>}
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
              {loading ? t('reniec.consultando') : t('reniec.btnConsultar')}
            </button>
            {error && <p className="reniec-error-modern">{t(error)}</p>}
          </form>
        </div>

        <div className="reniec-info-box-right">
          <h3 className="reniec-info-title">{t('reniec.informacionImportante', 'Información Importante')}</h3>
          
          <div className="reniec-info-item-box reniec-horario">
            <div className="reniec-info-header">
              <IconClock />
              <span>{t('reniec.horarioVotacion', 'Horario de Votación')}</span>
            </div>
            <div className="reniec-info-content">
              <strong>8:00 AM - 4:00 PM</strong>
              <p>{t('reniec.recomiendaTemprano', 'Se recomienda llegar temprano')}</p>
            </div>
          </div>

          <div className="reniec-info-item-box">
            <h4 className="reniec-info-subtitle">{t('reniec.documentosRequeridos', 'Documentos Requeridos')}</h4>
            <div className="reniec-doc-list">
              <div className="reniec-doc-item reniec-doc-success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
                <span>{t('reniec.dniOriginalVigente', 'DNI original y vigente')}</span>
              </div>
              <div className="reniec-doc-item reniec-doc-error">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M15 9l-6 6M9 9l6 6"/>
                </svg>
                <span>{t('reniec.noFotocopias', 'No se aceptan fotocopias')}</span>
              </div>
            </div>
          </div>

          <div className="reniec-info-item-box reniec-multa">
            <h4 className="reniec-info-subtitle">{t('reniec.multaTitulo', '¿Multa por no votar?')}</h4>
            <p className="reniec-multa-text">{t('reniec.multaTexto', 'Entre S/. 23.00 y S/. 92.00 según tu nivel de pobreza')}</p>
          </div>

          {resultado && simulado && (
              <button
                onClick={handleDescargarPDF}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '14px 20px',
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  boxShadow: '0 6px 20px rgba(239, 68, 68, 0.4)',
                  transition: 'all 0.3s ease',
                  transform: 'scale(1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(239, 68, 68, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(239, 68, 68, 0.4)';
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Descargar información en PDF
              </button>
          )}
        </div>
      </div>

      {resultado && simulado && (
        <div className="reniec-results-below-search">
          <div className="reniec-inline-cards">
            <div className="reniec-card-inline reniec-dni-inline">
              <div className="reniec-dni-header-inline">
                <IconUser />
                <h4>{t('reniec.resultadoTitulo')}</h4>
              </div>
              <div className="reniec-foto-section-inline">
                <img src={fotoURL} alt="Foto" className="reniec-foto-circular-small" />
              </div>
              <div className="reniec-dni-data">
                <p><strong>{t('reniec.dni')}:</strong> {resultado.dni}</p>
                <p><strong>{t('reniec.nombres')}:</strong> {resultado.nombres}</p>
                <p><strong>{t('reniec.apellidoPaterno')}:</strong> {resultado.apellidoPaterno}</p>
                <p><strong>{t('reniec.apellidoMaterno')}:</strong> {resultado.apellidoMaterno}</p>
              </div>
            </div>

            <div className="reniec-card-inline">
              <div className="reniec-dni-header-inline">
                <IconUser />
                <h4>{t('reniec.rolYFecha')}</h4>
              </div>
              <div className="reniec-inline-content">
                <div className="reniec-badge-inline">
                  <IconDoc />
                  <span className="reniec-rol-badge-small">{t(`reniec.${simulado.rol === 'Miembro de mesa' ? 'miembroMesa' : 'votante'}`)}</span>
                </div>
                <div className="reniec-fecha-inline">
                  <IconCalendar />
                  <div>
                    <strong>{t('reniec.fechaVotacion')}:</strong>
                    <div className="reniec-fecha-value">{simulado.fecha}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reniec-card-inline">
              <div className="reniec-dni-header-inline">
                <IconVoteBox />
                <h4>{t('reniec.mesaVotacion')}</h4>
              </div>
              <div className="reniec-mesa-data-inline">
                <div className="reniec-mesa-item-inline">
                  <span>{t('reniec.mesa')}:</span>
                  <strong>{simulado.mesa}</strong>
                </div>
                <div className="reniec-mesa-item-inline">
                  <span>{t('reniec.piso')}:</span>
                  <strong>{simulado.piso}</strong>
                </div>
                <div className="reniec-mesa-item-inline">
                  <span>{t('reniec.salon')}:</span>
                  <strong>{simulado.salon}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="reniec-map-section">
            <div className="reniec-card-full-width">
              <div className="reniec-dni-header-inline">
                <IconMapPin />
                <h4>{t('reniec.localizacion')}</h4>
              </div>
              <div className="reniec-location-data">
                <div className="reniec-location-text">
                  <div className="reniec-location-item">
                    <IconVoteBox />
                    <div>
                      <strong>{t('reniec.colegio')}:</strong> {simulado.ubicacion.nombre}
                    </div>
                  </div>
                  <div className="reniec-location-item">
                    <IconMapPin />
                    <div>
                      <strong>{t('reniec.direccion')}:</strong> {simulado.ubicacion.direccion}
                    </div>
                  </div>
                  {userLocation && (
                    <div className="reniec-location-item" style={{ background: 'rgba(34, 197, 94, 0.1)', borderRadius: 8, padding: '0.75rem' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M9 12l2 2 4-4"/>
                      </svg>
                      <div>
                        <strong style={{ color: '#22c55e' }}>{t('reniec.ubicacionActivada', 'Ubicación activada')}</strong>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>
                          {t('reniec.calculandoRuta', 'Mostrando ruta desde tu ubicación')}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="reniec-map-container-inline">
                  {!userLocation ? (
                    <iframe
                      title="Mapa"
                      width="100%"
                      height="300"
                      style={{ border: 0, borderRadius: '12px' }}
                      loading="lazy"
                      allowFullScreen
                      src={`https://www.openstreetmap.org/export/embed.html?bbox=${simulado.ubicacion.lon - 0.001},${simulado.ubicacion.lat - 0.001},${simulado.ubicacion.lon + 0.001},${simulado.ubicacion.lat + 0.001}&layer=mapnik&marker=${simulado.ubicacion.lat},${simulado.ubicacion.lon}`}
                    ></iframe>
                  ) : (
                    <iframe
                      title="Mapa con ruta"
                      width="100%"
                      height="400"
                      style={{ border: 0, borderRadius: '12px' }}
                      loading="lazy"
                      allowFullScreen
                      src={`https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=${userLocation.lat}%2C${userLocation.lon}%3B${simulado.ubicacion.lat}%2C${simulado.ubicacion.lon}#map=14/${simulado.ubicacion.lat}/${simulado.ubicacion.lon}`}
                    ></iframe>
                  )}
                </div>

                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                  {!userLocation ? (
                    <button
                      onClick={handleActivarAyuda}
                      style={{
                        background: 'linear-gradient(135deg, rgb(179, 2, 39), #dc2626)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 12,
                        padding: '1rem 2rem',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(179, 2, 39, 0.3)',
                        transition: 'all 0.3s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      {t('reniec.activarAyuda', 'Activar Ayuda por Geolocalización')}
                    </button>
                  ) : (
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lon}&destination=${simulado.ubicacion.lat},${simulado.ubicacion.lon}&travelmode=driving`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        background: '#22c55e',
                        color: '#fff',
                        padding: '0.75rem 1.5rem',
                        borderRadius: 8,
                        textDecoration: 'none',
                        fontWeight: 600,
                        boxShadow: '0 2px 8px rgba(34, 197, 94, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {t('reniec.abrirEnGoogleMaps', 'Abrir en Google Maps')}
                    </a>
                  )}
                  {geoError && <p style={{ color: '#ef4444', marginTop: '0.5rem' }}>{geoError}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {false && resultado && simulado && (
        <div className="reniec-results-grid reniec-results-grid-custom" style={{ display: 'none' }}>
          <div className="reniec-card reniec-dni-card">
            <div className="reniec-dni-header">
              <IconUser />
              <h4 className="reniec-title-red">Datos del DNI</h4>
            </div>
            <div className="reniec-foto-barcode-section">
              <img
                src={fotoURL}
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

          <div className="reniec-card reniec-horizontal-card reniec-rol-card">
            <div className="reniec-horizontal-header">
              <span className="reniec-horizontal-icon"><IconUser /></span>
              <h4 className="reniec-title-red">{t('reniec.rolYFecha', 'Rol y Fecha')}</h4>
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
                  <strong>{t('reniec.fechaVotacion', 'Fecha de votación')}:</strong>
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

          <div className="reniec-card reniec-horizontal-card reniec-mesa-card">
            <div className="reniec-horizontal-header">
              <span className="reniec-horizontal-icon"><IconVoteBox /></span>
              <h4 className="reniec-title-red">{t('reniec.mesaVotacion', 'Mesa de Votación')}</h4>
            </div>
            <div className="reniec-info-list" style={{ textAlign: 'center' }}>
              <div className="reniec-mesa-info-item">
                <span className="reniec-mesa-label">{t('reniec.mesa', 'Mesa')}:</span>
                <span className="reniec-mesa-value">{simulado.mesa}</span>
              </div>
              <div className="reniec-mesa-info-item">
                <span className="reniec-mesa-label">{t('reniec.piso', 'Piso')}:</span>
                <span className="reniec-mesa-value">{simulado.piso}</span>
              </div>
              <div className="reniec-mesa-info-item">
                <span className="reniec-mesa-label">{t('reniec.salon', 'Salón')}:</span>
                <span className="reniec-mesa-value">{simulado.salon}</span>
              </div>
            </div>
          </div>

          <div className="reniec-card reniec-horizontal-card reniec-localizacion-card">
            <div className="reniec-horizontal-header">
              <span className="reniec-horizontal-icon"><IconMapPin /></span>
              <h4 className="reniec-title-red">{t('reniec.localizacion', 'Localización del Local de Votación')}</h4>
            </div>
            <div className="reniec-info-list" style={{ textAlign: 'left', width: '100%' }}>
              <div className="reniec-location-info">
                <div className="reniec-location-item">
                  <IconVoteBox />
                  <div>
                    <strong>{t('reniec.colegio', 'Colegio')}:</strong> {simulado.ubicacion.nombre}
                  </div>
                </div>
                <div className="reniec-location-item">
                  <IconMapPin />
                  <div>
                    <strong>{t('reniec.direccion', 'Dirección')}:</strong> {simulado.ubicacion.direccion}
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
          <h2 className="reniec-pasos-title">{t('reniec.comoVotar', '¿Cómo Votar? - Paso a Paso')}</h2>
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
                <h4 className="reniec-paso-title">{t(`reniec.pasos.${simulado?.rol === 'Miembro de mesa' ? 'mesa' : 'votante'}.${idx}.titulo`, paso.titulo)}</h4>
                <p className="reniec-paso-desc">{t(`reniec.pasos.${simulado?.rol === 'Miembro de mesa' ? 'mesa' : 'votante'}.${idx}.descripcion`, paso.descripcion)}</p>
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
              <h3>{t('reniec.recomendacionesTitulo', 'Recomendaciones de Seguridad')}</h3>
            </div>
            <ul className="reniec-bottom-list">
              {recomendaciones.map((rec, idx) => (
                <li key={idx} className="reniec-bottom-list-item">
                  <span className="reniec-bullet">•</span>
                  {t(`reniec.recomendaciones.${idx}`, rec)}
                </li>
              ))}
            </ul>
          </div>
          <div className="reniec-bottom-card reniec-legal">
            <div className="reniec-bottom-card-header">
              <IconLaw />
              <h3>{t('reniec.marcoLegalTitulo', 'Marco Legal Electoral')}</h3>
            </div>
            <div className="reniec-legal-content">
              <h4>{t('reniec.votoObligatorioTitulo', 'Voto Obligatorio')}</h4>
              <p>{t('reniec.votoObligatorioTexto', 'Para ciudadanos de 18 a 70 años. Después es facultativo.')}</p>
              <h4>{t('reniec.multasNoVotarTitulo', 'Multas por No Votar')}</h4>
              <p>{t('reniec.multasNoVotarTexto', 'Varía según nivel de pobreza: entre S/. 23.00 y S/. 92.00')}</p>
              <h4>{t('reniec.derechosElectorTitulo', 'Derechos del Elector')}</h4>
              <p>{t('reniec.derechosElectorTexto', 'Voto personal, igual, libre y secreto garantizado por ley')}</p>
              <a href="#" className="reniec-legal-link">{t('reniec.leerLey', 'Leer Ley Orgánica de Elecciones Completa')}</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReniecConsultas;