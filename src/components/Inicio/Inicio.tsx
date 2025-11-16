import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Inicio.css';


type EventItem = { date: string; title: string; bullets?: string[]; icon?: string; category?: 'electoral' | 'plan' | 'mesa' | 'administrativo' };
type NewsItem = { id: number; image: string; title: string; category: string; url: string; alt: string };

const getTimeline = (t: any): Record<string, Record<string, EventItem[]>> => ({
  '2025': {
    MARZO: [
      { date: t('inicio.eventos.2025.marzo.0.date'), title: t('inicio.eventos.2025.marzo.0.title'), category: 'electoral' },
      { date: t('inicio.eventos.2025.marzo.1.date'), title: t('inicio.eventos.2025.marzo.1.title'), category: 'plan' }
    ],
    ABRIL: [
      { date: t('inicio.eventos.2025.abril.0.date'), title: t('inicio.eventos.2025.abril.0.title'), category: 'electoral' },
      { date: t('inicio.eventos.2025.abril.1.date'), title: t('inicio.eventos.2025.abril.1.title'), category: 'plan' },
      { date: t('inicio.eventos.2025.abril.2.date'), title: t('inicio.eventos.2025.abril.2.title'), category: 'mesa' }
    ],
    JUNIO: [
      { date: t('inicio.eventos.2025.junio.0.date'), title: t('inicio.eventos.2025.junio.0.title'), category: 'plan' },
      { date: t('inicio.eventos.2025.junio.1.date'), title: t('inicio.eventos.2025.junio.1.title'), category: 'electoral' },
      { date: t('inicio.eventos.2025.junio.2.date'), title: t('inicio.eventos.2025.junio.2.title'), category: 'plan' },
    ],
    AGOSTO: [
      { date: t('inicio.eventos.2025.agosto.0.date'), title: t('inicio.eventos.2025.agosto.0.title'), category: 'plan' },
      { date: t('inicio.eventos.2025.agosto.1.date'), title: t('inicio.eventos.2025.agosto.1.title'), category: 'mesa' },
      { date: t('inicio.eventos.2025.agosto.2.date'), title: t('inicio.eventos.2025.agosto.2.title'), category: 'plan' },
    ],
    SEPTIEMBRE: [
      { date: t('inicio.eventos.2025.septiembre.0.date'), title: t('inicio.eventos.2025.septiembre.0.title'), category: 'plan' },
      { date: t('inicio.eventos.2025.septiembre.1.date'), title: t('inicio.eventos.2025.septiembre.1.title'), category: 'mesa' },
      { date: t('inicio.eventos.2025.septiembre.2.date'), title: t('inicio.eventos.2025.septiembre.2.title'), category: 'plan' },
      { date: t('inicio.eventos.2025.septiembre.3.date'), title: t('inicio.eventos.2025.septiembre.3.title'), category: 'electoral' },
      { date: t('inicio.eventos.2025.septiembre.4.date'), title: t('inicio.eventos.2025.septiembre.4.title'), category: 'plan' },
      { date: t('inicio.eventos.2025.septiembre.5.date'), title: t('inicio.eventos.2025.septiembre.5.title'), category: 'mesa' }
    ],
    OCTUBRE: [
      { date: t('inicio.eventos.2025.octubre.0.date'), title: t('inicio.eventos.2025.octubre.0.title'), category: 'electoral' },
      { date: t('inicio.eventos.2025.octubre.1.date'), title: t('inicio.eventos.2025.octubre.1.title'), category: 'plan' },
      { date: t('inicio.eventos.2025.octubre.2.date'), title: t('inicio.eventos.2025.octubre.2.title'), category: 'plan' },
      { date: t('inicio.eventos.2025.octubre.3.date'), title: t('inicio.eventos.2025.octubre.3.title'), category: 'mesa' },
      { date: t('inicio.eventos.2025.octubre.4.date'), title: t('inicio.eventos.2025.octubre.4.title'), category: 'electoral' },
    ],
    NOVIEMBRE: [
      { date: t('inicio.eventos.2025.noviembre.0.date'), title: t('inicio.eventos.2025.noviembre.0.title'), category: 'mesa' },
      { date: t('inicio.eventos.2025.noviembre.1.date'), title: t('inicio.eventos.2025.noviembre.1.title'), category: 'electoral' },
      { date: t('inicio.eventos.2025.noviembre.2.date'), title: t('inicio.eventos.2025.noviembre.2.title'), category: 'mesa' },
      { date: t('inicio.eventos.2025.noviembre.3.date'), title: t('inicio.eventos.2025.noviembre.3.title'), category: 'plan' },
      { date: t('inicio.eventos.2025.noviembre.4.date'), title: t('inicio.eventos.2025.noviembre.4.title'), category: 'mesa' },
      { date: t('inicio.eventos.2025.noviembre.5.date'), title: t('inicio.eventos.2025.noviembre.5.title'), category: 'electoral' },
    ],
    DICIEMBRE: [
      { date: t('inicio.eventos.2025.diciembre.0.date'), title: t('inicio.eventos.2025.diciembre.0.title'), category: 'electoral' },
      { date: t('inicio.eventos.2025.diciembre.1.date'), title: t('inicio.eventos.2025.diciembre.1.title'), category: 'plan' },
      { date: t('inicio.eventos.2025.diciembre.2.date'), title: t('inicio.eventos.2025.diciembre.2.title'), category: 'electoral' },
      { date: t('inicio.eventos.2025.diciembre.3.date'), title: t('inicio.eventos.2025.diciembre.3.title'), category: 'electoral' },
      { date: t('inicio.eventos.2025.diciembre.4.date'), title: t('inicio.eventos.2025.diciembre.4.title'), category: 'plan' },
      { date: t('inicio.eventos.2025.diciembre.5.date'), title: t('inicio.eventos.2025.diciembre.5.title'), category: 'electoral' },
    ],
  },
  '2026': {
    ENERO: [
      { date: t('inicio.eventos.2026.enero.0.date'), title: t('inicio.eventos.2026.enero.0.title'), category: 'electoral' },
      { date: t('inicio.eventos.2026.enero.1.date'), title: t('inicio.eventos.2026.enero.1.title'), category: 'mesa' },
      { date: t('inicio.eventos.2026.enero.2.date'), title: t('inicio.eventos.2026.enero.2.title'), category: 'plan' },
      { date: t('inicio.eventos.2026.enero.3.date'), title: t('inicio.eventos.2026.enero.3.title'), category: 'mesa' },
      { date: t('inicio.eventos.2026.enero.4.date'), title: t('inicio.eventos.2026.enero.4.title'), category: 'mesa' },
    ],
    FEBRERO: [
      { date: t('inicio.eventos.2026.febrero.0.date'), title: t('inicio.eventos.2026.febrero.0.title'), category: 'electoral' },
      { date: t('inicio.eventos.2026.febrero.1.date'), title: t('inicio.eventos.2026.febrero.1.title'), category: 'mesa' },
      { date: t('inicio.eventos.2026.febrero.2.date'), title: t('inicio.eventos.2026.febrero.2.title'), category: 'mesa' }
    ],
    MARZO: [
      { date: t('inicio.eventos.2026.marzo.0.date'), title: t('inicio.eventos.2026.marzo.0.title'), category: 'mesa' },
      { date: t('inicio.eventos.2026.marzo.1.date'), title: t('inicio.eventos.2026.marzo.1.title'), category: 'mesa' },
    ],
    ABRIL: [
      { date: t('inicio.eventos.2026.abril.0.date'), title: t('inicio.eventos.2026.abril.0.title'), category: 'mesa' },
      { date: t('inicio.eventos.2026.abril.1.date'), title: t('inicio.eventos.2026.abril.1.title'), category: 'mesa' },
      { date: t('inicio.eventos.2026.abril.2.date'), title: t('inicio.eventos.2026.abril.2.title'), category: 'mesa' },
      { date: t('inicio.eventos.2026.abril.3.date'), title: t('inicio.eventos.2026.abril.3.title'), category: 'electoral' },
    ],
  },
});

