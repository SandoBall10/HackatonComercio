import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './PartidosPoliticos.css';
import '../Inicio/Inicio.css';


interface Partido {
  id: number;
  nombre: string;
  siglas: string;
  logo: string;
  planGobierno?: string;
}

// Exportar el array de partidos
export const partidos: Partido[] = [
  { "id": 36, "nombre": "Renovación Popular", "siglas": "RP", "logo": "/logos/renovacion-popular.png", "planGobierno": "/pdf/plangobierno-rp.pdf" },
  { "id": 2, "nombre": "Fuerza Popular", "siglas": "FPu", "logo": "/logos/fuerza-popular.png" },
  { "id": 7, "nombre": "Alianza para el Progreso", "siglas": "APP", "logo": "/logos/alianza-para-el-progreso.png" },
  { "id": 1, "nombre": "Acción Popular", "siglas": "AP", "logo": "/logos/accion-popular.png" },
  { "id": 14, "nombre": "Partido Aprista Peruano", "siglas": "APRA", "logo": "/logos/partido-aprista-peruano.png" },
  { "id": 40, "nombre": "Perú Libre", "siglas": "PL", "logo": "/logos/peru-libre.png" },
  { "id": 44, "nombre": "Partido Político Nacional Perú Libre", "siglas": "PNPL", "logo": "/logos/peru-libre.png" },
  { "id": 27, "nombre": "Podemos Perú", "siglas": "PP", "logo": "/logos/podemos-peru.png" },
  { "id": 18, "nombre": "Partido Democrático Somos Perú", "siglas": "DSP", "logo": "/logos/somos-peru.png" },
  { "id": 10, "nombre": "Avanza País – Partido de Integración Social", "siglas": "APIS", "logo": "/logos/avanza-pais.png" },
  { "id": 22, "nombre": "Partido Morado", "siglas": "PM", "logo": "/logos/partido-morado.png" },
  { "id": 21, "nombre": "Frente de la Esperanza 2021", "siglas": "F21", "logo": "/logos/frente-esperanza-2021.png" },
  { "id": 11, "nombre": "Nuevo Perú por el Buen Vivir", "siglas": "NPBV", "logo": "/logos/nuevo-peru-por-el-buen-vivir.png" },
  { "id": 5, "nombre": "Juntos por el Perú", "siglas": "JPP", "logo": "/logos/juntos-por-el-peru.png" },
  { "id": 19, "nombre": "Frente Popular Agrícola FIA del Perú (Frepap)", "siglas": "Frepap", "logo": "/logos/frepap.png" },
  { "id": 16, "nombre": "Fe en el Perú", "siglas": "FEP", "logo": "/logos/fe-en-el-peru.png" },
  { "id": 25, "nombre": "Partido País para Todos", "siglas": "PPT", "logo": "/logos/pais-para-todos.png" },
  { "id": 4, "nombre": "Ahora Nación", "siglas": "AN", "logo": "/logos/ahora-nacion.png" },
  { "id": 12, "nombre": "Partido Demócrata Verde", "siglas": "PDV", "logo": "/logos/partido-democrata-verde.png" },
  { "id": 9, "nombre": "Partido Demócrata Unido Perú", "siglas": "PDU", "logo": "/logos/partido-democrata-unido.png" },
  { "id": 6, "nombre": "Partido del Buen Gobierno", "siglas": "PBG", "logo": "/logos/partido-buen-gobierno.png" },
  { "id": 8, "nombre": "Libertad Popular", "siglas": "LP", "logo": "/logos/libertad-popular.png" },
  { "id": 20, "nombre": "Partido Cívico Obras", "siglas": "PCO", "logo": "/logos/partido-civico-obras.png" },
  { "id": 13, "nombre": "Batalla Perú", "siglas": "BP", "logo": "/logos/batalla-peru.png" },
  { "id": 17, "nombre": "Partido Ciudadanos por el Perú", "siglas": "CPP", "logo": "/logos/ciudadanos-por-el-peru.png" },
  { "id": 30, "nombre": "Primero la Gente", "siglas": "PLC", "logo": "/logos/primero-la-gente.png" },
  { "id": 29, "nombre": "Peruanos Unidos – Somos Libres", "siglas": "PUSL", "logo": "/logos/peruanos-unidos.png" },
  { "id": 31, "nombre": "Cooperación Popular", "siglas": "CP", "logo": "/logos/cooperacion-popular.png" },
  { "id": 23, "nombre": "Partido Político Perú Acción", "siglas": "PA", "logo": "/logos/peru-accion.png" },
  { "id": 24, "nombre": "Perú Moderno", "siglas": "PMo", "logo": "/logos/peru-moderno.png" },
  { "id": 26, "nombre": "Partido Político Perú Primero", "siglas": "PP1", "logo": "/logos/peru-primero.png" },
  { "id": 28, "nombre": "Partido Patriótico del Perú", "siglas": "PPP", "logo": "/logos/partido-patriotico-del-peru.png" },
  { "id": 32, "nombre": "Voces del Pueblo", "siglas": "VP", "logo": "/logos/voces-del-pueblo.png" },
  { "id": 33, "nombre": "Progresemos", "siglas": "PRG", "logo": "/logos/progresemos.png" },
  { "id": 34, "nombre": "Fuerza Moderna", "siglas": "FM", "logo": "/logos/fuerza-moderna.png" },
  { "id": 35, "nombre": "PRIN", "siglas": "PRIN", "logo": "/logos/prin.png" },
  { "id": 37, "nombre": "Integridad Democrática", "siglas": "ID", "logo": "/logos/integridad-democratica.png" },
  { "id": 38, "nombre": "Partido Popular Cristiano", "siglas": "PPC", "logo": "/logos/partido-popular-cristiano.png" },
  { "id": 39, "nombre": "Salvemos al Perú", "siglas": "SP", "logo": "/logos/salvemos-al-peru.png" },
  { "id": 41, "nombre": "Partido Sí Creo", "siglas": "SC", "logo": "/logos/si-creo.png" },
  { "id": 42, "nombre": "Un Camino Diferente", "siglas": "UCD", "logo": "/logos/un-camino-diferente.png" },
  { "id": 43, "nombre": "Partido Unidad y Paz", "siglas": "UyP", "logo": "/logos/unidad-y-paz.png" },
  { "id": 3, "nombre": "Partido de los Trabajadores PTE–Perú", "siglas": "PTE", "logo": "/logos/pte-peru.png" }
];

