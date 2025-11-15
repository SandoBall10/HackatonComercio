export interface DetalleCandidato {
  id: string;
  nombre: string;
  cargo?: string;
  foto?: string;
}

export interface Partido {s
  id: string;
  nombre: string;
  siglas?: string;
  logo?: string;
  descripcion?: string;
  lider?: string;
  planUrl?: string;
  website?: string;
  candidatos?: DetalleCandidato[];
}

export const PARTIDOS: Partido[] = [
  { 
    id: "accion-popular", 
    nombre: "Acción Popular", 
    siglas: "AP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Acci%C3%B3n_Popular.svg/1200px-Acci%C3%B3n_Popular.svg.png", 
    lider: "Fernando Belaúnde Terry", 
    descripcion: "Partido histórico con presencia parlamentaria. Revisar Plataforma Electoral del JNE para plan.", 
    candidatos: [
      { id: "ap-1", nombre: "Candidato Presidente AP", cargo: "Presidente", foto: "https://accionpopular.com.pe/wp-content/uploads/2025/01/chavez-abraham.png" },
      { id: "ap-2", nombre: "Candidato Vicepresidente AP", cargo: "Vicepresidente" },
      { id: "ap-3", nombre: "Candidato 3 AP", cargo: "Candidato" }
    ] 
  },
  { 
    id: "fuerza-popular", 
    nombre: "Fuerza Popular", 
    siglas: "FP",
    logo: "/logos/fuerza-popular.png", 
    lider: "Keiko Fujimori", 
    descripcion: "Consultar plan oficial en la Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "fp-1", nombre: "Keiko Fujimori", cargo: "Presidente" },
      { id: "fp-2", nombre: "Candidato Vicepresidente FP", cargo: "Vicepresidente" },
      { id: "fp-3", nombre: "Candidato 3 FP", cargo: "Candidato" }
    ] 
  },
  { 
    id: "partido-de-los-trabajadores-pte-peru", 
    nombre: "Partido de los Trabajadores PTE-Perú", 
    siglas: "PTE", 
    logo: "/logos/partido-de-los-trabajadores-pte-peru.png", 
    lider: "Napoleón Becerra García", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "pte-1", nombre: "Napoleón Becerra García", cargo: "Presidente" }, 
      { id: "pte-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "pte-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "ahora-nacion", 
    nombre: "Ahora Nación (AN)", 
    siglas: "AN", 
    logo: "/logos/ahora-nacion.png", 
    lider: "Alfonso López Chau Pastor", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "an-1", nombre: "Alfonso López Chau Pastor", cargo: "Presidente" }, 
      { id: "an-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "an-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "juntos-por-el-peru", 
    nombre: "Juntos por el Perú", 
    siglas: "JP", 
    logo: "/logos/juntos-por-el-peru.png", 
    lider: "Yehude Simon", 
    descripcion: "Consultar documentación partidaria y Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "jp-1", nombre: "Yehude Simon", cargo: "Presidente" }, 
      { id: "jp-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "jp-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "partido-del-buen-gobierno", 
    nombre: "Partido del Buen Gobierno", 
    siglas: "PBG", 
    logo: "/logos/partido-del-buen-gobierno.png", 
    lider: "Jorge Nieto Montesinos", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "pbg-1", nombre: "Jorge Nieto Montesinos", cargo: "Presidente" }, 
      { id: "pbg-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "pbg-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "alianza-para-el-progreso", 
    nombre: "Alianza para el Progreso (APP)", 
    siglas: "APP", 
    logo: "/logos/alianza-para-el-progreso.png", 
    lider: "César Acuña Peralta", 
    descripcion: "Consultar plan en la web del partido y Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "app-1", nombre: "César Acuña Peralta", cargo: "Presidente" }, 
      { id: "app-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "app-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "libertad-popular", 
    nombre: "Libertad Popular", 
    siglas: "LP", 
    logo: "/logos/libertad-popular.png", 
    lider: "Rafael Belaúnde Llosa", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "lp-1", nombre: "Rafael Belaúnde Llosa", cargo: "Presidente" }, 
      { id: "lp-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "lp-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "partido-democrata-unido-peru", 
    nombre: "Partido Demócrata Unido Perú", 
    siglas: "PDUP", 
    logo: "/logos/partido-democrata-unido-peru.png", 
    lider: "Charlie Carrasco Salazar", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "pdup-1", nombre: "Charlie Carrasco Salazar", cargo: "Presidente" }, 
      { id: "pdup-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "pdup-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "avanza-pais", 
    nombre: "Avanza País", 
    siglas: "AVP", 
    logo: "/logos/avanza-pais.png", 
    lider: "Norma Yarrow Lumbreras", 
    descripcion: "Consultar Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "avp-1", nombre: "Norma Yarrow Lumbreras", cargo: "Presidente" }, 
      { id: "avp-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "avp-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "nuevo-peru-por-el-buen-vivir", 
    nombre: "Nuevo Perú por el Buen Vivir", 
    siglas: "NPBV", 
    logo: "/logos/nuevo-peru-por-el-buen-vivir.png", 
    lider: "Vicente Alanoca", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "npbv-1", nombre: "Vicente Alanoca", cargo: "Presidente" }, 
      { id: "npbv-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "npbv-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "partido-democrata-verde", 
    nombre: "Partido Demócrata Verde", 
    siglas: "PDV", 
    logo: "/logos/partido-democrata-verde.png", 
    lider: "Alex Gonzales", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "pdv-1", nombre: "Alex Gonzales", cargo: "Presidente" }, 
      { id: "pdv-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "pdv-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "batalla-peru", 
    nombre: "Batalla Perú", 
    siglas: "BP", 
    logo: "/logos/batalla-peru.png", 
    lider: "Zósimo Cárdenas", 
    descripcion: "Consultar Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "bp-1", nombre: "Zósimo Cárdenas", cargo: "Presidente" }, 
      { id: "bp-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "bp-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "partido-aprista-peruano", 
    nombre: "Partido Aprista Peruano (APRA)", 
    siglas: "PAP", 
    logo: "/logos/partido-aprista-peruano.png", 
    lider: "Alan García Pérez", 
    descripcion: "Revisar documentos históricos y Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "pap-1", nombre: "Candidato Presidente APRA", cargo: "Presidente" }, 
      { id: "pap-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "pap-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "partido-democratico-federal", 
    nombre: "Partido Democrático Federal", 
    siglas: "PDF", 
    logo: "/logos/partido-democratico-federal.png", 
    lider: "Virgilio Acuña", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "pdf-1", nombre: "Virgilio Acuña", cargo: "Presidente" }, 
      { id: "pdf-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "pdf-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "fe-en-el-peru", 
    nombre: "Fe en el Perú", 
    siglas: "FEP", 
    logo: "/logos/fe-en-el-peru.png", 
    lider: "Álvaro Gonzalo Paz de la Barra Freigeiro", 
    descripcion: "Consultar Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "fep-1", nombre: "Álvaro Gonzalo Paz de la Barra", cargo: "Presidente" }, 
      { id: "fep-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "fep-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "ciudadanos-por-el-peru", 
    nombre: "Partido Ciudadanos por el Perú", 
    siglas: "CPP", 
    logo: "/logos/ciudadanos-por-el-peru.png", 
    lider: "Dina Boluarte", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "cpp-1", nombre: "Dina Boluarte", cargo: "Presidente" }, 
      { id: "cpp-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "cpp-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "somos-peru", 
    nombre: "Partido Democrático Somos Perú", 
    siglas: "SP", 
    logo: "/logos/somos-peru.png", 
    lider: "José Jerí", 
    descripcion: "Consultar Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "sp-1", nombre: "José Jerí", cargo: "Presidente" }, 
      { id: "sp-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "sp-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "frepap", 
    nombre: "FREPAP", 
    siglas: "FREPAP", 
    logo: "/logos/frepap.png", 
    lider: "Jonas Ataucusi Molina", 
    descripcion: "Partido con presencia parlamentaria en periodos recientes. Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "frep-1", nombre: "Jonas Ataucusi Molina", cargo: "Presidente" }, 
      { id: "frep-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "frep-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "partido-civico-obras", 
    nombre: "Partido Cívico Obras", 
    siglas: "PCO", 
    logo: "/logos/partido-civico-obras.png", 
    descripcion: "Líder no especificado en este resumen. Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "pco-1", nombre: "Candidato Presidente", cargo: "Presidente" }, 
      { id: "pco-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "pco-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "frente-de-la-esperanza-2021", 
    nombre: "Frente de la Esperanza 2021", 
    siglas: "FE21", 
    logo: "/logos/frente-de-la-esperanza-2021.png", 
    lider: "Ricardo Belmont Cassinelli", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "fe21-1", nombre: "Ricardo Belmont Cassinelli", cargo: "Presidente" }, 
      { id: "fe21-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "fe21-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "partido-morado", 
    nombre: "Partido Morado", 
    siglas: "PM", 
    logo: "/logos/partido-morado.png", 
    lider: "Luis Durán Rojo", 
    descripcion: "Consultar Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "pm-1", nombre: "Luis Durán Rojo", cargo: "Presidente" }, 
      { id: "pm-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "pm-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "peru-accion", 
    nombre: "Partido Político Perú Acción", 
    siglas: "PPA", 
    logo: "/logos/peru-accion.png", 
    lider: "Francisco Diez Canseco Távara", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "ppa-1", nombre: "Francisco Diez Canseco", cargo: "Presidente" }, 
      { id: "ppa-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "ppa-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "peru-moderno", 
    nombre: "Perú Moderno", 
    siglas: "PMOD", 
    logo: "/logos/peru-moderno.png", 
    lider: "Carlos Anderson", 
    descripcion: "Consultar Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "pmod-1", nombre: "Carlos Anderson", cargo: "Presidente" }, 
      { id: "pmod-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "pmod-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "pais-para-todos", 
    nombre: "Partido País para Todos", 
    siglas: "PPT", 
    logo: "/logos/pais-para-todos.png", 
    lider: "Vladimir Meza Villarreal", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "ppt-1", nombre: "Vladimir Meza Villarreal", cargo: "Presidente" }, 
      { id: "ppt-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "ppt-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "peru-primero", 
    nombre: "Partido Político Perú Primero", 
    siglas: "PPP", 
    logo: "/logos/peru-primero.png", 
    lider: "Cesar Roberto Figueredo Muñoz", 
    descripcion: "Consultar Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "ppp-1", nombre: "Cesar Roberto Figueredo", cargo: "Presidente" }, 
      { id: "ppp-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "ppp-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "podemos-peru", 
    nombre: "Podemos Perú", 
    siglas: "PP", 
    logo: "/logos/podemos-peru.png", 
    lider: "José Luna Gálvez", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "pp-1", nombre: "José Luna Gálvez", cargo: "Presidente" }, 
      { id: "pp-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "pp-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "partido-patriotico-del-peru-antauro", 
    nombre: "Partido Patriótico del Perú", 
    siglas: "PPP-A", 
    logo: "/logos/partido-patriotico-del-peru-antauro.png", 
    lider: "Antauro Humala", 
    descripcion: "Consultar Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "pppa-1", nombre: "Antauro Humala", cargo: "Presidente" }, 
      { id: "pppa-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "pppa-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "peruanos-unidos-somos-libres-tomas", 
    nombre: "Partido Político Peruanos Unidos ¡Somos Libres!", 
    siglas: "PUSL", 
    logo: "/logos/peruanos-unidos-somos-libres-tomas.png", 
    lider: "Tomás Aladino Gálvez", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "pusl-1", nombre: "Tomás Aladino Gálvez", cargo: "Presidente" }, 
      { id: "pusl-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "pusl-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "primero-la-gente-miguel", 
    nombre: "Primero la Gente", 
    siglas: "PLG", 
    logo: "/logos/primero-la-gente-miguel.png", 
    lider: "Miguel Del Castillo", 
    descripcion: "Consultar Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "plg-1", nombre: "Miguel Del Castillo", cargo: "Presidente" }, 
      { id: "plg-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "plg-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "cooperacion-popular-carlos", 
    nombre: "Partido Político Cooperación Popular", 
    siglas: "PPCP", 
    logo: "/logos/cooperacion-popular-carlos.png", 
    lider: "Carlos Zeballos Madariaga", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "ppcp-1", nombre: "Carlos Zeballos Madariaga", cargo: "Presidente" }, 
      { id: "ppcp-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "ppcp-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "voces-del-pueblo-ronald", 
    nombre: "Partido Político Popular Voces del Pueblo", 
    siglas: "PPPVP", 
    logo: "/logos/voces-del-pueblo-ronald.png", 
    lider: "Ronald Atencio Sotomayor", 
    descripcion: "Consultar Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "pppvp-1", nombre: "Ronald Atencio Sotomayor", cargo: "Presidente" }, 
      { id: "pppvp-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "pppvp-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "progresemos-paul", 
    nombre: "Progresemos", 
    siglas: "PROG", 
    logo: "/logos/progresemos-paul.png", 
    lider: "Paul Jaimes Blanco", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "prog-1", nombre: "Paul Jaimes Blanco", cargo: "Presidente" }, 
      { id: "prog-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "prog-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "fuerza-moderna-fiorella", 
    nombre: "Partido Político Fuerza Moderna", 
    siglas: "PPFM", 
    logo: "/logos/fuerza-moderna-fiorella.png", 
    lider: "Fiorella Molinelli Aristondo", 
    descripcion: "Consultar Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "ppfm-1", nombre: "Fiorella Molinelli Aristondo", cargo: "Presidente" }, 
      { id: "ppfm-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "ppfm-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "prin-juan", 
    nombre: "Partido Político PRIN", 
    siglas: "PRIN", 
    logo: "/logos/prin-juan.png", 
    lider: "Juan Chávez", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "prin-1", nombre: "Juan Chávez", cargo: "Presidente" }, 
      { id: "prin-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "prin-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "renovacion-popular-lopez-aliaga", 
    nombre: "Renovación Popular", 
    siglas: "RP", 
    logo: "/logos/renovacion-popular-lopez-aliaga.png", 
    lider: "Rafael López Aliaga", 
    descripcion: "Consultar Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "rp-1", nombre: "Rafael López Aliaga", cargo: "Presidente" }, 
      { id: "rp-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "rp-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "integridad-democratica-wolfgang", 
    nombre: "Partido Político Integridad Democrática", 
    siglas: "PPID", 
    logo: "/logos/integridad-democratica-wolfgang.png", 
    lider: "Wolfgang Grozo", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "ppid-1", nombre: "Wolfgang Grozo", cargo: "Presidente" }, 
      { id: "ppid-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "ppid-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "ppc-carlos-neuhaus", 
    nombre: "Partido Popular Cristiano (PPC)", 
    siglas: "PPC", 
    logo: "/logos/ppc-carlos-neuhaus.png", 
    lider: "Carlos Neuhaus Tudela", 
    descripcion: "Consultar Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "ppc-1", nombre: "Carlos Neuhaus Tudela", cargo: "Presidente" }, 
      { id: "ppc-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "ppc-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "salvemos-al-peru-cesar", 
    nombre: "Salvemos al Perú", 
    siglas: "SAP", 
    logo: "/logos/salvemos-al-peru-cesar.png", 
    lider: "Cesar Gamboa Cerna", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "sap-1", nombre: "Cesar Gamboa Cerna", cargo: "Presidente" }, 
      { id: "sap-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "sap-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "nacional-peru-libre-vladimir", 
    nombre: "Partido Político Nacional Perú Libre", 
    siglas: "PL", 
    logo: "/logos/nacional-peru-libre-vladimir.png", 
    lider: "Vladimir Cerrón", 
    descripcion: "Ideario de corte izquierdista; consultar documentos del partido y Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "pl-1", nombre: "Vladimir Cerrón", cargo: "Presidente" }, 
      { id: "pl-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "pl-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "si-creo-carlos", 
    nombre: "Partido Sí Creo", 
    siglas: "PSC", 
    logo: "/logos/si-creo-carlos.png", 
    lider: "Carlos Espá", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "psc-1", nombre: "Carlos Espá", cargo: "Presidente" }, 
      { id: "psc-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "psc-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "un-camino-diferente-arturo", 
    nombre: "Un Camino Diferente", 
    siglas: "UCD", 
    logo: "/logos/un-camino-diferente-arturo.png", 
    lider: "Arturo Fernández", 
    descripcion: "Consultar Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "ucd-1", nombre: "Arturo Fernández", cargo: "Presidente" }, 
      { id: "ucd-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "ucd-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  },
  { 
    id: "unidad-y-paz-roberto", 
    nombre: "Partido Unidad y Paz", 
    siglas: "PUP", 
    logo: "/logos/unidad-y-paz-roberto.png", 
    lider: "Roberto Chiabra León", 
    descripcion: "Ver Plataforma Electoral del JNE.", 
    candidatos: [
      { id: "pup-1", nombre: "Roberto Chiabra León", cargo: "Presidente" }, 
      { id: "pup-2", nombre: "Candidato Vicepresidente", cargo: "Vicepresidente" }, 
      { id: "pup-3", nombre: "Candidato 3", cargo: "Candidato" }
    ] 
  }
];

export default PARTIDOS;