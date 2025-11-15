export interface DetalleCandidato {
  id: string;
  nombre: string;
  cargo?: string;
  foto?: string;
}

export interface Partido {
  id: number;
  nombre: string;
  siglas: string;
  logo: string;
  descripcion?: string;
  planUrl?: string;
  planGobierno?: string; // Nueva propiedad
  candidatos?: DetalleCandidato[];
}

export const PARTIDOS: Partido[] = [
  {
    id: 1,
    nombre: "Acción Popular",
    siglas: "AP",
    logo: "/logos/accion-popular.png",
    descripcion: "Partido político peruano de orientación democratacristiana y humanista.",
    candidatos: [
      { id: "ap1", nombre: "Candidato Presidencial AP", cargo: "Presidente", foto: "" },
      { id: "ap2", nombre: "Candidato Vicepresidencial AP", cargo: "Vicepresidente", foto: "" },
      { id: "ap3", nombre: "Candidato AP", cargo: "Congresista", foto: "" }
    ]
  },
  {
    id: 2,
    nombre: "Fuerza Popular",
    siglas: "FPu",
    logo: "/logos/fuerza-popular.png",
    descripcion: "Partido político peruano de derecha y fujimorista.",
    candidatos: [
      { id: "fp1", nombre: "Candidato Presidencial FP", cargo: "Presidente", foto: "" },
      { id: "fp2", nombre: "Candidato Vicepresidencial FP", cargo: "Vicepresidente", foto: "" },
      { id: "fp3", nombre: "Candidato FP", cargo: "Congresista", foto: "" }
    ]
  },
  {
    id: 3,
    nombre: "Partido de los Trabajadores PTE–Perú",
    siglas: "PTE",
    logo: "/logos/pte-peru.png",
    descripcion: "Partido político de izquierda enfocado en los derechos de los trabajadores.",
    candidatos: [
      { id: "pte1", nombre: "Napoleón Becerra", cargo: "Presidente", foto: "/FotosCandidatos/partido-trabajadores-pte-peru.jpg" }
    ]
  },
  {
    id: 4,
    nombre: "Ahora Nación",
    siglas: "AN",
    logo: "/logos/ahora-nacion.png",
    descripcion: "Partido político peruano de centro.",
    candidatos: []
  },
  {
    id: 5,
    nombre: "Juntos por el Perú",
    siglas: "JPP",
    logo: "/logos/juntos-por-el-peru.png",
    descripcion: "Partido político peruano de izquierda.",
    candidatos: []
  },
  {
    id: 6,
    nombre: "Partido del Buen Gobierno",
    siglas: "PBG",
    logo: "/logos/partido-buen-gobierno.png",
    descripcion: "Partido enfocado en la transparencia y la gobernabilidad.",
    candidatos: []
  },
  {
    id: 7,
    nombre: "Alianza para el Progreso",
    siglas: "APP",
    logo: "/logos/alianza-para-el-progreso.png",
    descripcion: "Partido político peruano de centroderecha.",
    candidatos: [
      { id: "app1", nombre: "César Acuña Peralta", cargo: "Presidente", foto: "" },
      { id: "app2", nombre: "Carmen Omonte Durand", cargo: "1ra Vicepresidenta", foto: "" },
      { id: "app3", nombre: "Luis Iberico Núñez", cargo: "2do Vicepresidente", foto: "" }
    ]
  },
  {
    id: 8,
    nombre: "Libertad Popular",
    siglas: "LP",
    logo: "/logos/libertad-popular.png",
    descripcion: "Partido político de centroderecha.",
    candidatos: []
  },
  {
    id: 9,
    nombre: "Partido Demócrata Unido Perú",
    siglas: "PDU",
    logo: "/logos/partido-democrata-unido.png",
    descripcion: "Partido político democrático.",
    candidatos: []
  },
  {
    id: 10,
    nombre: "Avanza País – Partido de Integración Social",
    siglas: "APIS",
    logo: "/logos/avanza-pais.png",
    descripcion: "Partido político de derecha liberal.",
    candidatos: [
      { id: "apis1", nombre: "Phillip Butters", cargo: "Presidente", foto: "/FotosCandidatos/avanza-pais.jpeg" }
    ]
  },
  {
    id: 11,
    nombre: "Nuevo Perú por el Buen Vivir",
    siglas: "NPBV",
    logo: "/logos/nuevo-peru-por-el-buen-vivir.png",
    descripcion: "Partido político de izquierda progresista.",
    candidatos: []
  },
  {
    id: 12,
    nombre: "Partido Demócrata Verde",
    siglas: "PDV",
    logo: "/logos/partido-democrata-verde.png",
    descripcion: "Partido político ecologista.",
    candidatos: [
      { id: "pdv1", nombre: "Álex Gonzales", cargo: "Presidente", foto: "/FotosCandidatos/partido-democrata-verde.jpg" }
    ]
  },
  {
    id: 13,
    nombre: "Batalla Perú",
    siglas: "BP",
    logo: "/logos/batalla-peru.png",
    descripcion: "Partido político peruano.",
    candidatos: []
  },
  {
    id: 14,
    nombre: "Partido Aprista Peruano",
    siglas: "APRA",
    logo: "/logos/partido-aprista-peruano.png",
    descripcion: "Partido político histórico del Perú, socialdemócrata.",
    candidatos: []
  },
  {    id: 15,
    nombre: "Partido Democrático Federal",
    siglas: "PDF",
    logo: "/logos/partido-democratico-federal.png",
    descripcion: "Partido político federalista.",
    candidatos: []
  },
  {
    id: 16,
    nombre: "Fe en el Perú",
    siglas: "FEP",
    logo: "/logos/fe-en-el-peru.png",
    descripcion: "Partido político conservador.",
    candidatos: []
  },
  {
    id: 17,
    nombre: "Partido Ciudadanos por el Perú",
    siglas: "CPP",
    logo: "/logos/ciudadanos-por-el-peru.png",
    descripcion: "Partido ciudadano enfocado en la participación.",
    candidatos: []
  },
  {
    id: 18,
    nombre: "Partido Democrático Somos Perú",
    siglas: "DSP",
    logo: "/logos/somos-peru.png",
    descripcion: "Partido político de centroizquierda.",
    candidatos: []
  },
  {
    id: 19,
    nombre: "Frente Popular Agrícola FIA del Perú (Frepap)",
    siglas: "Frepap",
    logo: "/logos/frepap.png",
    descripcion: "Partido político evangélico agrario.",
    candidatos: []
  },
  {
    id: 20,
    nombre: "Partido Cívico Obras",
    siglas: "PCO",
    logo: "/logos/partido-civico-obras.png",
    descripcion: "Partido enfocado en obras públicas.",
    candidatos: [
      { id: "pco1", nombre: "Ricardo Belmont", cargo: "Presidente", foto: "/FotosCandidatos/partido-civico-obras.jpg" }
    ]
  },
  {
    id: 21,
    nombre: "Frente de la Esperanza 2021",
    siglas: "F21",
    logo: "/logos/frente-esperanza-2021.png",
    descripcion: "Frente político progresista.",
    candidatos: []
  },
  {
    id: 22,
    nombre: "Partido Morado",
    siglas: "PM",
    logo: "/logos/partido-morado.png",
    descripcion: "Partido político de centro.",
    candidatos: []
  },
  {
    id: 23,
    nombre: "Partido Político Perú Acción",
    siglas: "PA",
    logo: "/logos/peru-accion.png",
    descripcion: "Partido político de acción ciudadana.",
    candidatos: []
  },
  {
    id: 24,
    nombre: "Perú Moderno",
    siglas: "PMo",
    logo: "/logos/peru-moderno.png",
    descripcion: "Partido político modernista.",
    candidatos: []
  },
  {
    id: 25,
    nombre: "Partido País para Todos",
    siglas: "PPT",
    logo: "/logos/pais-para-todos.png",
    descripcion: "Partido inclusivo y social.",
    candidatos: [
      { id: "ppt1", nombre: "Carlos Álvarez", cargo: "Presidente", foto: "/FotosCandidatos/pais-para-todos.jpg" }
    ]
  },
  {
    id: 26,
    nombre: "Partido Político Perú Primero",
    siglas: "PP1",
    logo: "/logos/peru-primero.png",
    descripcion: "Partido nacionalista.",
    candidatos: [
      { id: "pp1-1", nombre: "Mario Vizcarra", cargo: "Presidente", foto: "/FotosCandidatos/peru-primero.jpg" }
    ]
  },
  {
    id: 27,
    nombre: "Podemos Perú",
    siglas: "PP",
    logo: "/logos/podemos-peru.png",
    descripcion: "Partido político de centro.",
    candidatos: []
  },
  {
    id: 28,
    nombre: "Partido Patriótico del Perú",
    siglas: "PPP",
    logo: "/logos/partido-patriotico-del-peru.png",
    descripcion: "Partido patriótico nacionalista.",
    candidatos: []
  },
  {
    id: 29,
    nombre: "Peruanos Unidos – Somos Libres",
    siglas: "PUSL",
    logo: "/logos/peruanos-unidos.png",
    descripcion: "Partido de unidad nacional.",
    candidatos: []
  },
  {
    id: 30,
    nombre: "Primero la Gente",
    siglas: "PLC",
    logo: "/logos/primero-la-gente.png",
    descripcion: "Partido enfocado en las personas.",
    candidatos: []
  },
  {
    id: 31,
    nombre: "Cooperación Popular",
    siglas: "CP",
    logo: "/logos/cooperacion-popular.png",
    descripcion: "Partido cooperativista.",
    candidatos: [
      { id: "cp1", nombre: "Yonhy Lescano", cargo: "Presidente", foto: "/FotosCandidatos/cooperacion-popular.jpg" }
    ]
  },
  {
    id: 32,
    nombre: "Voces del Pueblo",
    siglas: "VP",
    logo: "/logos/voces-del-pueblo.png",
    descripcion: "Partido de representación popular.",
    candidatos: [
      { id: "vp1", nombre: "Gillermo Bermejo", cargo: "Presidente", foto: "/FotosCandidatos/voces-del-pueblo.jpg" }
    ]
  },
  {
    id: 33,
    nombre: "Progresemos",
    siglas: "PRG",
    logo: "/logos/progresemos.png",
    descripcion: "Partido progresista.",
    candidatos: []
  },
  {
    id: 34,
    nombre: "Fuerza Moderna",
    siglas: "FM",
    logo: "/logos/fuerza-moderna.png",
    descripcion: "Partido moderno y reformista.",
    candidatos: []
  },
  {
    id: 35,
    nombre: "PRIN",
    siglas: "PRIN",
    logo: "/logos/prin.png",
    descripcion: "Partido de renovación nacional.",
    candidatos: []
  },
  {
    id: 36,
    nombre: "Renovación Popular",
    siglas: "RP",
    logo: "/logos/renovacion-popular.png",
    descripcion: "Partido político de derecha conservadora.",
    planGobierno: "/pdf/plangobierno-rp.pdf", // Agregar esta línea
    candidatos: [
      { id: "rp1", nombre: "Rafael López Aliaga", cargo: "Presidente", foto: "/FotosCandidatos/renovacion-popular.jpg" }
    ]
  },
  {
    id: 37,
    nombre: "Integridad Democrática",
    siglas: "ID",
    logo: "/logos/integridad-democratica.png",
    descripcion: "Partido enfocado en la integridad.",
    candidatos: []
  },
  {
    id: 38,
    nombre: "Partido Popular Cristiano",
    siglas: "PPC",
    logo: "/logos/partido-popular-cristiano.png",
    descripcion: "Partido democratacristiano histórico.",
    candidatos: []
  },
  {
    id: 39,
    nombre: "Salvemos al Perú",
    siglas: "SP",
    logo: "/logos/salvemos-al-peru.png",
    descripcion: "Partido de salvación nacional.",
    candidatos: []
  },
  {
    id: 40,
    nombre: "Perú Libre",
    siglas: "PL",
    logo: "/logos/peru-libre.png",
    descripcion: "Partido político de izquierda marxista.",
    candidatos: []
  },
  {
    id: 41,
    nombre: "Partido Sí Creo",
    siglas: "SC",
    logo: "/logos/si-creo.png",
    descripcion: "Partido de fe y valores.",
    candidatos: [
      { id: "sc1", nombre: "Carlos Espá", cargo: "Presidente", foto: "/FotosCandidatos/si-creo.jpg" }
    ]
  },
  {
    id: 42,
    nombre: "Un Camino Diferente",
    siglas: "UCD",
    logo: "/logos/un-camino-diferente.png",
    descripcion: "Partido alternativo.",
    candidatos: []
  },
  {
    id: 43,
    nombre: "Partido Unidad y Paz",
    siglas: "UyP",
    logo: "/logos/unidad-y-paz.png",
    descripcion: "Partido enfocado en la unidad.",
    candidatos: []
  },
  {
    id: 44,
    nombre: "Partido Político Nacional Perú Libre",
    siglas: "PNPL",
    logo: "/logos/peru-libre.png",
    descripcion: "Partido político de izquierda.",
    candidatos: []
  }
];

export default PARTIDOS;