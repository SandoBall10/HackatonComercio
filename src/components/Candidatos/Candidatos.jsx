import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Candidatos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { candidatos } from '../../data/candidatos';

const Candidatos = ({ candidato: candidatoProp }) => {
  const { t } = useTranslation();
  const { partidoId } = useParams();
  const [activeTab, setActiveTab] = useState('hoja-vida');
  const [_countdown, setCountdown] = useState({ meses: 0, dias: 0, horas: 0, minutos: 0 });

  // Mapeo de IDs de partidos a IDs de candidatos
  const mapeoPartidos = {
    '1': 'accion-popular',
    'ap': 'accion-popular',
    '2': 'fuerza-popular',
    'fpu': 'fuerza-popular',
    '3': 'partido-trabajadores-pte-peru',
    'pte': 'partido-trabajadores-pte-peru',
    '4': 'ahora-nacion',
    'an': 'ahora-nacion',
    '5': 'juntos-por-el-peru',
    'jpp': 'juntos-por-el-peru',
    '6': 'partido-del-buen-gobierno',
    'pbg': 'partido-del-buen-gobierno',
    '7': 'alianza-para-el-progreso',
    'app': 'alianza-para-el-progreso',
    '8': 'libertad-popular',
    'lp': 'libertad-popular',
    '9': 'partido-democrata-unido-peru',
    'pdu': 'partido-democrata-unido-peru',
    '10': 'avanza-pais',
    'apis': 'avanza-pais',
    '11': 'nuevo-peru-por-el-buen-vivir',
    'npbv': 'nuevo-peru-por-el-buen-vivir',
    '12': 'partido-democrata-verde',
    'pdv': 'partido-democrata-verde',
    '13': 'batalla-peru',
    'bp': 'batalla-peru',
    '14': 'partido-aprista-peruano',
    'apra': 'partido-aprista-peruano',
    '15': 'partido-democratico-federal',
    'pdf': 'partido-democratico-federal',
    '16': 'fe-en-el-peru',
    'fep': 'fe-en-el-peru',
    '17': 'partido-ciudadanos-por-el-peru',
    'cpp': 'partido-ciudadanos-por-el-peru',
    '18': 'partido-democratico-somos-peru',
    'dsp': 'partido-democratico-somos-peru',
    '19': 'frente-popular-agricola-fia',
    'frepap': 'frente-popular-agricola-fia',
    '20': 'partido-civico-obras',
    'pco': 'partido-civico-obras',
    '21': 'frente-de-la-esperanza-2021',
    'f21': 'frente-de-la-esperanza-2021',
    '22': 'partido-morado',
    'pm': 'partido-morado',
    '23': 'partido-politico-peru-accion',
    'pa': 'partido-politico-peru-accion',
    '24': 'peru-moderno',
    'pmo': 'peru-moderno',
    '25': 'partido-pais-para-todos',
    'ppt': 'partido-pais-para-todos',
    '26': 'partido-peru-primero',
    'pp1': 'partido-peru-primero',
    '27': 'podemos-peru',
    'pp': 'podemos-peru',
    '28': 'partido-patriotico-del-peru',
    'ppp': 'partido-patriotico-del-peru',
    '29': 'peruanos-unidos-somos-libres',
    'pusl': 'peruanos-unidos-somos-libres',
    '30': 'primero-la-gente',
    'plc': 'primero-la-gente',
    '31': 'cooperacion-popular',
    'cp': 'cooperacion-popular',
    '32': 'voces-del-pueblo',
    'vp': 'voces-del-pueblo',
    '33': 'progresemos',
    'prg': 'progresemos',
    '34': 'fuerza-moderna',
    'fm': 'fuerza-moderna',
    '35': 'prin',
    'prin': 'prin',
    '36': 'renovacion-popular',
    'rp': 'renovacion-popular',
    '37': 'integridad-democratica',
    'id': 'integridad-democratica',
    '38': 'partido-popular-cristiano',
    'ppc': 'partido-popular-cristiano',
    '39': 'salvemos-al-peru',
    'sp': 'salvemos-al-peru',
    '40': 'peru-libre',
    'pl': 'peru-libre',
    '41': 'partido-si-creo',
    'sc': 'partido-si-creo',
    '42': 'un-camino-diferente',
    'ucd': 'un-camino-diferente',
    '43': 'unidad-y-paz',
    'uyp': 'unidad-y-paz',
    '44': 'peru-libre',
    'pnpl': 'peru-libre'
  };

  // Buscar candidato por partido si viene el parámetro
  const candidato = partidoId 
    ? candidatos.find(c => {
        const partidoIdLower = partidoId.toLowerCase();
        
        // Primero buscar en el mapeo (PRIORITARIO)
        const idMapeado = mapeoPartidos[partidoIdLower];
        if (idMapeado) {
          return c.id === idMapeado;
        }
        
        // Si no está en el mapeo, buscar por coincidencias exactas primero
        const idNormalizado = c.id.toLowerCase();
        if (idNormalizado === partidoIdLower) {
          return true;
        }
        
        // Solo como último recurso, buscar coincidencias parciales (evitar "id" corto)
        if (partidoIdLower.length > 3) {
          const partidoNormalizado = c.partido.toLowerCase().replace(/[^a-z0-9]/g, '-');
          return partidoNormalizado.includes(partidoIdLower) ||
                 c.partido.toLowerCase().includes(partidoIdLower);
        }
        
        return false;
      }) || candidatoProp
    : candidatoProp;

  // Obtener el PDF del partido
    // Construir una lista de partidos a partir de los candidatos para asegurar que 'partidos' esté definido
    const partidos = candidatos.reduce((acc, c) => {
      const nombre = (c.partido || '').toString();
      const siglas = (c.siglas || '').toString();
      const planGobierno = c.planGobierno || c.planDeGobierno || null;
      const existe = acc.some(p => p.nombre.toLowerCase().trim() === nombre.toLowerCase().trim());
      if (!existe) acc.push({ nombre, siglas, planGobierno });
      return acc;
    }, []);
  
    const getPdfPath = () => {
      if (!candidato) return null;
      
      console.log('=== DEBUG PDF ===');
      console.log('Candidato:', candidato);
      console.log('pdfUrl directo:', candidato.pdfUrl);
      
      // Primero intentar usar el pdfUrl directo del candidato
      if (candidato.pdfUrl) {
        console.log('Usando pdfUrl directo del candidato');
        return candidato.pdfUrl;
      }
      
      // Si no existe, buscar en el array de partidos (como fallback)
      console.log('Candidato partido:', candidato.partido);
      console.log('Todos los partidos:', partidos);

      const partido = partidos.find(p => {
        const nombrePartido = candidato.partido.toLowerCase().trim();
        const nombrePartidoData = p.nombre.toLowerCase().trim();
        const siglasPartido = p.siglas?.toLowerCase().trim() || '';
        
        console.log('Comparando:', {
          candidatoPartido: nombrePartido,
          partidoNombre: nombrePartidoData,
          partidoSiglas: siglasPartido,
          match: nombrePartidoData.includes(nombrePartido) || 
                 nombrePartido.includes(nombrePartidoData) ||
                 siglasPartido === nombrePartido
        });
        
        return nombrePartidoData.includes(nombrePartido) || 
               nombrePartido.includes(nombrePartidoData) ||
               siglasPartido === nombrePartido;
      });
      
      console.log('Partido encontrado:', partido);
      console.log('PDF Path:', partido?.planGobierno);
      
      return partido?.planGobierno || null;
    };

  const pdfPath = getPdfPath();
  
  console.log('=== PDF FINAL ===');
  console.log('pdfPath:', pdfPath);
  console.log('Botón habilitado:', !!pdfPath);

  const handleDownloadPDF = () => {
    if (pdfPath) {
      window.open(pdfPath, '_blank');
    } else {
      alert('Plan de Gobierno no disponible para este partido');
    }
  };

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

  if (!candidato) {
    return (
      <div className="container text-center py-5">
        <div className="alert alert-warning animate-fade-in" role="alert">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          {t('candidatos.noEncontrado')}
        </div>
      </div>
    );
  }

  console.log('Candidato recibido:', candidato);
  console.log('Foto URL:', candidato.foto);
  console.log('Logo URL:', candidato.logoPartido);
  
  // Detectar partido
  const esRenovacionPopular = candidato.partido?.toLowerCase().includes('renovacion popular') || 
                               candidato.partido?.toLowerCase().includes('renovación popular') ||
                               candidato.id === 'renovacion-popular';
  
  const esFuerzaPopular = candidato.partido?.toLowerCase().includes('fuerza popular') ||
                          candidato.id === 'fuerza-popular';
  
  // Mapeo de colores por partido basado en sus logos reales
  const coloresPorPartido = {
    'accion-popular': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' }, // Rojo
    'fuerza-popular': { primario: '#FF6B00', secundario: '#FF8C00', terciario: '#CC5500', rgb: '255, 107, 0' }, // Naranja
    'partido-trabajadores-pte-peru': { primario: '#1E40AF', secundario: '#FFC107', terciario: '#1565C0', rgb: '30, 64, 175' }, // Azul y Amarillo
    'ahora-nacion': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' }, // Rojo
    'juntos-por-el-peru': { primario: '#DC143C', secundario: '#00A859', terciario: '#8B0E27', rgb: '220, 20, 60' }, // Rojo intenso y Verde
    'partido-del-buen-gobierno': { primario: '#E31B23', secundario: '#FFC107', terciario: '#A01419', rgb: '227, 27, 35' }, // Rojo y Amarillo
    'alianza-para-el-progreso': { primario: '#1E40AF', secundario: '#E31B23', terciario: '#1565C0', rgb: '30, 64, 175' }, // Azul y Rojo (azul, blanco, rojo)
    'libertad-popular': { primario: '#FFC107', secundario: '#1a1a1a', terciario: '#FFD54F', rgb: '255, 193, 7' }, // Amarillo y Negro
    'partido-democrata-unido-peru': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' }, // Verde
    'avanza-pais': { primario: '#1E40AF', secundario: '#E31B23', terciario: '#1565C0', rgb: '30, 64, 175' }, // Azul y Rojo
    'nuevo-peru-por-el-buen-vivir': { primario: '#E31B23', secundario: '#FFC107', terciario: '#A01419', rgb: '227, 27, 35' }, // Rojo y Amarillo
    'partido-democrata-verde': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' }, // Verde
    'batalla-peru': { primario: '#1E40AF', secundario: '#E31B23', terciario: '#1a1a1a', rgb: '30, 64, 175' }, // Azul, Rojo y Negro
    'partido-aprista-peruano': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' }, // Rojo APRA
    'partido-democratico-federal': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' }, // Verde
    'fe-en-el-peru': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' }, // Verde
    'partido-ciudadanos-por-el-peru': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' }, // Rojo
    'partido-democratico-somos-peru': { primario: '#1E40AF', secundario: '#E31B23', terciario: '#1565C0', rgb: '30, 64, 175' }, // Azul y Rojo
    'frente-popular-agricola-fia': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' }, // Verde FREPAP
    'partido-civico-obras': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' }, // Verde
    'frente-de-la-esperanza-2021': { primario: '#00A859', secundario: '#00C76F', terciario: '#00964F', rgb: '0, 168, 89' }, // Verde
    'partido-morado': { primario: '#7B1FA2', secundario: '#6A1B9A', terciario: '#4A148C', rgb: '123, 31, 162' }, // Morado
    'partido-politico-peru-accion': { primario: '#E31B23', secundario: '#1E40AF', terciario: '#00A859', rgb: '227, 27, 35' }, // Rojo, Azul y Verde
    'peru-moderno': { primario: '#FFC107', secundario: '#E91E63', terciario: '#1a1a1a', rgb: '255, 193, 7' }, // Amarillo, Rosado y Negro
    'partido-pais-para-todos': { primario: '#FFC107', secundario: '#1a1a1a', terciario: '#FFD54F', rgb: '255, 193, 7' }, // Amarillo y Negro
    'partido-peru-primero': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' }, // Rojo
    'podemos-peru': { primario: '#1E40AF', secundario: '#FF6B00', terciario: '#1565C0', rgb: '30, 64, 175' }, // Azul y Anaranjado
    'partido-patriotico-del-peru': { primario: '#1a1a1a', secundario: '#2d2d2d', terciario: '#0a0a0a', rgb: '26, 26, 26' }, // Negro
    'peruanos-unidos-somos-libres': { primario: '#1E40AF', secundario: '#1E3A8A', terciario: '#1565C0', rgb: '30, 64, 175' }, // Azul
    'primero-la-gente': { primario: '#00A859', secundario: '#1E40AF', terciario: '#006435', rgb: '0, 168, 89' }, // Verde y Azul
    'cooperacion-popular': { primario: '#E31B23', secundario: '#00A859', terciario: '#FFC107', rgb: '227, 27, 35' }, // Rojo, Verde y Amarillo
    'voces-del-pueblo': { primario: '#DC143C', secundario: '#B21131', terciario: '#8B0E27', rgb: '220, 20, 60' }, // Rojo intenso
    'progresemos': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' }, // Verde
    'fuerza-moderna': { primario: '#1E40AF', secundario: '#1E3A8A', terciario: '#1565C0', rgb: '30, 64, 175' }, // Azul
    'prin': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' }, // Rojo
    'renovacion-popular': { primario: '#1E40AF', secundario: '#1E3A8A', terciario: '#1565C0', rgb: '30, 64, 175' }, // Azul
    'integridad-democratica': { primario: '#1E40AF', secundario: '#1E3A8A', terciario: '#1565C0', rgb: '30, 64, 175' }, // Azul
    'partido-popular-cristiano': { primario: '#E31B23', secundario: '#00A859', terciario: '#A01419', rgb: '227, 27, 35' }, // Rojo y Verde
    'salvemos-al-peru': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' }, // Rojo
    'peru-libre': { primario: '#DC143C', secundario: '#B21131', terciario: '#8B0E27', rgb: '220, 20, 60' }, // Rojo
    'partido-si-creo': { primario: '#E31B23', secundario: '#1a1a1a', terciario: '#A01419', rgb: '227, 27, 35' }, // Rojo y Negro
    'un-camino-diferente': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' }, // Rojo
    'unidad-y-paz': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' } // Rojo
  };

  // Obtener colores del partido o usar colores por defecto
  const coloresPartido = coloresPorPartido[candidato.id] || {
    primario: '#dc3545',
    secundario: '#c82333',
    terciario: '#8b2131',
    rgb: '220, 53, 69'
  };
  
  const colorPrimario = coloresPartido.primario;
  const colorSecundario = coloresPartido.secundario;
  const colorTerciario = coloresPartido.terciario;
  const colorPrimarioRgb = coloresPartido.rgb;
  
  return (
    <div className="candidatos-container animate-fade-in" style={{
      '--color-primario': colorPrimario,
      '--color-secundario': colorSecundario,
      '--color-terciario': colorTerciario,
      '--color-primario-rgb': colorPrimarioRgb
    }}>
     

    
      {/* Main Content */}
      <main className="main-content bg-light py-5">
        <div className="container-fluid px-4 px-lg-5">
          <div className="row justify-content-center">
            <div className="col-12 col-xxl-11">
              {/* ProfileHeader */}
              <div className="profile-hero-card position-relative overflow-hidden mb-5 animate-slide-up">
            {/* Background Pattern */}
            <div className="hero-background"></div>
            
            <div className="card-body p-0">
              <div className="row g-0">
                {/* Left Section - Profile */}
                <div className="col-lg-8">
                  <div className="profile-content-wrapper p-4 p-lg-5 py-lg-5">
                    <div className="d-flex align-items-center gap-4 gap-lg-5 flex-wrap">
                      {/* Avatar with advanced styling */}
                      <div className="position-relative animate-zoom-in flex-shrink-0">
                        <div className="profile-avatar-advanced">
                          <div className="avatar-ring"></div>
                          <div className="avatar-inner">
                            <img 
                              className="profile-avatar-img" 
                              src={candidato.foto} 
                              alt={candidato.nombre}
                              onError={(e) => {
                                console.log('Error cargando imagen, usando fallback');
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(candidato.nombre || candidato.partido)}&size=300&background=dc3545&color=fff&bold=true`;
                              }}
                              onLoad={() => console.log('Imagen del candidato cargada')}
                            />
                          </div>
                          <div className="avatar-badge-advanced">
                            <i className="bi bi-patch-check-fill"></i>
                          </div>
                        </div>
                      </div>

                      {/* Profile Info */}
                      <div className="profile-details flex-grow-1 animate-slide-right">
                        <h1 className="profile-name-advanced mb-2" style={{ color: '#1a1a1a', fontSize: '2rem', fontWeight: '700' }}>
                          {candidato.nombre || candidato.partido || 'Candidato Sin Nombre'}
                        </h1>
                        
                        <div className="profile-meta mb-3">
                          <div className="d-flex align-items-center gap-2">
                            <div className="meta-icon" style={{ 
                              background: colorPrimario,
                              boxShadow: `0 4px 12px rgba(${colorPrimarioRgb}, 0.25)`,
                              width: '36px',
                              height: '36px'
                            }}>
                              <i className="bi bi-briefcase-fill" style={{ color: 'white', fontSize: '0.9rem' }}></i>
                            </div>
                            <span className="meta-text" style={{ fontSize: '0.95rem' }}>{t('candidatos.cargo')} {candidato.partido}</span>
                          </div>
                        </div>

                        {/* Botones de acción */}
                        <div className="d-flex gap-2 align-items-center flex-wrap">
                          {/* Party Badge with Logo */}
                          <div className="d-flex align-items-center gap-2">
                            {candidato.logoPartido && (
                              <div className="party-logo-wrapper" style={{ 
                                width: '48px', 
                                height: '48px',
                                border: '2px solid #e5e7eb',
                                borderRadius: '10px',
                                padding: '6px',
                                background: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                              }}>
                                <img 
                                  className="party-logo-advanced" 
                                  src={candidato.logoPartido} 
                                  alt="Logo del partido"
                                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                  onError={(e) => {
                                    console.log('Error cargando logo del partido');
                                    e.currentTarget.style.display = 'none';
                                  }}
                                  onLoad={() => console.log('Logo del partido cargado')}
                                />
                              </div>
                            )}
                            <button 
                              className="btn text-white fw-semibold d-flex align-items-center gap-2"
                              style={{ 
                                background: colorPrimario,
                                boxShadow: `0 4px 12px rgba(${colorPrimarioRgb}, 0.3)`,
                                border: 'none',
                                borderRadius: '10px',
                                padding: '12px 20px',
                                fontSize: '0.9rem',
                                transition: 'all 0.3s ease',
                                whiteSpace: 'nowrap'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = `0 6px 16px rgba(${colorPrimarioRgb}, 0.4)`;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = `0 4px 12px rgba(${colorPrimarioRgb}, 0.3)`;
                              }}
                            >
                              <i className="bi bi-flag-fill" style={{ fontSize: '0.9rem' }}></i>
                              <span>{candidato.partido}</span>
                            </button>
                          </div>

                          {/* Botón Descargar PDF */}
                          <button 
                            className="btn text-white fw-semibold d-flex align-items-center gap-2"
                            onClick={handleDownloadPDF}
                            disabled={!pdfPath}
                            style={{
                              backgroundColor: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545',
                              border: 'none',
                              borderRadius: '10px',
                              opacity: pdfPath ? 1 : 0.6,
                              cursor: pdfPath ? 'pointer' : 'not-allowed',
                              transition: 'all 0.3s ease',
                              fontSize: '0.9rem',
                              padding: '12px 20px',
                              boxShadow: `0 4px 12px rgba(${colorPrimarioRgb}, 0.3)`,
                              whiteSpace: 'nowrap'
                            }}
                            onMouseEnter={(e) => {
                              if (pdfPath) {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = `0 6px 16px rgba(${colorPrimarioRgb}, 0.4)`;
                              }
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = `0 4px 12px rgba(${colorPrimarioRgb}, 0.3)`;
                            }}
                          >
                            <i className="bi bi-download" style={{ fontSize: '0.9rem' }}></i>
                            <span>{pdfPath ? t('candidatos.descargarPlan') : t('candidatos.planNoDisponible')}</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Social Links - Redesigned */}
                    <div className="social-section mt-5 pt-4 border-top">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="social-title mb-0">
                          <i className="bi bi-share-fill me-2"></i>{t('candidatos.redesSociales')}
                        </h6>
                      </div>
                      <div className="social-links-grid">
                        {candidato.redesSociales?.facebook && (
                          <a href={candidato.redesSociales.facebook} 
                             className="social-link-card facebook" 
                             target="_blank" 
                             rel="noopener noreferrer">
                            <div className="social-icon">
                              <i className="bi bi-facebook"></i>
                            </div>
                            <span className="social-name">Facebook</span>
                          </a>
                        )}
                        {candidato.redesSociales?.twitter && (
                          <a href={candidato.redesSociales.twitter} 
                             className="social-link-card twitter" 
                             target="_blank" 
                             rel="noopener noreferrer">
                            <div className="social-icon">
                              <i className="bi bi-twitter-x"></i>
                            </div>
                            <span className="social-name">Twitter</span>
                          </a>
                        )}
                        {candidato.redesSociales?.instagram && (
                          <a href={candidato.redesSociales.instagram} 
                             className="social-link-card instagram" 
                             target="_blank" 
                             rel="noopener noreferrer">
                            <div className="social-icon">
                              <i className="bi bi-instagram"></i>
                            </div>
                            <span className="social-name">Instagram</span>
                          </a>
                        )}
                        {candidato.redesSociales?.tiktok && (
                          <a href={candidato.redesSociales.tiktok} 
                             className="social-link-card tiktok" 
                             target="_blank" 
                             rel="noopener noreferrer">
                            <div className="social-icon">
                              <i className="bi bi-tiktok"></i>
                            </div>
                            <span className="social-name">TikTok</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section - Resumen de Bancada */}
                <div className="col-lg-4">
                  <div className="card border-0 shadow-sm h-100" style={{
                    background: `linear-gradient(135deg, ${colorPrimario} 0%, ${colorSecundario} 100%)`
                  }}>
                    <div className="card-body p-4 text-white">
                      <div className="d-flex align-items-center mb-3">
                        <div 
                          className="rounded-circle bg-white d-flex align-items-center justify-content-center me-3"
                          style={{ width: '50px', height: '50px' }}
                        >
                          <i className="bi bi-people-fill" style={{ fontSize: '1.5rem', color: colorPrimario }}></i>
                        </div>
                        <h5 className="mb-0 fw-bold">{t('candidatos.resumenBancada')}</h5>
                      </div>
                      
                      <div className="mb-3">
                        <h6 className="fw-bold mb-2">
                          <i className="bi bi-building me-2"></i>
                          {t('candidatos.partidoPolitico')}
                        </h6>
                        <p className="mb-0 opacity-90">{candidato.partido}</p>
                      </div>

                      <div className="mb-3">
                        <h6 className="fw-bold mb-2">
                          <i className="bi bi-person-badge me-2"></i>
                          {t('candidatos.cargo')}
                        </h6>
                        <p className="mb-0 opacity-90">{candidato.cargo || 'Candidato a la Presidencia'}</p>
                      </div>

                      <div className="mb-3">
                        <h6 className="fw-bold mb-2">
                          <i className="bi bi-calendar-event me-2"></i>
                          {t('candidatos.elecciones2026')}
                        </h6>
                        <p className="mb-0 opacity-90">12 de abril de 2026</p>
                      </div>

                      <div className="border-top border-white border-opacity-25 pt-3 mt-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="small"><i className="bi bi-clipboard-check me-2"></i>{t('candidatos.propuestas')}</span>
                          <span className="fw-bold">{candidato.planGobierno?.propuestas?.length || 0}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="small"><i className="bi bi-newspaper me-2"></i>{t('candidatos.noticias')}</span>
                          <span className="fw-bold">{candidato.noticias?.length || 0}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="small"><i className="bi bi-calendar-event me-2"></i>{t('candidatos.actividades')}</span>
                          <span className="fw-bold">{candidato.actividades?.length || 0}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Navigation - Modern Month Style */}
          <div className="modern-tabs-container mb-4 animate-slide-down">
            <div className="modern-tabs-wrapper">
              <button 
                className={`modern-tab-btn ${activeTab === 'hoja-vida' ? 'active' : ''}`}
                onClick={() => setActiveTab('hoja-vida')}
                style={{
                  '--tab-color': activeTab === 'hoja-vida' ? colorPrimario : '#6c757d',
                  '--tab-bg': activeTab === 'hoja-vida' ? colorPrimario : 'transparent'
                }}
              >
                <i className="bi bi-person-vcard"></i>
                <span>{t('candidatos.tabs.hojaVida')}</span>
              </button>
              <button 
                className={`modern-tab-btn ${activeTab === 'propuestas' ? 'active' : ''}`}
                onClick={() => setActiveTab('propuestas')}
                style={{
                  '--tab-color': activeTab === 'propuestas' ? colorPrimario : '#6c757d',
                  '--tab-bg': activeTab === 'propuestas' ? colorPrimario : 'transparent'
                }}
              >
                <i className="bi bi-lightbulb"></i>
                <span>{t('candidatos.planGobierno.propuestas')}</span>
              </button>
              <button 
                className={`modern-tab-btn ${activeTab === 'noticias' ? 'active' : ''}`}
                onClick={() => setActiveTab('noticias')}
                style={{
                  '--tab-color': activeTab === 'noticias' ? colorPrimario : '#6c757d',
                  '--tab-bg': activeTab === 'noticias' ? colorPrimario : 'transparent'
                }}
              >
                <i className="bi bi-newspaper"></i>
                <span>{t('candidatos.tabs.noticias')}</span>
              </button>
              <button 
                className={`modern-tab-btn ${activeTab === 'actividades' ? 'active' : ''}`}
                onClick={() => setActiveTab('actividades')}
                style={{
                  '--tab-color': activeTab === 'actividades' ? colorPrimario : '#6c757d',
                  '--tab-bg': activeTab === 'actividades' ? colorPrimario : 'transparent'
                }}
              >
                <i className="bi bi-calendar-event"></i>
                <span>{t('candidatos.tabs.actividades')}</span>
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="row g-4 g-lg-5">
            {/* Main Column */}
            <div className="col-lg-8">
              {activeTab === 'hoja-vida' && (
                <div className="animate-fade-in">
                  {/* Info Cards */}
                  <div className="row g-4 mb-4">
                    <div className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm animate-slide-up">
                        <div className="card-body">
                          <h5 className="card-title mb-3" style={{ color: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545' }}>
                            <i className="bi bi-mortarboard-fill me-2"></i>
                            {t('candidatos.hojaVida.formacionAcademica')}
                          </h5>
                          <ul className="list-unstyled">
                            {candidato.hojaDeVida?.formacionAcademica && candidato.hojaDeVida.formacionAcademica.length > 0 ? (
                              candidato.hojaDeVida.formacionAcademica.map((item, index) => (
                                <li key={index} className="mb-2">
                                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                                  {item}
                                </li>
                              ))
                            ) : (
                              <li className="text-muted">No disponible</li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm animate-slide-up" style={{animationDelay: '0.1s'}}>
                        <div className="card-body">
                          <h5 className="card-title mb-3" style={{ color: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545' }}>
                            <i className="bi bi-briefcase-fill me-2"></i>
                            {t('candidatos.hojaVida.experienciaLaboral')}
                          </h5>
                          <ul className="list-unstyled">
                            {candidato.hojaDeVida?.experienciaLaboral && candidato.hojaDeVida.experienciaLaboral.length > 0 ? (
                              candidato.hojaDeVida.experienciaLaboral.map((item, index) => (
                                <li key={index} className="mb-2">
                                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                                  {item}
                                </li>
                              ))
                            ) : (
                              <li className="text-muted">{t('candidatos.hojaVida.noDisponible')}</li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm animate-slide-up" style={{animationDelay: '0.2s'}}>
                        <div className="card-body">
                          <h5 className="card-title text-primary mb-3">
                            <i className="bi bi-file-text-fill me-2"></i>
                            {t('candidatos.hojaVida.declaracionesJuradas')}
                          </h5>
                          <p className="mb-0">{candidato.hojaDeVida?.declaracionesJuradas}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm bg-danger bg-opacity-10 animate-slide-up" style={{animationDelay: '0.3s'}}>
                        <div className="card-body">
                          <h5 className="card-title text-danger mb-3">
                            <i className="bi bi-exclamation-triangle-fill me-2"></i>
                            {t('candidatos.hojaVida.sentenciasJudiciales')}
                          </h5>
                          <p className="mb-0 text-danger fw-semibold">
                            {candidato.hojaDeVida?.sentenciasJudiciales}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="card border-0 shadow-sm animate-slide-up" style={{animationDelay: '0.4s'}}>
                    <div className="card-body p-4">
                      <h4 className="mb-4" style={{ color: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545' }}>
                        <i className="bi bi-clock-history me-2"></i>
                        {t('candidatos.trayectoria.titulo')}
                      </h4>
                      <div className="timeline-bootstrap">
                        {candidato.trayectoria && candidato.trayectoria.length > 0 ? (
                          candidato.trayectoria.map((item, index) => (
                            <div className="timeline-item-bootstrap mb-4" key={index}>
                              <div className="timeline-marker" style={{ 
                                backgroundColor: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545' 
                              }}></div>
                              <div className="timeline-content">
                                <h6 className="fw-bold text-dark">{item.fecha}</h6>
                                <p className="text-muted mb-0">{item.descripcion}</p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-muted">{t('candidatos.hojaVida.noInformacion')}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'propuestas' && (
                <div className="animate-fade-in">
                  {/* Plan de Gobierno */}
                  <div className="card border-0 shadow-sm mb-4">
                    <div className="card-body p-4">
                      <h4 className="mb-4" style={{ color: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545' }}>
                        <i className="bi bi-lightbulb-fill me-2"></i>
                        {t('candidatos.planGobierno.titulo')}
                      </h4>
                      
                      {candidato.planGobierno ? (
                        <>
                          {/* Ejes Temáticos */}
                          {candidato.planGobierno.ejesTematicos && candidato.planGobierno.ejesTematicos.length > 0 && (
                            <div className="mb-4">
                              <h5 className="mb-3" style={{ color: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545' }}>
                                <i className="bi bi-diagram-3 me-2"></i>
                                {t('candidatos.planGobierno.ejesTematicos')}
                              </h5>
                              <div className="d-flex flex-wrap gap-2">
                                {candidato.planGobierno.ejesTematicos.map((eje, index) => (
                                  <span 
                                    key={index}
                                    className="badge bg-light text-dark border px-3 py-2"
                                    style={{ fontSize: '0.9rem' }}
                                  >
                                    <i className="bi bi-check-circle-fill me-2" style={{ color: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545' }}></i>
                                    {eje}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Propuestas Principales */}
                          {candidato.planGobierno.propuestas && candidato.planGobierno.propuestas.length > 0 && (
                            <div>
                              <h5 className="mb-3" style={{ color: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545' }}>
                                <i className="bi bi-list-check me-2"></i>
                                {t('candidatos.planGobierno.propuestas')}
                              </h5>
                              <div className="list-group list-group-flush">
                                {candidato.planGobierno.propuestas.map((propuesta, index) => (
                                  <div 
                                    key={index}
                                    className="list-group-item border-0 px-0 py-3 animate-slide-up"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                  >
                                    <div className="d-flex gap-3">
                                      <div 
                                        className="flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                                        style={{ 
                                          width: '32px', 
                                          height: '32px',
                                          backgroundColor: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545',
                                          fontSize: '0.85rem'
                                        }}
                                      >
                                        {index + 1}
                                      </div>
                                      <div className="flex-grow-1">
                                        <p className="mb-0 text-dark">{propuesta}</p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="text-center py-5">
                          <i className="bi bi-file-text text-muted" style={{ fontSize: '3rem' }}></i>
                          <p className="text-muted mt-3">{t('candidatos.hojaVida.noInformacion')}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'noticias' && (
                <div className="animate-fade-in">
                  <div className="row g-4">
                    {/* Noticias Destacadas - 3 grandes */}
                    {candidato.noticias && candidato.noticias.filter(n => n.destacada).length > 0 && (
                      <>
                        <div className="col-12">
                          <h4 className="mb-3" style={{ color: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545' }}>
                            <i className="bi bi-newspaper me-2"></i>
                            {t('candidatos.noticiasDestacadas')}
                          </h4>
                        </div>
                        {candidato.noticias.filter(n => n.destacada).slice(0, 3).map((noticia, index) => (
                          <div className="col-12 col-md-6 col-lg-4" key={index}>
                            <div className="card border-0 shadow-sm h-100 animate-hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                              <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
                                <img 
                                  src={noticia.imagen} 
                                  alt={noticia.titulo}
                                  className="w-100 h-100"
                                  style={{ objectFit: 'cover' }}
                                />
                                <div 
                                  className="position-absolute top-0 start-0 px-3 py-1 text-white fw-bold"
                                  style={{ 
                                    backgroundColor: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545',
                                    fontSize: '0.75rem'
                                  }}
                                >
                                  DESTACADA
                                </div>
                              </div>
                              <div className="card-body">
                                <h5 className="card-title fw-bold mb-3" style={{ fontSize: '1.1rem' }}>
                                  {noticia.titulo}
                                </h5>
                                <div className="d-flex justify-content-between align-items-center">
                                  <span className="text-muted small">
                                    <i className="bi bi-newspaper me-1"></i>
                                    {noticia.fuente}
                                  </span>
                                  <span className="text-muted small">
                                    <i className="bi bi-clock me-1"></i>
                                    {noticia.fecha}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    )}

                    {/* Otras Noticias - 4 pequeñas */}
                    {candidato.noticias && candidato.noticias.filter(n => !n.destacada).length > 0 && (
                      <>
                        <div className="col-12 mt-4">
                          <h5 className="mb-3" style={{ color: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545' }}>
                            <i className="bi bi-list-ul me-2"></i>
                            {t('candidatos.masNoticias')}
                          </h5>
                        </div>
                        {candidato.noticias.filter(n => !n.destacada).slice(0, 4).map((noticia, index) => (
                          <div className="col-12 col-md-6" key={index}>
                            <div className="card border-0 shadow-sm animate-hover-lift" style={{ animationDelay: `${(index + 3) * 0.1}s` }}>
                              <div className="row g-0">
                                <div className="col-4">
                                  <div 
                                    className="h-100 position-relative overflow-hidden"
                                    style={{ minHeight: '120px' }}
                                  >
                                    <img 
                                      src={noticia.imagen} 
                                      alt={noticia.titulo}
                                      className="w-100 h-100"
                                      style={{ objectFit: 'cover' }}
                                    />
                                  </div>
                                </div>
                                <div className="col-8">
                                  <div className="card-body">
                                    <h6 className="card-title fw-bold mb-2" style={{ fontSize: '0.95rem', lineHeight: '1.3' }}>
                                      {noticia.titulo}
                                    </h6>
                                    <p className="text-muted small mb-1">
                                      <i className="bi bi-newspaper me-1"></i>
                                      {noticia.fuente}
                                    </p>
                                    <p className="text-muted small mb-0">
                                      <i className="bi bi-clock me-1"></i>
                                      {noticia.fecha}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    )}

                    {/* Mensaje si no hay noticias */}
                    {(!candidato.noticias || candidato.noticias.length === 0) && (
                      <div className="col-12">
                        <div className="card border-0 shadow-sm">
                          <div className="card-body text-center py-5">
                            <i className="bi bi-newspaper text-muted" style={{ fontSize: '3rem' }}></i>
                            <p className="text-muted mt-3 mb-0">{t('candidatos.noNoticias')}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'actividades' && (
                <div className="animate-fade-in">
                  <div className="row g-4">
                    <div className="col-12">
                      <h4 className="mb-4" style={{ color: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545' }}>
                        <i className="bi bi-calendar-event me-2"></i>
                        {t('candidatos.agendaActividades')}
                      </h4>
                    </div>

                    {candidato.actividades && candidato.actividades.length > 0 ? (
                      candidato.actividades.map((actividad, index) => (
                        <div className="col-12 col-md-6 col-lg-4" key={index}>
                          <div className="card border-0 shadow-sm h-100 animate-hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="card-body p-0">
                              {/* Fecha Header */}
                              <div 
                                className="text-center text-white p-4"
                                style={{ 
                                  backgroundColor: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545'
                                }}
                              >
                                <div className="fw-bold mb-1" style={{ fontSize: '3rem', lineHeight: '1' }}>
                                  {actividad.dia}
                                </div>
                                <div className="text-uppercase" style={{ fontSize: '0.9rem', letterSpacing: '2px' }}>
                                  {actividad.mes}
                                </div>
                              </div>
                              
                              {/* Contenido */}
                              <div className="p-4">
                                <h5 className="card-title fw-bold mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.4', minHeight: '50px' }}>
                                  {actividad.titulo}
                                </h5>
                                <div className="mb-2 d-flex align-items-start">
                                  <i className="bi bi-geo-alt-fill me-2 mt-1" style={{ color: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545', fontSize: '1.1rem' }}></i>
                                  <span className="text-muted" style={{ fontSize: '0.95rem' }}>{actividad.lugar}</span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <i className="bi bi-clock-fill me-2" style={{ color: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545', fontSize: '1.1rem' }}></i>
                                  <span className="text-muted" style={{ fontSize: '0.95rem' }}>{actividad.hora}</span>
                                </div>
                              </div>
                              
                              {/* Botón */}
                              <div className="px-4 pb-4">
                                <button 
                                  className="btn btn-sm w-100 text-white fw-semibold py-2"
                                  style={{ 
                                    backgroundColor: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545',
                                    border: 'none',
                                    transition: 'all 0.3s ease'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                  }}
                                >
                                  <i className="bi bi-calendar-plus me-2"></i>
                                  Agregar al Calendario
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-12">
                        <div className="card border-0 shadow-sm">
                          <div className="card-body text-center py-5">
                            <i className="bi bi-calendar-x text-muted" style={{ fontSize: '3rem' }}></i>
                            <p className="text-muted mt-3 mb-0">{t('candidatos.noActividades')}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              {/* News Section */}
              <div className="card border-0 shadow-sm mb-4 animate-slide-right">
                <div className="card-body">
                  <h5 className="card-title mb-4" style={{ color: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545' }}>
                    <i className="bi bi-newspaper me-2"></i>
                    {t('candidatos.ultimasNoticias')}
                  </h5>
                  <div className="d-flex flex-column gap-3">
                    {candidato.noticias && candidato.noticias.length > 0 ? (
                      candidato.noticias.slice(0, 3).map((noticia, index) => (
                        <div className="news-card-bootstrap p-3 border rounded animate-hover-lift" key={index}>
                          <div className="d-flex gap-3">
                            <img 
                              src={noticia.imagen} 
                              alt="Noticia"
                              className="news-img rounded"
                            />
                            <div className="flex-grow-1">
                              <h6 className="fw-bold mb-2">{noticia.titulo}</h6>
                              <p className="text-muted small mb-0">
                                <i className="bi bi-newspaper me-1"></i>
                                {noticia.fuente} - {noticia.fecha}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-muted text-center py-4">
                        <i className="bi bi-newspaper me-2"></i>
                        {t('candidatos.noNoticiasRecientes')}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Activities Section */}
              <div className="card border-0 shadow-sm animate-slide-right" style={{animationDelay: '0.2s'}}>
                <div className="card-body">
                  <h5 className="card-title mb-4" style={{ color: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545' }}>
                    <i className="bi bi-calendar-event me-2"></i>
                    {t('candidatos.actividadesPublicas')}
                  </h5>
                  <div className="d-flex flex-column gap-3">
                    {candidato.actividades && candidato.actividades.length > 0 ? (
                      candidato.actividades.slice(0, 3).map((actividad, index) => (
                        <div className="activity-card-bootstrap p-3 border rounded animate-hover-lift" key={index}>
                          <div className="d-flex gap-3 align-items-start">
                            <div className="activity-date-badge bg-gradient text-white text-center rounded p-2" style={{ 
                              backgroundColor: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545' 
                            }}>
                              <div className="fw-bold fs-4">{actividad.dia}</div>
                              <div className="small text-uppercase">{actividad.mes}</div>
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="fw-bold mb-2">{actividad.titulo}</h6>
                              <p className="text-muted small mb-1">
                                <i className="bi bi-geo-alt-fill me-1"></i>
                                {actividad.lugar}
                              </p>
                              <p className="text-muted small mb-0">
                                <i className="bi bi-clock-fill me-1"></i>
                                {actividad.hora}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-muted text-center py-4">
                        <i className="bi bi-calendar-x me-2"></i>
                        {t('candidatos.noActividadesProgramadas')}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-top py-5 mt-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="logo-icon">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                </div>
                <span className="fw-bold" style={{ color: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545' }}>Elecciones Perú 2026</span>
              </div>
              <p className="text-muted small">
                Portal de información electoral oficial. Conoce a los candidatos y haz tu voto informado.
              </p>
            </div>
            <div className="col-md-4">
              <h6 className="fw-bold mb-3">{t('footer.enlacesRapidos')}</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-muted">
                    <i className="bi bi-chevron-right me-2"></i>{t('footer.sobreNosotros')}
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-muted">
                    <i className="bi bi-chevron-right me-2"></i>{t('footer.contactoLink')}
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-muted">
                    <i className="bi bi-chevron-right me-2"></i>{t('footer.terminos')}
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-muted">
                    <i className="bi bi-chevron-right me-2"></i>{t('footer.privacidad')}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6 className="fw-bold mb-3">{t('footer.fuentesOficiales')}</h6>
              <p className="text-muted small mb-2">
                <i className="bi bi-shield-check me-2 text-success"></i>
                {t('footer.jne')}
              </p>
              <p className="text-muted small mb-2">
                <i className="bi bi-shield-check me-2 text-success"></i>
                {t('footer.onpe')}
              </p>
            </div>
          </div>
          <hr className="my-4"/>
          <div className="text-center text-muted small">
            <p className="mb-0">
              © 2025 {t('footer.portal')}. {t('footer.derechos')} | 
              <span className="ms-2" style={{ color: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545' }}>
                <i className="bi bi-heart-fill"></i> {t('footer.hechoEnPeru')}
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Candidatos;