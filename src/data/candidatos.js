// Datos de candidatos para las elecciones Perú 2026

export const candidatos = [
  {
    id: "accion-popular",
    nombre: "",
    partido: "ACCIÓN POPULAR",
    foto: "https://ui-avatars.com/api/?name=ACCION+POPULAR&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=ACCION+POPULAR&background=ffffff&color=991b1b&size=128",
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
    foto: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Keiko_Fujimori_2.jpg",
    logoPartido: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Fuerza_popular.svg/1024px-Fuerza_popular.svg.png",
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
    nombre: "",
    partido: "Partido de los trabajadores PTE-Perú",
    foto: "https://ui-avatars.com/api/?name=Partido+Trabajadores&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=PTE-Peru&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Ahora Nación (AN)",
    foto: "https://ui-avatars.com/api/?name=Ahora+Nacion&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Ahora+Nacion&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Juntos por el Perú",
    foto: "https://ui-avatars.com/api/?name=Juntos+por+el+Peru&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Juntos+por+el+Peru&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido del buen gobierno",
    foto: "https://ui-avatars.com/api/?name=Partido+Buen+Gobierno&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Buen+Gobierno&background=ffffff&color=991b1b&size=128",
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
    foto: "https://ui-avatars.com/api/?name=Cesar+Acu%C3%B1a&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Alianza+Progreso&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Libertad popular",
    foto: "https://ui-avatars.com/api/?name=Libertad+Popular&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Libertad+Popular&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido Democrata Unido Perú",
    foto: "https://ui-avatars.com/api/?name=PDUP&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=PDUP&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Avanza Pais",
    foto: "https://ui-avatars.com/api/?name=Avanza+Pais&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Avanza+Pais&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Nuevo Perú por el buen vivir",
    foto: "https://ui-avatars.com/api/?name=Nuevo+Peru&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Nuevo+Peru&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido Democrata Verde",
    foto: "https://ui-avatars.com/api/?name=Democrata+Verde&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Democrata+Verde&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Batalla Perú",
    foto: "https://ui-avatars.com/api/?name=Batalla+Peru&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Batalla+Peru&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido Aprista peruano",
    foto: "https://ui-avatars.com/api/?name=APRA&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=APRA&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido democratico federal",
    foto: "https://ui-avatars.com/api/?name=Democratico+Federal&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Democratico+Federal&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Fe en el Perú",
    foto: "https://ui-avatars.com/api/?name=Fe+en+el+Peru&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Fe+en+el+Peru&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido ciudadanos por el Perú",
    foto: "https://ui-avatars.com/api/?name=Ciudadanos+Por+El+Peru&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Ciudadanos+Peru&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido democratico somos Perú",
    foto: "https://ui-avatars.com/api/?name=Somos+Peru&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Somos+Peru&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Frente popular agricola FIA del Perú",
    foto: "https://ui-avatars.com/api/?name=FIA+Peru&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=FIA&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido Civico obras",
    foto: "https://ui-avatars.com/api/?name=Civico+Obras&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Civico+Obras&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido frente de la esperanza 2021",
    foto: "https://ui-avatars.com/api/?name=Frente+Esperanza&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Frente+Esperanza&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido Morado",
    foto: "https://ui-avatars.com/api/?name=Partido+Morado&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Partido+Morado&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido Politico Perú Accion",
    foto: "https://ui-avatars.com/api/?name=Peru+Accion&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Peru+Accion&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Perú moderno",
    foto: "https://ui-avatars.com/api/?name=Peru+Moderno&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Peru+Moderno&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido Pais para todos",
    foto: "https://ui-avatars.com/api/?name=Pais+Para+Todos&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Pais+Para+Todos&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido politico Perú primero",
    foto: "https://ui-avatars.com/api/?name=Peru+Primero&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Peru+Primero&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Podemos Perú",
    foto: "https://ui-avatars.com/api/?name=Podemos+Peru&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Podemos+Peru&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido patriotico del Perú",
    foto: "https://ui-avatars.com/api/?name=Partido+Patriotico&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Partido+Patriotico&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido politico peruanos unidos ¡Somos libres!",
    foto: "https://ui-avatars.com/api/?name=Peruanos+Unidos&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Peruanos+Unidos&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Primero la gente",
    foto: "https://ui-avatars.com/api/?name=Primero+la+Gente&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Primero+la+Gente&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido politico cooperacion popular",
    foto: "https://ui-avatars.com/api/?name=Cooperacion+Popular&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Cooperacion+Popular&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido politico popular voces del pueblo",
    foto: "https://ui-avatars.com/api/?name=Voces+Del+Pueblo&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Voces+Del+Pueblo&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Progresemos",
    foto: "https://ui-avatars.com/api/?name=Progresemos&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Progresemos&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido politico fuerza moderna",
    foto: "https://ui-avatars.com/api/?name=Fuerza+Moderna&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Fuerza+Moderna&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido politico PRIN",
    foto: "https://ui-avatars.com/api/?name=PRIN&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=PRIN&background=ffffff&color=991b1b&size=128",
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
    foto: "https://ui-avatars.com/api/?name=Rafael+Lopez+Aliaga&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Renovacion+Popular&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido politico integridad Democratica",
    foto: "https://ui-avatars.com/api/?name=Integridad+Democratica&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Integridad+Democratica&background=ffffff&color=991b1b&size=128",
    cargo: "Candidatura",
    redesSociales: {},
    hojaDeVida: { 
      formacionAcademica: ["Licenciatura en Ciencia Política"],
      experienciaLaboral: ["Analista político", "Asesor parlamentario"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    trayectoria: [
      { fecha: "2022", descripcion: "Fundación del partido" }
    ],
    noticias: [
      { titulo: "Integridad en la política peruana", fuente: "Andina", fecha: "Hace 2 días", imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia" }
    ],
    actividades: [
      { dia: "25", mes: "ENE", titulo: "Foro anti-corrupción", lugar: "Lima", hora: "6:00 PM" }
    ]
  },
  {
    id: "partido-popular-cristiano",
    nombre: "",
    partido: "Partido popular cristiano PPC",
    foto: "https://ui-avatars.com/api/?name=PPC&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=PPC&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Salvemos al Perú",
    foto: "https://ui-avatars.com/api/?name=Salvemos+Al+Peru&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Salvemos+Al+Peru&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido politico nacional Perú libre",
    foto: "https://ui-avatars.com/api/?name=Peru+Libre&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Peru+Libre&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido Si creo",
    foto: "https://ui-avatars.com/api/?name=Si+Creo&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Si+Creo&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Un camino diferente",
    foto: "https://ui-avatars.com/api/?name=Un+Camino+Diferente&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Un+Camino+Diferente&background=ffffff&color=991b1b&size=128",
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
    nombre: "",
    partido: "Partido Unidad y Paz",
    foto: "https://ui-avatars.com/api/?name=Unidad+y+Paz&background=991b1b&color=fff&size=512",
    logoPartido: "https://ui-avatars.com/api/?name=Unidad+y+Paz&background=ffffff&color=991b1b&size=128",
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
