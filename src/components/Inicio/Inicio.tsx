import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Inicio.css';
import InicioOffline from './InicioOffline';

type EventItem = { date: string; title: string; bullets?: string[]; icon?: string; category?: 'electoral' | 'plan' | 'mesa' | 'administrativo' };
type NewsItem = { id: number; image: string; title: string; category: string; url: string; alt: string };

const getTimelineFromTranslation = (t: any): Record<string, Record<string, EventItem[]>> => {
  const timeline: Record<string, Record<string, EventItem[]>> = {};
  
  const eventos = t('inicio.eventos', { returnObjects: true }) as any;
  
  if (!eventos) return {};
  
  Object.keys(eventos).forEach(year => {
    timeline[year] = {};
    const yearData = eventos[year];
    
    Object.keys(yearData).forEach(month => {
      const monthKey = month.toUpperCase();
      const events = yearData[month];
      
      timeline[year][monthKey] = events.map((ev: any) => ({
        date: ev.date,
        title: ev.title,
        bullets: ev.bullets,
        icon: ev.icon || '',
        category: (ev.category || 'electoral') as 'electoral' | 'plan' | 'mesa' | 'administrativo'
      }));
    });
  });
  
  return timeline;
};

const FALLBACK_TIMELINE: Record<string, Record<string, EventItem[]>> = {
  '2025': {
    MARZO: [
      { date: '26 Marzo', title: 'Convocatoria a Elecciones Generales 2026', icon: '', category: 'electoral' },
      { date: '28 Marzo', title: 'Publicación de cronograma electoral en el Diario Oficial', icon: '', category: 'plan' }
    ],
    ABRIL: [
      { date: '5 Abril', title: 'Inicio de campañas informativas sobre el proceso electoral', icon: '', category: 'electoral' },
      { date: '12 Abril', title: 'Fecha límite para la inscripción de partidos políticos en el ROP', icon: '', category: 'plan' },
      { date: '20 Abril', title: 'Capacitación inicial de personal electoral', icon: '', category: 'mesa' }
    ],
    JUNIO: [
      { date: '11 Junio', title: 'Registro de normativa actualizada de las organizaciones políticas', icon: '', category: 'plan' },
      { date: '15 Junio', title: 'Presentación de candidatos a delegados electorales', icon: '', category: 'electoral' },
      { date: '30 Junio', title: 'Fecha límite para que la Dirección Nacional de Registro de Organizaciones Políticas (DNROP) remita al Reniec los padrones de electores afiliados para las elecciones primarias (EG 2026)', icon: '', category: 'plan' },
    ],
    AGOSTO: [
      { date: '2 Agosto', title: 'Inscripción de alianzas partidarias para las Elecciones Generales 2026', icon: '', category: 'plan' },
      { date: '10 Agosto', title: 'Talleres de entrenamiento para miembros de mesa designados', icon: '', category: 'mesa' },
      { date: '30 Agosto', title: 'Reniec remite al JNE los padrones de electores afiliados para las elecciones primarias', icon: '', category: 'plan' },
    ],
    SEPTIEMBRE: [
      {
        date: '1 Septiembre',
        title: 'La Organización política informa la modalidad y tipo de candidaturas para las elecciones primarias (EG 2026)',
        bullets: [
          'Fecha límite para que las alianzas partidarias logren inscripción (EG 2026)',
          'Fecha límite para que las OP* presenten a la DNROP** la relación de electores no afiliados para las elecciones primarias',
        ],
        icon: '',
        category: 'plan'
      },
      { date: '5 Septiembre', title: 'Selección preliminar de miembros de mesa por provincia', icon: '', category: 'mesa' },
      { date: '8 Septiembre', title: 'Fecha límite para que la DNROP** remita al Reniec los padrones de electores no afiliados', icon: '', category: 'plan' },
      { date: '15 Septiembre', title: 'OP* presentan candidatos a delegados para las elecciones primarias', icon: '', category: 'electoral' },
      { date: '16 Septiembre', title: 'Reniec remite al JNE los padrones de electores no afiliados', icon: '', category: 'plan' },
      { date: '20 Septiembre', title: 'Publicación de listados preliminares de miembros de mesa', icon: '', category: 'mesa' }
    ],
    OCTUBRE: [
      { date: '5 Octubre', title: 'Asambleas de elecciones primarias en todas las regiones', icon: '', category: 'electoral' },
      { date: '14 Octubre', title: 'Cierre del padrón electoral para las Elecciones Generales 2026', icon: '', category: 'plan' },
      { date: '19 Octubre', title: 'Fecha límite para aprobación de padrones, en el marco de las elecciones primarias', icon: '', category: 'plan' },
      { date: '25 Octubre', title: 'Confirmación final de miembros de mesa y suplentes', icon: '', category: 'mesa' },
      { date: 'Del 28 al 31 Octubre', title: 'OP* realizan la inscripción de precandidaturas', icon: '', category: 'electoral' },
    ],
    NOVIEMBRE: [
      { date: '3 Noviembre', title: 'Resolución de impugnaciones de miembros de mesa propuestos', icon: '', category: 'mesa' },
      { date: '7 Noviembre', title: 'Fecha límite de entrega de candidatos finales a la ONPE por parte de la OP*', icon: '', category: 'electoral' },
      { date: '10 Noviembre', title: 'OP* realizan el registro de personeros para las elecciones primarias (EG 2026)', icon: '', category: 'mesa' },
      { date: '13 Noviembre', title: 'Envío del padrón preliminar al JNE y a la ONPE para las Elecciones Generales 2026', icon: '', category: 'plan' },
      { date: '20 Noviembre', title: 'Distribución de materiales electorales a locales de votación', icon: '', category: 'mesa' },
      { date: '30 Noviembre', title: 'Elecciones primarias (Afiliados)', icon: '', category: 'electoral' },
    ],
    DICIEMBRE: [
      { date: '5 Diciembre', title: 'Conteo de resultados de elecciones primarias', icon: '', category: 'electoral' },
      { date: '13 Diciembre', title: 'Fecha límite de aprobación del padrón electoral definitivo para las Elecciones Generales 2026', icon: '', category: 'plan' },
      { date: '18 Diciembre', title: 'Publicación de resultados finales de elecciones primarias', icon: '', category: 'electoral' },
      { date: '23 Diciembre', title: 'Fecha límite para inscripción de fórmulas y listas de candidatos', icon: '', category: 'electoral' },
      {
        date: '24 Diciembre',
        title: 'Fecha límite para la publicación de instrucciones para la ubicación en la cédula de sufragio y publicación del diseño de cédula para la presentación de tachas',
        icon: '',
        category: 'plan'
      },
      { date: '26 Diciembre al 15 Enero', title: 'Impugnaciones y resolución de tachas a la cédula de sufragio', icon: '', category: 'electoral' },
    ],
  },
  '2026': {
    ENERO: [
      { date: '5 Enero', title: 'Continuación de resolución de impugnaciones a cédula de sufragio', icon: '', category: 'electoral' },
      { date: '15 Enero', title: 'Finalización del período de impugnaciones a miembros de mesa', icon: '', category: 'mesa' },
      { date: '22 Enero', title: 'Publicación definitiva del diseño de cédula para las Elecciones Generales 2026', icon: '', category: 'plan' },
      { date: '29 Enero', title: 'Sorteo de miembros de mesa', icon: '', category: 'mesa' },
      { date: '30 Enero al 11 Febrero', title: 'Proceso de impugnación, apelaciones y resolución de tachas a miembros de mesa', icon: '', category: 'mesa' },
    ],
    FEBRERO: [
      { date: '5 Febrero', title: 'Publicación de lista definitiva de candidatos por organización política', icon: '', category: 'electoral' },
      {
        date: '12 Febrero',
        title: 'Sorteo de ubicación de candidaturas o símbolos en la cédula de sufragio, Publicación definitiva de la lista de miembros de mesa, Fecha límite para el retiro y/o renuncia de listas de candidatos',
        icon: '',
        category: 'mesa'
      },
      { date: '25 Febrero', title: 'Inicio de distribución de materiales electorales a locales de votación', icon: '', category: 'mesa' }
    ],
    MARZO: [
      { date: '15 Marzo', title: 'Finalizacion de entrega de materiales electorales en todos los distritos', icon: '', category: 'mesa' },
      { date: '29 Marzo', title: '1ra jornada de capacitación a miembros de mesa para las Elecciones Generales 2026', icon: '', category: 'mesa' },
    ],
    ABRIL: [
      { date: '2 Abril', title: 'Segunda jornada de capacitación a miembros de mesa', icon: '', category: 'mesa' },
      { date: '5 Abril', title: 'Simulacro del Sistema de Cómputo Electoral y 2da jornada de capacitación a miembros de mesa', icon: '', category: 'mesa' },
      { date: '10 Abril', title: 'Últimas verificaciones de locales de votación', icon: '', category: 'mesa' },
      { date: '12 Abril', title: 'Elecciones Generales 2026', icon: '', category: 'electoral' },
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
  const [offlineMode, setOfflineMode] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOfflineAlert, setShowOfflineAlert] = useState(false);

  const TIMELINE = getTimelineFromTranslation(t);

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



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % news.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [news.length]);


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



  React.useEffect(() => {
    if (!months.includes(activeMonth)) {
      setActiveMonth(months[0]);
    }
  }, [activeYear]);

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

  const filteredEvents = activeFilter === 'todos' 
    ? monthEvents 
    : monthEvents.filter(ev => getEventCategory(ev) === activeFilter);

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

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineAlert(false);
    };
    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineAlert(true);
    };
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOnline && !offlineMode) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f5f5',
      }}>
        <div style={{
          background: '#fff',
          borderRadius: 20,
          boxShadow: '0 8px 32px rgba(179,2,39,0.10)',
          padding: '48px 32px 32px 32px',
          maxWidth: 380,
          width: '100%',
          textAlign: 'center',
          border: '2px solid rgb(179,2,39)'
        }}>
          <div style={{
            fontSize: 44,
            marginBottom: 18,
            color: 'rgb(179,2,39)',
            fontWeight: 900,
            letterSpacing: 1
          }}>⛔</div>
          <h2 style={{
            color: 'rgb(179,2,39)',
            fontWeight: 800,
            fontSize: 22,
            marginBottom: 10
          }}>No hay conexión a internet</h2>
          <p style={{
            color: '#333',
            fontSize: 16,
            marginBottom: 32
          }}>
            Verifique su conexión para continuar usando la plataforma.
          </p>
          <button
            style={{
              background: 'rgb(179,2,39)',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '12px 28px',
              fontWeight: 700,
              fontSize: 16,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}
            onClick={() => navigate('/offline')}
          >
            Entrar en modo sin internet
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="inicio-container">
      {showOfflineAlert && (
        <div style={{
          background: '#ffe0e0',
          color: '#b30227',
          padding: '16px',
          textAlign: 'center',
          fontWeight: 600,
          borderBottom: '2px solid #b30227'
        }}>
          Sin conexión a internet. 
          <button
            style={{
              marginLeft: 16,
              background: '#b30227',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '8px 18px',
              fontWeight: 700,
              fontSize: 15,
              cursor: 'pointer'
            }}
            onClick={() => setOfflineMode(true)}
          >
            Activar modo offline
          </button>
        </div>
      )}

      <main>
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


        <section className="timeline-wrapper">
          <h1 className="timeline-title">{t('inicio.timelineTitle')}</h1>

          <div className="timeline-header">
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

          <div className="timeline-content-wrapper">
            <div className="timeline-area-left">
              <div className="timeline-area">
                <div className="timeline-line-vertical"></div>
                <div className="entries">
                  {filteredEvents.length === 0 && <div className="no-events">{t('inicio.noEventos')}</div>}

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
            </div>

            <div className="timeline-area-right">
              <div className="timeline-sidebar">
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
              </div>
            </div>
          </div>
        </section>
      </main>

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