export const Inicio: React.FC = () => {
  const { t } = useTranslation();
  const TIMELINE = getTimeline(t);
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
      title: t('inicio.news.1.title'),
      category: t('inicio.news.1.category'),
      url: 'https://elcomercio.pe/elecciones/elecciones-2026-37-de-las-39-agrupaciones-politicas-presentaron-formulas-presidenciales-a-la-onpe-ultmasi-noticia/',
      alt: t('inicio.news.1.alt'),
    },
    {
      id: 2,
      image: '/Imagenes-Pagina/Fondo4.jpg',
      title: t('inicio.news.2.title'),
      category: t('inicio.news.2.category'),
      url: 'https://elcomercio.pe/politica/candidatos-2026',
      alt: t('inicio.news.2.alt')
    },
    {
      id: 3,
      image: '/Imagenes-Pagina/Fondo5.jpg',
      title: t('inicio.news.3.title'),
      category: t('inicio.news.3.category'),
      url: 'https://elcomercio.pe/politica/preparativos-electorales',
      alt: t('inicio.news.3.alt')
    },
    {
      id: 4,
      image: '/Imagenes-Pagina/Fondo6.jpg',
      title: t('inicio.news.4.title'),
      category: t('inicio.news.4.category'),
      url: 'https://elcomercio.pe/politica/reforma-electoral',
      alt: t('inicio.news.4.alt')
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
            <h2 className="news-cards-title">{t('inicio.newsTitle')}</h2>
            
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
                <span className="filter-text">{t('inicio.filtrar')}</span>
              </button>
              
              {showFilterMenu && (
                <div className="filter-menu">
                  <div className="filter-menu-header">
                    <span className="filter-menu-title">{t('inicio.filtrarPor')}</span>
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
                    {t('inicio.filtro.todos')}
                  </button>
                  <button
                    className={`filter-option ${activeFilter === 'electoral' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('electoral')}
                  >
                    {t('inicio.filtro.electoral')}
                  </button>
                  <button
                    className={`filter-option ${activeFilter === 'plan' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('plan')}
                  >
                    {t('inicio.filtro.plan')}
                  </button>
                  <button
                    className={`filter-option ${activeFilter === 'mesa' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('mesa')}
                  >
                    {t('inicio.filtro.mesa')}
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
                {t(`inicio.meses.${m}`)}
              </button>
            ))}
          </div>

          {/* TIMELINE AREA */}
          <div className="timeline-area">
            <div className="timeline-line-vertical"></div>
            <div className="entries">
              {filteredEvents.length === 0 && <div className="no-events">{t('inicio.noEventos')}</div>}

              {filteredEvents.map((ev, idx) => (
                <div key={idx} className={`entry-wrapper ${idx % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-marker"></div>
                  <div className="entry">
                    <div className="calendar-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/>
                      </svg>
                    </div>
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
                <h4>{t('footer.oficinaCentral')}</h4>
                <p>{t('footer.direccion')}</p>
                <p>{t('footer.horario')}</p>
              </div>

              <div className="footer-col">
                <h4>{t('footer.contacto')}</h4>
                <p><a href="mailto:informes@onpe.gob.pe">informes@onpe.gob.pe</a></p>
                <p>{t('footer.telefono')}</p>
                <p>{t('footer.whatsapp')}</p>
              </div>

              <div className="footer-col">
                <h4>{t('footer.siguenos')}</h4>
                <div className="socials" role="navigation" aria-label="Redes sociales">
                  <a href="#" className="social social-facebook" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="social social-x" aria-label="X">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className="social social-tiktok" aria-label="TikTok">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  <a href="#" className="social social-instagram" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="social social-youtube" aria-label="YouTube">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              © 2026 {t('footer.portal')} - {t('footer.derechos')}
            </div>
          </footer>
    </div>
  );
};