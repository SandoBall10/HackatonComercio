// Datos de candidatos para las elecciones Perú 2026

export const candidatos = [
  {
    id: "accion-popular",
    nombre: "Víctor Andrés Belaúnde",
    partido: "ACCIÓN POPULAR",
    foto: "/FotosCandidatos/accion-popular.jpeg",
    logoPartido: "/logos/accion-popular.png",
    pdfUrl: "/pdf/accion-popular-plan-gobierno.pdf",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Ciencias Políticas", "Maestría en Administración Pública"],
      experienciaLaboral: ["Congresista 2016-2021", "Alcalde Provincial 2011-2014"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Candidato presidencial" },
      { fecha: "2016", descripcion: "Electo Congresista de la República" }
    ],
    noticias: [
      { titulo: "Propuesta de descentralización presentada", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "18", mes: "DIC", titulo: "Debate electoral", lugar: "Lima", hora: "7:00 PM" }
    ]
  },
  {
    id: "fuerza-popular",
    nombre: "Keiko Fujimori",
    partido: "Fuerza Popular",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Keiko_Fujimori_2.jpg/800px-Keiko_Fujimori_2.jpg",
    logoPartido: "/logos/fuerza-popular.png",
    pdfUrl: "/pdf/fuerza-popular-plan-gobierno.pdf",
    cargo: "Candidata a la Presidencia",
    redesSociales: { facebook: "#", twitter: "#", instagram: "#", tiktok: "#" },
    hojaDeVida: { 
      formacionAcademica: ["Maestría en Administración, Columbia University", "Bachiller en Administración, Boston University"],
      experienciaLaboral: ["Congresista de la República 2006-2011, 2016-2019", "Candidata presidencial 2011, 2016, 2021"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Información disponible en registros judiciales"
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Segunda vuelta electoral presidencial" },
      { fecha: "2016", descripcion: "Candidata presidencial - Segunda vuelta" },
      { fecha: "2011", descripcion: "Primera candidatura presidencial" }
    ],
    noticias: [
      { titulo: "Keiko Fujimori presenta propuestas económicas", fuente: "El Comercio", fecha: "Hace 1 semana", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "20", mes: "DIC", titulo: "Reunión con empresarios", lugar: "Lima", hora: "10:00 AM" }
    ]
  },
  {
    id: "partido-trabajadores-pte-peru",
    nombre: "Napoleón Becerra",
    partido: "P. de los trabajadores PTE-Perú",
    foto: "/FotosCandidatos/partido-trabajadores-pte-peru.jpg",
    logoPartido: "/logos/pte-peru.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Sociología", "Especialización en Derechos Laborales"],
      experienciaLaboral: ["Dirigente sindical 2015-2020", "Asesor en políticas laborales"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2020", descripcion: "Fundación del partido" },
      { fecha: "2018", descripcion: "Liderazgo en movimiento sindical" }
    ],
    noticias: [
      { titulo: "Propuestas laborales para trabajadores", fuente: "La República", fecha: "Hace 3 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "22", mes: "DIC", titulo: "Asamblea con sindicatos", lugar: "Lima", hora: "4:00 PM" }
    ]
  },
  {
    id: "ahora-nacion",
    nombre: "Alfonso López-Chau",
    partido: "Ahora Nación (AN)",
    foto: "/FotosCandidatos/ahora-nacion.jpg",
    logoPartido: "/logos/ahora-nacion.png",
    pdfUrl: "/pdf/ahora-nacion-plan-gobierno.pdf",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Economía", "MBA en Gestión Empresarial"],
      experienciaLaboral: ["Empresario sector privado", "Consultor económico"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Inscripción del partido político" },
      { fecha: "2019", descripcion: "Inicio de movimiento ciudadano" }
    ],
    noticias: [
      { titulo: "Plan económico de reactivación", fuente: "Gestión", fecha: "Hace 1 día", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "19", mes: "DIC", titulo: "Foro empresarial", lugar: "Arequipa", hora: "9:00 AM" }
    ]
  },
  {
    id: "juntos-por-el-peru",
    nombre: "Roberto Sánchez",
    partido: "Juntos por el Perú",
    foto: "/FotosCandidatos/juntos-por-el-peru.png",
    logoPartido: "/logos/juntos-por-el-peru.png",
    pdfUrl: "/pdf/juntos-por-el-peru-plan-gobierno.pdf",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Derecho", "Maestría en Derechos Humanos"],
      experienciaLaboral: ["Congresista 2020-2021", "Activista social"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2020", descripcion: "Elección al Congreso" },
      { fecha: "2018", descripcion: "Liderazgo en movimientos sociales" }
    ],
    noticias: [
      { titulo: "Propuestas de justicia social", fuente: "La República", fecha: "Hace 2 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "21", mes: "DIC", titulo: "Reunión con organizaciones sociales", lugar: "Cusco", hora: "3:00 PM" }
    ]
  },
  {
    id: "partido-del-buen-gobierno",
    nombre: "Jorge Nieto",
    partido: "Partido del buen gobierno",
    foto: "/FotosCandidatos/partido-buen-gobierno.jpg",
    logoPartido: "/logos/partido-buen-gobierno.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Administración Pública", "Diplomado en Gestión Gubernamental"],
      experienciaLaboral: ["Funcionario público 2010-2018", "Consultor en gestión municipal"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2019", descripcion: "Fundación del partido" },
      { fecha: "2015", descripcion: "Asesor en gobiernos locales" }
    ],
    noticias: [
      { titulo: "Propuestas de modernización del Estado", fuente: "El Peruano", fecha: "Hace 5 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "23", mes: "DIC", titulo: "Presentación de plan de gobierno", lugar: "Trujillo", hora: "11:00 AM" }
    ]
  },
  {
    id: "alianza-para-el-progreso",
    nombre: "César Acuña",
    partido: "Alianza para el progreso",
    foto: "/FotosCandidatos/alianza-para-el-progreso.png",
    logoPartido: "/logos/alianza-para-el-progreso.png",
    pdfUrl: "/pdf/alianza-para-el-progreso-plan-gobierno.pdf",
    cargo: "Candidatura",
    redesSociales: { facebook: "#", twitter: "#", instagram: "#" },
    hojaDeVida: { 
      formacionAcademica: ["Doctor en Educación", "Maestría en Gestión Educativa"],
      experienciaLaboral: ["Gobernador Regional La Libertad 2007-2014", "Alcalde de Trujillo 2007", "Rector Universidad César Vallejo"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Información disponible en registros judiciales"
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Candidato presidencial" },
      { fecha: "2016", descripcion: "Candidato presidencial" },
      { fecha: "2007-2014", descripcion: "Gobernador Regional La Libertad" }
    ],
    noticias: [
      { titulo: "Plan de infraestructura educativa", fuente: "El Comercio", fecha: "Hace 4 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "25", mes: "DIC", titulo: "Visita a escuelas rurales", lugar: "La Libertad", hora: "8:00 AM" }
    ]
  },
  {
    id: "libertad-popular",
    nombre: "Rafael Belaúnde",
    partido: "Libertad popular",
    foto: "/FotosCandidatos/libertad-popular.jpg",
    logoPartido: "/logos/libertad-popular.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Ciencias Políticas"],
      experienciaLaboral: ["Activista político", "Asesor municipal"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2022", descripcion: "Inscripción del partido" }
    ],
    noticias: [
      { titulo: "Propuestas de libertad económica", fuente: "RPP", fecha: "Hace 1 semana", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "24", mes: "DIC", titulo: "Conferencia de prensa", lugar: "Lima", hora: "5:00 PM" }
    ]
  },
  {
    id: "partido-democrata-unido-peru",
    nombre: "Charlie Carrasco",
    partido: "Partido Democrata Unido Perú",
    foto: "/FotosCandidatos/partido-democrata-unido-peru.jpg",
    logoPartido: "/logos/partido-democrata-unido.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Derecho", "Maestría en Gestión Pública"],
      experienciaLaboral: ["Abogado independiente", "Consultor legal"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Fundación del partido" }
    ],
    noticias: [
      { titulo: "Plan de reforma judicial", fuente: "Andina", fecha: "Hace 3 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "26", mes: "DIC", titulo: "Asamblea partidaria", lugar: "Lima", hora: "6:00 PM" }
    ]
  },
  {
    id: "avanza-pais",
    nombre: "Phillip Butters",
    partido: "Avanza Pais",
    foto: "/FotosCandidatos/avanza-pais.jpeg",
    logoPartido: "/logos/avanza-pais.png",
    pdfUrl: "/pdf/avanza-pais-plan-gobierno.pdf",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Economía", "MBA"],
      experienciaLaboral: ["Congresista 2020-2021", "Empresario"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2020", descripcion: "Elección al Congreso" },
      { fecha: "2019", descripcion: "Fundación del partido" }
    ],
    noticias: [
      { titulo: "Propuesta de desarrollo empresarial", fuente: "Gestión", fecha: "Hace 2 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "27", mes: "DIC", titulo: "Reunión con emprendedores", lugar: "Piura", hora: "10:00 AM" }
    ]
  },
  {
    id: "nuevo-peru-por-el-buen-vivir",
    nombre: "Vicente Alanoca",
    partido: "Nuevo Perú por el buen vivir",
    foto: "/FotosCandidatos/nuevo-peru-por-el-buen-vivir.jpg",
    logoPartido: "/logos/nuevo-peru-por-el-buen-vivir.png",
    pdfUrl: "/pdf/nuevo-peru-plan-gobierno.pdf",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Sociología"],
      experienciaLaboral: ["Activista social", "Congresista 2016-2019"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2016", descripcion: "Fundación del movimiento" }
    ],
    noticias: [
      { titulo: "Agenda ambiental y social", fuente: "La República", fecha: "Hace 1 día", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "28", mes: "DIC", titulo: "Foro ecológico", lugar: "Iquitos", hora: "2:00 PM" }
    ]
  },
  {
    id: "partido-democrata-verde",
    nombre: "Álex Gonzales",
    partido: "Partido Democrata Verde",
    foto: "/FotosCandidatos/partido-democrata-verde.jpg",
    logoPartido: "/logos/partido-democrata-verde.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Ingeniería Ambiental"],
      experienciaLaboral: ["Consultor ambiental", "ONG ecologista"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2020", descripcion: "Inscripción del partido" }
    ],
    noticias: [
      { titulo: "Plan de protección ambiental", fuente: "El Comercio", fecha: "Hace 4 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "29", mes: "DIC", titulo: "Campaña de reforestación", lugar: "Madre de Dios", hora: "7:00 AM" }
    ]
  },
  {
    id: "batalla-peru",
    nombre: "Fiorella Molinelli",
    partido: "Batalla Perú",
    foto: "/FotosCandidatos/batalla-peru.jpg",
    logoPartido: "/logos/batalla-peru.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Administración"],
      experienciaLaboral: ["Empresario", "Líder comunitario"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2022", descripcion: "Fundación del partido" }
    ],
    noticias: [
      { titulo: "Propuestas anti-corrupción", fuente: "RPP", fecha: "Hace 5 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "30", mes: "DIC", titulo: "Mitin ciudadano", lugar: "Lima", hora: "6:00 PM" }
    ]
  },
  {
    id: "partido-aprista-peruano",
    nombre: "Javier Velásquez Q.",
    partido: "Partido Aprista peruano",
    foto: "/FotosCandidatos/partido-aprista-peruano.jpg",
    logoPartido: "/logos/partido-aprista-peruano.png",
    pdfUrl: "/pdf/partido-aprista-peruanoplan-gobierno.pdf",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Ciencias Políticas", "Maestría en Gobierno"],
      experienciaLaboral: ["Congresista", "Militante aprista desde 1995"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Candidato presidencial" },
      { fecha: "2016", descripcion: "Congresista" }
    ],
    noticias: [
      { titulo: "Renovación del partido aprista", fuente: "El Comercio", fecha: "Hace 1 semana", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "2", mes: "ENE", titulo: "Asamblea nacional aprista", lugar: "Lima", hora: "9:00 AM" }
    ]
  },
  {
    id: "partido-democratico-federal",
    nombre: "Armando Massé",
    partido: "Partido democratico federal",
    foto: "/FotosCandidatos/partido-democratico-federal.jpg",
    logoPartido: "/logos/partido-democratico-federal.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Derecho Constitucional"],
      experienciaLaboral: ["Abogado", "Asesor legal"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Inscripción del partido" }
    ],
    noticias: [
      { titulo: "Propuesta de descentralización federal", fuente: "Andina", fecha: "Hace 3 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "3", mes: "ENE", titulo: "Foro sobre federalismo", lugar: "Arequipa", hora: "11:00 AM" }
    ]
  },
  {
    id: "fe-en-el-peru",
    nombre: "Álvaro Paz de la Barra",
    partido: "Fe en el Perú",
    foto: "/FotosCandidatos/fe-en-el-peru.jpg",
    logoPartido: "/logos/fe-en-el-peru.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Filosofía", "Estudios teológicos"],
      experienciaLaboral: ["Líder religioso", "Activista social"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2022", descripcion: "Fundación del partido" }
    ],
    noticias: [
      { titulo: "Valores cristianos en la política", fuente: "ACI Prensa", fecha: "Hace 2 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "4", mes: "ENE", titulo: "Reunión con iglesias evangélicas", lugar: "Lima", hora: "4:00 PM" }
    ]
  },
  {
    id: "partido-ciudadanos-por-el-peru",
    nombre: "Ricardo Belmont",
    partido: "Partido ciudadanos por el Perú",
    foto: "/FotosCandidatos/partido-ciudadanos-por-el-peru.jpg",
    logoPartido: "/logos/ciudadanos-por-el-peru.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Administración"],
      experienciaLaboral: ["Empresario", "Líder ciudadano"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2019", descripcion: "Fundación del partido" }
    ],
    noticias: [
      { titulo: "Iniciativas ciudadanas para el cambio", fuente: "RPP", fecha: "Hace 1 día", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "5", mes: "ENE", titulo: "Asamblea ciudadana", lugar: "Cusco", hora: "10:00 AM" }
    ]
  },
  {
    id: "partido-democratico-somos-peru",
    nombre: "George Forsyth",
    partido: "Partido democratico somos Perú",
    foto: "/FotosCandidatos/somos-peru.jpg",
    logoPartido: "/logos/somos-peru.png",
    pdfUrl: "/pdf/somos-peru-plan-gobierno.pdf",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Ingeniería Civil"],
      experienciaLaboral: ["Alcalde de Lima 1999-2002", "Congresista"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2016", descripcion: "Candidato presidencial" },
      { fecha: "1999", descripcion: "Alcalde de Lima" }
    ],
    noticias: [
      { titulo: "Plan de obras públicas", fuente: "Gestión", fecha: "Hace 4 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "6", mes: "ENE", titulo: "Visita a obras municipales", lugar: "Callao", hora: "8:00 AM" }
    ]
  },
  {
    id: "frente-popular-agricola-fia",
    nombre: "Jonás Ataucusi",
    partido: "Frente popular agricola FIA del Perú",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Silueta_persona.svg/800px-Silueta_persona.svg.png",
    logoPartido: "/logos/frepap.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Ingeniero Agrónomo"],
      experienciaLaboral: ["Dirigente agrario", "Consultor en desarrollo rural"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2018", descripcion: "Fundación del movimiento" }
    ],
    noticias: [
      { titulo: "Propuestas para el agro peruano", fuente: "Agraria.pe", fecha: "Hace 2 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "7", mes: "ENE", titulo: "Asamblea de agricultores", lugar: "Cajamarca", hora: "9:00 AM" }
    ]
  },
  {
    id: "partido-civico-obras",
    nombre: "Ricardo Belmont",
    partido: "Partido Civico obras",
    foto: "/FotosCandidatos/partido-civico-obras.jpg",
    logoPartido: "/logos/partido-civico-obras.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Ingeniero Civil"],
      experienciaLaboral: ["Constructor", "Empresario de construcción"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2020", descripcion: "Inscripción del partido" }
    ],
    noticias: [
      { titulo: "Plan de infraestructura vial", fuente: "Construcción y Obras", fecha: "Hace 3 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "8", mes: "ENE", titulo: "Inspección de carreteras", lugar: "Huánuco", hora: "7:00 AM" }
    ]
  },
  {
    id: "frente-de-la-esperanza-2021",
    nombre: "Fernando Olivera",
    partido: "Partido frente de la esperanza 2021",
    foto: "/FotosCandidatos/frente-de-la-esperanza-2021.jpg",
    logoPartido: "/logos/frente-esperanza-2021.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Educación"],
      experienciaLaboral: ["Docente universitario", "Activista social"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Fundación del movimiento" }
    ],
    noticias: [
      { titulo: "Esperanza para la juventud peruana", fuente: "El Comercio", fecha: "Hace 1 semana", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "9", mes: "ENE", titulo: "Encuentro con jóvenes", lugar: "Lima", hora: "5:00 PM" }
    ]
  },
  {
    id: "partido-morado",
    nombre: "Mesías Guevara",
    partido: "Partido Morado",
    foto: "/FotosCandidatos/partido-morado.jpg",
    logoPartido: "/logos/partido-morado.png",
    pdfUrl: "/pdf/partido-morado-plan-gobierno.pdf",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["PhD en Filosofía", "Maestría en Ciencia Política"],
      experienciaLaboral: ["Académico", "Congresista 2020-2021"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2018", descripcion: "Fundación del partido" },
      { fecha: "2016", descripcion: "Candidato presidencial" }
    ],
    noticias: [
      { titulo: "Propuestas de integridad institucional", fuente: "RPP", fecha: "Hace 2 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "10", mes: "ENE", titulo: "Debate académico", lugar: "Lima", hora: "7:00 PM" }
    ]
  },
  {
    id: "partido-politico-peru-accion",
    nombre: "Francisco Diez Canseco",
    partido: "Partido Politico Perú Accion",
    foto: "/FotosCandidatos/peru-accion.png",
    logoPartido: "/logos/peru-accion.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Administración de Empresas"],
      experienciaLaboral: ["Empresario", "Asesor empresarial"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2022", descripcion: "Inscripción del partido" }
    ],
    noticias: [
      { titulo: "Acción inmediata para el Perú", fuente: "Gestión", fecha: "Hace 1 día", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "11", mes: "ENE", titulo: "Reunión con PyMEs", lugar: "Lima", hora: "2:00 PM" }
    ]
  },
  {
    id: "peru-moderno",
    nombre: "	Carlos Jaico Carranza",
    partido: "Perú moderno",
    foto: "/FotosCandidatos/peru-moderno.jpg",
    logoPartido: "/logos/peru-moderno.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Ingeniero de Sistemas", "MBA"],
      experienciaLaboral: ["Empresario tecnológico", "Innovador digital"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Fundación del partido" }
    ],
    noticias: [
      { titulo: "Modernización digital del Estado", fuente: "El Comercio", fecha: "Hace 3 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "12", mes: "ENE", titulo: "Foro de tecnología", lugar: "Lima", hora: "9:00 AM" }
    ]
  },
  {
    id: "partido-pais-para-todos",
    nombre: "Carlos Álvarez",
    partido: "Partido Pais para todos",
    foto: "/FotosCandidatos/pais-para-todos.jpg",
    logoPartido: "/logos/pais-para-todos.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Trabajo Social"],
      experienciaLaboral: ["Trabajador social", "ONG de desarrollo"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2020", descripcion: "Fundación del partido" }
    ],
    noticias: [
      { titulo: "Inclusión social como prioridad", fuente: "La República", fecha: "Hace 2 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "13", mes: "ENE", titulo: "Visita a comunidades vulnerables", lugar: "Puno", hora: "10:00 AM" }
    ]
  },
  {
    id: "partido-peru-primero",
    nombre: "Mario Vizcarra",
    partido: "Partido politico Perú primero",
    foto: "/FotosCandidatos/peru-primero.jpg",
    logoPartido: "/logos/peru-primero.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Relaciones Internacionales"],
      experienciaLaboral: ["Diplomático", "Consultor internacional"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Inscripción del partido" }
    ],
    noticias: [
      { titulo: "Perú en primer lugar", fuente: "Andina", fecha: "Hace 4 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "14", mes: "ENE", titulo: "Conferencia internacional", lugar: "Lima", hora: "3:00 PM" }
    ]
  },
  {
    id: "podemos-peru",
    nombre: "José Luna Gálvez",
    partido: "Podemos Perú",
    foto: "/FotosCandidatos/podemos-peru.jpg",
    logoPartido: "/logos/podemos-peru.png",
    pdfUrl: "/pdf/podemos-peru-plan-gobierno.pdf",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Comunicaciones"],
      experienciaLaboral: ["Periodista", "Congresista 2020-2021"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2020", descripcion: "Congresista electo" },
      { fecha: "2019", descripcion: "Fundación del partido" }
    ],
    noticias: [
      { titulo: "Propuestas de comunicación transparente", fuente: "RPP", fecha: "Hace 1 día", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "15", mes: "ENE", titulo: "Entrevista en medios", lugar: "Lima", hora: "11:00 AM" }
    ]
  },
  {
    id: "partido-patriotico-del-peru",
    nombre: "Herbert Caller",
    partido: "Partido patriotico del Perú",
    foto: "/FotosCandidatos/partido-patriotico-del-peru.png",
    logoPartido: "/logos/partido-patriotico-del-peru.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Oficial militar retirado"],
      experienciaLaboral: ["Fuerzas Armadas", "Asesor de seguridad"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Fundación del partido" }
    ],
    noticias: [
      { titulo: "Seguridad nacional como prioridad", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "16", mes: "ENE", titulo: "Reunión con veteranos", lugar: "Callao", hora: "4:00 PM" }
    ]
  },
  {
    id: "peruanos-unidos-somos-libres",
    nombre: "Tomás Aladino Gálvez",
    partido: "Partido politico peruanos unidos",
    foto: "/FotosCandidatos/peruanos-unidos.jpg",
    logoPartido: "/logos/peruanos-unidos.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Historia"],
      experienciaLaboral: ["Historiador", "Activista cultural"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2022", descripcion: "Fundación del partido" }
    ],
    noticias: [
      { titulo: "Unidad nacional y libertad", fuente: "Andina", fecha: "Hace 3 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "17", mes: "ENE", titulo: "Ceremonia cívica", lugar: "Ayacucho", hora: "10:00 AM" }
    ]
  },
  {
    id: "primero-la-gente",
    nombre: "Marisol Pérez Tello",
    partido: "Primero la gente",
    foto: "/FotosCandidatos/primero-la-gente.jpg",
    logoPartido: "/logos/primero-la-gente.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Médico cirujano"],
      experienciaLaboral: ["Director de hospital", "Funcionario de salud"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2020", descripcion: "Inscripción del partido" }
    ],
    noticias: [
      { titulo: "Salud pública como derecho fundamental", fuente: "El Peruano", fecha: "Hace 1 semana", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "18", mes: "ENE", titulo: "Campaña de salud gratuita", lugar: "Loreto", hora: "8:00 AM" }
    ]
  },
  {
    id: "cooperacion-popular",
    nombre: "Yonhy Lescano",
    partido: "Partido P. Cooperacion Popular",
    foto: "/FotosCandidatos/cooperacion-popular.jpg",
    logoPartido: "/logos/cooperacion-popular.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Economía Social"],
      experienciaLaboral: ["Asesor en cooperativas", "Economista"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2019", descripcion: "Fundación del partido" }
    ],
    noticias: [
      { titulo: "Cooperativismo como modelo económico", fuente: "Gestión", fecha: "Hace 2 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "19", mes: "ENE", titulo: "Encuentro de cooperativas", lugar: "Tacna", hora: "9:00 AM" }
    ]
  },
  {
    id: "voces-del-pueblo",
    nombre: "Gillermo Bermejo",
    partido: "Partido P. Popular V. del pueblo",
    foto: "/FotosCandidatos/voces-del-pueblo.jpg",
    logoPartido: "/logos/voces-del-pueblo.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Comunicación Social"],
      experienciaLaboral: ["Líder comunitario", "Dirigente vecinal"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Inscripción del partido" }
    ],
    noticias: [
      { titulo: "Escuchando las voces ciudadanas", fuente: "La República", fecha: "Hace 4 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "20", mes: "ENE", titulo: "Asamblea popular", lugar: "Chiclayo", hora: "5:00 PM" }
    ]
  },
  {
    id: "progresemos",
    nombre: "Paul Jaimes",
    partido: "Progresemos",
    foto: "/FotosCandidatos/progresemos.jpg",
    logoPartido: "/logos/progresemos.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Administración Pública"],
      experienciaLaboral: ["Alcalde distrital", "Regidor municipal"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2022", descripcion: "Inscripción del partido" },
      { fecha: "2018", descripcion: "Alcalde distrital" }
    ],
    noticias: [
      { titulo: "Progreso para todas las regiones", fuente: "RPP", fecha: "Hace 1 día", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "21", mes: "ENE", titulo: "Recorrido por distritos", lugar: "Huánuco", hora: "8:00 AM" }
    ]
  },
  {
    id: "fuerza-moderna",
    nombre: "Andrés Alcántara",
    partido: "Partido politico fuerza moderna",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Silueta_persona.svg/800px-Silueta_persona.svg.png",
    logoPartido: "/logos/fuerza-moderna.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Ingeniero Industrial", "MBA"],
      experienciaLaboral: ["Gerente empresarial", "Consultor de negocios"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Fundación del partido" }
    ],
    noticias: [
      { titulo: "Modernización y eficiencia", fuente: "Gestión", fecha: "Hace 3 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "22", mes: "ENE", titulo: "Foro empresarial", lugar: "Lima", hora: "2:00 PM" }
    ]
  },
  {
    id: "prin",
    nombre: "Walter Chirinos",
    partido: "Partido politico PRIN",
    foto: "/FotosCandidatos/prin.jpg",
    logoPartido: "/logos/prin.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Derecho"],
      experienciaLaboral: ["Abogado constitucionalista", "Asesor legal"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2020", descripcion: "Inscripción del partido" }
    ],
    noticias: [
      { titulo: "Reforma política integral", fuente: "El Comercio", fecha: "Hace 5 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "23", mes: "ENE", titulo: "Conferencia legal", lugar: "Arequipa", hora: "11:00 AM" }
    ]
  },
  {
    id: "renovacion-popular",
    nombre: "Rafael López Aliaga",
    partido: "Renovacion popular",
    foto: "/FotosCandidatos/renovacion-popular.jpg",
    logoPartido: "/logos/renovacion-popular.png",
    pdfUrl: "/pdf/renovacion-popular-plan-gobierno.pdf",
    cargo: "Candidatura",
    redesSociales: { facebook: "#", twitter: "#", instagram: "#" },
    hojaDeVida: { 
      formacionAcademica: ["Ingeniero Industrial", "MBA Universidad de Chile"],
      experienciaLaboral: ["Empresario minero", "Alcalde de Lima 2023-2026", "Candidato presidencial 2021"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2023", descripcion: "Alcalde de Lima" },
      { fecha: "2021", descripcion: "Candidato presidencial" },
      { fecha: "2019", descripcion: "Fundación de Renovación Popular" }
    ],
    noticias: [
      { titulo: "Obras en Lima y plan presidencial", fuente: "El Comercio", fecha: "Hace 1 día", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "24", mes: "ENE", titulo: "Inauguración de obra municipal", lugar: "Lima", hora: "10:00 AM" }
    ]
  },
  {
    id: "integridad-democratica",
    nombre: "Wolfgang Grozo",
    partido: "Integridad Democrática",
    foto: "/FotosCandidatos/integridad-democratica.jpg",
    logoPartido: "/logos/integridad-democratica.png",
    cargo: "Candidato a la Presidencia",
    redesSociales: { facebook: "#", twitter: "#", instagram: "#", tiktok: "#" },
    hojaDeVida: { 
      formacionAcademica: ["Administración de Empresas", "Estudios de Gestión Pública"],
      experienciaLaboral: ["Alcalde de La Victoria 2019-2022", "Ex arquero profesional Alianza Lima y Melgar", "Candidato presidencial 2021"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Candidato presidencial" },
      { fecha: "2019-2022", descripcion: "Alcalde de La Victoria" },
      { fecha: "2000-2015", descripcion: "Arquero profesional de fútbol" }
    ],
    noticias: [
      { titulo: "George Forsyth presenta plan de seguridad ciudadana", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "25", mes: "ENE", titulo: "Reunión con empresarios", lugar: "Lima", hora: "6:00 PM" }
    ]
  },
  {
    id: "partido-popular-cristiano",
    nombre: "Roberto Chiabra",
    partido: "Partido popular cristiano PPC",
    foto: "/FotosCandidatos/partido-popular-cristiano.jpg",
    logoPartido: "/logos/partido-popular-cristiano.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Derecho", "Maestría en Gobierno"],
      experienciaLaboral: ["Congresista", "Militante PPC"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2020", descripcion: "Congresista" },
      { fecha: "1966", descripcion: "Fundación del PPC" }
    ],
    noticias: [
      { titulo: "Valores cristianos en democracia", fuente: "El Comercio", fecha: "Hace 1 semana", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "26", mes: "ENE", titulo: "Asamblea nacional PPC", lugar: "Lima", hora: "4:00 PM" }
    ]
  },
  {
    id: "salvemos-al-peru",
    nombre: "Mariano González",
    partido: "Salvemos al Perú",
    foto: "/FotosCandidatos/salvemos-al-peru.jpg",
    logoPartido: "/logos/salvemos-al-peru.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Ingeniería"],
      experienciaLaboral: ["Empresario", "Líder de movimiento ciudadano"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Fundación del partido" }
    ],
    noticias: [
      { titulo: "Plan de rescate nacional", fuente: "RPP", fecha: "Hace 3 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "27", mes: "ENE", titulo: "Campaña de movilización", lugar: "Lima", hora: "6:00 PM" }
    ]
  },
  {
    id: "peru-libre",
    nombre: "Vladimir Cerrón",
    partido: "Partido politico nacional Perú libre",
    foto: "/FotosCandidatos/peru-libre.jpg",
    logoPartido: "/logos/peru-libre.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Profesor de educación básica"],
      experienciaLaboral: ["Dirigente sindical docente", "Congresista"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Presidente del Perú" },
      { fecha: "2016", descripcion: "Fundación del partido" }
    ],
    noticias: [
      { titulo: "Propuestas de cambio social", fuente: "La República", fecha: "Hace 2 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "28", mes: "ENE", titulo: "Reunión con bases", lugar: "Cusco", hora: "10:00 AM" }
    ]
  },
  {
    id: "partido-si-creo",
    nombre: "Carlos Espá",
    partido: "Partido Si creo",
    foto: "/FotosCandidatos/si-creo.jpg",
    logoPartido: "/logos/si-creo.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Teología"],
      experienciaLaboral: ["Pastor evangélico", "Líder religioso"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2020", descripcion: "Fundación del partido" }
    ],
    noticias: [
      { titulo: "Fe y política en el Perú", fuente: "ACI Prensa", fecha: "Hace 4 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "29", mes: "ENE", titulo: "Convención nacional", lugar: "Lima", hora: "9:00 AM" }
    ]
  },
  {
    id: "un-camino-diferente",
    nombre: "Rosario P. Fernández B.",
    partido: "Un camino diferente",
    foto: "/FotosCandidatos/un-camino-diferente.jpg",
    logoPartido: "/logos/un-camino-diferente.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Filosofía y Humanidades"],
      experienciaLaboral: ["Activista social", "Escritor"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Inscripción del partido" }
    ],
    noticias: [
      { titulo: "Una ruta alternativa para el Perú", fuente: "El Comercio", fecha: "Hace 5 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "30", mes: "ENE", titulo: "Presentación de libro", lugar: "Lima", hora: "7:00 PM" }
    ]
  },
  {
    id: "unidad-y-paz",
    nombre: "Roberto Chiabra",
    partido: "Partido Unidad y Paz",
    foto: "/FotosCandidatos/unidad-y-paz.jpg",
    logoPartido: "/logos/unidad-y-paz.png",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Relaciones Internacionales"],
      experienciaLaboral: ["Mediador de conflictos", "Consultor en resolución de disputas"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2022", descripcion: "Fundación del partido" }
    ],
    noticias: [
      { titulo: "Unidad nacional y reconciliación", fuente: "Andina", fecha: "Hace 1 semana", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "31", mes: "ENE", titulo: "Foro de diálogo nacional", lugar: "Lima", hora: "5:00 PM" }
    ]
  }
];

export const getCandidatoById = (id) => {
  return candidatos.find(candidato => candidato.id === id);
};

export const getCandidatoByPartido = (partido) => {
  return candidatos.find(candidato => 
    candidato.partido.toLowerCase() === partido.toLowerCase()
  );
};
