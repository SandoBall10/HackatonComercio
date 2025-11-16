import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Inicio.css';


type EventItem = { date: string; title: string; bullets?: string[]; icon?: string; category?: 'electoral' | 'plan' | 'mesa' | 'administrativo' };
type NewsItem = { id: number; image: string; title: string; category: string; url: string; alt: string };

const TIMELINE: Record<string, Record<string, EventItem[]>> = {
  '2025': {
    MARZO: [
      { date: '26 Marzo', title: 'Convocatoria a Elecciones Generales 2026', category: 'electoral' },
      { date: '28 Marzo', title: 'Publicación de cronograma electoral en el Diario Oficial', category: 'plan' }
    ],
    ABRIL: [
      { date: '5 Abril', title: 'Inicio de campañas informativas sobre el proceso electoral', category: 'electoral' },
      { date: '12 Abril', title: 'Fecha límite para la inscripción de partidos políticos en el ROP', category: 'plan' },
      { date: '20 Abril', title: 'Capacitación inicial de personal electoral', category: 'mesa' }
    ],
    JUNIO: [
      { date: '11 Junio', title: 'Registro de normativa actualizada de las organizaciones políticas', category: 'plan' },
      { date: '15 Junio', title: 'Presentación de candidatos a delegados electorales', category: 'electoral' },
      { date: '30 Junio', title: 'Fecha límite para que la Dirección Nacional de Registro de Organizaciones Políticas (DNROP) remita al Reniec los padrones de electores afiliados para las elecciones primarias (EG 2026)', icon: 'ic_JNE.png', category: 'plan' },
    ],
    AGOSTO: [
      { date: '2 Agosto', title: 'Inscripción de alianzas partidarias para las Elecciones Generales 2026', icon: 'ic_doc-write.png', category: 'plan' },
      { date: '10 Agosto', title: 'Talleres de entrenamiento para miembros de mesa designados', category: 'mesa' },
      { date: '30 Agosto', title: 'Reniec remite al JNE los padrones de electores afiliados para las elecciones primarias', icon: 'ic_docs.png', category: 'plan' },
    ],
    SEPTIEMBRE: [
      {
        date: '1 Septiembre',
        title: 'La Organización política informa la modalidad y tipo de candidaturas para las elecciones primarias (EG 2026)',
        bullets: [
          'Fecha límite para que las alianzas partidarias logren inscripción (EG 2026)',
          'Fecha límite para que las OP* presenten a la DNROP** la relación de electores no afiliados para las elecciones primarias',
        ],
        category: 'plan'
      },
      { date: '5 Septiembre', title: 'Selección preliminar de miembros de mesa por provincia', category: 'mesa' },
      { date: '8 Septiembre', title: 'Fecha límite para que la DNROP** remita al Reniec los padrones de electores no afiliados', icon: 'ic_JNE.png', category: 'plan' },
      { date: '15 Septiembre', title: 'OP* presentan candidatos a delegados para las elecciones primarias', icon: 'ic_people-check.png', category: 'electoral' },
      { date: '16 Septiembre', title: 'Reniec remite al JNE los padrones de electores no afiliados', icon: 'ic_docs.png', category: 'plan' },
      { date: '20 Septiembre', title: 'Publicación de listados preliminares de miembros de mesa', category: 'mesa' }
    ],
    OCTUBRE: [
      { date: '5 Octubre', title: 'Asambleas de elecciones primarias en todas las regiones', category: 'electoral' },
      { date: '14 Octubre', title: 'Cierre del padrón electoral para las Elecciones Generales 2026', icon: 'ic_reniec.png', category: 'plan' },
      { date: '19 Octubre', title: 'Fecha límite para aprobación de padrones, en el marco de las elecciones primarias', icon: 'ic_list-check.png', category: 'plan' },
      { date: '25 Octubre', title: 'Confirmación final de miembros de mesa y suplentes', category: 'mesa' },
      { date: 'Del 28 al 31 Octubre', title: 'OP* realizan la inscripción de precandidaturas', icon: 'ic_doc-write.png', category: 'electoral' },
    ],
    NOVIEMBRE: [
      { date: '3 Noviembre', title: 'Resolución de impugnaciones de miembros de mesa propuestos', category: 'mesa' },
      { date: '7 Noviembre', title: 'Fecha límite de entrega de candidatos finales a la ONPE por parte de la OP*', icon: 'ic_calendar.png', category: 'electoral' },
      { date: '10 Noviembre', title: 'OP* realizan el registro de personeros para las elecciones primarias (EG 2026)', icon: 'ic_doc-write.png', category: 'mesa' },
      { date: '13 Noviembre', title: 'Envío del padrón preliminar al JNE y a la ONPE para las Elecciones Generales 2026', icon: 'ic_reniec.png', category: 'plan' },
      { date: '20 Noviembre', title: 'Distribución de materiales electorales a locales de votación', category: 'mesa' },
      { date: '30 Noviembre', title: 'Elecciones primarias (Afiliados)', icon: 'ic_anfora.png', category: 'electoral' },
    ],
    DICIEMBRE: [
      { date: '5 Diciembre', title: 'Conteo de resultados de elecciones primarias', category: 'electoral' },
      { date: '13 Diciembre', title: 'Fecha límite de aprobación del padrón electoral definitivo para las Elecciones Generales 2026', icon: 'ic_JNE.png', category: 'plan' },
      { date: '18 Diciembre', title: 'Publicación de resultados finales de elecciones primarias', category: 'electoral' },
      { date: '23 Diciembre', title: 'Fecha límite para inscripción de fórmulas y listas de candidatos', icon: 'ic_people-check.png', category: 'electoral' },
      {
        date: '24 Diciembre',
        title: 'Fecha límite para la publicación de instrucciones para la ubicación en la cédula de sufragio y publicación del diseño de cédula para la presentación de tachas',
        icon: 'ic_onpe.png',
        category: 'plan'
      },
      { date: '26 Diciembre al 15 Enero', title: 'Impugnaciones y resolución de tachas a la cédula de sufragio', icon: 'ic_list-write.png', category: 'electoral' },
    ],
  },
  '2026': {
    ENERO: [
      { date: '5 Enero', title: 'Continuación de resolución de impugnaciones a cédula de sufragio', category: 'electoral' },
      { date: '15 Enero', title: 'Finalización del período de impugnaciones a miembros de mesa', category: 'mesa' },
      { date: '22 Enero', title: 'Publicación definitiva del diseño de cédula para las Elecciones Generales 2026', icon: 'ic_onpe.png', category: 'plan' },
      { date: '29 Enero', title: 'Sorteo de miembros de mesa', icon: 'ic_onpe.png', category: 'mesa' },
      { date: '30 Enero al 11 Febrero', title: 'Proceso de impugnación, apelaciones y resolución de tachas a miembros de mesa', icon: 'ic_person-check.png', category: 'mesa' },
    ],
    FEBRERO: [
      { date: '5 Febrero', title: 'Publicación de lista definitiva de candidatos por organización política', category: 'electoral' },
      {
        date: '12 Febrero',
        title: 'Sorteo de ubicación de candidaturas o símbolos en la cédula de sufragio, Publicación definitiva de la lista de miembros de mesa, Fecha límite para el retiro y/o renuncia de listas de candidatos',
        icon: 'ic_onpe.png',
        category: 'mesa'
      },
      { date: '25 Febrero', title: 'Inicio de distribución de materiales electorales a locales de votación', category: 'mesa' }
    ],
    MARZO: [
      { date: '15 Marzo', title: 'Finalizacion de entrega de materiales electorales en todos los distritos', category: 'mesa' },
      { date: '29 Marzo', title: '1ra jornada de capacitación a miembros de mesa para las Elecciones Generales 2026', icon: 'ic_onpe.png', category: 'mesa' },
    ],
    ABRIL: [
      { date: '2 Abril', title: 'Segunda jornada de capacitación a miembros de mesa', category: 'mesa' },
      { date: '5 Abril', title: 'Simulacro del Sistema de Cómputo Electoral y 2da jornada de capacitación a miembros de mesa', icon: 'ic_onpe.png', category: 'mesa' },
      { date: '10 Abril', title: 'Últimas verificaciones de locales de votación', category: 'mesa' },
      { date: '12 Abril', title: 'Elecciones Generales 2026', icon: 'ic_voto.png', category: 'electoral' },
    ],
  },
};