const PartidosPoliticos: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handlePartidoClick = (partidoId: number) => {
    navigate(`/partido/${partidoId}`);
  };

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="nav-links-container">
            <a href="/" className="nav-link" onClick={(e) => { e.preventDefault(); navigate('/'); }}>{t('nav.inicio')}</a>
            <a href="/partidos" className="nav-link" onClick={(e) => { e.preventDefault(); navigate('/partidos'); }}>{t('nav.partidos')}</a>
            <a href="/candidatos" className="nav-link" onClick={(e) => { e.preventDefault(); navigate('/candidatos'); }}>{t('nav.candidatos')}</a>
            <a href="/reniec" className="nav-link" onClick={(e) => { e.preventDefault(); navigate('/reniec'); }}>{t('nav.reniec')}</a>
            <a href="#lo-nuevo" className="nav-link">{t('inicio.loNuevo')}</a>
            <a href="#voto-digital" className="nav-link">{t('inicio.votoDigital')}</a>
            <a href="#verifica-mesa" className="nav-link nav-link-highlight">{t('inicio.verificaMiembro')}</a>
          </div>
        </nav>
      </header>

      <div className="partidos-container">
        <h1 className="titulo-principal">{t('partidos.titulo')} - Elecciones Perú 2026</h1>
      <p className="subtitulo">43 {t('partidos.descripcion').toLowerCase()}</p>

      <div className="partidos-grid">
        {partidos.map((partido) => (
          <div
            key={partido.id}
            className="partido-card"
            onClick={() => handlePartidoClick(partido.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="partido-logo">
              <img src={partido.logo} alt={`Logo ${partido.nombre}`} />
            </div>
            <div className="partido-info">
              <h3 className="partido-nombre">{partido.nombre}</h3>
              <p className="partido-siglas">{partido.siglas}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default PartidosPoliticos;