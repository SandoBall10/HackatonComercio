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
    planGobierno: {
      ejesTematicos: [
        "Descentralización",
        "Obras Públicas",
        "Justicia Social",
        "Desarrollo Rural",
        "Transparencia"
      ],
      propuestas: [
        "Descentralización efectiva con transferencia de recursos a regiones",
        "Plan nacional de construcción de colegios y hospitales",
        "Reforma agraria integral con apoyo a pequeños agricultores",
        "Sistema de agua potable para zonas rurales",
        "Gobierno digital con transparencia total",
        "Carreteras vecinales para conectar comunidades",
        "Energía eléctrica para todos los pueblos del Perú",
        "Fortalecimiento de gobiernos regionales y locales"
      ]
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Candidato presidencial" },
      { fecha: "2016", descripcion: "Electo Congresista de la República" }
    ],
    noticias: [
      { titulo: "Propuesta de descentralización presentada", fuente: "El Comercio", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Acción Popular plantea obras públicas masivas", fuente: "Gestión", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Candidato propone reforma agraria integral", fuente: "RPP", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Belaúnde visita comunidades rurales", fuente: "Perú21", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=300&h=200&fit=crop" },
      { titulo: "Plan de agua potable para zonas alejadas", fuente: "Correo", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?w=300&h=200&fit=crop" },
      { titulo: "Acción Popular promete gobierno transparente", fuente: "La República", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop" },
      { titulo: "Partido refuerza estructura regional", fuente: "El Peruano", fecha: "Hace 2 semanas", imagen: "https://images.unsplash.com/photo-1560421683-6856ea585c78?w=300&h=200&fit=crop" }
    ],
    actividades: [
      { dia: "18", mes: "ENE", titulo: "Debate electoral", lugar: "Lima", hora: "7:00 PM" },
      { dia: "22", mes: "ENE", titulo: "Encuentro con alcaldes provinciales", lugar: "Huancayo", hora: "10:00 AM" },
      { dia: "26", mes: "ENE", titulo: "Presentación de plan de descentralización", lugar: "Arequipa", hora: "4:00 PM" },
      { dia: "29", mes: "ENE", titulo: "Visita a comunidades campesinas", lugar: "Cusco", hora: "9:00 AM" },
      { dia: "02", mes: "FEB", titulo: "Foro sobre obras públicas", lugar: "Trujillo", hora: "11:00 AM" },
      { dia: "05", mes: "FEB", titulo: "Conferencia de prensa", lugar: "Sede AP", hora: "3:00 PM" }
    ]
  },
  {
    id: "fuerza-popular",
    nombre: "KEIKO SOFIA FUJIMORI HIGUCHI",
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
    planGobierno: {
      ejesTematicos: [
        "Economía y Empleo",
        "Salud y Educación",
        "Seguridad Nacional",
        "Lucha Anticorrupción",
        "Desarrollo Regional"
      ],
      propuestas: [
        "Creación de 2 millones de empleos formales mediante inversión privada",
        "Reforma integral del sistema de salud y construcción de hospitales",
        "Modernización educativa con enfoque en tecnología y bilingüismo",
        "Plan de seguridad ciudadana con apoyo de Fuerzas Armadas",
        "Sistema de transparencia y lucha frontal contra la corrupción",
        "Reactivación económica post pandemia con incentivos fiscales",
        "Apoyo a MYPES y emprendedores con créditos accesibles",
        "Descentralización efectiva con presupuesto para regiones"
      ]
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Segunda vuelta electoral presidencial" },
      { fecha: "2016", descripcion: "Candidata presidencial - Segunda vuelta" },
      { fecha: "2011", descripcion: "Primera candidatura presidencial" }
    ],
    noticias: [
      { titulo: "Keiko Fujimori presenta propuestas económicas", fuente: "El Comercio", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Fuerza Popular propone plan de salud universal", fuente: "Gestión", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Candidata compromete lucha contra la corrupción", fuente: "RPP", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Keiko se reúne con gremios de pequeños empresarios", fuente: "Perú21", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=200&fit=crop" },
      { titulo: "Plan de infraestructura para conectar el país", fuente: "Correo", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=300&h=200&fit=crop" },
      { titulo: "Propuesta educativa incluye tablets para estudiantes", fuente: "La República", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop" },
      { titulo: "Fuerza Popular expande estructura partidaria", fuente: "El Peruano", fecha: "Hace 2 semanas", imagen: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=300&h=200&fit=crop" }
    ],
    actividades: [
      { dia: "20", mes: "ENE", titulo: "Reunión con empresarios", lugar: "Lima", hora: "10:00 AM" },
      { dia: "23", mes: "ENE", titulo: "Presentación de propuestas educativas", lugar: "San Juan de Lurigancho", hora: "4:00 PM" },
      { dia: "27", mes: "ENE", titulo: "Foro sobre seguridad ciudadana", lugar: "Callao", hora: "6:00 PM" },
      { dia: "30", mes: "ENE", titulo: "Encuentro con líderes regionales", lugar: "Arequipa", hora: "11:00 AM" },
      { dia: "03", mes: "FEB", titulo: "Conferencia de prensa nacional", lugar: "Sede Fuerza Popular", hora: "9:00 AM" },
      { dia: "07", mes: "FEB", titulo: "Visita a emprendedores y MYPES", lugar: "Villa El Salvador", hora: "3:00 PM" }
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
    nombre: "CÉSAR ACUÑA PERALTA",
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
    planGobierno: {
      ejesTematicos: [
        "Educación de Calidad",
        "Desarrollo Económico",
        "Infraestructura Vial",
        "Salud Universal",
        "Regionalización"
      ],
      propuestas: [
        "Revolución educativa con aumento del presupuesto al 6% del PBI",
        "Construcción de 50 nuevos colegios de alto rendimiento",
        "Becas universitarias para estudiantes de bajos recursos",
        "Reactivación económica con apoyo a pequeñas empresas",
        "Red de carreteras y autopistas para conectar todo el país",
        "Sistema de salud gratuito y de calidad para todos",
        "Descentralización real con autonomía económica regional",
        "Tecnología en todas las escuelas públicas del Perú"
      ]
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Candidato presidencial" },
      { fecha: "2016", descripcion: "Candidato presidencial" },
      { fecha: "2007-2014", descripcion: "Gobernador Regional La Libertad" }
    ],
    noticias: [
      { titulo: "Plan de infraestructura educativa", fuente: "El Comercio", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop", destacada: true },
      { titulo: "César Acuña propone becas masivas para estudiantes", fuente: "Gestión", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Candidato anuncia plan de carreteras nacional", fuente: "RPP", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Acuña visita colegios en zonas rurales", fuente: "Perú21", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=200&fit=crop" },
      { titulo: "Alianza para el Progreso plantea reforma de salud", fuente: "Correo", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=300&h=200&fit=crop" },
      { titulo: "Propuesta de industrialización para provincias", fuente: "La República", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop" },
      { titulo: "APP expande militancia en todo el país", fuente: "El Peruano", fecha: "Hace 2 semanas", imagen: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop" }
    ],
    actividades: [
      { dia: "25", mes: "ENE", titulo: "Visita a escuelas rurales", lugar: "La Libertad", hora: "8:00 AM" },
      { dia: "28", mes: "ENE", titulo: "Presentación de plan educativo nacional", lugar: "Trujillo", hora: "10:00 AM" },
      { dia: "01", mes: "FEB", titulo: "Encuentro con rectores universitarios", lugar: "Lima", hora: "4:00 PM" },
      { dia: "04", mes: "FEB", titulo: "Foro de desarrollo regional", lugar: "Piura", hora: "11:00 AM" },
      { dia: "08", mes: "FEB", titulo: "Inauguración de obra vial", lugar: "Cajamarca", hora: "9:00 AM" },
      { dia: "11", mes: "FEB", titulo: "Conferencia sobre salud universal", lugar: "Chiclayo", hora: "3:00 PM" }
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
    planGobierno: {
      ejesTematicos: [
        "Economía Libre",
        "Emprendimiento",
        "Integración Social",
        "Modernización del Estado",
        "Competitividad"
      ],
      propuestas: [
        "Economía de libre mercado con reducción de trabas burocráticas",
        "Apoyo masivo a emprendedores con financiamiento accesible",
        "Integración social mediante educación y oportunidades",
        "Modernización del Estado con tecnología y eficiencia",
        "Promoción de la inversión privada nacional y extranjera",
        "Simplificación tributaria para MYPES y emprendimientos",
        "Desarrollo de infraestructura para la competitividad",
        "Capacitación laboral orientada al mercado"
      ]
    },
    trayectoria: [
      { fecha: "2020", descripcion: "Elección al Congreso" },
      { fecha: "2019", descripcion: "Fundación del partido" }
    ],
    noticias: [
      { titulo: "Avanza País propone economía libre y competitiva", fuente: "Gestión", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Butters: Apoyo masivo a emprendedores peruanos", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Partido plantea modernización total del Estado", fuente: "RPP", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Avanza País promete simplificación tributaria", fuente: "Perú21", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300&h=200&fit=crop" },
      { titulo: "Candidato se reúne con sector empresarial", fuente: "La República", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&h=200&fit=crop" },
      { titulo: "Plan de integración social presentado", fuente: "Correo", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&h=200&fit=crop" },
      { titulo: "Avanza País expande estructura a regiones", fuente: "El Peruano", fecha: "Hace 2 semanas", imagen: "https://images.unsplash.com/photo-1560421683-6856ea585c78?w=300&h=200&fit=crop" }
    ],
    actividades: [
      { dia: "15", mes: "ENE", titulo: "Reunión con emprendedores", lugar: "Piura", hora: "10:00 AM" },
      { dia: "19", mes: "ENE", titulo: "Foro económico empresarial", lugar: "Lima", hora: "3:00 PM" },
      { dia: "23", mes: "ENE", titulo: "Presentación plan de competitividad", lugar: "Arequipa", hora: "11:00 AM" },
      { dia: "27", mes: "ENE", titulo: "Encuentro con MYPES", lugar: "Trujillo", hora: "4:00 PM" },
      { dia: "30", mes: "ENE", titulo: "Conferencia sobre libre mercado", lugar: "Chiclayo", hora: "5:00 PM" },
      { dia: "02", mes: "FEB", titulo: "Diálogo con inversionistas", lugar: "San Isidro", hora: "9:00 AM" }
    ]
  },
  {
    id: "nuevo-peru-por-el-buen-vivir",
    nombre: "Vicente Alanoca",
    partido: "Nuevo Perú por el buen V.",
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
    planGobierno: {
      ejesTematicos: [
        "Buen Vivir",
        "Medio Ambiente",
        "Derechos Sociales",
        "Pueblos Indígenas",
        "Economía Solidaria"
      ],
      propuestas: [
        "Modelo de desarrollo basado en el Buen Vivir y armonía con la naturaleza",
        "Protección ambiental y lucha contra el cambio climático",
        "Derechos sociales universales para todos los peruanos",
        "Reconocimiento y respeto a pueblos indígenas y originarios",
        "Economía solidaria y comercio justo",
        "Defensa de territorios y recursos naturales",
        "Participación ciudadana en decisiones ambientales",
        "Educación intercultural y respeto a la diversidad"
      ]
    },
    trayectoria: [
      { fecha: "2016", descripcion: "Fundación del movimiento" }
    ],
    noticias: [
      { titulo: "Nuevo Perú propone modelo de Buen Vivir", fuente: "La República", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Alanoca: Protección ambiental como prioridad nacional", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Partido presenta agenda de derechos sociales", fuente: "RPP", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Propuesta de economía solidaria gana respaldo", fuente: "Perú21", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop" },
      { titulo: "Nuevo Perú defiende territorios indígenas", fuente: "Gestión", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=300&h=200&fit=crop" },
      { titulo: "Candidato se reúne con comunidades amazónicas", fuente: "Correo", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300&h=200&fit=crop" },
      { titulo: "Plan de educación intercultural presentado", fuente: "El Peruano", fecha: "Hace 2 semanas", imagen: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop" }
    ],
    actividades: [
      { dia: "18", mes: "ENE", titulo: "Foro ecológico amazónico", lugar: "Iquitos", hora: "2:00 PM" },
      { dia: "22", mes: "ENE", titulo: "Encuentro con pueblos indígenas", lugar: "Ucayali", hora: "10:00 AM" },
      { dia: "26", mes: "ENE", titulo: "Presentación agenda ambiental", lugar: "Lima", hora: "5:00 PM" },
      { dia: "30", mes: "ENE", titulo: "Diálogo con organizaciones sociales", lugar: "Cusco", hora: "3:00 PM" },
      { dia: "02", mes: "FEB", titulo: "Conferencia sobre Buen Vivir", lugar: "Puno", hora: "11:00 AM" },
      { dia: "05", mes: "FEB", titulo: "Asamblea de movimientos ambientales", lugar: "Madre de Dios", hora: "9:00 AM" }
    ]
  },
  {
    id: "partido-democrata-verde",
    nombre: "Álex Gonzales",
    partido: "Partido Democrata Verde",
    foto: "/FotosCandidatos/partido-democrata-verde.jpg",
    logoPartido: "/logos/partido-democrata-verde.png",
    pdfUrl: "/pdf/Partido_democrata_verde Plan de gobierno.pdf",
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
    pdfUrl: "/pdf/Batalla_Perú plan de gobierno.pdf",
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
    nombre: "JORGE DEL CASTILLO",
    partido: "Partido Aprista peruano",
    foto: "/FotosCandidatos/jorge-del-castillo.jpg",
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
    planGobierno: {
      ejesTematicos: [
        "Justicia Social",
        "Desarrollo Económico",
        "Educación y Cultura",
        "Integración Latinoamericana",
        "Democracia Participativa"
      ],
      propuestas: [
        "Estado de bienestar con servicios públicos de calidad",
        "Industrialización nacional con apoyo a sectores productivos",
        "Educación gratuita y de excelencia para todos los peruanos",
        "Integración regional siguiendo los principios del APRA histórico",
        "Participación ciudadana en la gestión pública",
        "Sistema de salud universal y solidario",
        "Reforma agraria con apoyo técnico y financiero",
        "Política exterior soberana e independiente"
      ]
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Candidato presidencial" },
      { fecha: "2016", descripcion: "Congresista" }
    ],
    noticias: [
      { titulo: "PAP propone estado de bienestar moderno", fuente: "El Comercio", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Partido Aprista presenta plan de industrialización", fuente: "Gestión", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Velásquez: Educación gratuita y de calidad para todos", fuente: "RPP", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop", destacada: true },
      { titulo: "PAP retoma principios de integración latinoamericana", fuente: "La República", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=300&h=200&fit=crop" },
      { titulo: "Asamblea nacional aprista renueva liderazgos", fuente: "Perú21", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=300&h=200&fit=crop" },
      { titulo: "Candidato aprista propone salud universal", fuente: "Correo", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop" },
      { titulo: "PAP: Política exterior soberana e independiente", fuente: "El Peruano", fecha: "Hace 2 semanas", imagen: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=300&h=200&fit=crop" }
    ],
    actividades: [
      { dia: "16", mes: "ENE", titulo: "Asamblea nacional aprista", lugar: "Lima", hora: "9:00 AM" },
      { dia: "20", mes: "ENE", titulo: "Presentación plan de industrialización", lugar: "Trujillo", hora: "5:00 PM" },
      { dia: "24", mes: "ENE", titulo: "Foro sobre justicia social", lugar: "Arequipa", hora: "3:00 PM" },
      { dia: "28", mes: "ENE", titulo: "Encuentro con sectores productivos", lugar: "Chiclayo", hora: "11:00 AM" },
      { dia: "01", mes: "FEB", titulo: "Conferencia sobre educación", lugar: "Piura", hora: "4:00 PM" },
      { dia: "04", mes: "FEB", titulo: "Diálogo con militancia histórica", lugar: "Casa del Pueblo", hora: "6:00 PM" }
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
    partido: "Partido D. somos Perú",
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
    planGobierno: {
      ejesTematicos: [
        "Infraestructura Moderna",
        "Seguridad Ciudadana",
        "Gestión Municipal",
        "Obras Públicas",
        "Desarrollo Urbano"
      ],
      propuestas: [
        "Plan maestro de infraestructura vial y transporte público",
        "Sistema integrado de seguridad ciudadana con tecnología",
        "Modernización de gestión municipal con eficiencia",
        "Construcción de hospitales y centros de salud modernos",
        "Espacios públicos seguros y recuperación de áreas verdes",
        "Obras de agua y saneamiento para todos los distritos",
        "Programa de vivienda social con créditos accesibles",
        "Desarrollo urbano planificado y sostenible"
      ]
    },
    trayectoria: [
      { fecha: "2016", descripcion: "Candidato presidencial" },
      { fecha: "1999", descripcion: "Alcalde de Lima" }
    ],
    noticias: [
      { titulo: "Forsyth presenta plan maestro de infraestructura", fuente: "Gestión", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Somos Perú propone seguridad con tecnología", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Candidato plantea modernización municipal total", fuente: "RPP", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Plan de obras públicas beneficiará a millones", fuente: "Perú21", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop" },
      { titulo: "Forsyth promete recuperar espacios públicos", fuente: "La República", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=300&h=200&fit=crop" },
      { titulo: "Somos Perú fortalece estructura partidaria", fuente: "Correo", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop" },
      { titulo: "Visita a obras municipales en provincias", fuente: "El Peruano", fecha: "Hace 2 semanas", imagen: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop" }
    ],
    actividades: [
      { dia: "14", mes: "ENE", titulo: "Visita a obras municipales", lugar: "Callao", hora: "8:00 AM" },
      { dia: "18", mes: "ENE", titulo: "Presentación plan de infraestructura", lugar: "San Martín de Porres", hora: "10:00 AM" },
      { dia: "22", mes: "ENE", titulo: "Foro sobre seguridad ciudadana", lugar: "Villa El Salvador", hora: "4:00 PM" },
      { dia: "26", mes: "ENE", titulo: "Encuentro con alcaldes distritales", lugar: "Lima Centro", hora: "11:00 AM" },
      { dia: "29", mes: "ENE", titulo: "Inspección de proyectos viales", lugar: "Ate", hora: "9:00 AM" },
      { dia: "01", mes: "FEB", titulo: "Conferencia sobre desarrollo urbano", lugar: "Miraflores", hora: "5:00 PM" }
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
    partido: "Partido frente de la E.",
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
    planGobierno: {
      ejesTematicos: [
        "Educación Popular",
        "Justicia Social",
        "Juventud y Futuro",
        "Inclusión Social",
        "Cambio Generacional"
      ],
      propuestas: [
        "Educación pública de calidad con acceso universal",
        "Justicia social para los sectores más vulnerables",
        "Oportunidades de desarrollo para la juventud peruana",
        "Inclusión social real con programas efectivos",
        "Cambio generacional en la política nacional",
        "Derechos laborales dignos para trabajadores",
        "Salud pública accesible para todos los peruanos",
        "Participación ciudadana y democracia directa"
      ]
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Fundación del movimiento" }
    ],
    noticias: [
      { titulo: "Frente de la Esperanza propone educación universal", fuente: "El Comercio", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Olivera: Justicia social para los más vulnerables", fuente: "La República", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Partido plantea cambio generacional en política", fuente: "RPP", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Oportunidades para juventud peruana presentadas", fuente: "Perú21", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop" },
      { titulo: "Programa de inclusión social detallado", fuente: "Gestión", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&h=200&fit=crop" },
      { titulo: "Candidato se reúne con organizaciones sociales", fuente: "Correo", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=300&h=200&fit=crop" },
      { titulo: "Frente de la Esperanza gana apoyo juvenil", fuente: "El Peruano", fecha: "Hace 2 semanas", imagen: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=300&h=200&fit=crop" }
    ],
    actividades: [
      { dia: "17", mes: "ENE", titulo: "Encuentro con jóvenes", lugar: "Lima", hora: "5:00 PM" },
      { dia: "21", mes: "ENE", titulo: "Foro sobre educación popular", lugar: "San Juan de Lurigancho", hora: "3:00 PM" },
      { dia: "25", mes: "ENE", titulo: "Diálogo con organizaciones sociales", lugar: "Villa El Salvador", hora: "11:00 AM" },
      { dia: "29", mes: "ENE", titulo: "Presentación de propuestas juveniles", lugar: "Los Olivos", hora: "4:00 PM" },
      { dia: "01", mes: "FEB", titulo: "Asamblea ciudadana participativa", lugar: "Comas", hora: "6:00 PM" },
      { dia: "04", mes: "FEB", titulo: "Encuentro con sector educativo", lugar: "San Martín de Porres", hora: "10:00 AM" }
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
    planGobierno: {
      ejesTematicos: [
        "Integridad Institucional",
        "Reforma Política",
        "Educación de Calidad",
        "Meritocracia",
        "Lucha Anticorrupción"
      ],
      propuestas: [
        "Reforma política integral con nuevas reglas electorales",
        "Sistema de meritocracia en el Estado y sector público",
        "Educación de calidad con énfasis en pensamiento crítico",
        "Lucha frontal contra la corrupción con independencia judicial",
        "Transparencia absoluta en la gestión pública",
        "Fortalecimiento de instituciones democráticas",
        "Participación ciudadana en decisiones de gobierno",
        "Modernización del sistema de justicia"
      ]
    },
    trayectoria: [
      { fecha: "2018", descripcion: "Fundación del partido" },
      { fecha: "2016", descripcion: "Candidato presidencial" }
    ],
    noticias: [
      { titulo: "Partido Morado presenta reforma política integral", fuente: "RPP", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Guevara: Meritocracia en el Estado es fundamental", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Propuesta de educación con pensamiento crítico", fuente: "La República", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Partido Morado: Lucha frontal contra corrupción", fuente: "Perú21", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=200&fit=crop" },
      { titulo: "Fortalecimiento institucional democrático propuesto", fuente: "Gestión", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=300&h=200&fit=crop" },
      { titulo: "Guevara debate reformas en círculos académicos", fuente: "Correo", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=300&h=200&fit=crop" },
      { titulo: "Partido expande base con jóvenes profesionales", fuente: "El Peruano", fecha: "Hace 2 semanas", imagen: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop" }
    ],
    actividades: [
      { dia: "16", mes: "ENE", titulo: "Debate académico sobre reforma", lugar: "Lima", hora: "7:00 PM" },
      { dia: "20", mes: "ENE", titulo: "Foro anticorrupción", lugar: "PUCP", hora: "4:00 PM" },
      { dia: "24", mes: "ENE", titulo: "Presentación plan de integridad", lugar: "San Isidro", hora: "6:00 PM" },
      { dia: "28", mes: "ENE", titulo: "Encuentro con jóvenes profesionales", lugar: "Miraflores", hora: "5:00 PM" },
      { dia: "31", mes: "ENE", titulo: "Conferencia sobre meritocracia", lugar: "San Borja", hora: "3:00 PM" },
      { dia: "03", mes: "FEB", titulo: "Diálogo ciudadano participativo", lugar: "Jesús María", hora: "6:30 PM" }
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
    planGobierno: {
      ejesTematicos: [
        "Educación de Calidad",
        "Empleo Juvenil",
        "Transparencia",
        "Innovación Tecnológica",
        "Desarrollo Regional"
      ],
      propuestas: [
        "Revolución educativa con acceso universal a tecnología",
        "Programa de primer empleo para jóvenes profesionales",
        "Transparencia total en la gestión pública con datos abiertos",
        "Digitalización del Estado y trámites en línea",
        "Apoyo a emprendimientos con créditos accesibles",
        "Infraestructura educativa de última generación",
        "Desarrollo de polos tecnológicos en regiones",
        "Inversión en ciencia e innovación tecnológica"
      ]
    },
    trayectoria: [
      { fecha: "2020", descripcion: "Congresista electo" },
      { fecha: "2019", descripcion: "Fundación del partido" }
    ],
    noticias: [
      { titulo: "Podemos Perú propone revolución educativa digital", fuente: "RPP", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1501290801888-6f8a0d43b1fd?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Luna Gálvez: Primer empleo para todos los jóvenes", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Partido plantea Estado digital y transparente", fuente: "Gestión", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Podemos Perú promete apoyo a emprendedores", fuente: "Perú21", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop" },
      { titulo: "Propuesta de polos tecnológicos regionales", fuente: "La República", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop" },
      { titulo: "Candidato se reúne con sector empresarial juvenil", fuente: "Correo", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop" },
      { titulo: "Podemos Perú fortalece presencia en provincias", fuente: "El Peruano", fecha: "Hace 2 semanas", imagen: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=300&h=200&fit=crop" }
    ],
    actividades: [
      { dia: "15", mes: "ENE", titulo: "Entrevista en medios nacionales", lugar: "Lima", hora: "11:00 AM" },
      { dia: "19", mes: "ENE", titulo: "Foro juvenil sobre empleo", lugar: "San Juan de Lurigancho", hora: "5:00 PM" },
      { dia: "23", mes: "ENE", titulo: "Presentación de agenda digital", lugar: "Miraflores", hora: "3:00 PM" },
      { dia: "27", mes: "ENE", titulo: "Encuentro con emprendedores", lugar: "Arequipa", hora: "10:00 AM" },
      { dia: "30", mes: "ENE", titulo: "Conferencia sobre innovación", lugar: "Trujillo", hora: "4:00 PM" },
      { dia: "02", mes: "FEB", titulo: "Diálogo con sector educativo", lugar: "Chiclayo", hora: "9:00 AM" }
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
    pdfUrl: "/pdf/Renovacion_popular plan de gobierno.pdf",
    cargo: "Candidatura",
    redesSociales: { facebook: "#", twitter: "#", instagram: "#" },
    hojaDeVida: { 
      formacionAcademica: ["Ingeniero Industrial", "MBA Universidad de Chile"],
      experienciaLaboral: ["Empresario minero", "Alcalde de Lima 2023-2026", "Candidato presidencial 2021"],
      declaracionesJuradas: "Disponible en portal JNE",
      sentenciasJudiciales: "Sin sentencias vigentes"
    },
    planGobierno: {
      ejesTematicos: [
        "Economía y Desarrollo",
        "Seguridad Ciudadana",
        "Educación y Salud",
        "Infraestructura",
        "Lucha contra la corrupción"
      ],
      propuestas: [
        "Reactivación económica mediante inversión privada y reducción de trabas burocráticas",
        "Plan integral de seguridad ciudadana con apoyo de las Fuerzas Armadas",
        "Modernización del sistema educativo con enfoque en calidad y valores",
        "Construcción de hospitales y centros de salud en zonas vulnerables",
        "Mega proyectos de infraestructura vial y transporte masivo",
        "Sistema anticorrupción con penas drásticas y transparencia total",
        "Reforma del sistema de pensiones para garantizar jubilación digna",
        "Promoción de la minería responsable y desarrollo sostenible"
      ]
    },
    trayectoria: [
      { fecha: "2023", descripcion: "Alcalde de Lima" },
      { fecha: "2021", descripcion: "Candidato presidencial" },
      { fecha: "2019", descripcion: "Fundación de Renovación Popular" }
    ],
    noticias: [
      { titulo: "Obras en Lima y plan presidencial", fuente: "El Comercio", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop", destacada: true },
      { titulo: "López Aliaga presenta propuestas para reactivar economía", fuente: "Gestión", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Candidato propone reforma del sistema de pensiones", fuente: "RPP", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop", destacada: true },
      { titulo: "López Aliaga se reúne con gremios de transportistas", fuente: "Perú21", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=300&h=200&fit=crop" },
      { titulo: "Plan de seguridad ciudadana incluye nuevas comisarías", fuente: "Correo", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1586339949216-35c2747cc36d?w=300&h=200&fit=crop" },
      { titulo: "Alcalde propone reducción de impuestos municipales", fuente: "La República", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300&h=200&fit=crop" },
      { titulo: "Renovación Popular amplía presencia en provincias", fuente: "El Peruano", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop" }
    ],
    actividades: [
      { dia: "24", mes: "ENE", titulo: "Inauguración de obra municipal", lugar: "Lima", hora: "10:00 AM" },
      { dia: "28", mes: "ENE", titulo: "Reunión con gremios empresariales", lugar: "San Isidro", hora: "3:00 PM" },
      { dia: "02", mes: "FEB", titulo: "Presentación de plan de gobierno nacional", lugar: "Centro de Convenciones", hora: "6:00 PM" },
      { dia: "05", mes: "FEB", titulo: "Foro sobre seguridad ciudadana", lugar: "Miraflores", hora: "5:00 PM" },
      { dia: "08", mes: "FEB", titulo: "Encuentro con comerciantes del Mercado Central", lugar: "Cercado de Lima", hora: "9:00 AM" },
      { dia: "12", mes: "FEB", titulo: "Conferencia de prensa sobre infraestructura vial", lugar: "Municipalidad de Lima", hora: "11:00 AM" }
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
    planGobierno: {
      ejesTematicos: [
        "Cambio Social",
        "Economía Popular",
        "Educación Pública",
        "Soberanía Nacional",
        "Justicia Popular"
      ],
      propuestas: [
        "Transformación del modelo económico hacia una economía social de mercado",
        "Nacionalización de recursos naturales estratégicos",
        "Educación pública gratuita desde inicial hasta universidad",
        "Sistema de salud universal y gratuito para todos",
        "Reforma agraria con redistribución de tierras",
        "Industrialización nacional con prioridad a la producción local",
        "Asamblea constituyente para nueva constitución",
        "Política exterior soberana e integración latinoamericana"
      ]
    },
    trayectoria: [
      { fecha: "2021", descripcion: "Presidente del Perú" },
      { fecha: "2016", descripcion: "Fundación del partido" }
    ],
    noticias: [
      { titulo: "Perú Libre plantea transformación económica profunda", fuente: "La República", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Cerrón propone nacionalización de recursos naturales", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Partido de izquierda presenta agenda de cambio social", fuente: "RPP", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Perú Libre: Educación gratuita hasta universidad", fuente: "Perú21", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=300&h=200&fit=crop" },
      { titulo: "Propuesta de asamblea constituyente genera debate", fuente: "Gestión", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=200&fit=crop" },
      { titulo: "Cerrón se reúne con movimientos sociales", fuente: "Correo", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=300&h=200&fit=crop" },
      { titulo: "Partido refuerza estructura en regiones del sur", fuente: "El Peruano", fecha: "Hace 2 semanas", imagen: "https://images.unsplash.com/photo-1560421683-6856ea585c78?w=300&h=200&fit=crop" }
    ],
    actividades: [
      { dia: "17", mes: "ENE", titulo: "Reunión con bases partidarias", lugar: "Cusco", hora: "10:00 AM" },
      { dia: "21", mes: "ENE", titulo: "Encuentro con movimientos sociales", lugar: "Puno", hora: "3:00 PM" },
      { dia: "25", mes: "ENE", titulo: "Presentación de propuestas económicas", lugar: "Ayacucho", hora: "11:00 AM" },
      { dia: "28", mes: "ENE", titulo: "Asamblea regional del sur", lugar: "Arequipa", hora: "5:00 PM" },
      { dia: "31", mes: "ENE", titulo: "Foro sobre nueva constitución", lugar: "Lima", hora: "4:00 PM" },
      { dia: "03", mes: "FEB", titulo: "Diálogo con organizaciones campesinas", lugar: "Huancayo", hora: "9:00 AM" }
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