export const Inicio: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeYear, setActiveYear] = useState<'2025' | '2026'>('2025');
  const [activeMonth, setActiveMonth] = useState<string>('MARZO');
  const [countdown, setCountdown] = useState({ meses: 0, dias: 0, horas: 0, minutos: 0 });
  const [activeFilter, setActiveFilter] = useState<'todos' | 'electoral' | 'plan' | 'mesa' | 'administrativo'>('todos');
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const news: NewsItem[] = [
    {
      id: 1,
      image: '/Imagenes-Pagina/Fondo-Inicio.jpg',
      title: 'Elecciones Generales 2026: Todo lo que necesitas saber',
      category: 'Política',
      url: 'https://elcomercio.pe/elecciones/elecciones-2026-37-de-las-39-agrupaciones-politicas-presentaron-formulas-presidenciales-a-la-onpe-ultmasi-noticia/',
      alt: 'Elecciones 2026: Todo lo que necesitas saber',
    },
    {
      id: 2,
      image: '/Imagenes-Pagina/Fondo4.jpg',
      title: 'Candidatos confirman su participación en las elecciones',
      category: 'Actualidad',
      url: 'https://elcomercio.pe/politica/candidatos-2026',
      alt: 'Candidatos de las elecciones'
    },
    {
      id: 3,
      image: '/Imagenes-Pagina/Fondo5.jpg',
      title: 'Preparativos finales para el proceso electoral 2026',
      category: 'Política',
      url: 'https://elcomercio.pe/politica/preparativos-electorales',
      alt: 'Preparativos electorales'
    },
    {
      id: 4,
      image: '/Imagenes-Pagina/Fondo6.jpg',
      title: 'Nueva reforma electoral en debate parlamentario',
      category: 'Política',
      url: 'https://elcomercio.pe/politica/reforma-electoral',
      alt: 'Reforma electoral'
    },
  ];

  const newsCards: NewsItem[] = [
    {
      id: 5,
      image: 'https://elcomercio.pe/resizer/v2/XBSRKHH6EZE6VEW34GRMIDMU5E.jpg?auth=f494ae9d5f08fced0ee0c809b6a9554c741c6234d2bac2b6876a6e9892d40ebc&width=400&height=300&quality=75&smart=true',
      title: 'Elecciones 2026: 37 de las 39 agrupaciones políticas presentaron fórmulas presidenciales a la ONPE',
      category: 'Politica',
      url: 'https://elcomercio.pe/elecciones/elecciones-2026-37-de-las-39-agrupaciones-politicas-presentaron-formulas-presidenciales-a-la-onpe-ultmasi-noticia/',
      alt: 'Salarios empleo'
    },
    {
      id: 6,
      image: 'https://elcomercio.pe/resizer/v2/SNLN6LUTWJGRZJFFX2IV7Q36TY.png?auth=a2598c364a0e241af789f28077b9dea74080102de0e954974c77f32fd99f2e75&width=1920&height=768&quality=75&smart=true',
      title: 'Elecciones 2026: Perú Primero recicla a dos candidatos denunciados por agresión sexual',
      category: 'Caso',
      url: 'https://elcomercio.pe/politica/peru-primero-recicla-a-dos-candidatos-denunciados-por-agresion-martin-vizcarra-carlos-juscamayta-emilio-nicolich-tlcnota-noticia/',
      alt: 'Precios de consumo'
    },
    {
      id: 7,
      image: 'https://elcomercio.pe/resizer/v2/LGFCSAH6L5FUZNB4KANXRPKCJA.jpeg?auth=ec7b60349eb8738080398990a1aa88564fcd5d7593331b3c3436799db89731f2&width=1920&height=768&quality=75&smart=true',
      title: 'Elecciones 2026: Estos son los candidatos que encabezan las lista para el Senado y Diputados en Lima',
      category: 'Politica',
      url: 'https://elcomercio.pe/politica/partidos/elecciones-2026-estos-son-los-candidatos-que-encabezan-las-lista-para-el-senado-y-diputados-en-lima-congreso-bicameral-jne-onpe-reniec-tlcnota-noticia/',
      alt: 'Precios armonizado'
    },
    {
      id: 8,
      image: 'https://elcomercio.pe/resizer/v2/VXAPXXHNCFBKPEZQK6WOK4OTTY.jpeg?auth=69cd321daf805e5f63de2b3a9826af029764aec0b0dbf5abb6e6ea82ec872dd4&width=1920&height=768&quality=75&smart=true',
      title: 'Elecciones 2026: El voto sólido del norte puede ser decisivo para los comicios presidenciales y la valla electoral',
      category: 'Politica',
      url: 'https://elcomercio.pe/elecciones/elecciones-2026-el-voto-solido-del-norte-puede-ser-decisivo-para-los-comicios-presidenciales-y-la-valla-electoral-jne-onpe-app-fuerza-popular-renovacion-popular-tlcnota-noticia/',
      alt: 'Arrendamientos vivienda'
    },
    {
      id: 9,
      image: 'https://tse1.mm.bing.net/th/id/OIP.zCtx3ef_qdsqVdU2rvLJ2AHaEK?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3s',
      title: 'Habla ONPE #8: ¿A quién brinda educación electoral la ONPE?',
      category: 'Video Informativo',
      url: 'https://www.youtube.com/watch?v=3BrIiyY4H-I',
      alt: 'Cuentas ambientales'
    },
    {
      id: 10,
      image: 'https://cdn.www.gob.pe/uploads/document/file/8993370/1288289-onpe-designa-jefes-y-coordinadores-administrativos-de-odpe.jpg',
      title: 'ONPE designa jefes y coordinadores administrativos de ODPE',
      category: 'Adminitrativo',
      url: 'https://www.gob.pe/institucion/onpe/noticias/1288289-onpe-designa-jefes-y-coordinadores-administrativos-de-odpe',
      alt: 'Tratamiento residuos'
    },
    {
      id: 11,
      image: 'https://cdn.www.gob.pe/uploads/document/file/8986552/1287465-onpe-imprime-mas-de-88-mil-cedulas-de-sufragio-para-las-elecciones-primarias.jpg',
      title: 'ONPE imprime más de 88 mil cédulas de sufragio para las elecciones primarias',
      category: 'Informativo',
      url: 'https://www.gob.pe/institucion/onpe/noticias/1287465-onpe-imprime-mas-de-88-mil-cedulas-de-sufragio-para-las-elecciones-primarias',
      alt: 'Participación electoral'
    },
    {
      id: 12,
      image: 'https://cdn.www.gob.pe/uploads/document/file/8989910/1288031-onpe-avanza-organizacion-de-elecciones-generales-2026-en-todo-el-pais.jpg',
      title: 'ONPE avanza organización de Elecciones Generales 2026 en todo el país',
      category: 'Datos',
      url: 'https://www.gob.pe/institucion/onpe/noticias/1288031-onpe-avanza-organizacion-de-elecciones-generales-2026-en-todo-el-pais',
      alt: 'Análisis de datos'
    },
  ];

  const months2025 = ['MARZO', 'ABRIL', 'JUNIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
  const months2026 = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL'];
  const months = activeYear === '2025' ? months2025 : months2026;

  // Autoplay del carrusel cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % news.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [news.length]);

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

  // Cambiar mes cuando cambia el año
  React.useEffect(() => {
    if (!months.includes(activeMonth)) {
      setActiveMonth(months[0]);
    }
  }, [activeYear]);

  // Cambiar mes cuando cambia el filtro, si el mes actual no tiene eventos con ese filtro
  React.useEffect(() => {
    const visibleMonthsForFilter = activeFilter === 'todos' 
      ? months 
      : months.filter(m => {
          const monthData = (yearData[m] || []) as EventItem[];
          return monthData.some(ev => getEventCategory(ev) === activeFilter);
        });
    
    if (!visibleMonthsForFilter.includes(activeMonth) && visibleMonthsForFilter.length > 0) {
      setActiveMonth(visibleMonthsForFilter[0]);
    }
  }, [activeFilter]);

  const yearData = TIMELINE[activeYear] || {};
  const monthEvents = (yearData[activeMonth] || []) as EventItem[];

  // Función para obtener la categoría de un evento
  const getEventCategory = (ev: EventItem): 'electoral' | 'plan' | 'mesa' | 'administrativo' => {
    let category = ev.category;
    if (!category) {
      const titleLower = ev.title.toLowerCase();
      if (titleLower.includes('primarias') || titleLower.includes('elecciones generales') || titleLower.includes('voto')) {
        category = 'electoral';
      } else if (titleLower.includes('padrón') || titleLower.includes('inscripción') || titleLower.includes('normativa') || titleLower.includes('registro')) {
        category = 'plan';
      } else if (titleLower.includes('mesa') || titleLower.includes('personeros') || titleLower.includes('miembro')) {
        category = 'mesa';
      } else {
        category = 'administrativo';
      }
    }
    return category;
  };

  // Filtrar eventos según la categoría seleccionada
  const filteredEvents = activeFilter === 'todos' 
    ? monthEvents 
    : monthEvents.filter(ev => getEventCategory(ev) === activeFilter);

  // Obtener solo los meses que tienen eventos en la categoría seleccionada
  const getMonthsWithEvents = () => {
    if (activeFilter === 'todos') {
      return months;
    }
    
    return months.filter(m => {
      const monthData = (yearData[m] || []) as EventItem[];
      return monthData.some(ev => getEventCategory(ev) === activeFilter);
    });
  };

  const visibleMonths = getMonthsWithEvents();

  const handleFilterChange = (newFilter: 'todos' | 'electoral' | 'plan' | 'mesa' | 'administrativo') => {
    setActiveFilter(newFilter);
    setShowFilterMenu(false);
  };

  return (
    <div className="inicio-container">
      {/* <Header /> */}

      <main>
        {/* CARRUSEL DE NOTICIAS */}
        <section className="carousel-section">
          <div className="carousel-container">
            <div className="carousel-wrapper">
              <div className="carousel-inner-wrapper">
                {news.map((item, idx) => (
                  <div 
                    key={item.id} 
                    className={`carousel-item ${idx === currentSlide ? 'active' : ''}`}
                    style={{
                      opacity: idx === currentSlide ? 1 : 0,
                      transition: 'opacity 0.5s ease-in-out',
                      position: idx === currentSlide ? 'relative' : 'absolute'
                    }}
                  >
                    <img src={item.image} className="carousel-img" alt={item.alt} />
                  </div>
                ))}
              </div>
            </div>

            {/* Indicadores de puntos */}
            <div className="carousel-indicators">
              {news.map((_, idx) => (
                <button
                  key={idx}
                  className={`indicator-dot ${idx === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Ir a la noticia ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>


        {/* NOTICIAS EN TARJETAS */}
        <section className="news-cards-section">
          <div className="news-cards-wrapper">
            <h2 className="news-cards-title">Noticias</h2>
            
            <div className="news-cards-grid">
              {newsCards.map((newsItem) => (
                <div 
                  key={newsItem.id} 
                  className="news-card"
                  onClick={() => window.open(newsItem.url, '_blank')}
                  role="button"
                  tabIndex={0}
                >
                  <div className="news-card-image">
                    <img src={newsItem.image} alt={newsItem.alt} />
                    <span className="news-card-category">{newsItem.category}</span>
                  </div>
                  <div className="news-card-content">
                    <h3 className="news-card-title">{newsItem.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* TIMELINE SECTION */}
        <section className="timeline-wrapper">
          <h1 className="timeline-title">{t('inicio.timelineTitle')}</h1>

          <div className="timeline-header">
            {/* YEAR TABS */}
            <div className="tabs-link">
              <button
                role="tab"
                aria-selected={activeYear === '2025'}
                className={`tab-link ${activeYear === '2025' ? 'active' : ''}`}
                onClick={() => setActiveYear('2025')}
              >
                2025
              </button>
              <button
                role="tab"
                aria-selected={activeYear === '2026'}
                className={`tab-link ${activeYear === '2026' ? 'active' : ''}`}
                onClick={() => setActiveYear('2026')}
              >
                2026
              </button>
            </div>

            {/* FILTRO DESPLEGABLE */}
            <div className="timeline-filter-dropdown">
              <button
                className="filter-toggle-btn"
                onClick={() => setShowFilterMenu(!showFilterMenu)}
                aria-label="Abrir filtro"
                aria-expanded={showFilterMenu}
              >
                <span className="filter-icon">⚙️</span>
                <span className="filter-text">Filtrar</span>
              </button>
              
              {showFilterMenu && (
                <div className="filter-menu">
                  <div className="filter-menu-header">
                    <span className="filter-menu-title">Filtrar por:</span>
                    <button
                      className="filter-close-btn"
                      onClick={() => setShowFilterMenu(false)}
                      aria-label="Cerrar filtro"
                    >
                      ✕
                    </button>
                  </div>
                  <button
                    className={`filter-option ${activeFilter === 'todos' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('todos')}
                  >
                    Todos
                  </button>
                  <button
                    className={`filter-option ${activeFilter === 'electoral' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('electoral')}
                  >
                    Fechas Electorales
                  </button>
                  <button
                    className={`filter-option ${activeFilter === 'plan' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('plan')}
                  >
                    Fechas relacionadas al Plan Electoral
                  </button>
                  <button
                    className={`filter-option ${activeFilter === 'mesa' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('mesa')}
                  >
                    Fechas referentes a Miembros de Mesa
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* MONTH TABS */}
          <div className="tab-buttons" role="tablist" aria-label={`Contenido de pestaña ${activeYear}`}>
            {visibleMonths.map((m) => (
              <button
                key={m}
                role="tab"
                aria-selected={activeMonth === m}
                className={`month-btn ${activeMonth === m ? 'active' : ''}`}
                onClick={() => setActiveMonth(m)}
              >
                {m}
              </button>
            ))}
          </div>

          {/* TIMELINE AREA */}
          <div className="timeline-area">
            <div className="timeline-line-vertical"></div>
            <div className="entries">
              {filteredEvents.length === 0 && <div className="no-events">No hay eventos para este mes con el filtro seleccionado.</div>}

              {filteredEvents.map((ev, idx) => (
                <div key={idx} className={`entry-wrapper ${idx % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-marker"></div>
                  <div className="entry">
                    {ev.icon && <img src={`src/assets/img/${ev.icon}`} alt="icon" className="entry-icon" />}
                    <p className="title">{ev.date}</p>
                    <p className="description">{ev.title}</p>
                    {ev.bullets && (
                      <div className="bullets">
                        {ev.bullets.map((b, i) => (
                          <p key={i}>■ {b}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

        {/* FOOTER */}
          <footer className="site-footer">
            <div className="footer-container">
              <div className="footer-col">
                <h4>Oficina central</h4>
                <p>Jr. Washington 1894, Cercado de Lima</p>
                <p>Lunes a viernes de 8:30 a. m. a 5:00 p. m.</p>
              </div>

              <div className="footer-col">
                <h4>Contáctanos:</h4>
                <p><a href="mailto:informes@onpe.gob.pe">informes@onpe.gob.pe</a></p>
                <p>(01) 4170630</p>
                <p>WhatsApp: 995 404 991</p>
              </div>

              <div className="footer-col">
                <h4>Síguenos:</h4>
                <div className="socials" role="navigation" aria-label="Redes sociales">
                  <a href="#" className="social" aria-label="Facebook">F</a>
                  <a href="#" className="social" aria-label="X">X</a>
                  <a href="#" className="social" aria-label="TikTok">t</a>
                  <a href="#" className="social" aria-label="Instagram">ig</a>
                  <a href="#" className="social" aria-label="YouTube">yt</a>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              © 2026 Portal Electoral - Todos los derechos reservados
            </div>
          </footer>
    </div>
  );
};