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
    partido: "PTE-Perú",
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
      planGobierno: {
        ejesTematicos: [
          "Derechos Laborales",
          "Justicia Social",
          "Desarrollo Productivo",
          "Educación y Capacitación",
          "Participación Sindical"
        ],
        propuestas: [
          "Defender y ampliar los derechos laborales de todos los trabajadores",
          "Promover la justicia social y la equidad salarial",
          "Impulsar el desarrollo productivo nacional con enfoque social",
          "Fomentar la educación y capacitación continua para los trabajadores",
          "Garantizar la participación sindical en la toma de decisiones",
          "Apoyar a los trabajadores informales para su formalización",
          "Desarrollar políticas de seguridad y salud en el trabajo",
          "Modernizar la gestión pública con enfoque laboral"
        ]
      },
      noticias: [
        { titulo: "Napoleón Becerra presenta plan laboral para el Perú", fuente: "El Comercio", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas de justicia social y equidad salarial", fuente: "Gestión", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Desarrollo productivo con enfoque social", fuente: "Perú21", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Educación y capacitación para trabajadores", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Participación sindical en la política nacional", fuente: "Andina", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Formalización del trabajo informal", fuente: "Exitosa", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Seguridad y salud en el trabajo", fuente: "RPP", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "22", mes: "DIC", titulo: "Asamblea con sindicatos", lugar: "Lima", hora: "4:00 PM" },
        { dia: "5", mes: "ENE", titulo: "Foro de derechos laborales", lugar: "Arequipa", hora: "10:00 AM" },
        { dia: "9", mes: "ENE", titulo: "Jornada de justicia social", lugar: "Cusco", hora: "4:00 PM" },
        { dia: "13", mes: "ENE", titulo: "Taller de desarrollo productivo", lugar: "Trujillo", hora: "9:00 AM" },
        { dia: "17", mes: "ENE", titulo: "Seminario de educación y capacitación", lugar: "Piura", hora: "11:00 AM" },
        { dia: "21", mes: "ENE", titulo: "Expo participación sindical", lugar: "Chiclayo", hora: "3:00 PM" }
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
      planGobierno: {
        ejesTematicos: [
          "Reactivación Económica",
          "Innovación y Tecnología",
          "Descentralización",
          "Empleo Digno",
          "Transparencia y Modernización"
        ],
        propuestas: [
          "Impulsar la reactivación económica con incentivos a la inversión nacional",
          "Fomentar la innovación y el desarrollo tecnológico en todos los sectores",
          "Descentralizar la gestión pública para fortalecer regiones",
          "Crear empleos dignos y sostenibles con enfoque en jóvenes y mujeres",
          "Modernizar el Estado con plataformas digitales y trámites ágiles",
          "Promover la transparencia y lucha frontal contra la corrupción",
          "Apoyar a las pymes con acceso a crédito y capacitación",
          "Desarrollar infraestructura moderna y sostenible"
        ]
      },
      noticias: [
        { titulo: "Ahora Nación presenta plan de reactivación económica", fuente: "Gestión", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "López-Chau: 'Innovación es clave para el desarrollo'", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para descentralización efectiva", fuente: "RPP", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Empleo digno y oportunidades para jóvenes", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Modernización del Estado: trámites digitales", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Transparencia y lucha anticorrupción", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Apoyo a pymes y emprendedores", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "19", mes: "ENE", titulo: "Foro empresarial nacional", lugar: "Arequipa", hora: "9:00 AM" },
        { dia: "23", mes: "ENE", titulo: "Seminario de innovación tecnológica", lugar: "Lima", hora: "4:00 PM" },
        { dia: "27", mes: "ENE", titulo: "Encuentro de líderes regionales", lugar: "Cusco", hora: "10:00 AM" },
        { dia: "1", mes: "FEB", titulo: "Taller de empleo digno", lugar: "Trujillo", hora: "11:00 AM" },
        { dia: "6", mes: "FEB", titulo: "Jornada de transparencia pública", lugar: "Piura", hora: "3:00 PM" },
        { dia: "10", mes: "FEB", titulo: "Expo Pymes y Emprendedores", lugar: "Chiclayo", hora: "5:00 PM" }
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
    nombre: "Jorge Nieto Montesinos",
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
      planGobierno: {
        ejesTematicos: [
          "Modernización del Estado",
          "Gestión Transparente",
          "Desarrollo Local",
          "Participación Ciudadana",
          "Servicios Públicos Eficientes"
        ],
        propuestas: [
          "Modernizar la administración pública con tecnología y procesos ágiles",
          "Promover la transparencia y rendición de cuentas en todos los niveles",
          "Impulsar el desarrollo local con proyectos participativos",
          "Fomentar la participación ciudadana en la gestión pública",
          "Mejorar la calidad y cobertura de los servicios públicos",
          "Desarrollar programas de capacitación para funcionarios",
          "Implementar sistemas de control y evaluación de políticas",
          "Facilitar el acceso a trámites y servicios digitales"
        ]
      },
      noticias: [
        { titulo: "Buen Gobierno presenta plan de modernización estatal", fuente: "El Peruano", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Jorge Nieto: 'La transparencia es prioridad'", fuente: "Gestión", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para servicios públicos eficientes", fuente: "RPP", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Participación ciudadana en la gestión pública", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Capacitación para funcionarios públicos", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Control y evaluación de políticas públicas", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Trámites y servicios digitales para todos", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "15", mes: "ENE", titulo: "Foro de modernización estatal", lugar: "Lima", hora: "10:00 AM" },
        { dia: "19", mes: "ENE", titulo: "Seminario de transparencia pública", lugar: "Arequipa", hora: "4:00 PM" },
        { dia: "23", mes: "ENE", titulo: "Jornada de desarrollo local", lugar: "Cusco", hora: "9:00 AM" },
        { dia: "28", mes: "ENE", titulo: "Taller de servicios públicos", lugar: "Trujillo", hora: "11:00 AM" },
        { dia: "2", mes: "FEB", titulo: "Encuentro de participación ciudadana", lugar: "Piura", hora: "3:00 PM" },
        { dia: "7", mes: "FEB", titulo: "Expo digitalización estatal", lugar: "Chiclayo", hora: "5:00 PM" }
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
      planGobierno: {
        ejesTematicos: [
          "Libertad Económica",
          "Democracia Participativa",
          "Estado Moderno",
          "Derechos Individuales",
          "Desarrollo Regional"
        ],
        propuestas: [
          "Promover la libertad económica y la libre empresa",
          "Fomentar la participación ciudadana en la toma de decisiones",
          "Modernizar el Estado para hacerlo más eficiente y transparente",
          "Defender los derechos individuales y las libertades civiles",
          "Impulsar el desarrollo regional con autonomía local",
          "Reducir la burocracia y simplificar trámites",
          "Apoyar a emprendedores y pequeñas empresas",
          "Garantizar igualdad de oportunidades para todos"
        ]
      },
      noticias: [
        { titulo: "Libertad Popular presenta plan de libertad económica", fuente: "RPP", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Rafael Belaúnde: 'El Estado debe ser moderno y eficiente'", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para democracia participativa", fuente: "Gestión", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Defensa de derechos individuales", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Desarrollo regional con autonomía", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Apoyo a emprendedores y pymes", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Igualdad de oportunidades para todos", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "14", mes: "ENE", titulo: "Foro de libertad económica", lugar: "Lima", hora: "10:00 AM" },
        { dia: "18", mes: "ENE", titulo: "Seminario de democracia participativa", lugar: "Arequipa", hora: "4:00 PM" },
        { dia: "22", mes: "ENE", titulo: "Jornada de modernización estatal", lugar: "Cusco", hora: "9:00 AM" },
        { dia: "27", mes: "ENE", titulo: "Taller de derechos individuales", lugar: "Trujillo", hora: "11:00 AM" },
        { dia: "2", mes: "FEB", titulo: "Encuentro de desarrollo regional", lugar: "Piura", hora: "3:00 PM" },
        { dia: "7", mes: "FEB", titulo: "Expo emprendedores y pymes", lugar: "Chiclayo", hora: "5:00 PM" }
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
      planGobierno: {
        ejesTematicos: [
          "Reforma Judicial",
          "Transparencia y Ética",
          "Desarrollo Regional",
          "Educación Ciudadana",
          "Participación Democrática"
        ],
        propuestas: [
          "Impulsar una reforma integral del sistema judicial",
          "Promover la transparencia y la ética en la función pública",
          "Descentralizar recursos para fortalecer regiones",
          "Fomentar la educación ciudadana y la cultura democrática",
          "Crear mecanismos de participación ciudadana en la toma de decisiones",
          "Modernizar la gestión pública con tecnología",
          "Garantizar acceso igualitario a la justicia",
          "Desarrollar programas de formación para líderes locales"
        ]
      },
      noticias: [
        { titulo: "Demócrata Unido Perú presenta plan de reforma judicial", fuente: "Andina", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Charlie Carrasco: 'La ética es la base del cambio'", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para descentralización y desarrollo regional", fuente: "RPP", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Educación ciudadana como pilar democrático", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Participación ciudadana en la gestión pública", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Modernización del Estado con tecnología", fuente: "Gestión", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Formación de líderes locales", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "12", mes: "ENE", titulo: "Foro de reforma judicial", lugar: "Lima", hora: "10:00 AM" },
        { dia: "17", mes: "ENE", titulo: "Seminario de ética pública", lugar: "Arequipa", hora: "4:00 PM" },
        { dia: "22", mes: "ENE", titulo: "Encuentro de líderes regionales", lugar: "Cusco", hora: "9:00 AM" },
        { dia: "27", mes: "ENE", titulo: "Jornada de educación ciudadana", lugar: "Trujillo", hora: "11:00 AM" },
        { dia: "2", mes: "FEB", titulo: "Taller de participación democrática", lugar: "Piura", hora: "3:00 PM" },
        { dia: "7", mes: "FEB", titulo: "Expo líderes locales", lugar: "Chiclayo", hora: "5:00 PM" }
      ]
  },
  {
    id: "avanza-pais",
    nombre: "Phillip Butters Rivadeneira",
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
      planGobierno: {
        ejesTematicos: [
          "Protección Ambiental",
          "Energía Renovable",
          "Desarrollo Sostenible",
          "Educación Ecológica",
          "Justicia Climática"
        ],
        propuestas: [
          "Impulsar políticas de protección de bosques y biodiversidad",
          "Fomentar el uso de energías renovables en todo el país",
          "Promover ciudades y comunidades sostenibles",
          "Implementar educación ambiental en todos los niveles escolares",
          "Desarrollar programas de reciclaje y reducción de residuos",
          "Garantizar acceso a agua limpia y gestión responsable",
          "Luchar contra la minería ilegal y la contaminación",
          "Crear incentivos para empresas verdes y limpias"
        ]
      },
      noticias: [
        { titulo: "Demócrata Verde presenta plan de protección ambiental", fuente: "El Comercio", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Álex Gonzales: 'El futuro es verde'", fuente: "RPP", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para energías renovables", fuente: "Gestión", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Educación ecológica en escuelas", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Lucha contra la minería ilegal", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Reciclaje y reducción de residuos", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Empresas verdes y sostenibles", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "15", mes: "ENE", titulo: "Campaña de reforestación nacional", lugar: "Madre de Dios", hora: "7:00 AM" },
        { dia: "20", mes: "ENE", titulo: "Foro de energías renovables", lugar: "Lima", hora: "4:00 PM" },
        { dia: "25", mes: "ENE", titulo: "Jornada de limpieza de ríos", lugar: "Cusco", hora: "9:00 AM" },
        { dia: "30", mes: "ENE", titulo: "Taller de educación ecológica", lugar: "Arequipa", hora: "11:00 AM" },
        { dia: "4", mes: "FEB", titulo: "Seminario de justicia climática", lugar: "Trujillo", hora: "3:00 PM" },
        { dia: "9", mes: "FEB", titulo: "Expo empresas verdes", lugar: "Piura", hora: "5:00 PM" }
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
      planGobierno: {
        ejesTematicos: [
          "Lucha Anticorrupción",
          "Participación Ciudadana",
          "Desarrollo Comunitario",
          "Transparencia Pública",
          "Empoderamiento Social"
        ],
        propuestas: [
          "Implementar políticas estrictas de lucha contra la corrupción",
          "Fomentar la participación ciudadana en la gestión pública",
          "Desarrollar proyectos de desarrollo comunitario sostenible",
          "Promover la transparencia y acceso a la información pública",
          "Empoderar a líderes sociales y comunitarios",
          "Crear observatorios ciudadanos para fiscalización",
          "Impulsar la educación cívica y ética",
          "Facilitar denuncias y protección a denunciantes de corrupción"
        ]
      },
      noticias: [
        { titulo: "Batalla Perú presenta plan anticorrupción", fuente: "RPP", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Fiorella Molinelli: 'La participación ciudadana es clave'", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para desarrollo comunitario", fuente: "Gestión", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Transparencia pública y acceso a la información", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Empoderamiento de líderes sociales", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Observatorios ciudadanos para fiscalización", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Educación cívica y ética en escuelas", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "10", mes: "ENE", titulo: "Foro anticorrupción nacional", lugar: "Lima", hora: "10:00 AM" },
        { dia: "15", mes: "ENE", titulo: "Jornada de participación ciudadana", lugar: "Arequipa", hora: "4:00 PM" },
        { dia: "20", mes: "ENE", titulo: "Taller de desarrollo comunitario", lugar: "Cusco", hora: "9:00 AM" },
        { dia: "25", mes: "ENE", titulo: "Seminario de transparencia pública", lugar: "Trujillo", hora: "11:00 AM" },
        { dia: "30", mes: "ENE", titulo: "Mitin ciudadano", lugar: "Lima", hora: "6:00 PM" },
        { dia: "4", mes: "FEB", titulo: "Expo líderes sociales", lugar: "Piura", hora: "3:00 PM" }
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
    partido: "Partido democratico f.",
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
      planGobierno: {
        ejesTematicos: [
          "Federalismo",
          "Descentralización",
          "Justicia Regional",
          "Participación Ciudadana",
          "Desarrollo Territorial"
        ],
        propuestas: [
          "Impulsar el federalismo para una mejor distribución de recursos",
          "Promover la descentralización efectiva del Estado",
          "Garantizar la justicia regional y la autonomía local",
          "Fomentar la participación ciudadana en la gestión regional",
          "Desarrollar políticas de desarrollo territorial sostenible",
          "Apoyar a las regiones en la gestión de sus propios recursos",
          "Modernizar la administración pública regional",
          "Fortalecer la identidad y cultura regional"
        ]
      },
      noticias: [
        { titulo: "Armando Massé impulsa el federalismo en el Perú", fuente: "El Comercio", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas de descentralización y autonomía regional", fuente: "Gestión", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Justicia regional y participación ciudadana", fuente: "Perú21", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Desarrollo territorial sostenible", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Autonomía local y gestión regional", fuente: "Andina", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Modernización de la administración pública regional", fuente: "Exitosa", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Identidad y cultura regional en el federalismo", fuente: "RPP", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "3", mes: "ENE", titulo: "Foro sobre federalismo", lugar: "Arequipa", hora: "11:00 AM" },
        { dia: "7", mes: "ENE", titulo: "Jornada de descentralización", lugar: "Cusco", hora: "4:00 PM" },
        { dia: "11", mes: "ENE", titulo: "Taller de justicia regional", lugar: "Trujillo", hora: "9:00 AM" },
        { dia: "15", mes: "ENE", titulo: "Seminario de participación ciudadana", lugar: "Piura", hora: "11:00 AM" },
        { dia: "19", mes: "ENE", titulo: "Expo desarrollo territorial", lugar: "Chiclayo", hora: "3:00 PM" },
        { dia: "23", mes: "ENE", titulo: "Encuentro de autonomías locales", lugar: "Lima", hora: "5:00 PM" }
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
    planGobierno: {
      ejesTematicos: [
        "Valores Cristianos",
        "Familia y Vida",
        "Lucha Anticorrupción",
        "Justicia Social",
        "Educación en Valores"
      ],
      propuestas: [
        "Promover políticas públicas basadas en valores cristianos y éticos",
        "Fortalecer la familia como núcleo fundamental de la sociedad",
        "Defender la vida desde la concepción hasta la muerte natural",
        "Implementar educación en valores en todo el sistema educativo",
        "Crear comisiones de ética en todos los niveles del gobierno",
        "Promover la transparencia total en la gestión pública",
        "Desarrollar programas de apoyo a familias vulnerables",
        "Establecer alianzas con organizaciones religiosas para desarrollo social"
      ]
    },
    noticias: [
      { titulo: "Fe en el Perú presenta plan de gobierno basado en valores cristianos", fuente: "ACI Prensa", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Álvaro Paz de la Barra: 'La familia es el pilar de nuestra propuesta'", fuente: "RPP", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Partido Fe en el Perú propone educación en valores", fuente: "El Comercio", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop", destacada: true },
      { titulo: "Paz de la Barra rechaza corrupción desde perspectiva ética", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop" },
      { titulo: "Fe en el Perú busca alianzas con iglesias evangélicas", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=400&fit=crop" },
      { titulo: "Proponen defensa de la vida en todas sus etapas", fuente: "Gestión", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop" },
      { titulo: "Partido cristiano presenta candidatos al Congreso", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
    ],
    actividades: [
      { dia: "20", mes: "ENE", titulo: "Encuentro Nacional de Líderes Cristianos", lugar: "Lima Centro", hora: "9:00 AM" },
      { dia: "23", mes: "ENE", titulo: "Foro: Familia y Sociedad", lugar: "Jesús María", hora: "6:00 PM" },
      { dia: "27", mes: "ENE", titulo: "Reunión con pastores evangélicos", lugar: "San Juan de Lurigancho", hora: "4:00 PM" },
      { dia: "1", mes: "FEB", titulo: "Presentación de plan educativo", lugar: "Miraflores", hora: "10:00 AM" },
      { dia: "5", mes: "FEB", titulo: "Campaña Pro Vida", lugar: "Parque Kennedy", hora: "11:00 AM" },
      { dia: "10", mes: "FEB", titulo: "Conversatorio sobre Ética Pública", lugar: "Universidad Católica", hora: "7:00 PM" }
    ]
  },
  {
    id: "partido-ciudadanos-por-el-peru",
    nombre: "Ricardo Belmont",
    partido: "Partido ciudadanos por el P.",
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
      planGobierno: {
        ejesTematicos: [
          "Participación Ciudadana",
          "Desarrollo Local",
          "Transparencia y Control",
          "Obras Públicas",
          "Gestión Comunitaria"
        ],
        propuestas: [
          "Fomentar la participación activa de la ciudadanía en la gestión pública",
          "Desarrollar proyectos locales con enfoque participativo",
          "Promover la transparencia y el control social en la administración",
          "Impulsar obras públicas que respondan a necesidades reales",
          "Fortalecer la gestión comunitaria y el liderazgo local",
          "Facilitar el acceso a información pública y rendición de cuentas",
          "Apoyar iniciativas ciudadanas para el desarrollo sostenible",
          "Crear espacios de diálogo y concertación vecinal"
        ]
      },
      noticias: [
        { titulo: "Ciudadanos por el Perú presenta plan de participación ciudadana", fuente: "RPP", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Ricardo Belmont: 'El desarrollo local es clave'", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para obras públicas participativas", fuente: "Gestión", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Transparencia y control social en la gestión", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Gestión comunitaria y liderazgo local", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Acceso a información pública y rendición de cuentas", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Diálogo y concertación vecinal", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "5", mes: "ENE", titulo: "Asamblea ciudadana", lugar: "Cusco", hora: "10:00 AM" },
        { dia: "10", mes: "ENE", titulo: "Foro de desarrollo local", lugar: "Lima", hora: "4:00 PM" },
        { dia: "15", mes: "ENE", titulo: "Jornada de transparencia y control", lugar: "Arequipa", hora: "9:00 AM" },
        { dia: "20", mes: "ENE", titulo: "Taller de obras públicas", lugar: "Trujillo", hora: "11:00 AM" },
        { dia: "25", mes: "ENE", titulo: "Encuentro de gestión comunitaria", lugar: "Piura", hora: "3:00 PM" },
        { dia: "30", mes: "ENE", titulo: "Expo iniciativas ciudadanas", lugar: "Chiclayo", hora: "5:00 PM" }
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
      planGobierno: {
        ejesTematicos: [
          "Infraestructura y Obras Públicas",
          "Desarrollo Urbano",
          "Transporte Eficiente",
          "Vivienda Digna",
          "Gestión Municipal"
        ],
        propuestas: [
          "Impulsar grandes proyectos de infraestructura vial y urbana",
          "Modernizar el transporte público en las principales ciudades",
          "Promover el acceso a vivienda digna para todos",
          "Desarrollar obras de saneamiento y agua potable",
          "Fomentar la participación ciudadana en la gestión municipal",
          "Mejorar la conectividad entre regiones",
          "Apoyar a pequeñas y medianas empresas constructoras",
          "Implementar sistemas de gestión transparente en obras públicas"
        ]
      },
      noticias: [
        { titulo: "Cívico Obras presenta plan de infraestructura nacional", fuente: "Construcción y Obras", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Ricardo Belmont: 'Vivienda digna es prioridad'", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para transporte eficiente", fuente: "RPP", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Obras de saneamiento y agua potable", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Gestión municipal participativa", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Apoyo a pymes constructoras", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Transparencia en obras públicas", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "8", mes: "ENE", titulo: "Inspección de carreteras", lugar: "Huánuco", hora: "7:00 AM" },
        { dia: "13", mes: "ENE", titulo: "Foro de desarrollo urbano", lugar: "Lima", hora: "10:00 AM" },
        { dia: "18", mes: "ENE", titulo: "Jornada de vivienda digna", lugar: "Arequipa", hora: "4:00 PM" },
        { dia: "23", mes: "ENE", titulo: "Taller de gestión municipal", lugar: "Cusco", hora: "9:00 AM" },
        { dia: "28", mes: "ENE", titulo: "Expo pymes constructoras", lugar: "Trujillo", hora: "11:00 AM" },
        { dia: "2", mes: "FEB", titulo: "Seminario de transparencia en obras", lugar: "Piura", hora: "3:00 PM" }
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
      planGobierno: {
        ejesTematicos: [
          "Acción Inmediata",
          "Desarrollo Empresarial",
          "Empleo y Oportunidades",
          "Gestión Eficiente",
          "Participación Ciudadana"
        ],
        propuestas: [
          "Implementar acciones inmediatas para la reactivación económica",
          "Fomentar el desarrollo de PyMEs y emprendimientos",
          "Generar empleo digno y oportunidades para jóvenes",
          "Optimizar la gestión pública con procesos eficientes",
          "Promover la participación ciudadana en la toma de decisiones",
          "Facilitar el acceso a financiamiento para empresas",
          "Desarrollar infraestructura productiva en regiones",
          "Impulsar la innovación y la competitividad"
        ]
      },
      noticias: [
        { titulo: "Perú Acción presenta plan de acción inmediata", fuente: "Gestión", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Francisco Diez Canseco: 'El desarrollo empresarial es clave'", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para empleo y oportunidades", fuente: "RPP", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Gestión eficiente en la administración pública", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Participación ciudadana en la gestión estatal", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Acceso a financiamiento para PyMEs", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Innovación y competitividad regional", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "11", mes: "ENE", titulo: "Reunión con PyMEs", lugar: "Lima", hora: "2:00 PM" },
        { dia: "15", mes: "ENE", titulo: "Foro de desarrollo empresarial", lugar: "Arequipa", hora: "10:00 AM" },
        { dia: "19", mes: "ENE", titulo: "Jornada de empleo y oportunidades", lugar: "Cusco", hora: "4:00 PM" },
        { dia: "23", mes: "ENE", titulo: "Taller de gestión eficiente", lugar: "Trujillo", hora: "9:00 AM" },
        { dia: "27", mes: "ENE", titulo: "Encuentro de participación ciudadana", lugar: "Piura", hora: "11:00 AM" },
        { dia: "31", mes: "ENE", titulo: "Expo innovación y competitividad", lugar: "Chiclayo", hora: "3:00 PM" }
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
      planGobierno: {
        ejesTematicos: [
          "Modernización Digital",
          "Innovación y Tecnología",
          "Educación para el Futuro",
          "Gobierno Abierto",
          "Desarrollo Sostenible"
        ],
        propuestas: [
          "Modernizar el Estado con plataformas digitales y servicios en línea",
          "Fomentar la innovación tecnológica en todos los sectores",
          "Impulsar la educación digital y el acceso a nuevas tecnologías",
          "Promover la transparencia y el gobierno abierto",
          "Desarrollar ciudades inteligentes y sostenibles",
          "Apoyar a startups y emprendedores tecnológicos",
          "Facilitar el acceso a internet en todo el país",
          "Capacitar a funcionarios y ciudadanos en competencias digitales"
        ]
      },
      noticias: [
        { titulo: "Perú Moderno presenta plan de modernización digital", fuente: "El Comercio", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Carlos Jaico Carranza: 'La innovación es el motor del desarrollo'", fuente: "Gestión", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para educación digital y tecnológica", fuente: "RPP", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Gobierno abierto y transparencia digital", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Desarrollo sostenible con tecnología", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Apoyo a startups y emprendedores", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Capacitación digital para todos", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "12", mes: "ENE", titulo: "Foro de tecnología", lugar: "Lima", hora: "9:00 AM" },
        { dia: "16", mes: "ENE", titulo: "Jornada de innovación digital", lugar: "Arequipa", hora: "10:00 AM" },
        { dia: "20", mes: "ENE", titulo: "Taller de educación tecnológica", lugar: "Cusco", hora: "4:00 PM" },
        { dia: "24", mes: "ENE", titulo: "Seminario de gobierno abierto", lugar: "Trujillo", hora: "9:00 AM" },
        { dia: "28", mes: "ENE", titulo: "Expo ciudades inteligentes", lugar: "Piura", hora: "11:00 AM" },
        { dia: "1", mes: "FEB", titulo: "Capacitación digital para funcionarios", lugar: "Chiclayo", hora: "3:00 PM" }
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
      planGobierno: {
        ejesTematicos: [
          "Inclusión Social",
          "Desarrollo Regional",
          "Salud y Nutrición",
          "Educación para Todos",
          "Economía Solidaria"
        ],
        propuestas: [
          "Implementar programas de inclusión social en zonas rurales y urbanas",
          "Descentralizar recursos para el desarrollo regional equitativo",
          "Garantizar acceso universal a salud y nutrición básica",
          "Promover educación gratuita y de calidad en todos los niveles",
          "Fomentar cooperativas y emprendimientos locales",
          "Desarrollar infraestructura básica en comunidades vulnerables",
          "Impulsar participación ciudadana en la toma de decisiones",
          "Crear redes de apoyo para familias en situación de pobreza"
        ]
      },
      noticias: [
        { titulo: "País para Todos lanza plan de inclusión social", fuente: "La República", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Carlos Álvarez: 'Nadie debe quedar atrás'", fuente: "RPP", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para desarrollo regional equitativo", fuente: "El Comercio", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Salud y nutrición para todos los peruanos", fuente: "Gestión", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Educación gratuita y de calidad: propuesta central", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Economía solidaria y cooperativas locales", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Participación ciudadana en la toma de decisiones", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "13", mes: "ENE", titulo: "Visita a comunidades vulnerables", lugar: "Puno", hora: "10:00 AM" },
        { dia: "18", mes: "ENE", titulo: "Foro de desarrollo regional", lugar: "Arequipa", hora: "4:00 PM" },
        { dia: "22", mes: "ENE", titulo: "Campaña de salud y nutrición", lugar: "Trujillo", hora: "9:00 AM" },
        { dia: "27", mes: "ENE", titulo: "Jornada educativa para todos", lugar: "Chiclayo", hora: "11:00 AM" },
        { dia: "2", mes: "FEB", titulo: "Encuentro de cooperativas locales", lugar: "Cusco", hora: "3:00 PM" },
        { dia: "7", mes: "FEB", titulo: "Taller de participación ciudadana", lugar: "Lima", hora: "5:00 PM" }
      ]
  },
  {
    id: "partido-peru-primero",
    nombre: "Mario Vizcarra",
    partido: "Partido politico Perú p.",
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
      planGobierno: {
        ejesTematicos: [
          "Desarrollo Internacional",
          "Competitividad Nacional",
          "Educación Global",
          "Innovación y Tecnología",
          "Gobernanza Transparente"
        ],
        propuestas: [
          "Impulsar la inserción de Perú en mercados internacionales",
          "Fomentar la competitividad y productividad nacional",
          "Promover la educación con enfoque global y multilingüe",
          "Desarrollar innovación y tecnología en todos los sectores",
          "Garantizar la transparencia y la buena gobernanza",
          "Apoyar a emprendedores y empresas exportadoras",
          "Facilitar acuerdos de cooperación internacional",
          "Modernizar la infraestructura para el desarrollo sostenible"
        ]
      },
      noticias: [
        { titulo: "Perú Primero presenta plan de desarrollo internacional", fuente: "Andina", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Mario Vizcarra: 'La competitividad es clave para el país'", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para educación global y multilingüe", fuente: "RPP", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Innovación y tecnología en sectores productivos", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Gobernanza transparente y eficiente", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Apoyo a empresas exportadoras", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Cooperación internacional para el desarrollo", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "14", mes: "ENE", titulo: "Conferencia internacional", lugar: "Lima", hora: "3:00 PM" },
        { dia: "18", mes: "ENE", titulo: "Foro de competitividad nacional", lugar: "Arequipa", hora: "10:00 AM" },
        { dia: "22", mes: "ENE", titulo: "Jornada de educación global", lugar: "Cusco", hora: "4:00 PM" },
        { dia: "26", mes: "ENE", titulo: "Taller de innovación tecnológica", lugar: "Trujillo", hora: "9:00 AM" },
        { dia: "30", mes: "ENE", titulo: "Seminario de gobernanza transparente", lugar: "Piura", hora: "11:00 AM" },
        { dia: "3", mes: "FEB", titulo: "Expo cooperación internacional", lugar: "Chiclayo", hora: "3:00 PM" }
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
      planGobierno: {
        ejesTematicos: [
          "Seguridad Nacional",
          "Defensa y Soberanía",
          "Patriotismo y Valores",
          "Desarrollo Regional",
          "Participación Ciudadana"
        ],
        propuestas: [
          "Fortalecer la seguridad nacional y la defensa del territorio",
          "Promover el patriotismo y los valores cívicos",
          "Impulsar el desarrollo regional con enfoque en seguridad",
          "Fomentar la participación ciudadana en temas de defensa",
          "Modernizar las Fuerzas Armadas y la Policía Nacional",
          "Apoyar a los veteranos y sus familias",
          "Desarrollar programas de educación cívica y patriótica",
          "Garantizar la soberanía y la integridad nacional"
        ]
      },
      noticias: [
        { titulo: "Partido Patriótico del Perú presenta plan de seguridad nacional", fuente: "El Comercio", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Herbert Caller: 'La defensa y soberanía son prioridad'", fuente: "Gestión", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para fortalecer el patriotismo y valores cívicos", fuente: "RPP", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Desarrollo regional con enfoque en seguridad", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Participación ciudadana en defensa nacional", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Modernización de las Fuerzas Armadas", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Apoyo a veteranos y educación patriótica", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "16", mes: "ENE", titulo: "Reunión con veteranos", lugar: "Callao", hora: "4:00 PM" },
        { dia: "20", mes: "ENE", titulo: "Foro de seguridad nacional", lugar: "Lima", hora: "10:00 AM" },
        { dia: "24", mes: "ENE", titulo: "Jornada de defensa y soberanía", lugar: "Arequipa", hora: "4:00 PM" },
        { dia: "28", mes: "ENE", titulo: "Taller de valores patrióticos", lugar: "Cusco", hora: "9:00 AM" },
        { dia: "1", mes: "FEB", titulo: "Seminario de desarrollo regional", lugar: "Trujillo", hora: "11:00 AM" },
        { dia: "5", mes: "FEB", titulo: "Expo educación cívica y patriótica", lugar: "Piura", hora: "3:00 PM" }
      ]
  },
  {
    id: "peruanos-unidos-somos-libres",
    nombre: "Tomás Aladino Gálvez",
    partido: "Partido politico peruanos u.",
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
      planGobierno: {
        ejesTematicos: [
          "Unidad Nacional",
          "Libertad y Democracia",
          "Identidad Cultural",
          "Participación Ciudadana",
          "Desarrollo Sostenible"
        ],
        propuestas: [
          "Promover la unidad nacional y el respeto a la diversidad",
          "Defender la libertad y la democracia en todos los ámbitos",
          "Fomentar la identidad cultural y el patrimonio histórico",
          "Impulsar la participación ciudadana en la vida política",
          "Desarrollar políticas de desarrollo sostenible e inclusivo",
          "Garantizar derechos y libertades fundamentales",
          "Apoyar la educación cívica y cultural",
          "Fortalecer la memoria histórica y la reconciliación"
        ]
      },
      noticias: [
        { titulo: "Peruanos Unidos – Somos Libres presenta plan de unidad nacional", fuente: "Andina", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Tomás Aladino Gálvez: 'La libertad es nuestro pilar'", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para fortalecer la identidad cultural", fuente: "Gestión", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Participación ciudadana en la vida política", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Desarrollo sostenible e inclusivo", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Educación cívica y cultural para todos", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Memoria histórica y reconciliación nacional", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "17", mes: "ENE", titulo: "Ceremonia cívica", lugar: "Ayacucho", hora: "10:00 AM" },
        { dia: "21", mes: "ENE", titulo: "Foro de libertad y democracia", lugar: "Lima", hora: "10:00 AM" },
        { dia: "25", mes: "ENE", titulo: "Jornada de identidad cultural", lugar: "Cusco", hora: "4:00 PM" },
        { dia: "29", mes: "ENE", titulo: "Taller de participación ciudadana", lugar: "Arequipa", hora: "9:00 AM" },
        { dia: "2", mes: "FEB", titulo: "Seminario de desarrollo sostenible", lugar: "Trujillo", hora: "11:00 AM" },
        { dia: "6", mes: "FEB", titulo: "Expo memoria histórica", lugar: "Piura", hora: "3:00 PM" }
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
      planGobierno: {
        ejesTematicos: [
          "Salud Pública",
          "Bienestar Social",
          "Educación Inclusiva",
          "Participación Ciudadana",
          "Desarrollo Humano"
        ],
        propuestas: [
          "Garantizar el acceso universal a la salud pública de calidad",
          "Desarrollar programas de bienestar social para familias vulnerables",
          "Promover la educación inclusiva y de calidad en todos los niveles",
          "Fomentar la participación ciudadana en políticas de salud y bienestar",
          "Impulsar el desarrollo humano integral en todo el país",
          "Mejorar la infraestructura hospitalaria y de centros de salud",
          "Capacitar y dignificar al personal de salud",
          "Facilitar el acceso a medicamentos esenciales"
        ]
      },
      noticias: [
        { titulo: "Primero la Gente presenta plan de salud pública", fuente: "El Peruano", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Marisol Pérez Tello: 'El bienestar social es prioridad'", fuente: "Gestión", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para educación inclusiva y de calidad", fuente: "RPP", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Participación ciudadana en políticas de salud", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Desarrollo humano integral en regiones", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Mejoras en infraestructura hospitalaria", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Acceso a medicamentos esenciales para todos", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "18", mes: "ENE", titulo: "Campaña de salud gratuita", lugar: "Loreto", hora: "8:00 AM" },
        { dia: "22", mes: "ENE", titulo: "Foro de bienestar social", lugar: "Lima", hora: "10:00 AM" },
        { dia: "26", mes: "ENE", titulo: "Jornada de educación inclusiva", lugar: "Arequipa", hora: "4:00 PM" },
        { dia: "30", mes: "ENE", titulo: "Taller de participación ciudadana", lugar: "Cusco", hora: "9:00 AM" },
        { dia: "3", mes: "FEB", titulo: "Seminario de desarrollo humano", lugar: "Trujillo", hora: "11:00 AM" },
        { dia: "7", mes: "FEB", titulo: "Expo salud y medicamentos", lugar: "Piura", hora: "3:00 PM" }
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
      planGobierno: {
        ejesTematicos: [
          "Cooperativismo",
          "Economía Social",
          "Desarrollo Regional",
          "Participación Ciudadana",
          "Inclusión Financiera"
        ],
        propuestas: [
          "Impulsar el cooperativismo como motor de desarrollo económico",
          "Fomentar la economía social y solidaria en todo el país",
          "Desarrollar programas de inclusión financiera para zonas rurales",
          "Promover la participación ciudadana en la gestión económica",
          "Apoyar la creación de nuevas cooperativas y asociaciones",
          "Capacitar a líderes cooperativistas y emprendedores",
          "Facilitar el acceso a créditos y servicios financieros",
          "Fortalecer la integración regional a través de redes cooperativas"
        ]
      },
      noticias: [
        { titulo: "Cooperación Popular presenta plan de economía social", fuente: "Gestión", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Yonhy Lescano: 'El cooperativismo es el futuro'", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para desarrollo regional cooperativo", fuente: "RPP", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Inclusión financiera en zonas rurales", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Participación ciudadana en la economía social", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Capacitación para líderes cooperativistas", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Redes cooperativas para integración regional", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "19", mes: "ENE", titulo: "Encuentro de cooperativas", lugar: "Tacna", hora: "9:00 AM" },
        { dia: "23", mes: "ENE", titulo: "Foro de economía social", lugar: "Lima", hora: "10:00 AM" },
        { dia: "27", mes: "ENE", titulo: "Jornada de desarrollo regional", lugar: "Arequipa", hora: "4:00 PM" },
        { dia: "31", mes: "ENE", titulo: "Taller de inclusión financiera", lugar: "Cusco", hora: "9:00 AM" },
        { dia: "4", mes: "FEB", titulo: "Seminario de participación ciudadana", lugar: "Trujillo", hora: "11:00 AM" },
        { dia: "8", mes: "FEB", titulo: "Expo redes cooperativas", lugar: "Piura", hora: "3:00 PM" }
      ]
  },
  {
    id: "voces-del-pueblo",
    nombre: "Gillermo Bermejo",
    partido: "Partido P. P. V. del pueblo",
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
      planGobierno: {
        ejesTematicos: [
          "Participación Popular",
          "Justicia Social",
          "Descentralización",
          "Inclusión Ciudadana",
          "Desarrollo Comunitario"
        ],
        propuestas: [
          "Fomentar la participación popular en la toma de decisiones",
          "Promover la justicia social y la equidad",
          "Descentralizar la gestión pública para fortalecer regiones",
          "Impulsar la inclusión ciudadana en políticas públicas",
          "Desarrollar proyectos de desarrollo comunitario sostenible",
          "Apoyar a líderes vecinales y organizaciones sociales",
          "Facilitar el acceso a servicios básicos en zonas vulnerables",
          "Crear espacios de diálogo y concertación popular"
        ]
      },
      noticias: [
        { titulo: "Voces del Pueblo presenta plan de participación popular", fuente: "La República", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Gillermo Bermejo: 'La justicia social es nuestro eje'", fuente: "Gestión", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para descentralización y desarrollo comunitario", fuente: "RPP", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Inclusión ciudadana en políticas públicas", fuente: "El Comercio", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Apoyo a líderes vecinales y sociales", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Acceso a servicios básicos en zonas vulnerables", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Diálogo y concertación popular", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "20", mes: "ENE", titulo: "Asamblea popular", lugar: "Chiclayo", hora: "5:00 PM" },
        { dia: "24", mes: "ENE", titulo: "Foro de justicia social", lugar: "Lima", hora: "10:00 AM" },
        { dia: "28", mes: "ENE", titulo: "Jornada de descentralización", lugar: "Arequipa", hora: "4:00 PM" },
        { dia: "1", mes: "FEB", titulo: "Taller de inclusión ciudadana", lugar: "Cusco", hora: "9:00 AM" },
        { dia: "5", mes: "FEB", titulo: "Seminario de desarrollo comunitario", lugar: "Trujillo", hora: "11:00 AM" },
        { dia: "9", mes: "FEB", titulo: "Expo diálogo popular", lugar: "Piura", hora: "3:00 PM" }
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
      planGobierno: {
        ejesTematicos: [
          "Progreso Regional",
          "Gestión Pública Eficiente",
          "Desarrollo Social",
          "Participación Ciudadana",
          "Innovación Local"
        ],
        propuestas: [
          "Impulsar el progreso en todas las regiones del país",
          "Modernizar la gestión pública con procesos eficientes",
          "Desarrollar programas de desarrollo social inclusivo",
          "Fomentar la participación ciudadana en la gestión local",
          "Apoyar la innovación y el emprendimiento regional",
          "Facilitar el acceso a servicios públicos de calidad",
          "Capacitar a funcionarios y líderes locales",
          "Promover alianzas público-privadas para el desarrollo"
        ]
      },
      noticias: [
        { titulo: "Progresemos presenta plan de progreso regional", fuente: "RPP", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Paul Jaimes: 'La gestión pública debe ser eficiente'", fuente: "Gestión", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para desarrollo social inclusivo", fuente: "El Comercio", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Participación ciudadana en la gestión local", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Innovación y emprendimiento regional", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Capacitación para funcionarios locales", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Alianzas público-privadas para el desarrollo", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "21", mes: "ENE", titulo: "Recorrido por distritos", lugar: "Huánuco", hora: "8:00 AM" },
        { dia: "25", mes: "ENE", titulo: "Foro de gestión pública eficiente", lugar: "Lima", hora: "10:00 AM" },
        { dia: "29", mes: "ENE", titulo: "Jornada de desarrollo social", lugar: "Arequipa", hora: "4:00 PM" },
        { dia: "2", mes: "FEB", titulo: "Taller de participación ciudadana", lugar: "Cusco", hora: "9:00 AM" },
        { dia: "6", mes: "FEB", titulo: "Seminario de innovación local", lugar: "Trujillo", hora: "11:00 AM" },
        { dia: "10", mes: "FEB", titulo: "Expo alianzas público-privadas", lugar: "Piura", hora: "3:00 PM" }
      ]
  },
  {
    id: "fuerza-moderna",
    nombre: "Andrés Alcántara",
    partido: "Partido politico fuerza moderna",
    foto: "/logos/fuerza-moderna.png",
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
      planGobierno: {
        ejesTematicos: [
          "Reforma Política",
          "Justicia y Legalidad",
          "Participación Democrática",
          "Descentralización",
          "Transparencia"
        ],
        propuestas: [
          "Impulsar una reforma política integral y moderna",
          "Fortalecer la justicia y el respeto a la legalidad",
          "Fomentar la participación democrática en todos los niveles",
          "Descentralizar la gestión pública para fortalecer regiones",
          "Promover la transparencia y el acceso a la información",
          "Capacitar a líderes y funcionarios en ética pública",
          "Modernizar el sistema electoral y de partidos",
          "Garantizar derechos y libertades fundamentales"
        ]
      },
      noticias: [
        { titulo: "PRIN presenta plan de reforma política", fuente: "El Comercio", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Walter Chirinos: 'La justicia y legalidad son ejes centrales'", fuente: "Gestión", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para participación democrática y descentralización", fuente: "RPP", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Transparencia y acceso a la información pública", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Capacitación en ética pública para funcionarios", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Modernización del sistema electoral y de partidos", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Garantía de derechos y libertades fundamentales", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "23", mes: "ENE", titulo: "Conferencia legal", lugar: "Arequipa", hora: "11:00 AM" },
        { dia: "27", mes: "ENE", titulo: "Foro de reforma política", lugar: "Lima", hora: "10:00 AM" },
        { dia: "31", mes: "ENE", titulo: "Jornada de justicia y legalidad", lugar: "Cusco", hora: "4:00 PM" },
        { dia: "4", mes: "FEB", titulo: "Taller de participación democrática", lugar: "Trujillo", hora: "9:00 AM" },
        { dia: "8", mes: "FEB", titulo: "Seminario de descentralización", lugar: "Piura", hora: "11:00 AM" },
        { dia: "12", mes: "FEB", titulo: "Expo transparencia y derechos", lugar: "Chiclayo", hora: "3:00 PM" }
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
      planGobierno: {
        ejesTematicos: [
          "Integridad y Transparencia",
          "Seguridad Ciudadana",
          "Desarrollo Social",
          "Modernización del Estado",
          "Participación Ciudadana"
        ],
        propuestas: [
          "Implementar políticas de transparencia y lucha contra la corrupción en todos los niveles del Estado",
          "Reforzar la seguridad ciudadana con tecnología y participación vecinal",
          "Impulsar programas de desarrollo social para reducir la desigualdad",
          "Modernizar la gestión pública con enfoque digital y eficiente",
          "Fomentar la participación ciudadana en la toma de decisiones",
          "Promover la educación en valores y civismo",
          "Apoyar a las familias vulnerables con programas integrales",
          "Garantizar la igualdad de oportunidades para todos los peruanos"
        ]
      },
      noticias: [
        { titulo: "Wolfgang Grozo lanza plan de integridad nacional", fuente: "El Comercio", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para una gestión pública transparente", fuente: "Gestión", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Seguridad ciudadana con tecnología", fuente: "Perú21", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Modernización del Estado: propuestas clave", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Participación ciudadana en la democracia", fuente: "Andina", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Desarrollo social para todos", fuente: "Exitosa", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Educación en valores y civismo", fuente: "RPP", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "25", mes: "ENE", titulo: "Reunión con empresarios", lugar: "Lima", hora: "6:00 PM" },
        { dia: "29", mes: "ENE", titulo: "Foro de integridad y transparencia", lugar: "San Isidro", hora: "10:00 AM" },
        { dia: "2", mes: "FEB", titulo: "Encuentro de seguridad ciudadana", lugar: "Miraflores", hora: "4:00 PM" },
        { dia: "6", mes: "FEB", titulo: "Jornada de desarrollo social", lugar: "Villa El Salvador", hora: "9:00 AM" },
        { dia: "10", mes: "FEB", titulo: "Seminario de modernización estatal", lugar: "Centro de Convenciones", hora: "11:00 AM" },
        { dia: "14", mes: "FEB", titulo: "Expo participación ciudadana", lugar: "Chorrillos", hora: "3:00 PM" }
      ]
  },
  {
    id: "partido-popular-cristiano",
    nombre: "Roberto Chiabra",
    partido: "Partido popular c. PPC",
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
      planGobierno: {
        ejesTematicos: [
          "Valores Cristianos",
          "Democracia y Justicia",
          "Desarrollo Humano",
          "Solidaridad Social",
          "Participación Ciudadana"
        ],
        propuestas: [
          "Promover políticas públicas basadas en valores cristianos",
          "Fortalecer la democracia y el acceso a la justicia",
          "Impulsar el desarrollo humano integral",
          "Fomentar la solidaridad y la inclusión social",
          "Garantizar la participación ciudadana en la vida política",
          "Apoyar a las familias y comunidades vulnerables",
          "Desarrollar programas de educación en valores",
          "Modernizar la gestión pública con ética y transparencia"
        ]
      },
      noticias: [
        { titulo: "PPC presenta plan basado en valores cristianos", fuente: "El Comercio", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Roberto Chiabra: 'La democracia y justicia son ejes centrales'", fuente: "Gestión", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para desarrollo humano integral", fuente: "RPP", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Solidaridad social e inclusión en el PPC", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Participación ciudadana en la vida política", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Educación en valores y ética pública", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Gestión pública moderna y transparente", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "26", mes: "ENE", titulo: "Asamblea nacional PPC", lugar: "Lima", hora: "4:00 PM" },
        { dia: "30", mes: "ENE", titulo: "Foro de democracia y justicia", lugar: "Arequipa", hora: "10:00 AM" },
        { dia: "3", mes: "FEB", titulo: "Jornada de desarrollo humano", lugar: "Cusco", hora: "4:00 PM" },
        { dia: "7", mes: "FEB", titulo: "Taller de solidaridad social", lugar: "Trujillo", hora: "9:00 AM" },
        { dia: "11", mes: "FEB", titulo: "Seminario de participación ciudadana", lugar: "Piura", hora: "11:00 AM" },
        { dia: "15", mes: "FEB", titulo: "Expo ética y transparencia", lugar: "Chiclayo", hora: "3:00 PM" }
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
      planGobierno: {
        ejesTematicos: [
          "Rescate Nacional",
          "Solidaridad y Unidad",
          "Desarrollo Económico",
          "Participación Ciudadana",
          "Justicia Social"
        ],
        propuestas: [
          "Implementar un plan de rescate nacional para enfrentar crisis",
          "Fomentar la solidaridad y la unidad entre peruanos",
          "Impulsar el desarrollo económico con enfoque social",
          "Promover la participación ciudadana en la reconstrucción nacional",
          "Garantizar justicia social y equidad en el acceso a servicios",
          "Apoyar a sectores vulnerables y afectados por emergencias",
          "Desarrollar infraestructura para la reactivación económica",
          "Fortalecer la transparencia y la rendición de cuentas"
        ]
      },
      noticias: [
        { titulo: "Salvemos al Perú presenta plan de rescate nacional", fuente: "RPP", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Mariano González: 'La solidaridad es clave para la reconstrucción'", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para desarrollo económico y justicia social", fuente: "Gestión", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Participación ciudadana en la reconstrucción nacional", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Apoyo a sectores vulnerables y afectados", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Infraestructura para la reactivación económica", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Transparencia y rendición de cuentas en la gestión", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "27", mes: "ENE", titulo: "Campaña de movilización", lugar: "Lima", hora: "6:00 PM" },
        { dia: "31", mes: "ENE", titulo: "Foro de solidaridad y unidad", lugar: "Arequipa", hora: "10:00 AM" },
        { dia: "4", mes: "FEB", titulo: "Jornada de desarrollo económico", lugar: "Cusco", hora: "4:00 PM" },
        { dia: "8", mes: "FEB", titulo: "Taller de participación ciudadana", lugar: "Trujillo", hora: "9:00 AM" },
        { dia: "12", mes: "FEB", titulo: "Seminario de justicia social", lugar: "Piura", hora: "11:00 AM" },
        { dia: "16", mes: "FEB", titulo: "Expo transparencia y reconstrucción", lugar: "Chiclayo", hora: "3:00 PM" }
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
      planGobierno: {
        ejesTematicos: [
          "Fe y Valores",
          "Familia y Sociedad",
          "Justicia Social",
          "Educación en Valores",
          "Participación Ciudadana"
        ],
        propuestas: [
          "Promover políticas públicas basadas en la fe y los valores cristianos",
          "Fortalecer la familia como base de la sociedad",
          "Impulsar la justicia social y la solidaridad",
          "Fomentar la educación en valores en todos los niveles",
          "Garantizar la participación ciudadana en la vida política",
          "Apoyar a comunidades vulnerables y en riesgo social",
          "Desarrollar programas de prevención y apoyo social",
          "Modernizar la gestión pública con ética y transparencia"
        ]
      },
      noticias: [
        { titulo: "Sí Creo presenta plan basado en fe y valores", fuente: "ACI Prensa", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Carlos Espá: 'La familia es el pilar de la sociedad'", fuente: "El Comercio", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para justicia social y solidaridad", fuente: "Gestión", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Educación en valores para todos", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Participación ciudadana y ética pública", fuente: "Perú21", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Apoyo a comunidades vulnerables", fuente: "Andina", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Transparencia y prevención social", fuente: "Exitosa", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "29", mes: "ENE", titulo: "Convención nacional", lugar: "Lima", hora: "9:00 AM" },
        { dia: "2", mes: "FEB", titulo: "Foro de familia y sociedad", lugar: "Arequipa", hora: "10:00 AM" },
        { dia: "6", mes: "FEB", titulo: "Jornada de justicia social", lugar: "Cusco", hora: "4:00 PM" },
        { dia: "10", mes: "FEB", titulo: "Taller de educación en valores", lugar: "Trujillo", hora: "9:00 AM" },
        { dia: "14", mes: "FEB", titulo: "Seminario de participación ciudadana", lugar: "Piura", hora: "11:00 AM" },
        { dia: "18", mes: "FEB", titulo: "Expo ética y prevención social", lugar: "Chiclayo", hora: "3:00 PM" }
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
      planGobierno: {
        ejesTematicos: [
          "Innovación Social",
          "Educación Transformadora",
          "Desarrollo Humano",
          "Participación Ciudadana",
          "Sostenibilidad"
        ],
        propuestas: [
          "Fomentar la innovación social para resolver problemas estructurales",
          "Impulsar una educación transformadora y crítica",
          "Promover el desarrollo humano integral",
          "Garantizar la participación ciudadana en la toma de decisiones",
          "Desarrollar políticas de sostenibilidad ambiental y social",
          "Apoyar a los jóvenes emprendedores y creativos",
          "Fortalecer la cultura democrática y el diálogo",
          "Modernizar la gestión pública con enfoque humano"
        ]
      },
      noticias: [
        { titulo: "Rosario Fernández presenta visión de un camino diferente", fuente: "El Comercio", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Innovación social como motor de cambio", fuente: "Gestión", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Educación transformadora para el Perú", fuente: "Perú21", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Participación ciudadana y democracia", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Desarrollo humano y sostenibilidad", fuente: "Andina", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Juventud y emprendimiento social", fuente: "Exitosa", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Gestión pública con enfoque humano", fuente: "RPP", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "30", mes: "ENE", titulo: "Presentación de libro", lugar: "Lima", hora: "7:00 PM" },
        { dia: "2", mes: "FEB", titulo: "Foro de innovación social", lugar: "Arequipa", hora: "10:00 AM" },
        { dia: "6", mes: "FEB", titulo: "Jornada de educación transformadora", lugar: "Cusco", hora: "4:00 PM" },
        { dia: "10", mes: "FEB", titulo: "Taller de desarrollo humano", lugar: "Trujillo", hora: "9:00 AM" },
        { dia: "14", mes: "FEB", titulo: "Seminario de participación ciudadana", lugar: "Piura", hora: "11:00 AM" },
        { dia: "18", mes: "FEB", titulo: "Expo sostenibilidad y futuro", lugar: "Chiclayo", hora: "3:00 PM" }
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
      planGobierno: {
        ejesTematicos: [
          "Unidad Nacional",
          "Paz Social",
          "Desarrollo Inclusivo",
          "Resolución de Conflictos",
          "Participación Democrática"
        ],
        propuestas: [
          "Promover la unidad nacional y la reconciliación",
          "Fomentar la paz social y la convivencia ciudadana",
          "Impulsar el desarrollo inclusivo y equitativo",
          "Implementar mecanismos de resolución de conflictos a nivel nacional",
          "Garantizar la participación democrática de todos los sectores",
          "Apoyar a comunidades vulnerables y en riesgo social",
          "Desarrollar programas de diálogo y mediación",
          "Modernizar la gestión pública con enfoque de paz y equidad"
        ]
      },
      noticias: [
        { titulo: "Roberto Chiabra impulsa unidad nacional", fuente: "El Comercio", fecha: "Hace 1 día", imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Propuestas para la paz social en el Perú", fuente: "Gestión", fecha: "Hace 2 días", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Desarrollo inclusivo y equidad", fuente: "Perú21", fecha: "Hace 3 días", imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop", destacada: true },
        { titulo: "Resolución de conflictos: experiencias exitosas", fuente: "La República", fecha: "Hace 4 días", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&h=400&fit=crop" },
        { titulo: "Participación democrática y diálogo social", fuente: "Andina", fecha: "Hace 5 días", imagen: "https://images.unsplash.com/photo-1465808883808-8a8b1b6b43a5?w=600&h=400&fit=crop" },
        { titulo: "Comunidades vulnerables reciben apoyo", fuente: "Exitosa", fecha: "Hace 6 días", imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=600&h=400&fit=crop" },
        { titulo: "Gestión pública con enfoque de paz", fuente: "RPP", fecha: "Hace 1 semana", imagen: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop" }
      ],
      actividades: [
        { dia: "31", mes: "ENE", titulo: "Foro de diálogo nacional", lugar: "Lima", hora: "5:00 PM" },
        { dia: "3", mes: "FEB", titulo: "Jornada de paz social", lugar: "Arequipa", hora: "10:00 AM" },
        { dia: "7", mes: "FEB", titulo: "Encuentro de desarrollo inclusivo", lugar: "Cusco", hora: "4:00 PM" },
        { dia: "11", mes: "FEB", titulo: "Taller de resolución de conflictos", lugar: "Trujillo", hora: "9:00 AM" },
        { dia: "15", mes: "FEB", titulo: "Seminario de participación democrática", lugar: "Piura", hora: "11:00 AM" },
        { dia: "19", mes: "FEB", titulo: "Expo unidad y equidad", lugar: "Chiclayo", hora: "3:00 PM" }
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
