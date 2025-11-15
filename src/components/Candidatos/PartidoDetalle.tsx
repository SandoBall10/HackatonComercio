import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PARTIDOS, Partido, DetalleCandidato } from "../../data/partidos";
import { candidatos } from "../../data/candidatos";

// Componente para imágenes con fallback
const ImageWithFallback: React.FC<{
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}> = ({ src, alt, className = "", style }) => {
  const [error, setError] = useState(false);
  
  if (error || !src) {
    return (
      <div className={`${className} bg-secondary d-flex align-items-center justify-content-center`} style={style}>
        <span className="text-white fs-2 fw-bold">
          {alt?.charAt(0) || ""}
        </span>
      </div>
    );
  }
  
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setError(true)}
    />
  );
};

const pestañas = [
  { nombre: "presidencial", label: "Plancha Presidencial", icon: "👤" },
  { nombre: "diputados", label: "Cámara de Diputados", icon: "📋" },
  { nombre: "senadores", label: "Cámara de Senadores", icon: "🏛️" },
  { nombre: "parlamento", label: "Parlamento Andino", icon: "🌎" }
];

const PartidoDetalle: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const partido: Partido | undefined = PARTIDOS.find((p) => String(p.id) === String(id));
  const [activeTab, setActiveTab] = useState<string>("presidencial");

  if (!partido) return <div className="container py-5">Partido no encontrado</div>;

  // Mapeo de colores por partido
  const coloresPorPartido: Record<string, { primario: string; secundario: string; terciario: string; rgb: string }> = {
    'accion-popular': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' },
    'fuerza-popular': { primario: '#FF6B00', secundario: '#FF8C00', terciario: '#CC5500', rgb: '255, 107, 0' },
    'partido-trabajadores-pte-peru': { primario: '#1E40AF', secundario: '#FFC107', terciario: '#1565C0', rgb: '30, 64, 175' },
    'ahora-nacion': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' },
    'juntos-por-el-peru': { primario: '#DC143C', secundario: '#00A859', terciario: '#8B0E27', rgb: '220, 20, 60' },
    'partido-del-buen-gobierno': { primario: '#E31B23', secundario: '#FFC107', terciario: '#A01419', rgb: '227, 27, 35' },
    'alianza-para-el-progreso': { primario: '#1E40AF', secundario: '#E31B23', terciario: '#1565C0', rgb: '30, 64, 175' },
    'libertad-popular': { primario: '#FFC107', secundario: '#1a1a1a', terciario: '#FFD54F', rgb: '255, 193, 7' },
    'partido-democrata-unido-peru': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' },
    'avanza-pais': { primario: '#1E40AF', secundario: '#E31B23', terciario: '#1565C0', rgb: '30, 64, 175' },
    'nuevo-peru-por-el-buen-vivir': { primario: '#E31B23', secundario: '#FFC107', terciario: '#A01419', rgb: '227, 27, 35' },
    'partido-democrata-verde': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' },
    'batalla-peru': { primario: '#1E40AF', secundario: '#E31B23', terciario: '#1a1a1a', rgb: '30, 64, 175' },
    'partido-aprista-peruano': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' },
    'partido-democratico-federal': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' },
    'fe-en-el-peru': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' },
    'partido-ciudadanos-por-el-peru': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' },
    'partido-democratico-somos-peru': { primario: '#1E40AF', secundario: '#E31B23', terciario: '#1565C0', rgb: '30, 64, 175' },
    'frente-popular-agricola-fia': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' },
    'partido-civico-obras': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' },
    'frente-de-la-esperanza-2021': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' },
    'partido-morado': { primario: '#7B1FA2', secundario: '#6A1B9A', terciario: '#4A148C', rgb: '123, 31, 162' },
    'partido-politico-peru-accion': { primario: '#E31B23', secundario: '#1E40AF', terciario: '#00A859', rgb: '227, 27, 35' },
    'peru-moderno': { primario: '#FFC107', secundario: '#E91E63', terciario: '#1a1a1a', rgb: '255, 193, 7' },
    'partido-pais-para-todos': { primario: '#FFC107', secundario: '#1a1a1a', terciario: '#FFD54F', rgb: '255, 193, 7' },
    'partido-peru-primero': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' },
    'podemos-peru': { primario: '#1E40AF', secundario: '#FF6B00', terciario: '#1565C0', rgb: '30, 64, 175' },
    'partido-patriotico-del-peru': { primario: '#1a1a1a', secundario: '#2d2d2d', terciario: '#0a0a0a', rgb: '26, 26, 26' },
    'peruanos-unidos-somos-libres': { primario: '#1E40AF', secundario: '#1E3A8A', terciario: '#1565C0', rgb: '30, 64, 175' },
    'primero-la-gente': { primario: '#00A859', secundario: '#1E40AF', terciario: '#006435', rgb: '0, 168, 89' },
    'cooperacion-popular': { primario: '#E31B23', secundario: '#00A859', terciario: '#FFC107', rgb: '227, 27, 35' },
    'voces-del-pueblo': { primario: '#DC143C', secundario: '#B21131', terciario: '#8B0E27', rgb: '220, 20, 60' },
    'progresemos': { primario: '#00A859', secundario: '#008647', terciario: '#006435', rgb: '0, 168, 89' },
    'fuerza-moderna': { primario: '#1E40AF', secundario: '#1E3A8A', terciario: '#1565C0', rgb: '30, 64, 175' },
    'prin': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' },
    'renovacion-popular': { primario: '#1E40AF', secundario: '#1E3A8A', terciario: '#1565C0', rgb: '30, 64, 175' },
    'integridad-democratica': { primario: '#1E40AF', secundario: '#1E3A8A', terciario: '#1565C0', rgb: '30, 64, 175' },
    'partido-popular-cristiano': { primario: '#E31B23', secundario: '#00A859', terciario: '#A01419', rgb: '227, 27, 35' },
    'salvemos-al-peru': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' },
    'peru-libre': { primario: '#DC143C', secundario: '#B21131', terciario: '#8B0E27', rgb: '220, 20, 60' },
    'partido-si-creo': { primario: '#E31B23', secundario: '#1a1a1a', terciario: '#A01419', rgb: '227, 27, 35' },
    'un-camino-diferente': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' },
    'unidad-y-paz': { primario: '#E31B23', secundario: '#C21820', terciario: '#A01419', rgb: '227, 27, 35' }
  };

  // Normalizar el ID del partido para búsqueda
  const partidoIdNormalizado = String(partido.id).toLowerCase().replace(/[^a-z0-9-]/g, '-');
  
  // Obtener colores del partido o usar colores por defecto
  const coloresPartido = coloresPorPartido[partidoIdNormalizado] || {
    primario: '#dc3545',
    secundario: '#c82333',
    terciario: '#8b2131',
    rgb: '220, 53, 69'
  };

  const colorPrimario = coloresPartido.primario;
  const colorSecundario = coloresPartido.secundario;
  const colorTerciario = coloresPartido.terciario;
  const colorPrimarioRgb = coloresPartido.rgb;

  // Buscar candidatos del partido desde candidatos.js
  const candidatosReales = candidatos.filter(c => {
    const partidoNormalizado = c.partido.toLowerCase().replace(/[^a-z0-9]/g, '');
    const nombrePartidoNormalizado = partido.nombre.toLowerCase().replace(/[^a-z0-9]/g, '');
    return partidoNormalizado.includes(nombrePartidoNormalizado.substring(0, 10)) ||
           nombrePartidoNormalizado.includes(partidoNormalizado.substring(0, 10));
  });

  // Crear plancha presidencial completa
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

  // Obtener datos del partido
  const diputados = partido.diputados || [];
  const senadores = partido.senadores || [];
  const parlamentoAndino = partido.parlamentariosAndinos || [];

  return (
    <div className="min-vh-100 bg-light">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .tab-content > div {
          animation: fadeIn 0.5s ease-out;
        }

        .nav-link {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 4px;
          background: linear-gradient(90deg, #dc3545, #c82333);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
          border-radius: 2px 2px 0 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(220, 53, 69, 0.05);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nav-link:hover::before {
          width: 100%;
        }

        .nav-link:hover::after {
          opacity: 1;
        }

        .nav-link.active::before {
          width: 100%;
          box-shadow: 0 0 10px rgba(220, 53, 69, 0.5);
        }

        .nav-link.active::after {
          opacity: 1;
        }

        .nav-link:hover {
          transform: translateY(-3px);
        }

        .card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s ease;
        }

        .card:hover::before {
          left: 100%;
        }

        .card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2) !important;
        }

        .badge {
          transition: all 0.3s ease;
        }

        .badge:hover {
          transform: scale(1.05);
        }

        .btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(220, 53, 69, 0.4) !important;
        }

        .alert {
          animation: slideIn 0.4s ease-out;
        }

        .list-group-item, .card-body {
          animation: fadeIn 0.3s ease-out backwards;
        }

        .list-group-item:nth-child(1) { animation-delay: 0.1s; }
        .list-group-item:nth-child(2) { animation-delay: 0.15s; }
        .list-group-item:nth-child(3) { animation-delay: 0.2s; }
        .list-group-item:nth-child(4) { animation-delay: 0.25s; }
        .list-group-item:nth-child(5) { animation-delay: 0.3s; }
        .list-group-item:nth-child(6) { animation-delay: 0.35s; }

        .col-12:nth-child(1) .card { animation-delay: 0.1s; }
        .col-12:nth-child(2) .card { animation-delay: 0.2s; }
        .col-12:nth-child(3) .card { animation-delay: 0.3s; }

        .rounded-circle {
          transition: transform 0.3s ease;
        }

        .rounded-circle:hover {
          transform: rotate(360deg);
        }

        .position-relative img {
          transition: transform 0.5s ease;
        }

        .card:hover .position-relative img {
          transform: scale(1.05);
        }

        @media (prefers-reduced-motion: reduce) {
          *, ::before, ::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Estilos personalizados */
        .party-tabs-dynamic {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          border-bottom: 2px solid #dc3545;
          padding-bottom: 0.5rem;
        }

        .tab-btn-dynamic {
          flex: 1;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 0.375rem;
          background: transparent;
          color: #6c757d;
          font-weight: 500;
          font-size: 1rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .tab-btn-dynamic.active {
          color: #dc3545;
          font-weight: 600;
        }

        .tab-btn-dynamic:hover {
          transform: translateY(-2px);
        }

        .tab-icon {
          display: inline-block;
          margin-right: 0.5rem;
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        .tab-btn-dynamic.active .tab-icon {
          transform: scale(1.2);
        }

        .tab-content > div {
          animation: fadeIn 0.5s ease-out;
        }

        /* Navegación con Tabs en cuadrados separados y centrados */
        .tabs-card-container {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .party-tabs-dynamic {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          border-bottom: 2px solid #dc3545;
          padding-bottom: 0.5rem;
        }

        .tab-btn-dynamic {
          flex: 1;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 0.375rem;
          background: transparent;
          color: #6c757d;
          font-weight: 500;
          font-size: 1rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .tab-btn-dynamic.active {
          color: #dc3545;
          font-weight: 600;
        }

        .tab-btn-dynamic:hover {
          transform: translateY(-2px);
        }

        .tab-icon {
          display: inline-block;
          margin-right: 0.5rem;
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }

        .tab-btn-dynamic.active .tab-icon {
          transform: scale(1.2);
        }

        .tab-content > div {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>

      <div className="container py-4">
        {/* Header */}
        <header className="d-flex align-items-center justify-content-between mb-4" style={{ animation: 'slideIn 0.6s ease-out' }}>
          <div className="d-flex align-items-center gap-3">
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center text-white" 
              style={{ 
                width: 44, 
                height: 44,
                background: `linear-gradient(135deg, ${colorPrimario}, ${colorSecundario})`,
                animation: 'float 3s ease-in-out infinite',
                boxShadow: `0 4px 15px rgba(${colorPrimarioRgb}, 0.3)`
              }}
            >
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor"/>
              </svg>
            </div>
            <h2 className="h5 mb-0 fw-bold" style={{ color: '#2d3748' }}>Elecciones Perú 2026</h2>
          </div>
        </header>

        {/* Card del Partido */}
        <div className="card mb-4 border-0" style={{ 
          animation: 'scaleIn 0.5s ease-out',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
        }}>
          <div className="card-body p-4">
            <div className="d-flex align-items-center gap-4 mb-4">
              <div
                className="rounded bg-white"
                style={{
                  width: 96,
                  height: 96,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url('${partido.logo || `/logos/${partido.id}.svg`}')`,
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
              />
              <div className="flex-grow-1">
                <h3 className="h4 mb-2 fw-bold" style={{ 
                  color: '#1a202c',
                  letterSpacing: '-0.5px'
                }}>{partido.nombre}</h3>
                <div className="d-flex align-items-center gap-2">
                  <span className="badge" style={{ 
                    background: `linear-gradient(135deg, ${colorPrimario}, ${colorSecundario})`,
                    padding: '6px 12px',
                    fontSize: '0.85rem'
                  }}>
                    {partido.siglas || "N/A"}
                  </span>
                </div>
              </div>
            </div>
            <button 
              className="btn w-100 text-white fw-semibold py-3 position-relative"
              onClick={() => navigate(`/candidatos/${partido.siglas?.toLowerCase() || partido.id}`)}
              style={{
                background: `linear-gradient(135deg, ${colorPrimario} 0%, ${colorSecundario} 100%)`,
                border: 'none',
                borderRadius: '12px',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                boxShadow: `0 6px 20px rgba(${colorPrimarioRgb}, 0.4)`,
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = `0 10px 30px rgba(${colorPrimarioRgb}, 0.5)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 6px 20px rgba(${colorPrimarioRgb}, 0.4)`;
              }}
            >
              <span style={{ 
                position: 'relative', 
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                Ver Candidato Presidencial
              </span>
            </button>
          </div>
        </div>

        {/* Navegación con Tabs estilo moderno */}
        <div className="mb-4" style={{ animation: 'fadeIn 0.6s ease-out 0.2s backwards' }}>
          <div className="bg-white rounded-4 p-3 shadow-sm">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {pestañas.map((tab, index) => (
                <button
                  key={tab.nombre}
                  className={`btn position-relative ${activeTab === tab.nombre ? '' : ''}`}
                  onClick={() => setActiveTab(tab.nombre)}
                  type="button"
                  style={{
                    padding: '12px 24px',
                    borderRadius: '50px',
                    border: activeTab === tab.nombre ? `2px solid ${colorPrimario}` : '2px solid #e5e7eb',
                    background: activeTab === tab.nombre 
                      ? `linear-gradient(135deg, ${colorPrimario}, ${colorSecundario})` 
                      : 'white',
                    color: activeTab === tab.nombre ? 'white' : '#6c757d',
                    fontWeight: activeTab === tab.nombre ? '600' : '500',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: activeTab === tab.nombre 
                      ? `0 6px 20px rgba(${colorPrimarioRgb}, 0.35)` 
                      : '0 2px 8px rgba(0, 0, 0, 0.05)',
                    transform: activeTab === tab.nombre ? 'translateY(-2px)' : 'translateY(0)',
                    animation: `fadeIn 0.4s ease-out ${index * 0.1}s backwards`
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== tab.nombre) {
                      e.currentTarget.style.borderColor = colorPrimario;
                      e.currentTarget.style.color = colorPrimario;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== tab.nombre) {
                      e.currentTarget.style.borderColor = '#e5e7eb';
                      e.currentTarget.style.color = '#6c757d';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                    }
                  }}
                >
                  <span style={{ fontSize: '1.2rem', marginRight: '8px' }}>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contenido de Tabs */}
        <div className="tab-content">
          {/* Tab: Plancha Presidencial */}
          {activeTab === 'presidencial' && (
            <div>
              <div className="alert border-0 mb-4" style={{ 
                background: `linear-gradient(135deg, rgba(${colorPrimarioRgb}, 0.1) 0%, rgba(${colorPrimarioRgb}, 0.05) 100%)`,
                borderLeft: `4px solid ${colorPrimario}`,
                animation: 'slideInRight 0.5s ease-out',
                boxShadow: `0 4px 15px rgba(${colorPrimarioRgb}, 0.1)`
              }}>
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${colorPrimario}, ${colorSecundario})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem',
                    animation: 'bounceIn 0.6s ease-out'
                  }}>
                    👤
                  </div>
                  <h3 className="alert-heading h5 mb-0 fw-bold" style={{ color: colorPrimario }}>Plancha Presidencial</h3>
                </div>
                <p className="mb-0 small text-secondary ms-5 ps-2">
                  <span className="badge me-2" style={{ background: colorPrimario }}>3</span>
                  Candidatos inscritos
                </p>
              </div>

              <div className="row g-4">
                {planchaPresidencial.map((candidato, index) => (
                  <div className="col-12 col-md-6 col-lg-4" key={candidato.id}>
                    <div className="card h-100 shadow-sm border-0 overflow-hidden" style={{ animation: 'scaleIn 0.5s ease-out' }}>
                      <div className="position-relative" style={{ overflow: 'hidden' }}>
                        <ImageWithFallback
                          src={candidato.foto || partido.logo || ""}
                          alt={candidato.nombre}
                          className="card-img-top"
                          style={{ height: '350px', objectFit: 'cover' }}
                        />
                      </div>
                      <div className="card-body text-center py-4">
                        <h4 className="card-title fw-bold mb-2">{candidato.nombre}</h4>
                        <span className="badge bg-danger-subtle text-danger px-3 py-2">
                          {candidato.cargo}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab: Diputados */}
          {activeTab === 'diputados' && (
            <div>
              <div className="alert border-0 mb-4" style={{ 
                background: `linear-gradient(135deg, rgba(${colorPrimarioRgb}, 0.1) 0%, rgba(${colorPrimarioRgb}, 0.05) 100%)`,
                borderLeft: `4px solid ${colorPrimario}`
              }}>
                <h3 className="alert-heading h5 mb-2 fw-bold" style={{ color: colorPrimario }}>Cámara de Diputados</h3>
                <p className="mb-2 small text-secondary">
                  Candidatos por circunscripción electoral - Total: {diputados.length}
                </p>
                <p className="mb-0 small text-muted">
                  💡 Los diputados representan las circunscripciones electorales
                </p>
              </div>

              {diputados.length > 0 ? (
                <div className="row g-3">
                  {diputados.map((diputado, index) => (
                    <div className="col-12 col-md-6" key={diputado.id}>
                      <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-3">
                          <div className="d-flex gap-3">
                            <div className="position-relative flex-shrink-0">
                              <ImageWithFallback
                                src={diputado.foto || ""}
                                alt={diputado.nombre}
                                className="rounded-3"
                                style={{ width: 64, height: 64, objectFit: 'cover' }}
                              />
                              <div 
                                className="position-absolute bottom-0 end-0 bg-danger text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                                style={{ width: 24, height: 24, fontSize: '0.75rem', transform: 'translate(25%, 25%)' }}
                              >
                                {index + 1}
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h5 className="mb-1 fw-bold">{diputado.nombre}</h5>
                              <p className="mb-2 small text-muted">{partido.nombre}</p>
                              <div className="d-flex align-items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                  <circle cx="12" cy="10" r="3"/>
                                </svg>
                                <span className="badge bg-primary-subtle text-primary small">
                                  {diputado.circunscripcion}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="card border-0 shadow-sm">
                  <div className="card-body text-center py-5">
                    <p className="text-muted mb-0">No hay diputados registrados para este partido.</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab: Senadores */}
          {activeTab === 'senadores' && (
            <div>
              <div className="alert border-0 mb-4" style={{ 
                background: `linear-gradient(135deg, rgba(${colorPrimarioRgb}, 0.1) 0%, rgba(${colorPrimarioRgb}, 0.05) 100%)`,
                borderLeft: `4px solid ${colorPrimario}`
              }}>
                <h3 className="alert-heading h5 mb-2 fw-bold" style={{ color: colorPrimario }}>Cámara de Senadores</h3>
                <p className="mb-2 small text-secondary">
                  Representantes nacionales y regionales - Total: {senadores.length}
                </p>
                <p className="mb-0 small text-muted">
                  💡 Los senadores representan a nivel nacional y regional
                </p>
              </div>

              {senadores.length > 0 ? (
                <div className="row g-3">
                  {senadores.map((senador, index) => (
                    <div className="col-12 col-md-6" key={senador.id}>
                      <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-3">
                          <div className="d-flex gap-3">
                            <div className="position-relative flex-shrink-0">
                              <ImageWithFallback
                                src={senador.foto || ""}
                                alt={senador.nombre}
                                className="rounded-3"
                                style={{ width: 64, height: 64, objectFit: 'cover' }}
                              />
                              <div 
                                className="position-absolute bottom-0 end-0 bg-danger text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                                style={{ width: 24, height: 24, fontSize: '0.75rem', transform: 'translate(25%, 25%)' }}
                              >
                                {index + 1}
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h5 className="mb-1 fw-bold">{senador.nombre}</h5>
                              <p className="mb-2 small text-muted">{partido.nombre}</p>
                              <div className="d-flex align-items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-warning">
                                  <circle cx="12" cy="8" r="6"/>
                                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                                </svg>
                                <span className="badge bg-warning-subtle text-warning small">
                                  {senador.ambito}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="card border-0 shadow-sm">
                  <div className="card-body text-center py-5">
                    <p className="text-muted mb-0">No hay senadores registrados para este partido.</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab: Parlamento Andino */}
          {activeTab === 'parlamento' && (
            <div>
              <div className="alert border-0 mb-4" style={{ background: 'linear-gradient(to right, #e7f3ff, #fff5f5)' }}>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-danger">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                    <path d="M2 12h20"/>
                  </svg>
                  <h3 className="alert-heading h5 text-danger mb-0">Parlamento Andino</h3>
                </div>
                <p className="mb-2 small text-secondary">
                  Representantes peruanos ante el organismo supranacional andino
                </p>
                <p className="mb-1 small text-muted">
                  🌎 El Parlamento Andino es el órgano deliberante de la Comunidad Andina (CAN)
                </p>
                <p className="mb-0 small text-muted">
                  📍 Países miembros: Bolivia, Colombia, Ecuador, Perú y Chile (asociado)
                </p>
              </div>

              <div className="alert alert-info border-0 mb-4" style={{ backgroundColor: '#e7f3ff' }}>
                <h4 className="alert-heading h6 text-primary">¿Qué es el Parlamento Andino?</h4>
                <p className="mb-3 small">
                  Es una institución parlamentaria de carácter supranacional que representa a los pueblos de la Comunidad Andina. Sus representantes son elegidos por voto popular directo y universal.
                </p>
                <div className="row g-2">
                  <div className="col-6">
                    <div className="card bg-white border-0">
                      <div className="card-body p-3">
                        <p className="small text-primary fw-semibold mb-1">Funciones</p>
                        <p className="small text-muted mb-0">Promover la integración andina</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card bg-white border-0">
                      <div className="card-body p-3">
                        <p className="small text-primary fw-semibold mb-1">Ámbito</p>
                        <p className="small text-muted mb-0">5 países andinos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {parlamentoAndino.length > 0 ? (
                <div className="row g-3 mb-4">
                  {parlamentoAndino.map((parlamentario, index) => (
                    <div className="col-12 col-md-6" key={parlamentario.id}>
                      <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-3">
                          <div className="d-flex gap-3">
                            <div className="position-relative flex-shrink-0">
                              <ImageWithFallback
                                src={parlamentario.foto || ""}
                                alt={parlamentario.nombre}
                                className="rounded-3"
                                style={{ width: 64, height: 64, objectFit: 'cover' }}
                              />
                              <div 
                                className="position-absolute bottom-0 end-0 text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                                style={{ 
                                  width: 24, 
                                  height: 24, 
                                  fontSize: '0.75rem', 
                                  transform: 'translate(25%, 25%)',
                                  background: 'linear-gradient(135deg, #0d6efd, #dc3545)'
                                }}
                              >
                                {index + 1}
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <h5 className="mb-1 fw-bold">{parlamentario.nombre}</h5>
                              <p className="mb-2 small text-muted">{partido.nombre}</p>
                              <div className="d-flex align-items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                  <circle cx="12" cy="12" r="10"/>
                                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                                  <path d="M2 12h20"/>
                                </svg>
                                <span className="badge small" style={{ background: 'linear-gradient(to right, #e7f3ff, #fff5f5)', color: '#0d6efd' }}>
                                  Parlamento Andino
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body text-center py-5">
                    <p className="text-muted mb-0">No hay parlamentarios andinos registrados para este partido.</p>
                  </div>
                </div>
              )}

              <div className="alert alert-warning border-0">
                <h4 className="alert-heading h6 text-warning-emphasis">📌 Información importante</h4>
                <ul className="mb-0 small">
                  <li>Los parlamentarios andinos son elegidos en la misma cédula electoral</li>
                  <li>Tienen un periodo de 5 años</li>
                  <li>Promueven la integración y armonización legislativa</li>
                  <li>Participan en temas de comercio, migración y desarrollo</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center text-muted py-4 mt-5">
          <small>Datos obtenidos del Jurado Nacional de Elecciones - JNE. © 2024 Elecciones Perú 2026.</small>
        </footer>
      </div>
    </div>
  );
};

export default PartidoDetalle;