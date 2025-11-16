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
  dni?: string;
  sexo?: string;
}

export interface Senador {
  id: string;
  nombre: string;
  ambito: string;
  foto?: string;
  dni?: string;
  sexo?: string;
}

export interface ParlamentarioAndino {
  id: string;
  nombre: string;
  foto?: string;
  dni?: string;
  sexo?: string;
  tipo?: string;
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
    { id: "fp1", nombre: "KEIKO SOFIA FUJIMORI HIGUCHI", cargo: "Presidenta", foto: "" },
    { id: "fp2", nombre: "LUIS FERNANDO GALARRETA VELARDE", cargo: "Primer Vicepresidente", foto: "/FotosCandidatos/luis-galarreta.png" },
    { id: "fp3", nombre: "MIGUEL ANGEL TORRES MORALES", cargo: "Segundo Vicepresidente", foto: "/FotosCandidatos/miguel-torres.jpg" }
  ],
  diputados: [
    // AMAZONAS
    { id: "fp-d1", nombre: "ROYSER GRANDEZ CASTRO", circunscripcion: "Amazonas", foto: "", sexo: "M", dni: "10587515" },
    { id: "fp-d2", nombre: "MESALINA INFANTES CASTAÑEDA", circunscripcion: "Amazonas", foto: "", sexo: "F", dni: "16448130" },
    { id: "fp-d3", nombre: "JESUS DE LA CRUZ RIOS", circunscripcion: "Amazonas", foto: "", sexo: "M", dni: "33566638" },
    { id: "fp-d4", nombre: "TERESITA SILVA DE TORRES", circunscripcion: "Amazonas", foto: "", sexo: "F", dni: "33595686" },
    // ANCASH
    { id: "fp-d5", nombre: "FERNANDO ZAMBRANO CAVERO", circunscripcion: "Ancash", foto: "", sexo: "M", dni: "07551944" },
    { id: "fp-d6", nombre: "OCTAVIO CAMPOS", circunscripcion: "Ancash", foto: "", sexo: "M", dni: "33408683" },
    { id: "fp-d7", nombre: "NITIZA MERLY CHACON TRUJILLO", circunscripcion: "Ancash", foto: "", sexo: "F", dni: "32971154" },
    { id: "fp-d8", nombre: "LENIN TAHIR LUCERO", circunscripcion: "Ancash", foto: "", sexo: "M", dni: "33254002" },
    { id: "fp-d9", nombre: "DORINA CACERES YBIAS", circunscripcion: "Apurimac", foto: "", sexo: "F", dni: "31175024" },
    // AREQUIPA
    { id: "fp-d10", nombre: "MAURICIO FERNANDO ARMILLAS GONZALEZ", circunscripcion: "Arequipa", foto: "", sexo: "M", dni: "29640205" },
    { id: "fp-d11", nombre: "VICTORIA TACO VERA", circunscripcion: "Arequipa", foto: "", sexo: "F", dni: "29249151" },
    // AYACUCHO
    { id: "fp-d12", nombre: "ALBERTO VELARDE FLORES", circunscripcion: "Ayacucho", foto: "", sexo: "M", dni: "08813649" },
    { id: "fp-d13", nombre: "LEOCADIO TAPIA BERNAL SEGUNDO", circunscripcion: "Cajamarca", foto: "", sexo: "M", dni: "16657841" },
    // CALLAO
    { id: "fp-d14", nombre: "MERCEDES DIAZ SANCHEZ DE VILLEGAS ELVA", circunscripcion: "Callao", foto: "", sexo: "F", dni: "09242136" },
    { id: "fp-d15", nombre: "JACQUES SALOMON RODRICH ACKERMAN", circunscripcion: "Callao", foto: "", sexo: "M", dni: "08234063" },
    { id: "fp-d16", nombre: "ANWAR ROJAS ROMAN", circunscripcion: "Cusco", foto: "", sexo: "M", dni: "25646909" },
    { id: "fp-d17", nombre: "WALTER MISAEL MANCILLA HUAMAN", circunscripcion: "Cusco", foto: "", sexo: "M", dni: "23973175" },
    // HUANUCO
    { id: "fp-d18", nombre: "LUZ MARINA GUTIERREZ VALDIVIA", circunscripcion: "Huanuco", foto: "", sexo: "F", dni: "22419799" },
    { id: "fp-d19", nombre: "CARLOS JOSE QUISPE CALDERON", circunscripcion: "Huanuco", foto: "", sexo: "M", dni: "22516214" },
    // ICA
    { id: "fp-d20", nombre: "RAFAEL GUSTAVO YAMASHIRO ORE", circunscripcion: "Ica", foto: "", sexo: "M", dni: "21414172" },
    { id: "fp-d21", nombre: "NORMA LUISA FLORES HERRERA", circunscripcion: "Junin", foto: "", sexo: "F", dni: "22080545" },
    { id: "fp-d22", nombre: "DAVID JULIO JIMENEZ HEREDIA", circunscripcion: "Junin", foto: "", sexo: "M", dni: "19994639" },
    // LA LIBERTAD
    { id: "fp-d23", nombre: "VICTOR SEBERINO FLORES RUIZ", circunscripcion: "La Libertad", foto: "", sexo: "M", dni: "17898798" },
    { id: "fp-d24", nombre: "BELINDA BRICEÑO LLOCLLA ESTRELLA", circunscripcion: "La Libertad", foto: "", sexo: "F", dni: "18068027" },
    { id: "fp-d25", nombre: "ALEJANDRO AURELIO AGUINAGA RECUENCO", circunscripcion: "Lambayeque", foto: "", sexo: "M", dni: "08236635" },
    { id: "fp-d26", nombre: "AMELIA FAXSO NUÑEZ VIOLETA", circunscripcion: "Lambayeque", foto: "", sexo: "F", dni: "17537267" },
    // LIMA
    { id: "fp-d27", nombre: "MARCO ENRIQUE MIYASHIRO ARASHIRO", circunscripcion: "Lima", foto: "", sexo: "M", dni: "22974228" },
    { id: "fp-d28", nombre: "MILAGROS EMPERATRIZ SALAZAR DE LA TORRE", circunscripcion: "Lima", foto: "", sexo: "F", dni: "06770253" },
    { id: "fp-d29", nombre: "CARLOS ERNESTO BUSTAMANTE DONAYRE", circunscripcion: "Lima", foto: "", sexo: "M", dni: "08232920" },
    { id: "fp-d30", nombre: "ROSA ELVIRA SALVATIERRA VALDIVIA", circunscripcion: "Lima", foto: "", sexo: "F", dni: "07809802" },
    // LORETO
    { id: "fp-d35", nombre: "JUAN CARLOS DEL AGUILA CARDENAS", circunscripcion: "Loreto", foto: "", sexo: "M", dni: "05227631" },
    { id: "fp-d36", nombre: "LEIDY SONIA ZUMAUR CERDEIRA", circunscripcion: "Loreto", foto: "", sexo: "F", dni: "05338089" },
    { id: "fp-d37", nombre: "MINAYA MIMOSA FIGUEROA", circunscripcion: "Madre de Dios", foto: "", sexo: "F", dni: "08625089" },
    // MOQUEGUA
    { id: "fp-d38", nombre: "MARIO FIDEL MAMTILLA MEDINA", circunscripcion: "Moquegua", foto: "", sexo: "M", dni: "29304400" },
    { id: "fp-d39", nombre: "CECILIA FILOMENA LÉVANO HUAMBOS", circunscripcion: "Moquegua", foto: "", sexo: "F", dni: "29198025" },
    // PASCO
    { id: "fp-d40", nombre: "ROY EFRAIN VENTURA ANGEL", circunscripcion: "Pasco", foto: "", sexo: "M", dni: "41439770" },
    { id: "fp-d41", nombre: "PAOLA CASTILLO CAJALEON", circunscripcion: "Pasco", foto: "", sexo: "F", dni: "08437546" },
    // PIURA
    { id: "fp-d42", nombre: "KARLA MELISSA SCHAEFER CUCULIZA", circunscripcion: "Piura", foto: "", sexo: "F", dni: "10636205" },
    { id: "fp-d43", nombre: "VICTOR HUGO FLORES CARRETERO", circunscripcion: "Piura", foto: "", sexo: "M", dni: "09208672" },
    // SAN MARTIN
    { id: "fp-d44", nombre: "VICTOR MANUEL NORIEGA REATEGUI", circunscripcion: "San Martin", foto: "", sexo: "M", dni: "17808760" },
    // TACNA
    { id: "fp-d45", nombre: "WADIO MARTIN VALENCIA BERLANEA", circunscripcion: "Tacna", foto: "", sexo: "M", dni: "30412991" },
    { id: "fp-d46", nombre: "ELISA MARTHISA CONDORI GALLEGOS", circunscripcion: "Tacna", foto: "", sexo: "F", dni: "00611575" },
    // TUMBES
    { id: "fp-d47", nombre: "HECTOR JOSE VENTURA ANGEL", circunscripcion: "Tumbes", foto: "", sexo: "M", dni: "40242430" },
    { id: "fp-d48", nombre: "MATILDE CABRERA DE LAMA", circunscripcion: "Tumbes", foto: "", sexo: "F", dni: "00328686" },
    // UCAYALI
    { id: "fp-d49", nombre: "JORGE VELASQUEZ PORTOCARRERO", circunscripcion: "Ucayali", foto: "", sexo: "M", dni: "21143880" },
    { id: "fp-d50", nombre: "JANNET PRIETO SAAVEDRAALEJANDRA", circunscripcion: "Ucayali", foto: "", sexo: "F", dni: "00125193" }
  ],
  senadores: [
    { id: "fp-s1", nombre: "MIGUEL ANGEL TORRES MORALES", ambito: "Nacional", foto: "", sexo: "M", dni: "40433187" },
    { id: "fp-s2", nombre: "MARTHA GLADYS CHAVEZ COSSIO", ambito: "Nacional", foto: "", sexo: "F", dni: "07960843" },
    { id: "fp-s3", nombre: "FERNANDO ROGGIOGIOSI CAPURRO", ambito: "Nacional", foto: "", sexo: "M", dni: "07704730" },
    { id: "fp-s4", nombre: "CARMEN PATRICIA JUAREZ GALLEGOS", ambito: "Nacional", foto: "", sexo: "F", dni: "07831436" },
    { id: "fp-s6", nombre: "MARTHA LUPE MOYANO DELGADO", ambito: "Nacional", foto: "", sexo: "F", dni: "08911520" },
    { id: "fp-s7", nombre: "CARLOS MARIO TUBINO ARIAS SCHREIBER", ambito: "Nacional", foto: "", sexo: "M", dni: "43341622" },
    { id: "fp-s10", nombre: "SILZA LITA ROMERO PERALTA", ambito: "Nacional", foto: "", sexo: "F", dni: "29731107" },
    { id: "fp-s11", nombre: "SANDRO ESPINOZA SHAPPAMA", ambito: "Nacional", foto: "", sexo: "M", dni: "08195809" },
  ],
  parlamentariosAndinos: [
    { id: "fp-pa1", nombre: "LEOPOLDO PARIONA MINAYA", tipo: "Titular", foto: "", sexo: "M", dni: "08612423" },
    { id: "fp-pa2", nombre: "MARIA LUISA FERNANDEZ ARROYO", tipo: "Titular", foto: "", sexo: "F", dni: "23276802" },
    { id: "fp-pa3", nombre: "RAUL QUISPE GONZALES", tipo: "Titular", foto: "", sexo: "M", dni: "24001301" },
    { id: "fp-pa4", nombre: "MARIA ELENA RIOS SIERRA", tipo: "Titular", foto: "", sexo: "F", dni: "09535871" },
    { id: "fp-pa5", nombre: "JUAN CARLOS AREVALO VELA", tipo: "Titular", foto: "", sexo: "M", dni: "06306625" },
    { id: "fp-pa6", nombre: "GRACIELA BECERRA CELIS ROSA", tipo: "Suplente", foto: "", sexo: "F", dni: "03071215" },
    { id: "fp-pa7", nombre: "SAMUEL LOYA VELASQUEZ", tipo: "Suplente", foto: "", sexo: "M", dni: "04016684" },
    { id: "fp-pa8", nombre: "CECILIA CHAVEZ LEDESMA DE PANTA", tipo: "Suplente", foto: "", sexo: "F", dni: "08106793" }
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
      { id: "pte-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678" },
      { id: "pte-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "", sexo: "F", dni: "87654321" },
      { id: "pte-d3", nombre: "Pedro Antonio Ramírez Silva", circunscripcion: "Arequipa", foto: "", sexo: "M", dni: "11223344" },
      { id: "pte-d4", nombre: "Rosa María Fernández Castro", circunscripcion: "La Libertad", foto: "", sexo: "F", dni: "44332211" },
      { id: "pte-d5", nombre: "José Luis Mendoza Vargas", circunscripcion: "Piura", foto: "", sexo: "M", dni: "55667788" },
      { id: "pte-d6", nombre: "Carmen Patricia Rojas Díaz", circunscripcion: "Lambayeque", foto: "", sexo: "F", dni: "99887766" }
    ],
    senadores: [
      { id: "pte-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
      { id: "pte-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "", sexo: "F", dni: "55664433" }
    ],
    parlamentariosAndinos: [
       { id: "pte-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
       { id: "pte-pa2", nombre: "Miguel Ángel Sánchez Paredes", foto: "", sexo: "M", dni: "77889900" }
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
      { id: "an-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678" },
      { id: "an-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "", sexo: "F", dni: "87654321" },
      { id: "an-d3", nombre: "Pedro Antonio Ramírez Silva", circunscripcion: "Arequipa", foto: "", sexo: "M", dni: "11223344" },
      { id: "an-d4", nombre: "Rosa María Fernández Castro", circunscripcion: "La Libertad", foto: "", sexo: "F", dni: "44332211" },
      { id: "an-d5", nombre: "José Luis Mendoza Vargas", circunscripcion: "Piura", foto: "", sexo: "M", dni: "55667788" },
      { id: "an-d6", nombre: "Carmen Patricia Rojas Díaz", circunscripcion: "Lambayeque", foto: "", sexo: "F", dni: "99887766" }
    ],
    senadores: [
      { id: "an-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
      { id: "an-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "", sexo: "F", dni: "55664433" }
    ],
    parlamentariosAndinos: [
       { id: "an-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
       { id: "an-pa2", nombre: "Miguel Ángel Sánchez Paredes", foto: "", sexo: "M", dni: "77889900" }
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
      { id: "jpp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678" },
      { id: "jpp-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "", sexo: "F", dni: "87654321" },
    ],
    senadores: [
      { id: "jpp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
      { id: "jpp-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "", sexo: "F", dni: "55664433" }
    ],
    parlamentariosAndinos: [
       { id: "jpp-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
       { id: "jpp-pa2", nombre: "Miguel Ángel Sánchez Paredes", foto: "", sexo: "M", dni: "77889900" }
    ]
  },
  {
    id: 6,
    nombre: "Partido del Buen Gobierno",
    siglas: "PBG",
    logo: "/logos/partido-buen-gobierno.png",
    descripcion: "Partido enfocado en la transparencia y la gobernabilidad.",
    candidatos: [
      { id: "pbg1", nombre: "JORGE NIETO MONTESINOS", cargo: "Presidente", foto: "/FotosCandidatos/partido-buen-gobierno.jpg" },
      { id: "pbg2", nombre: "CANDIDATO VICEPRESIDENCIAL PBG", cargo: "Primer Vicepresidente", foto: "" },
      { id: "pbg3", nombre: "CANDIDATO PBG", cargo: "Segundo Vicepresidente", foto: "" }
    ],
    diputados: [
      { id: "pbg-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678" },
      { id: "pbg-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "", sexo: "F", dni: "87654321" },
      { id: "pbg-d3", nombre: "Pedro Antonio Ramírez Silva", circunscripcion: "Arequipa", foto: "", sexo: "M", dni: "11223344" },
    ],
    senadores: [
      { id: "pbg-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
      { id: "pbg-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "", sexo: "F", dni: "55664433" }
    ],
    parlamentariosAndinos: [
       { id: "pbg-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
       { id: "pbg-pa2", nombre: "Miguel Ángel Sánchez Paredes", foto: "", sexo: "M", dni: "77889900" }
    ]
  },
  {
    id: 7,
    nombre: "Alianza para el Progreso",
    siglas: "APP",
    logo: "/logos/alianza-para-el-progreso.png",
    descripcion: "Partido político peruano de centroderecha.",
    candidatos: [
      { id: "app1", nombre: "CÉSAR ACUÑA PERALTA", cargo: "Presidente", foto: "" },
      { id: "app2", nombre: "JESSICA MILAGROS TUMI RIVAS", cargo: "Primera Vicepresidenta", foto: "/FotosCandidatos/jessica-tumi.jpg" },
      { id: "app3", nombre: "ALEJANDRO SOTO REYES", cargo: "Segundo Vicepresidente", foto: "/FotosCandidatos/alejandro-soto.jpg" },
    ],
    diputados: [
      { id: "app-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678" },
      { id: "app-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "", sexo: "F", dni: "87654321" },
      { id: "app-d3", nombre: "Pedro Antonio Ramírez Silva", circunscripcion: "Arequipa", foto: "", sexo: "M", dni: "11223344" },
      { id: "app-d4", nombre: "Rosa María Fernández Castro", circunscripcion: "La Libertad", foto: "", sexo: "F", dni: "99887766" }
    ],
    senadores: [
      { id: "app-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
      { id: "app-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "", sexo: "F", dni: "55664433" }
    ],
    parlamentariosAndinos: [
       { id: "app-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
       { id: "app-pa2", nombre: "Miguel Ángel Sánchez Paredes", foto: "", sexo: "M", dni: "77889900" }
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
      { id: "lp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678" },
      { id: "lp-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "", sexo: "F", dni: "87654321" },
      { id: "lp-d3", nombre: "Pedro Antonio Ramírez Silva", circunscripcion: "Arequipa", foto: "", sexo: "M", dni: "11223344" },
    ],
    senadores: [
      { id: "lp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
      { id: "lp-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "", sexo: "F", dni: "55664433" }
    ],
    parlamentariosAndinos: [
       { id: "lp-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
       { id: "lp-pa2", nombre: "Miguel Ángel Sánchez Paredes", foto: "", sexo: "M", dni: "77889900" }
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
        { id: "pdu-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678" },
        { id: "pdu-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "", sexo: "F", dni: "87654321" },
    ],
    senadores: [
      { id: "pdu-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
      { id: "pdu-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "", sexo: "F", dni: "55664433" }
    ],
    parlamentariosAndinos: [
       { id: "pdu-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
       { id: "pdu-pa2", nombre: "Miguel Ángel Sánchez Paredes", foto: "", sexo: "M", dni: "77889900" }
    ]
  },
  {
    id: 10,
    nombre: "Avanza País – Partido de Integración Social",
    siglas: "APIS",
    logo: "/logos/avanza-pais.png",
    descripcion: "Partido político de derecha liberal.",
    candidatos: [
      { id: "apis1", nombre: "Phillip Butters Rivadeneira", cargo: "Presidente", foto: "/FotosCandidatos/avanza-pais.jpeg" },
      { id: "apis2", nombre: "Fernán Altuve-Febres", cargo: "Primer Vicepresidente", foto: "/FotosCandidatos/fernan-altuve.jpg" },
      { id: "apis3", nombre: "Karol Paredes Fonseca", cargo: "Segunda Vicepresidenta", foto: "/FotosCandidatos/karol-paredes.jpg" }
    ],
    diputados: [
      { id: "apis-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678" },
      { id: "apis-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "", sexo: "F", dni: "87654321" },
    ],
    senadores: [
      { id: "apis-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
      { id: "apis-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "", sexo: "F", dni: "55664433" }
    ],
    parlamentariosAndinos: [
        { id: "apis-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "npbv-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678" },
      { id: "npbv-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "", sexo: "F", dni: "87654321" },
    ],
    senadores: [
      { id: "npbv-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
      { id: "npbv-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "", sexo: "F", dni: "55664433" }
    ],
    parlamentariosAndinos: [
        { id: "npbv-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "bp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678" },
      { id: "bp-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "", sexo: "F", dni: "87654321" },
    ],
    senadores: [
      { id: "bp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
      { id: "bp-s2", nombre: "Ana Lucía Morales Vega", ambito: "Regional - Sur", foto: "", sexo: "F", dni: "55664433" }
    ],
    parlamentariosAndinos: [
        { id: "bp-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
    ]
  },
  {
    id: 14,
    nombre: "Partido Aprista Peruano",
    siglas: "APRA",
    logo: "/logos/partido-aprista-peruano.png",
    descripcion: "Partido político histórico del Perú, socialdemócrata.",
    candidatos: [
      { id: "apra1", nombre: "JORGE DEL CASTILLO", cargo: "Presidente", foto: "/FotosCandidatos/jorge-del-castillo.jpg" },
      { id: "apra2", nombre: "CLAUDE MAURICIO MULDER BEDOYA", cargo: "Primer Vicepresidente", foto: "/FotosCandidatos/mauricio-mulder.jpg" },
      { id: "apra3", nombre: "BELEN YSABEL GARCIA MENDOZA", cargo: "Segunda Vicepresidenta", foto: "/FotosCandidatos/belen-garcia.jpg" }
    ],
    diputados: [
      { id: "apra-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "apra-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
        { id: "apra-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "pdf-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "pdf-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "pdf-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "fep-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "fep-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "fep-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "cpp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "cpp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "cpp-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
    ]
  },
  {
    id: 18,
    nombre: "Partido Democrático Somos Perú",
    siglas: "DSP",
    logo: "/logos/somos-peru.png",
    descripcion: "Partido político de centroizquierda.",
    candidatos: [
      { id: "dsp1", nombre: "George Forsyth", cargo: "Presidente", foto: "/FotosCandidatos/somos-peru.jpg" },
      { id: "dsp2", nombre: "Gabriela Lozada Baldwin", cargo: "Primera Vicepresidenta", foto: "/FotosCandidatos/gabriela-lozada.jpg" },
      { id: "dsp3", nombre: "Herbe Olave Ugarte", cargo: "Segundo Vicepresidente", foto: "/FotosCandidatos/herbe-olave.jpg" }
    ],
    diputados: [
      { id: "dsp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "dsp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "dsp-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
    ]
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
      { id: "pco-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "pco-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "pco-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "f21-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "f21-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "f21-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
    ]
  },
  {
    id: 22,
    nombre: "Partido Morado",
    siglas: "PM",
    logo: "/logos/partido-morado.png",
    descripcion: "Partido político de centro.",
    candidatos: [
      { id: "pm1", nombre: "", cargo: "Presidente", foto: "" },
      { id: "pm2", nombre: "Heber Cueva", cargo: "Primer Vicepresidente", foto: "/FotosCandidatos/heber-cueva.jpg" },
      { id: "pm3", nombre: "Marisol Linan Solis", cargo: "Segunda Vicepresidenta", foto: "/FotosCandidatos/marisol-linan.jpg" }
    ],
    diputados: [
      { id: "pm-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "pm-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "pm-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "pa-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "pa-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "pa-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "pmo-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "pmo-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "pmo-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "ppt-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "ppt-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "ppt-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "pp1-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "pp1-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "pp1-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
    ]
  },
  {
    id: 27,
    nombre: "Podemos Perú",
    siglas: "PP",
    logo: "/logos/podemos-peru.png",
    descripcion: "Partido político de centro.",
    candidatos: [
      { id: "pp1", nombre: "José Luna Gálvez", cargo: "Presidente", foto: "" },
      { id: "pp2", nombre: "Celia García Rodríguez", cargo: "Primera Vicepresidenta", foto: "/FotosCandidatos/cecilia-garcia.jpg" },
      { id: "pp3", nombre: "Raúl Noblecilla Olaechea", cargo: "Segundo Vicepresidente", foto: "/FotosCandidatos/raul-noblecilla.jpg" }
    ],
    diputados: [
      { id: "pp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "pp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "pp-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "ppp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "ppp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "ppp-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "pusl-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "pusl-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "pusl-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "plc-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "plc-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "plc-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "cp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "cp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "cp-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "vp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "vp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "vp-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "prg-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
      { id: "prg-d2", nombre: "María Elena López Torres", circunscripcion: "Cusco", foto: "", sexo: "F", dni: "87654321" },
    ],
    senadores: [
      { id: "prg-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "prg-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "fm-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "fm-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "fm-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "prin-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "prin-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "prin-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "rp1", nombre: "RAFAEL BERNANDO LOPEZ ALIAGA", cargo: "Presidente", foto: "/FotosCandidatos/renovacion-popular.jpg" },
      { id: "rp2", nombre: "NORMA MARTINA YARROW LUMBRERAS", cargo: "Primera Vicepresidenta", foto: "/FotosCandidatos/norma-yarrow.jpg" },
      { id: "rp3", nombre: "JHON IVAN RAMOS MALPICA", cargo: "Segundo Vicepresidente", foto: "/FotosCandidatos/jhon-ramos.jpg" }
    ],
    diputados: [
      { id: "rp-d1", nombre: "ROXANA MARÍA ROCHA GALLEGOS", circunscripcion: "Lima", foto: "", dni: "10275564", sexo: "F" },
      { id: "rp-d2", nombre: "GUSTAVO ALEXANDER SEGURA FIGUEROA", circunscripcion: "Lima", foto: "", dni: "41010370", sexo: "M" },
      { id: "rp-d3", nombre: "LIZZI DEL ROCIO SUELDO MATOS", circunscripcion: "Lima", foto: "", dni: "10313904", sexo: "F" },
      { id: "rp-d4", nombre: "JOSÉ ANTONIO CACHO SOUSA DE CARDENAS", circunscripcion: "Lima", foto: "", dni: "06407901", sexo: "M" },
      { id: "rp-d5", nombre: "DEBORAH CARMEN INGA ZAPATA", circunscripcion: "Lima", foto: "", dni: "41339983", sexo: "F" },
      { id: "rp-d6", nombre: "JAVIER JOSÉ MARÍA CIPRIANI THORNE", circunscripcion: "Lima", foto: "", dni: "07744156", sexo: "M" },
      { id: "rp-d7", nombre: "GIULIANA CALAMBROGIO CORREA", circunscripcion: "Lima", foto: "", dni: "41375446", sexo: "F" },
    ],
    senadores: [
      { id: "rp-s2", nombre: "MARIA LOURDES PIA LUISA ALCORTA SUERO", ambito: "Nacional", foto: "", dni: "08235876", sexo: "F" },
      { id: "rp-s3", nombre: "ALEJANDRO MUÑANTE BARRIOS", ambito: "Nacional", foto: "", dni: "45209282", sexo: "M" },
      { id: "rp-s4", nombre: "KATHERINE MILAGROS AMPUERO MEZA", ambito: "Nacional", foto: "", dni: "25799622", sexo: "F" },
      { id: "rp-s8", nombre: "LOURDES NILDA SEBASTIANA ESPINOZA RIVERA", ambito: "Nacional", foto: "", dni: "07237776", sexo: "F" },
      { id: "rp-s10", nombre: "SUSANA AYQUIPA SOTO", ambito: "Nacional", foto: "", dni: "06281336", sexo: "F" },
      { id: "rp-s11", nombre: "EDWARD RODOLFO YABAR GUTIERREZ", ambito: "Nacional", foto: "", dni: "40697243", sexo: "M" },
      { id: "rp-s12", nombre: "AURA HIRES ROCHA SALAZAR DE TRUJILLO", ambito: "Nacional", foto: "", dni: "10404860", sexo: "F" },
      { id: "rp-s13", nombre: "CESAR ALFREDO VIGNOLO GONZALES DEL VALLE", ambito: "Nacional", foto: "", dni: "09153292", sexo: "M" },
    ],
    parlamentariosAndinos: [
      { id: "rp-pa1", nombre: "MAAUI OLGA BETTY DEL POMAR SAETTONE", foto: "", dni: "10548467", sexo: "F", tipo: "Titular" },
      { id: "rp-pa2", nombre: "GUILLERMO HUMBERTO VALDIVIESO MENDEZ", foto: "", dni: "08778400", sexo: "M", tipo: "Titular" },
      { id: "rp-pa3", nombre: "EVERLENY ELCI BELLO SOLORZANO", foto: "", dni: "10683474", sexo: "F", tipo: "Titular" },
      { id: "rp-pa4", nombre: "LEONCIO CARLOS MERINO DURAND", foto: "", dni: "41005446", sexo: "M", tipo: "Titular" },
      { id: "rp-pa5", nombre: "AUGUSTA GAMARRA SALDIVAR", foto: "", dni: "40768988", sexo: "F", tipo: "Titular" },
      { id: "rp-pa6", nombre: "JOSEPH ANGELO PACHERRES SEDANO", foto: "", dni: "46791122", sexo: "M", tipo: "Suplente 1" },
      { id: "rp-pa7", nombre: "JESSICA MIRELLA URQUIZA ALVAREZ", foto: "", dni: "07261863", sexo: "F", tipo: "Suplente 1" },
      { id: "rp-pa8", nombre: "JORGE LUIS GUILLEN SIVIRICHI", foto: "", dni: "40163811", sexo: "M", tipo: "Suplente 1" },
    ]
  },
  {
    id: 37,
    nombre: "Integridad Democrática",
    siglas: "ID",
    logo: "/logos/integridad-democratica.png",
    descripcion: "Partido político enfocado en integridad y gestión eficiente.",
    candidatos: [
      { id: "id1", nombre: "George Forsyth", cargo: "Presidente", foto: "/FotosCandidatos/integridad-democratica.jpg" }
    ],
    diputados: [
      { id: "id-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678" }
    ],
    senadores: [
      { id: "id-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" }
    ],
    parlamentariosAndinos: [
      { id: "id-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" }
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
      { id: "ppc-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "ppc-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "ppc-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "sp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "sp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "sp-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
    ]
  },
  {
    id: 40,
    nombre: "Perú Libre",
    siglas: "PL",
    logo: "/logos/peru-libre.png",
    descripcion: "Partido político de izquierda marxista.",
    candidatos: [
      { id: "pl1", nombre: "VLADIMIR CERRÓN", cargo: "Presidente", foto: "/FotosCandidatos/peru-libre.jpg" },
      { id: "pl2", nombre: "POR CONFIRMAR", cargo: "Primer Vicepresidente", foto: "/logos/peru-libre.png" },
      { id: "pl3", nombre: "Flavio Cruz Mamani", cargo: "Segundo Vicepresidente", foto: "/FotosCandidatos/flavio-cruz.jpg" }
    ],
    diputados: [
      { id: "pl-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "pl-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "pl-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "sc-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ], 
    senadores: [
      { id: "sc-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "sc-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "ucd-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "ucd-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "ucd-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "uyp-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "uyp-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "uyp-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
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
      { id: "pnpl-d1", nombre: "Juan Carlos Pérez Gómez", circunscripcion: "Lima", foto: "", sexo: "M", dni: "12345678"  },
    ],
    senadores: [
      { id: "pnpl-s1", nombre: "Carlos Alberto Ruiz Martínez", ambito: "Nacional", foto: "", sexo: "M", dni: "66778899" },
    ],
    parlamentariosAndinos: [
      { id: "pnpl-pa1", nombre: "Rosa Isabel García Flores", foto: "", sexo: "F", dni: "33445566" },
    ]
  }
];

export default PARTIDOS;