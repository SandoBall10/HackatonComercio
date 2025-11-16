import React, { useState } from 'react';
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
  ideologia?: 'izquierda' | 'centro-izquierda' | 'centro' | 'centro-derecha' | 'derecha';
  tamano?: 'grande' | 'mediano' | 'pequeño';
  fundacion?: 'tradicional' | 'moderno' | 'nuevo';
}

const PartidosPoliticos: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filtroIdeologia, setFiltroIdeologia] = useState<string>('todos');

  // Función para obtener la clave de traducción del nombre del partido
  const getPartidoKey = (nombre: string): string => {
    const keyMap: { [key: string]: string } = {
      'Renovación Popular': 'renovacion-popular',
      'Fuerza Popular': 'fuerza-popular',
      'Alianza para el Progreso': 'alianza-para-el-progreso',
      'Acción Popular': 'accion-popular',
      'Partido Aprista Peruano': 'partido-aprista',
      'Perú Libre': 'peru-libre',
      'Partido Político Nacional Perú Libre': 'peru-libre',
      'Podemos Perú': 'podemos-peru',
      'Partido Democrático Somos Perú': 'somos-peru',
      'Avanza País – Partido de Integración Social': 'avanza-pais',
      'Partido Morado': 'partido-morado',
      'Frente de la Esperanza 2021': 'frente-esperanza',
      'Nuevo Perú por el Buen Vivir': 'nuevo-peru',
      'Juntos por el Perú': 'juntos-por-el-peru',
      'Frente Popular Agrícola FIA del Perú (Frepap)': 'frepap',
      'Fe en el Perú': 'fe-en-el-peru',
      'Partido País para Todos': 'pais-para-todos',
      'Ahora Nación': 'ahora-nacion',
      'Partido Demócrata Verde': 'partido-democrata-verde',
      'Partido Demócrata Unido Perú': 'partido-democrata-unido',
      'Partido del Buen Gobierno': 'partido-buen-gobierno',
      'Libertad Popular': 'libertad-popular',
      'Partido Cívico Obras': 'partido-civico-obras',
      'Batalla Perú': 'batalla-peru',
      'Partido Ciudadanos por el Perú': 'partido-ciudadanos',
      'Primero la Gente': 'primero-la-gente',
      'Peruanos Unidos – Somos Libres': 'peruanos-unidos',
      'Cooperación Popular': 'cooperacion-popular',
      'Partido Político Perú Acción': 'peru-accion',
      'Perú Moderno': 'peru-moderno',
      'Partido Político Perú Primero': 'peru-primero',
      'Partido Patriótico del Perú': 'partido-patriotico',
      'Voces del Pueblo': 'voces-del-pueblo',
      'Progresemos': 'progresemos',
      'Fuerza Moderna': 'fuerza-moderna',
      'PRIN': 'prin',
      'Integridad Democrática': 'integridad-democratica',
      'Partido Popular Cristiano': 'partido-popular-cristiano',
      'Salvemos al Perú': 'salvemos-al-peru',
      'Partido Sí Creo': 'partido-si-creo',
      'Un Camino Diferente': 'un-camino-diferente',
      'Partido Unidad y Paz': 'unidad-y-paz',
      'Partido de los Trabajadores PTE–Perú': 'pte-peru',
      'Partido Democrático Federal': 'partido-democratico-federal'
    };
    return keyMap[nombre] || nombre.toLowerCase().replace(/\s+/g, '-');
  };

  const partidos: Partido[] = [
    { "id": 36, "nombre": "Renovación Popular", "siglas": "RP", "logo": "/logos/renovacion-popular.png", "ideologia": "derecha", "tamano": "grande", "fundacion": "nuevo" },
    { "id": 2, "nombre": "Fuerza Popular", "siglas": "FPu", "logo": "/logos/fuerza-popular.png", "ideologia": "derecha", "tamano": "grande", "fundacion": "moderno" },
    { "id": 7, "nombre": "Alianza para el Progreso", "siglas": "APP", "logo": "/logos/alianza-para-el-progreso.png", "ideologia": "centro-derecha", "tamano": "grande", "fundacion": "moderno" },
    { "id": 1, "nombre": "Acción Popular", "siglas": "AP", "logo": "/logos/accion-popular.png", "ideologia": "centro", "tamano": "grande", "fundacion": "tradicional" },
    { "id": 14, "nombre": "Partido Aprista Peruano", "siglas": "APRA", "logo": "/logos/partido-aprista-peruano.png", "ideologia": "centro-izquierda", "tamano": "grande", "fundacion": "tradicional" },
    { "id": 40, "nombre": "Perú Libre", "siglas": "PL", "logo": "/logos/peru-libre.png", "ideologia": "izquierda", "tamano": "grande", "fundacion": "nuevo" },
    { "id": 27, "nombre": "Podemos Perú", "siglas": "PP", "logo": "/logos/podemos-peru.png", "ideologia": "centro-derecha", "tamano": "mediano", "fundacion": "nuevo" },
    { "id": 18, "nombre": "Partido Democrático Somos Perú", "siglas": "DSP", "logo": "/logos/somos-peru.png", "ideologia": "centro", "tamano": "mediano", "fundacion": "tradicional" },
    { "id": 10, "nombre": "Avanza País – Partido de Integración Social", "siglas": "APIS", "logo": "/logos/avanza-pais.png", "ideologia": "centro-derecha", "tamano": "mediano", "fundacion": "nuevo" },
    { "id": 22, "nombre": "Partido Morado", "siglas": "PM", "logo": "/logos/partido-morado.png", "ideologia": "centro", "tamano": "mediano", "fundacion": "nuevo" },
    { "id": 21, "nombre": "Frente de la Esperanza 2021", "siglas": "F21", "logo": "/logos/frente-esperanza-2021.png", "ideologia": "centro-izquierda", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 11, "nombre": "Nuevo Perú por el Buen Vivir", "siglas": "NPBV", "logo": "/logos/nuevo-peru-por-el-buen-vivir.png", "ideologia": "izquierda", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 5, "nombre": "Juntos por el Perú", "siglas": "JPP", "logo": "/logos/juntos-por-el-peru.png", "ideologia": "izquierda", "tamano": "mediano", "fundacion": "moderno" },
    { "id": 16, "nombre": "Fe en el Perú", "siglas": "FEP", "logo": "/logos/fe-en-el-peru.png", "ideologia": "derecha", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 25, "nombre": "Partido País para Todos", "siglas": "PPT", "logo": "/logos/pais-para-todos.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 4, "nombre": "Ahora Nación", "siglas": "AN", "logo": "/logos/ahora-nacion.png", "ideologia": "centro-derecha", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 12, "nombre": "Partido Demócrata Verde", "siglas": "PDV", "logo": "/logos/partido-democrata-verde.png", "ideologia": "centro-izquierda", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 9, "nombre": "Partido Demócrata Unido Perú", "siglas": "PDU", "logo": "/logos/partido-democrata-unido.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 6, "nombre": "Partido del Buen Gobierno", "siglas": "PBG", "logo": "/logos/partido-buen-gobierno.png", "ideologia": "centro-derecha", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 8, "nombre": "Libertad Popular", "siglas": "LP", "logo": "/logos/libertad-popular.png", "ideologia": "derecha", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 20, "nombre": "Partido Cívico Obras", "siglas": "PCO", "logo": "/logos/partido-civico-obras.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 13, "nombre": "Batalla Perú", "siglas": "BP", "logo": "/logos/batalla-peru.png", "ideologia": "centro-derecha", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 17, "nombre": "Partido Ciudadanos por el Perú", "siglas": "CPP", "logo": "/logos/ciudadanos-por-el-peru.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 30, "nombre": "Primero la Gente", "siglas": "PLC", "logo": "/logos/primero-la-gente.png", "ideologia": "centro-izquierda", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 29, "nombre": "Peruanos Unidos – Somos Libres", "siglas": "PUSL", "logo": "/logos/peruanos-unidos.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 31, "nombre": "Cooperación Popular", "siglas": "CP", "logo": "/logos/cooperacion-popular.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "tradicional" },
    { "id": 23, "nombre": "Partido Político Perú Acción", "siglas": "PA", "logo": "/logos/peru-accion.png", "ideologia": "centro-derecha", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 24, "nombre": "Perú Moderno", "siglas": "PMo", "logo": "/logos/peru-moderno.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 26, "nombre": "Partido Político Perú Primero", "siglas": "PP1", "logo": "/logos/peru-primero.png", "ideologia": "centro-derecha", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 28, "nombre": "Partido Patriótico del Perú", "siglas": "PPP", "logo": "/logos/partido-patriotico-del-peru.png", "ideologia": "derecha", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 32, "nombre": "Voces del Pueblo", "siglas": "VP", "logo": "/logos/voces-del-pueblo.png", "ideologia": "izquierda", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 33, "nombre": "Progresemos", "siglas": "PRG", "logo": "/logos/progresemos.png", "ideologia": "centro-izquierda", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 34, "nombre": "Fuerza Moderna", "siglas": "FM", "logo": "/logos/fuerza-moderna.png", "ideologia": "centro-derecha", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 35, "nombre": "PRIN", "siglas": "PRIN", "logo": "/logos/prin.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "moderno" },
    { "id": 37, "nombre": "Integridad Democrática", "siglas": "ID", "logo": "/logos/integridad-democratica.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 38, "nombre": "Partido Popular Cristiano", "siglas": "PPC", "logo": "/logos/partido-popular-cristiano.png", "ideologia": "centro-derecha", "tamano": "mediano", "fundacion": "tradicional" },
    { "id": 39, "nombre": "Salvemos al Perú", "siglas": "SP", "logo": "/logos/salvemos-al-peru.png", "ideologia": "centro-derecha", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 41, "nombre": "Partido Sí Creo", "siglas": "SC", "logo": "/logos/si-creo.png", "ideologia": "centro-derecha", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 42, "nombre": "Un Camino Diferente", "siglas": "UCD", "logo": "/logos/un-camino-diferente.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 43, "nombre": "Partido Unidad y Paz", "siglas": "UyP", "logo": "/logos/unidad-y-paz.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "nuevo" },
    { "id": 3, "nombre": "Partido de los Trabajadores PTE–Perú", "siglas": "PTE", "logo": "/logos/pte-peru.png", "ideologia": "izquierda", "tamano": "pequeño", "fundacion": "tradicional" },
    { "id": 15, "nombre": "Partido Democrático Federal", "siglas": "PDF", "logo": "/logos/partido-democratico-federal.png", "ideologia": "centro-izquierda", "tamano": "pequeño", "fundacion": "nuevo" }
  ];

  const handlePartidoClick = (partidoId: number) => {
    navigate(`/partido/${partidoId}`);
  };

  // Filtrar partidos según el término de búsqueda y filtros
  const partidosFiltrados = partidos.filter(partido => {
    const searchLower = searchTerm.toLowerCase();
    const nombreTraducido = t(`partidos.nombres.${getPartidoKey(partido.nombre)}`).toLowerCase();
    
    // Filtro de búsqueda por texto
    const cumpleBusqueda = searchTerm === '' || (
      nombreTraducido.includes(searchLower) ||
      partido.siglas.toLowerCase().includes(searchLower) ||
      partido.nombre.toLowerCase().includes(searchLower)
    );

    // Filtro de ideología
    const cumpleIdeologia = filtroIdeologia === 'todos' || partido.ideologia === filtroIdeologia;

    return cumpleBusqueda && cumpleIdeologia;
  });

  return (
    <>


      <div className="partidos-container">
        <h1 className="titulo-principal">{t('partidos.titulo')} - Elecciones Perú 2026</h1>
      <p className="subtitulo">{partidosFiltrados.length} {t('partidos.descripcion').toLowerCase()}</p>

      {/* Buscador */}
      <div className="buscador-container">
        <div className="buscador-input-wrapper">
          <svg className="buscador-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            className="buscador-input"
            placeholder={t('partidos.buscador.placeholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              className="buscador-clear"
              onClick={() => setSearchTerm('')}
              aria-label="Limpiar búsqueda"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Filtros */}
      <div className="filtros-container">
        <div className="filtro-group">
          <label htmlFor="filtro-ideologia" className="filtro-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            {t('partidos.filtros.ideologia')}
          </label>
          <select
            id="filtro-ideologia"
            className="filtro-select"
            value={filtroIdeologia}
            onChange={(e) => setFiltroIdeologia(e.target.value)}
          >
            <option value="todos">{t('partidos.filtros.todas')}</option>
            <option value="izquierda">{t('partidos.filtros.izquierda')}</option>
            <option value="centro-izquierda">{t('partidos.filtros.centroIzquierda')}</option>
            <option value="centro">{t('partidos.filtros.centro')}</option>
            <option value="centro-derecha">{t('partidos.filtros.centroDerecha')}</option>
            <option value="derecha">{t('partidos.filtros.derecha')}</option>
          </select>
        </div>

        {filtroIdeologia !== 'todos' && (
          <button
            className="filtro-reset"
            onClick={() => setFiltroIdeologia('todos')}
          >
            {t('partidos.filtros.limpiar')}
          </button>
        )}
      </div>

      {partidosFiltrados.length === 0 && (
        <div className="no-resultados">
          <p>{t('partidos.buscador.noResultados')}</p>
        </div>
      )}

      <div className="partidos-grid">
        {partidosFiltrados.map((partido) => (
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
              <h3 className="partido-nombre">{t(`partidos.nombres.${getPartidoKey(partido.nombre)}`)}</h3>
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