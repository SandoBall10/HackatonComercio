export interface DetalleCandidato {
  id: string;
  nombre: string;
  cargo?: string;
  foto?: string;
}

export interface Diputado {
  id: string;
  nombre: string;
  circunscripcion: string;
  foto?: string;
}

export interface Senador {
  id: string;
  nombre: string;
  ambito: string;
  foto?: string;
}

export interface ParlamentarioAndino {
  id: string;
  nombre: string;
  foto?: string;
}

export interface Partido {
  id: number;
  nombre: string;
  siglas: string;
  logo: string;
  descripcion?: string;
  planUrl?: string;
  planGobierno?: string;
  candidatos?: DetalleCandidato[];
  diputados?: Diputado[];
  senadores?: Senador[];
  parlamentariosAndinos?: ParlamentarioAndino[];
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
    ],
    diputados: [
      { id: "ap-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "" },
      { id: "ap-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "" },
      { id: "ap-d3", nombre: "Pedro Antonio Ramírez Silva", circunscripcion: "Arequipa", foto: "" },
      { id: "ap-d4", nombre: "Rosa María Fernández Castro", circunscripcion: "La Libertad", foto: "" },
      { id: "ap-d5", nombre: "José Luis Mendoza Vargas", circunscripcion: "Piura", foto: "" },
      { id: "ap-d6", nombre: "Carmen Patricia Rojas Díaz", circunscripcion: "Lambayeque", foto: "" }
    ],
    senadores: [
      { id: "ap-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
      { id: "ap-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "" }
    ],
    parlamentariosAndinos: [
       { id: "ap-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
       { id: "ap-pa2", nombre: "Miguel Ángel Sánchez Paredes", foto: "" }
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
    ],
    diputados: [
      { id: "fp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "" },
      { id: "fp-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "" },
      { id: "fp-d3", nombre: "Pedro Antonio Ramírez Silva", circunscripcion: "Arequipa", foto: "" },
      { id: "fp-d4", nombre: "Rosa María Fernández Castro", circunscripcion: "La Libertad", foto: "" },
      { id: "fp-d5", nombre: "José Luis Mendoza Vargas", circunscripcion: "Piura", foto: "" },
      { id: "fp-d6", nombre: "Carmen Patricia Rojas Díaz", circunscripcion: "Lambayeque", foto: "" }
    ],
    senadores: [
      { id: "fp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
      { id: "fp-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "" }
    ],
    parlamentariosAndinos: [
       { id: "fp-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
       { id: "fp-pa2", nombre: "Miguel Ángel Sánchez Paredes", foto: "" }
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
    ],
    diputados: [
      { id: "pte-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "" },
      { id: "pte-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "" },
      { id: "pte-d3", nombre: "Pedro Antonio Ramírez Silva", circunscripcion: "Arequipa", foto: "" },
      { id: "pte-d4", nombre: "Rosa María Fernández Castro", circunscripcion: "La Libertad", foto: "" },
      { id: "pte-d5", nombre: "José Luis Mendoza Vargas", circunscripcion: "Piura", foto: "" },
      { id: "pte-d6", nombre: "Carmen Patricia Rojas Díaz", circunscripcion: "Lambayeque", foto: "" }
    ],
    senadores: [
      { id: "pte-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
      { id: "pte-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "" }
    ],
    parlamentariosAndinos: [
       { id: "pte-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
       { id: "pte-pa2", nombre: "Miguel Ángel Sánchez Paredes", foto: "" }
    ]
  },
  {
    id: 4,
    nombre: "Ahora Nación",
    siglas: "AN",
    logo: "/logos/ahora-nacion.png",
    descripcion: "Partido político peruano de centro.",
    candidatos: [],
    diputados: [
      { id: "an-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "" },
      { id: "an-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "" },
      { id: "an-d3", nombre: "Pedro Antonio Ramírez Silva", circunscripcion: "Arequipa", foto: "" },
      { id: "an-d4", nombre: "Rosa María Fernández Castro", circunscripcion: "La Libertad", foto: "" },
      { id: "an-d5", nombre: "José Luis Mendoza Vargas", circunscripcion: "Piura", foto: "" },
      { id: "an-d6", nombre: "Carmen Patricia Rojas Díaz", circunscripcion: "Lambayeque", foto: "" }
    ],
    senadores: [
      { id: "an-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
      { id: "an-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "" }
    ],
    parlamentariosAndinos: [
       { id: "an-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
       { id: "an-pa2", nombre: "Miguel Ángel Sánchez Paredes", foto: "" }
    ]
  },
  {
    id: 5,
    nombre: "Juntos por el Perú",
    siglas: "JPP",
    logo: "/logos/juntos-por-el-peru.png",
    descripcion: "Partido político peruano de izquierda.",
    candidatos: [],
    diputados: [
      { id: "jpp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "" },
      { id: "jpp-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "" },
    ],
    senadores: [
      { id: "jpp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
      { id: "jpp-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "" }
    ],
    parlamentariosAndinos: [
       { id: "jpp-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
       { id: "jpp-pa2", nombre: "Miguel Ángel Sánchez Paredes", foto: "" }
    ]
  },
  {
    id: 6,
    nombre: "Partido del Buen Gobierno",
    siglas: "PBG",
    logo: "/logos/partido-buen-gobierno.png",
    descripcion: "Partido enfocado en la transparencia y la gobernabilidad.",
    candidatos: [],
    diputados: [
      { id: "pbg-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "" },
      { id: "pbg-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "" },
      { id: "pbg-d3", nombre: "Pedro Antonio Ramírez Silva", circunscripcion: "Arequipa", foto: "" },
    ],
    senadores: [
      { id: "pbg-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
      { id: "pbg-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "" }
    ],
    parlamentariosAndinos: [
       { id: "pbg-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
       { id: "pbg-pa2", nombre: "Miguel Ángel Sánchez Paredes", foto: "" }
    ]
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
    ],
    diputados: [
      { id: "app-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "" },
      { id: "app-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "" },
      { id: "app-d3", nombre: "Pedro Antonio Ramírez Silva", circunscripcion: "Arequipa", foto: "" },
      { id: "app-d4", nombre: "Rosa María Fernández Castro", circunscripcion: "La Libertad", foto: "" }
    ],
    senadores: [
      { id: "app-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
      { id: "app-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "" }
    ],
    parlamentariosAndinos: [
       { id: "app-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
       { id: "app-pa2", nombre: "Miguel Ángel Sánchez Paredes", foto: "" }
    ]
  },
  {
    id: 8,
    nombre: "Libertad Popular",
    siglas: "LP",
    logo: "/logos/libertad-popular.png",
    descripcion: "Partido político de centroderecha.",
    candidatos: [],
    diputados: [
      { id: "lp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "" },
      { id: "lp-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "" },
      { id: "lp-d3", nombre: "Pedro Antonio Ramírez Silva", circunscripcion: "Arequipa", foto: "" },
    ],
    senadores: [
      { id: "lp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
      { id: "lp-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "" }
    ],
    parlamentariosAndinos: [
       { id: "lp-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
       { id: "lp-pa2", nombre: "Miguel Ángel Sánchez Paredes", foto: "" }
    ]
  },
  {
    id: 9,
    nombre: "Partido Demócrata Unido Perú",
    siglas: "PDU",
    logo: "/logos/partido-democrata-unido.png",
    descripcion: "Partido político democrático.",
    candidatos: [],
    diputados: [
        { id: "pdu-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "" },
        { id: "pdu-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "" },
    ],
    senadores: [
      { id: "pdu-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
      { id: "pdu-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "" }
    ],
    parlamentariosAndinos: [
       { id: "pdu-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
       { id: "pdu-pa2", nombre: "Miguel Ángel Sánchez Paredes", foto: "" }
    ]
  },
  {
    id: 10,
    nombre: "Avanza País – Partido de Integración Social",
    siglas: "APIS",
    logo: "/logos/avanza-pais.png",
    descripcion: "Partido político de derecha liberal.",
    candidatos: [
      { id: "apis1", nombre: "Phillip Butters", cargo: "Presidente", foto: "/FotosCandidatos/avanza-pais.jpeg" }
    ],
    diputados: [
      { id: "apis-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "" },
      { id: "apis-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "" },
    ],
    senadores: [
      { id: "apis-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
      { id: "apis-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "" }
    ],
    parlamentariosAndinos: [
        { id: "apis-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 11,
    nombre: "Nuevo Perú por el Buen Vivir",
    siglas: "NPBV",
    logo: "/logos/nuevo-peru-por-el-buen-vivir.png",
    descripcion: "Partido político de izquierda progresista.",
    candidatos: [],
    diputados: [
      { id: "npbv-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "" },
      { id: "npbv-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "" },
    ],
    senadores: [
      { id: "npbv-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
      { id: "npbv-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "" }
    ],
    parlamentariosAndinos: [
        { id: "npbv-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 12,
    nombre: "Partido Demócrata Verde",
    siglas: "PDV",
    logo: "/logos/partido-democrata-verde.png",
    descripcion: "Partido político ecologista.",
    candidatos: [
      { id: "pdv1", nombre: "Álex Gonzales", cargo: "Presidente", foto: "https://scontent.flim18-2.fna.fbcdn.net/v/t39.30808-6/467973055_581735831218093_7633748453976638326_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_PxDNFe_h7UQ7kNvgF8OcZy&_nc_zt=23&_nc_ht=scontent.flim18-2.fna&_nc_gid=Ar8dptZDxS67vXaQnpPUXIm&oh=00_AYCjNKh7Rb9tnD_9g0CwWXK4dDULI8EymQIcYF4bnUWXuQ&oe=6737EBCF" }
    ]
  },
  {
    id: 13,
    nombre: "Batalla Perú",
    siglas: "BP",
    logo: "/logos/batalla-peru.png",
    descripcion: "Partido político peruano.",
    candidatos: [],
    diputados: [
      { id: "bp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
      { id: "bp-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "" },
    ],
    senadores: [
      { id: "bp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
      { id: "bp-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "" }
    ],
    parlamentariosAndinos: []
  },
  {
    id: 14,
    nombre: "Partido Aprista Peruano",
    siglas: "APRA",
    logo: "/logos/partido-aprista-peruano.png",
    descripcion: "Partido político histórico del Perú, socialdemócrata.",
    candidatos: [],
    diputados: [
      { id: "apra-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "apra-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
        { id: "apra-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 15,
    nombre: "Partido Democrático Federal",
    siglas: "PDF",
    logo: "/logos/partido-democratico-federal.png",
    descripcion: "Partido político federalista.",
    candidatos: [],
    diputados: [
      { id: "pdf-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "pdf-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "pdf-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 16,
    nombre: "Fe en el Perú",
    siglas: "FEP",
    logo: "/logos/fe-en-el-peru.png",
    descripcion: "Partido político conservador.",
    candidatos: [],
    diputados: [
      { id: "fep-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "fep-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "fep-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 17,
    nombre: "Partido Ciudadanos por el Perú",
    siglas: "CPP",
    logo: "/logos/ciudadanos-por-el-peru.png",
    descripcion: "Partido ciudadano enfocado en la participación.",
    candidatos: [],
    diputados: [
      { id: "cpp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "cpp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "cpp-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 18,
    nombre: "Partido Democrático Somos Perú",
    siglas: "DSP",
    logo: "/logos/somos-peru.png",
    descripcion: "Partido político de centroizquierda.",
    candidatos: [],
    diputados: [
      { id: "dsp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "dsp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "dsp-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
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
    ],
    diputados: [
      { id: "pco-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "pco-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "pco-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 21,
    nombre: "Frente de la Esperanza 2021",
    siglas: "F21",
    logo: "/logos/frente-esperanza-2021.png",
    descripcion: "Frente político progresista.",
    candidatos: [],
    diputados: [
      { id: "f21-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "f21-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "f21-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 22,
    nombre: "Partido Morado",
    siglas: "PM",
    logo: "/logos/partido-morado.png",
    descripcion: "Partido político de centro.",
    candidatos: [],
    diputados: [
      { id: "pm-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "pm-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "pm-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 23,
    nombre: "Partido Político Perú Acción",
    siglas: "PA",
    logo: "/logos/peru-accion.png",
    descripcion: "Partido político de acción ciudadana.",
    candidatos: [],
    diputados: [
      { id: "pa-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "pa-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "pa-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 24,
    nombre: "Perú Moderno",
    siglas: "PMo",
    logo: "/logos/peru-moderno.png",
    descripcion: "Partido político modernista.",
    candidatos: [],
    diputados: [
      { id: "pmo-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "pmo-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "pmo-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 25,
    nombre: "Partido País para Todos",
    siglas: "PPT",
    logo: "/logos/pais-para-todos.png",
    descripcion: "Partido inclusivo y social.",
    candidatos: [
      { id: "ppt1", nombre: "Carlos Álvarez", cargo: "Presidente", foto: "/FotosCandidatos/pais-para-todos.jpg" }
    ],
    diputados: [
      { id: "ppt-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "ppt-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "ppt-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
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
    ],
    diputados: [
      { id: "pp1-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "pp1-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "pp1-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 27,
    nombre: "Podemos Perú",
    siglas: "PP",
    logo: "/logos/podemos-peru.png",
    descripcion: "Partido político de centro.",
    candidatos: [],
    diputados: [
      { id: "pp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "pp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "pp-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 28,
    nombre: "Partido Patriótico del Perú",
    siglas: "PPP",
    logo: "/logos/partido-patriotico-del-peru.png",
    descripcion: "Partido patriótico nacionalista.",
    candidatos: [],
    diputados: [
      { id: "ppp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "ppp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "ppp-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 29,
    nombre: "Peruanos Unidos – Somos Libres",
    siglas: "PUSL",
    logo: "/logos/peruanos-unidos.png",
    descripcion: "Partido de unidad nacional.",
    candidatos: [],
    diputados: [
      { id: "pusl-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "pusl-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "pusl-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 30,
    nombre: "Primero la Gente",
    siglas: "PLC",
    logo: "/logos/primero-la-gente.png",
    descripcion: "Partido enfocado en las personas.",
    candidatos: [],
    diputados: [
      { id: "plc-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "plc-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "plc-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 31,
    nombre: "Cooperación Popular",
    siglas: "CP",
    logo: "/logos/cooperacion-popular.png",
    descripcion: "Partido cooperativista.",
    candidatos: [
      { id: "cp1", nombre: "Yonhy Lescano", cargo: "Presidente", foto: "/FotosCandidatos/cooperacion-popular.jpg" }
    ],
    diputados: [
      { id: "cp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "cp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "cp-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
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
    ],
    diputados: [
      { id: "vp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "vp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "vp-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 33,
    nombre: "Progresemos",
    siglas: "PRG",
    logo: "/logos/progresemos.png",
    descripcion: "Partido progresista.",
    candidatos: [],
    diputados: [
      { id: "prg-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
      { id: "prg-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "" },
    ],
    senadores: [
      { id: "prg-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "prg-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 34,
    nombre: "Fuerza Moderna",
    siglas: "FM",
    logo: "/logos/fuerza-moderna.png",
    descripcion: "Partido moderno y reformista.",
    candidatos: [],
    diputados: [
      { id: "fm-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "fm-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "fm-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 35,
    nombre: "PRIN",
    siglas: "PRIN",
    logo: "/logos/prin.png",
    descripcion: "Partido de renovación nacional.",
    candidatos: [],
    diputados: [
      { id: "prin-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "prin-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "prin-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
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
    ],
    diputados: [
      { id: "rp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
      { id: "rp-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "" },
      { id: "rp-d3", nombre: "Pedro Antonio Ramírez Silva", circunscripcion: "Arequipa", foto: "" }
    ],
    senadores: [
      { id: "rp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
      { id: "rp-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "" }
    ],
    parlamentariosAndinos: [
      { id: "rp-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 37,
    nombre: "Integridad Democrática",
    siglas: "ID",
    logo: "/logos/integridad-democratica.png",
    descripcion: "Partido enfocado en la integridad.",
    candidatos: [],
    diputados: [
      { id: "id-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "id-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "id-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 38,
    nombre: "Partido Popular Cristiano",
    siglas: "PPC",
    logo: "/logos/partido-popular-cristiano.png",
    descripcion: "Partido democratacristiano histórico.",
    candidatos: [],
    diputados: [
      { id: "ppc-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "ppc-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "ppc-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 39,
    nombre: "Salvemos al Perú",
    siglas: "SP",
    logo: "/logos/salvemos-al-peru.png",
    descripcion: "Partido de salvación nacional.",
    candidatos: [],
    diputados: [
      { id: "sp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "sp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "sp-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 40,
    nombre: "Perú Libre",
    siglas: "PL",
    logo: "/logos/peru-libre.png",
    descripcion: "Partido político de izquierda marxista.",
    candidatos: [],
    diputados: [
      { id: "pl-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "pl-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "pl-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 41,
    nombre: "Partido Sí Creo",
    siglas: "SC",
    logo: "/logos/si-creo.png",
    descripcion: "Partido de fe y valores.",
    candidatos: [
      { id: "sc1", nombre: "Carlos Espá", cargo: "Presidente", foto: "/FotosCandidatos/si-creo.jpg" }
    ],
    diputados: [
      { id: "sc-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ], 
    senadores: [
      { id: "sc-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "sc-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 42,
    nombre: "Un Camino Diferente",
    siglas: "UCD",
    logo: "/logos/un-camino-diferente.png",
    descripcion: "Partido alternativo.",
    candidatos: [],
    diputados: [
      { id: "ucd-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "ucd-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "ucd-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 43,
    nombre: "Partido Unidad y Paz",
    siglas: "UyP",
    logo: "/logos/unidad-y-paz.png",
    descripcion: "Partido enfocado en la unidad.",
    candidatos: [],
    diputados: [
      { id: "uyp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "uyp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "uyp-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  },
  {
    id: 44,
    nombre: "Partido Político Nacional Perú Libre",
    siglas: "PNPL",
    logo: "/logos/peru-libre.png",
    descripcion: "Partido político de izquierda.",
    candidatos: [],
    diputados: [
      { id: "pnpl-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: ""  },
    ],
    senadores: [
      { id: "pnpl-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "" },
    ],
    parlamentariosAndinos: [
      { id: "pnpl-pa1", nombre: "Rosa Isabel García Flores", foto: "" },
    ]
  }
];

export default PARTIDOS;