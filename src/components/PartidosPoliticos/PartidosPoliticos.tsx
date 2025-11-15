import React, { useState } from 'react';
import './PartidosPoliticos.css';

interface Partido {
  id: number;
  nombre: string;
  siglas: string;
  logo: string;
  descripcion: string;
  fundacion: string;
  ideologia: string;
}

const PartidosPoliticos: React.FC = () => {
  const [partidoSeleccionado, setPartidoSeleccionado] = useState<Partido | null>(null);

  // Lista de 43 partidos políticos para las elecciones 2026 de Perú
  const partidos: Partido[] = [
    { id: 1, nombre: "Acción Popular", siglas: "AP", logo: "/logos/accion-popular.png", descripcion: "Partido político peruano de centro-derecha", fundacion: "1956", ideologia: "Democracia cristiana" },
    { id: 2, nombre: "Alianza para el Progreso", siglas: "APP", logo: "/logos/app.png", descripcion: "Partido político regional del norte del Perú", fundacion: "2001", ideologia: "Progresismo" },
    { id: 3, nombre: "Fuerza Popular", siglas: "FP", logo: "/logos/fuerza-popular.png", descripcion: "Partido político de derecha", fundacion: "2010", ideologia: "Fujimorismo" },
    { id: 4, nombre: "Perú Libre", siglas: "PL", logo: "/logos/peru-libre.png", descripcion: "Partido político de izquierda", fundacion: "2016", ideologia: "Socialismo" },
    { id: 5, nombre: "Renovación Popular", siglas: "RP", logo: "/logos/renovacion-popular.png", descripcion: "Partido político de derecha conservadora", fundacion: "2020", ideologia: "Conservadurismo" },
    { id: 6, nombre: "Avanza País", siglas: "AP", logo: "/logos/avanza-pais.png", descripcion: "Partido político liberal", fundacion: "2020", ideologia: "Liberalismo" },
    { id: 7, nombre: "Somos Perú", siglas: "SP", logo: "/logos/somos-peru.png", descripcion: "Partido político de centro", fundacion: "1998", ideologia: "Centrismo" },
    { id: 8, nombre: "Podemos Perú", siglas: "PP", logo: "/logos/podemos-peru.png", descripcion: "Partido político de centro-derecha", fundacion: "2018", ideologia: "Populismo" },
    { id: 9, nombre: "Partido Morado", siglas: "PM", logo: "/logos/partido-morado.png", descripcion: "Partido político de centro-izquierda", fundacion: "2017", ideologia: "Socialdemocracia" },
    { id: 10, nombre: "Juntos por el Perú", siglas: "JP", logo: "/logos/juntos-peru.png", descripcion: "Partido político de izquierda", fundacion: "2016", ideologia: "Socialismo democrático" },
    { id: 11, nombre: "Frente Amplio", siglas: "FA", logo: "/logos/frente-amplio.png", descripcion: "Coalición de izquierda", fundacion: "2013", ideologia: "Izquierda política" },
    { id: 12, nombre: "Victoria Nacional", siglas: "VN", logo: "/logos/victoria-nacional.png", descripcion: "Partido político nacionalista", fundacion: "2018", ideologia: "Nacionalismo" },
    { id: 13, nombre: "Democracia Directa", siglas: "DD", logo: "/logos/democracia-directa.png", descripcion: "Partido político progresista", fundacion: "2019", ideologia: "Democracia directa" },
    { id: 14, nombre: "Perú Patria Segura", siglas: "PPS", logo: "/logos/peru-patria-segura.png", descripcion: "Partido político conservador", fundacion: "2017", ideologia: "Conservadurismo" },
    { id: 15, nombre: "Partido Nacionalista Peruano", siglas: "PNP", logo: "/logos/pnp.png", descripcion: "Partido político nacionalista", fundacion: "2005", ideologia: "Nacionalismo de izquierda" },
    { id: 16, nombre: "Todos por el Perú", siglas: "TPP", logo: "/logos/todos-peru.png", descripcion: "Partido político de centro", fundacion: "2019", ideologia: "Centrismo" },
    { id: 17, nombre: "Partido Popular Cristiano", siglas: "PPC", logo: "/logos/ppc.png", descripcion: "Partido político de centro-derecha", fundacion: "1966", ideologia: "Democracia cristiana" },
    { id: 18, nombre: "Perú Nación", siglas: "PN", logo: "/logos/peru-nacion.png", descripcion: "Partido político conservador", fundacion: "2015", ideologia: "Conservadurismo" },
    { id: 19, nombre: "Partido Aprista Peruano", siglas: "PAP", logo: "/logos/pap.png", descripcion: "Partido político histórico", fundacion: "1930", ideologia: "Aprismo" },
    { id: 20, nombre: "Perú Bicentenario", siglas: "PB", logo: "/logos/peru-bicentenario.png", descripcion: "Partido político emergente", fundacion: "2021", ideologia: "Progresismo" },
    { id: 21, nombre: "Fuerza Patriota", siglas: "FPat", logo: "/logos/fuerza-patriota.png", descripcion: "Partido político nacionalista", fundacion: "2020", ideologia: "Patriotismo" },
    { id: 22, nombre: "País Primero", siglas: "PPr", logo: "/logos/pais-primero.png", descripcion: "Partido político de centro-derecha", fundacion: "2021", ideologia: "Conservadurismo liberal" },
    { id: 23, nombre: "Unión por el Perú", siglas: "UPP", logo: "/logos/union-peru.png", descripcion: "Partido político de izquierda", fundacion: "1994", ideologia: "Nacionalismo de izquierda" },
    { id: 24, nombre: "Contigo", siglas: "CG", logo: "/logos/contigo.png", descripcion: "Partido político regional", fundacion: "2015", ideologia: "Regionalismo" },
    { id: 25, nombre: "Perú Seguro", siglas: "PS", logo: "/logos/peru-seguro.png", descripcion: "Partido político enfocado en seguridad", fundacion: "2022", ideologia: "Seguridad ciudadana" },
    { id: 26, nombre: "Vamos Perú", siglas: "VP", logo: "/logos/vamos-peru.png", descripcion: "Partido político de centro", fundacion: "2014", ideologia: "Centrismo" },
    { id: 27, nombre: "Solidaridad Nacional", siglas: "SN", logo: "/logos/solidaridad-nacional.png", descripcion: "Partido político evangélico", fundacion: "2002", ideologia: "Democracia cristiana evangélica" },
    { id: 28, nombre: "Perú Renace", siglas: "PRe", logo: "/logos/peru-renace.png", descripcion: "Partido político reformista", fundacion: "2023", ideologia: "Reformismo" },
    { id: 29, nombre: "Cambio Democrático", siglas: "CD", logo: "/logos/cambio-democratico.png", descripcion: "Partido político progresista", fundacion: "2020", ideologia: "Progresismo democrático" },
    { id: 30, nombre: "Fuerza Verde", siglas: "FV", logo: "/logos/fuerza-verde.png", descripcion: "Partido político ecologista", fundacion: "2021", ideologia: "Ecologismo" },
    { id: 31, nombre: "Perú Trabajador", siglas: "PTr", logo: "/logos/peru-trabajador.png", descripcion: "Partido político laborista", fundacion: "2019", ideologia: "Laborismo" },
    { id: 32, nombre: "Nueva Alianza", siglas: "NA", logo: "/logos/nueva-alianza.png", descripcion: "Partido político de coalición", fundacion: "2022", ideologia: "Aliancismo" },
    { id: 33, nombre: "Perú Justo", siglas: "PJ", logo: "/logos/peru-justo.png", descripcion: "Partido político de justicia social", fundacion: "2020", ideologia: "Justicia social" },
    { id: 34, nombre: "Dignidad y Democracia", siglas: "DyD", logo: "/logos/dignidad-democracia.png", descripcion: "Partido político democrático", fundacion: "2021", ideologia: "Democracia participativa" },
    { id: 35, nombre: "Perú Unido", siglas: "PU", logo: "/logos/peru-unido.png", descripcion: "Partido político unionista", fundacion: "2022", ideologia: "Unionismo" },
    { id: 36, nombre: "Esperanza Peruana", siglas: "EP", logo: "/logos/esperanza-peruana.png", descripcion: "Partido político de esperanza", fundacion: "2023", ideologia: "Humanismo" },
    { id: 37, nombre: "Frente Popular", siglas: "FPop", logo: "/logos/frente-popular.png", descripcion: "Partido político popular", fundacion: "2018", ideologia: "Populismo de izquierda" },
    { id: 38, nombre: "Perú Adelante", siglas: "PA", logo: "/logos/peru-adelante.png", descripcion: "Partido político progresista", fundacion: "2021", ideologia: "Progresismo" },
    { id: 39, nombre: "Innovación Nacional", siglas: "IN", logo: "/logos/innovacion-nacional.png", descripcion: "Partido político tecnócrata", fundacion: "2022", ideologia: "Tecnocracia" },
    { id: 40, nombre: "Perú Soberano", siglas: "PSob", logo: "/logos/peru-soberano.png", descripcion: "Partido político soberanista", fundacion: "2020", ideologia: "Soberanismo" },
    { id: 41, nombre: "Compromiso Perú", siglas: "CP", logo: "/logos/compromiso-peru.png", descripcion: "Partido político comprometido", fundacion: "2023", ideologia: "Compromiso social" },
    { id: 42, nombre: "Perú Futuro", siglas: "PF", logo: "/logos/peru-futuro.png", descripcion: "Partido político futurista", fundacion: "2023", ideologia: "Futurismo político" },
    { id: 43, nombre: "Alianza Nacional", siglas: "AN", logo: "/logos/alianza-nacional.png", descripcion: "Partido político de alianza", fundacion: "2022", ideologia: "Alianza nacional" }
  ];

  const handlePartidoClick = (partido: Partido) => {
    setPartidoSeleccionado(partido);
  };

  const cerrarDetalle = () => {
    setPartidoSeleccionado(null);
  };

  return (
    <div className="partidos-container">
      <h1 className="titulo-principal">Partidos Políticos - Elecciones Perú 2026</h1>
      <p className="subtitulo">43 partidos políticos inscritos para las elecciones generales</p>

      {!partidoSeleccionado ? (
        <div className="partidos-grid">
          {partidos.map((partido) => (
            <div
              key={partido.id}
              className="partido-card"
              onClick={() => handlePartidoClick(partido)}
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
      ) : (
        <div className="partido-detalle">
          <button className="btn-volver" onClick={cerrarDetalle}>
            ← Volver a la lista
          </button>
          <div className="detalle-content">
            <div className="detalle-header">
              <img src={partidoSeleccionado.logo} alt={`Logo ${partidoSeleccionado.nombre}`} className="detalle-logo" />
              <div>
                <h2>{partidoSeleccionado.nombre}</h2>
                <p className="detalle-siglas">{partidoSeleccionado.siglas}</p>
              </div>
            </div>
            <div className="detalle-info">
              <div className="info-item">
                <strong>Descripción:</strong>
                <p>{partidoSeleccionado.descripcion}</p>
              </div>
              <div className="info-item">
                <strong>Año de fundación:</strong>
                <p>{partidoSeleccionado.fundacion}</p>
              </div>
              <div className="info-item">
                <strong>Ideología:</strong>
                <p>{partidoSeleccionado.ideologia}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartidosPoliticos;
