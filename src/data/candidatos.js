// Datos de candidatos para las elecciones Perú 2026

export const candidatos = [
  {
    id: "fuerza-popular",
    nombre: "Keiko Fujimori",
    partido: "Fuerza Popular",
    foto: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Keiko_Fujimori_2.jpg",
    logoPartido: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Fuerza_popular.svg/1024px-Fuerza_popular.svg.png",
    cargo: "Candidata a la Presidencia",
    redesSociales: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      tiktok: "#"
    },
    hojaDeVida: {
      formacionAcademica: [
        "Maestría en Administración, Columbia University",
        "Bachiller en Administración, Boston University"
      ],
      experienciaLaboral: [
        "Congresista de la República (2006-2011, 2016-2019)",
        "Candidata presidencial (2011, 2016, 2021)"
      ],
      declaracionesJuradas: "Disponible en el portal del JNE",
      sentenciasJudiciales: "Información disponible en registros judiciales"
    },
    trayectoria: [
      {
        fecha: "2021",
        descripcion: "Segunda vuelta electoral presidencial"
      },
      {
        fecha: "2016",
        descripcion: "Candidata presidencial - Segunda vuelta"
      },
      {
        fecha: "2011",
        descripcion: "Primera candidatura presidencial"
      }
    ],
    noticias: [
      {
        titulo: "Keiko Fujimori presenta propuestas económicas",
        fuente: "El Comercio",
        fecha: "Hace 1 semana",
        imagen: "https://via.placeholder.com/150/991b1b/FFFFFF?text=Noticia"
      }
    ],
    actividades: [
      {
        dia: "20",
        mes: "DIC",
        titulo: "Reunión con empresarios",
        lugar: "Lima",
        hora: "10:00 AM"
      }
    ]
  },
  {
    id: "renovacion-popular",
    nombre: "Rafael López Aliaga",
    partido: "Renovación Popular",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    logoPartido: "https://images.unsplash.com/photo-1620207318537-2d0eb05d0032?w=150&h=150&fit=crop",
    cargo: "Candidato a la Presidencia",
    redesSociales: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      tiktok: "#"
    },
    hojaDeVida: {
      formacionAcademica: [],
      experienciaLaboral: [],
      declaracionesJuradas: "",
      sentenciasJudiciales: ""
    },
    trayectoria: [],
    noticias: [],
    actividades: []
  },
  {
    id: "alianza-progreso",
    nombre: "César Acuña",
    partido: "Alianza para el Progreso",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    logoPartido: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=150&h=150&fit=crop",
    cargo: "Candidato a la Presidencia",
    redesSociales: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      tiktok: "#"
    },
    hojaDeVida: {
      formacionAcademica: [],
      experienciaLaboral: [],
      declaracionesJuradas: "",
      sentenciasJudiciales: ""
    },
    trayectoria: [],
    noticias: [],
    actividades: []
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
