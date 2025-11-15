export interface Candidato {
  id: string;
  nombre: string;
  partido: string;
  foto: string;
  logoPartido: string;
  cargo: string;
  redesSociales: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    tiktok?: string;
  };
  hojaDeVida: {
    formacionAcademica: string[];
    experienciaLaboral: string[];
    declaracionesJuradas: string;
    sentenciasJudiciales: string;
  };
  trayectoria: {
    fecha: string;
    descripcion: string;
  }[];
  noticias: {
    titulo: string;
    fuente: string;
    fecha: string;
    imagen: string;
  }[];
  actividades: {
    dia: string;
    mes: string;
    titulo: string;
    lugar: string;
    hora: string;
  }[];
}

export const candidatos: Candidato[] = [
  {
    id: "accion-popular",
    nombre: "",
    partido: "ACCIÓN POPULAR",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "fuerza-popular",
    nombre: "Keiko Fujimori",
    partido: "Fuerza Popular",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
    cargo: "Candidata a la Presidencia",
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
    id: "pte-peru",
    nombre: "",
    partido: "Partido de los trabajadores PTE-Perú",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "ahora-nacion",
    nombre: "",
    partido: "Ahora Nacion AN",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "juntos-por-el-peru",
    nombre: "",
    partido: "Juntos por el Perú",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "buen-gobierno",
    nombre: "",
    partido: "Partido del buen gobierno",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    nombre: "",
    partido: "Alianza para el progreso",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "libertad-popular",
    nombre: "",
    partido: "Libertad popular",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "democrata-unido",
    nombre: "",
    partido: "Partido Democrata Unido Perú",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "avanza-pais",
    nombre: "",
    partido: "Avanza Pais",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "nuevo-peru",
    nombre: "",
    partido: "Nuevo Perú por el buen vivir",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "democrata-verde",
    nombre: "",
    partido: "Partido Democrata Verde",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "batalla-peru",
    nombre: "",
    partido: "Batalla Perú",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "aprista",
    nombre: "",
    partido: "Partido Aprista peruano",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "democrata-federal",
    nombre: "",
    partido: "Partido democratico federal",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "fe-en-el-peru",
    nombre: "",
    partido: "Fe en el Perú",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "ciudadanos-por-el-peru",
    nombre: "",
    partido: "Partido ciudadanos por el Perú",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "somos-peru",
    nombre: "",
    partido: "Partido democratico somos Perú",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "frepap",
    nombre: "",
    partido: "Frente popular agricola FIA del Perú",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "civico-obras",
    nombre: "",
    partido: "Partido Civico obras",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "frente-esperanza",
    nombre: "",
    partido: "Partido frente de la esperanza 2021",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "morado",
    nombre: "",
    partido: "Partido Morado",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "peru-accion",
    nombre: "",
    partido: "Partido Politico Perú Accion",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "peru-moderno",
    nombre: "",
    partido: "Perú moderno",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "pais-para-todos",
    nombre: "",
    partido: "Partido Pais para todos",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "peru-primero",
    nombre: "",
    partido: "Partido politico Perú primero",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "podemos-peru",
    nombre: "",
    partido: "Podemos Perú",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "patriotico",
    nombre: "",
    partido: "Partido patriotico del Perú",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "peruanos-unidos",
    nombre: "",
    partido: "Partido politico peruanos unidos ¡Somos libres!",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "primero-la-gente",
    nombre: "",
    partido: "Primero la gente",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "cooperacion-popular",
    nombre: "",
    partido: "Partido politico cooperacion popular",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "voces-del-pueblo",
    nombre: "",
    partido: "Partido politico popular voces del pueblo",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "progresemos",
    nombre: "",
    partido: "Progresemos",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "fuerza-moderna",
    nombre: "",
    partido: "Partido politico fuerza moderna",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "prin",
    nombre: "",
    partido: "Partido politico PRIN",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "renovacion-popular",
    nombre: "",
    partido: "Renovacion popular",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "integridad-democratica",
    nombre: "",
    partido: "Partido politico integridad Democratica",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "ppc",
    nombre: "",
    partido: "Partido popular cristiano PPC",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "salvemos-al-peru",
    nombre: "",
    partido: "Salvemos al Perú",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "peru-libre",
    nombre: "",
    partido: "Partido politico nacional Perú libre",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "si-creo",
    nombre: "",
    partido: "Partido Si creo",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "camino-diferente",
    nombre: "",
    partido: "Un camino diferente",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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
    id: "unidad-y-paz",
    nombre: "",
    partido: "Partido Unidad y Paz",
    foto: "https://via.placeholder.com/150",
    logoPartido: "https://via.placeholder.com/50",
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

export const getCandidatoById = (id: string): Candidato | undefined => {
  return candidatos.find(candidato => candidato.id === id);
};

export const getCandidatoByPartido = (partido: string): Candidato | undefined => {
  return candidatos.find(candidato => 
    candidato.partido.toLowerCase() === partido.toLowerCase()
  );
};
