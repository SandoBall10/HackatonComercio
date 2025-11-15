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
      console.log('Candidato partido:', candidato.partido);
      console.log('Todos los partidos:', partidos);
    
    // Buscar el partido correspondiente
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
             siglasPartido === nombrePartido ||
             siglasPartido === 'rp'; // Agregar búsqueda específica por siglas
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
    'partido-trabajadores-pte-peru': { primario: '#DC143C', secundario: '#B21131', terciario: '#8B0E27', rgb: '220, 20, 60' }, // Rojo
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
    'partido-democratico-federal': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' }, // Rojo
    'fe-en-el-peru': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' }, // Verde
    'partido-ciudadanos-por-el-peru': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' }, // Rojo
    'partido-democratico-somos-peru': { primario: '#1E40AF', secundario: '#E31B23', terciario: '#1565C0', rgb: '30, 64, 175' }, // Azul y Rojo
    'frente-popular-agricola-fia': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' }, // Verde FREPAP
    'partido-civico-obras': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' }, // Verde
    'frente-de-la-esperanza-2021': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' }, // Verde
    'partido-morado': { primario: '#7B1FA2', secundario: '#6A1B9A', terciario: '#4A148C', rgb: '123, 31, 162' }, // Morado
    'partido-politico-peru-accion': { primario: '#E31B23', secundario: '#1E40AF', terciario: '#00A859', rgb: '227, 27, 35' }, // Rojo, Azul y Verde
    'peru-moderno': { primario: '#FFC107', secundario: '#E91E63', terciario: '#1a1a1a', rgb: '255, 193, 7' }, // Amarillo, Rosado y Negro
    'partido-pais-para-todos': { primario: '#FFC107', secundario: '#1a1a1a', terciario: '#FFD54F', rgb: '255, 193, 7' }, // Amarillo y Negro
    'partido-peru-primero': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' }, // Rojo
    'podemos-peru': { primario: '#1E40AF', secundario: '#FF6B00', terciario: '#1565C0', rgb: '30, 64, 175' }, // Azul y Anaranjado
    'partido-patriotico-del-peru': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' }, // Rojo
    'peruanos-unidos-somos-libres': { primario: '#1E40AF', secundario: '#1E3A8A', terciario: '#1565C0', rgb: '30, 64, 175' }, // Azul
    'primero-la-gente': { primario: '#00A859', secundario: '#1E40AF', terciario: '#006435', rgb: '0, 168, 89' }, // Verde y Azul
    'cooperacion-popular': { primario: '#E31B23', secundario: '#00A859', terciario: '#FFC107', rgb: '227, 27, 35' }, // Rojo, Verde y Amarillo
    'voces-del-pueblo': { primario: '#DC143C', secundario: '#B21131', terciario: '#8B0E27', rgb: '220, 20, 60' }, // Rojo intenso
    'progresemos': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' }, // Verde
    'fuerza-moderna': { primario: '#1E40AF', secundario: '#1E3A8A', terciario: '#1565C0', rgb: '30, 64, 175' }, // Azul
    'prin': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' }, // Verde
    'renovacion-popular': { primario: '#1E40AF', secundario: '#1E3A8A', terciario: '#1565C0', rgb: '30, 64, 175' }, // Azul
    'integridad-democratica': { primario: '#1E40AF', secundario: '#1E3A8A', terciario: '#1565C0', rgb: '30, 64, 175' }, // Azul
    'partido-popular-cristiano': { primario: '#FF6B00', secundario: '#FF8C00', terciario: '#CC5500', rgb: '255, 107, 0' }, // Naranja PPC
    'salvemos-al-peru': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' }, // Verde
    'peru-libre': { primario: '#DC143C', secundario: '#B21131', terciario: '#8B0E27', rgb: '220, 20, 60' }, // Rojo
    'partido-si-creo': { primario: '#1E40AF', secundario: '#1E3A8A', terciario: '#1565C0', rgb: '30, 64, 175' }, // Azul
    'un-camino-diferente': { primario: '#7B1FA2', secundario: '#6A1B9A', terciario: '#4A148C', rgb: '123, 31, 162' }, // Morado
    'unidad-y-paz': { primario: '#1E40AF', secundario: '#1E3A8A', terciario: '#1565C0', rgb: '30, 64, 175' } // Azul
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
                    <div className="d-flex align-items-start gap-4 gap-lg-5 flex-wrap mb-4">
                      {/* Avatar with advanced styling */}
                      <div className="position-relative animate-zoom-in">
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
                        <h1 className="profile-name-advanced mb-3" style={{ color: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : undefined }}>
                          {candidato.nombre || candidato.partido || 'Candidato Sin Nombre'}
                        </h1>
                        
                        <div className="profile-meta mb-3">
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <div className="meta-icon" style={{ 
                              background: colorPrimario,
                              boxShadow: `0 4px 12px rgba(${colorPrimarioRgb}, 0.25)`
                            }}>
                              <i className="bi bi-briefcase-fill" style={{ color: 'white' }}></i>
                            </div>
                            <span className="meta-text">{t('candidatos.cargo')} {candidato.partido}</span>
                          </div>
                        </div>

                        {/* Party Badge with Logo */}
                        <div className="party-badge-container">
                          {candidato.logoPartido && (
                            <div className="party-logo-wrapper">
                              <img 
                                className="party-logo-advanced" 
                                src={candidato.logoPartido} 
                                alt="Logo del partido"
                                onError={(e) => {
                                  console.log('Error cargando logo del partido');
                                  e.currentTarget.style.display = 'none';
                                }}
                                onLoad={() => console.log('Logo del partido cargado')}
                              />
                            </div>
                          )}
                          <div className="party-badge-advanced" style={{ 
                            background: colorPrimario,
                            boxShadow: `0 6px 20px rgba(${colorPrimarioRgb}, 0.3)`
                          }}>
                            <i className="bi bi-flag-fill me-2"></i>
                            {candidato.partido}
                          </div>
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

                {/* Right Section - CTA */}
                <div className="col-lg-4">
                  <div className="cta-section h-100 d-flex flex-column justify-content-center align-items-center p-5 p-lg-5">
                    <div className="cta-content text-center">
                      <div className="cta-icon mb-4" style={{
                        background: (esRenovacionPopular || esFuerzaPopular) ? 'white' : 'rgba(255, 255, 255, 0.2)'
                      }}>
                        <i className="bi bi-file-earmark-text" style={{
                          color: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : 'white'
                        }}></i>
                      </div>
                      <h5 className="cta-title mb-3">Plan de Gobierno</h5>
                      <p className="cta-description mb-4">
                        Descarga el plan completo de propuestas y conoce nuestras iniciativas
                      </p>
                      <button 
                        className="btn-download-advanced"
                        onClick={handleDownloadPDF}
                        disabled={!pdfPath}
                        style={{
                          opacity: pdfPath ? 1 : 0.6,
                          cursor: pdfPath ? 'pointer' : 'not-allowed',
                          background: !pdfPath 
                            ? colorPrimario
                            : 'white',
                          color: !pdfPath
                            ? 'white'
                            : colorPrimario
                        }}
                      >
                        <span className="btn-icon">
                          <i className="bi bi-download"></i>
                        </span>
                        <span className="btn-text">
                          {pdfPath ? 'Descargar PDF' : 'No Disponible'}
                        </span>
                        <span className="btn-shine"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <ul className="nav nav-pills nav-fill mb-4 shadow-sm bg-white rounded p-2 animate-slide-down">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'hoja-vida' ? 'active' : ''}`}
                onClick={() => setActiveTab('hoja-vida')}
              >
                <i className="bi bi-person-vcard me-2"></i>{t('candidatos.tabs.hojaVida')}
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'propuestas' ? 'active' : ''}`}
                onClick={() => setActiveTab('propuestas')}
              >
                <i className="bi bi-lightbulb me-2"></i>{t('candidatos.planGobierno.propuestas')}
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'noticias' ? 'active' : ''}`}
                onClick={() => setActiveTab('noticias')}
              >
                <i className="bi bi-newspaper me-2"></i>Noticias
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'actividades' ? 'active' : ''}`}
                onClick={() => setActiveTab('actividades')}
              >
                <i className="bi bi-calendar-event me-2"></i>Actividades
              </button>
            </li>
          </ul>

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
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              {/* News Section */}
              <div className="card border-0 shadow-sm mb-4 animate-slide-right">
                <div className="card-body">
                  <h5 className="card-title mb-4" style={{ color: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545' }}>
                    <i className="bi bi-newspaper me-2"></i>
                    Últimas Noticias
                  </h5>
                  <div className="d-flex flex-column gap-3">
                    {candidato.noticias && candidato.noticias.length > 0 ? (
                      candidato.noticias.map((noticia, index) => (
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
                        No hay noticias recientes disponibles.
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
                    Actividades Públicas
                  </h5>
                  <div className="d-flex flex-column gap-3">
                    {candidato.actividades && candidato.actividades.length > 0 ? (
                      candidato.actividades.map((actividad, index) => (
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
                        No hay actividades programadas.
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
              <h6 className="fw-bold mb-3">Enlaces Rápidos</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-muted">
                    <i className="bi bi-chevron-right me-2"></i>Sobre Nosotros
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-muted">
                    <i className="bi bi-chevron-right me-2"></i>Contacto
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-muted">
                    <i className="bi bi-chevron-right me-2"></i>Términos de Servicio
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-muted">
                    <i className="bi bi-chevron-right me-2"></i>Política de Privacidad
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6 className="fw-bold mb-3">Fuentes Oficiales</h6>
              <p className="text-muted small mb-2">
                <i className="bi bi-shield-check me-2 text-success"></i>
                Jurado Nacional de Elecciones (JNE)
              </p>
              <p className="text-muted small mb-2">
                <i className="bi bi-shield-check me-2 text-success"></i>
                Oficina Nacional de Procesos Electorales (ONPE)
              </p>
            </div>
          </div>
          <hr className="my-4"/>
          <div className="text-center text-muted small">
            <p className="mb-0">
              © 2025 Portal Electoral. Todos los derechos reservados. | 
              <span className="ms-2" style={{ color: (esRenovacionPopular || esFuerzaPopular) ? colorPrimario : '#dc3545' }}>
                <i className="bi bi-heart-fill"></i> Hecho en Perú
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Candidatos;
