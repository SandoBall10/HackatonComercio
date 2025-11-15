export interface DetalleCandidato {
  id: string;
  nombre: string;
  cargo?: string;
  foto?: string;
}

export interface Partido {
  id: string;
  nombre: string;
  siglas?: string;
  logo?: string;
  descripcion?: string;
  planUrl?: string;
  candidatos?: DetalleCandidato[];
}

export const PARTIDOS: Partido[] = [
  { id: "accion-popular", nombre: "Acción Popular", logo: "/logos/accion-popular.png", descripcion: "Líder histórico: Fernando Belaúnde Terry. Partido histórico con presencia parlamentaria. Revisar Plataforma Electoral del JNE para plan.", candidatos: [] },
  { id: "fuerza-popular", nombre: "Fuerza Popular", logo: "/logos/fuerza-popular.png", descripcion: "Líder: Keiko Fujimori. Consultar plan oficial en la Plataforma Electoral del JNE.", candidatos: [] },
  { id: "partido-de-los-trabajadores-pte-peru", nombre: "Partido de los Trabajadores PTE-Perú", logo: "/logos/partido-de-los-trabajadores-pte-peru.png", descripcion: "Líder reportado: Napoleón Becerra García. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "ahora-nacion", nombre: "Ahora Nación (AN)", logo: "/logos/ahora-nacion.png", descripcion: "Líder reportado: Alfonso López Chau Pastor. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "juntos-por-el-peru", nombre: "Juntos por el Perú", logo: "/logos/juntos-por-el-peru.png", descripcion: "Líder reportado: Yehude Simon. Consultar documentación partidaria y Plataforma Electoral del JNE.", candidatos: [] },
  { id: "partido-del-buen-gobierno", nombre: "Partido del Buen Gobierno", logo: "/logos/partido-del-buen-gobierno.png", descripcion: "Líder reportado: Jorge Nieto Montesinos. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "alianza-para-el-progreso", nombre: "Alianza para el Progreso (APP)", logo: "/logos/alianza-para-el-progreso.png", descripcion: "Líder: César Acuña Peralta. Consultar plan en la web del partido y Plataforma Electoral del JNE.", candidatos: [] },
  { id: "libertad-popular", nombre: "Libertad Popular", logo: "/logos/libertad-popular.png", descripcion: "Líder reportado: Rafael Belaúnde Llosa. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "partido-democrata-unido-peru", nombre: "Partido Demócrata Unido Perú", logo: "/logos/partido-democrata-unido-peru.png", descripcion: "Líder reportado: Charlie Carrasco Salazar. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "avanza-pais", nombre: "Avanza País", logo: "/logos/avanza-pais.png", descripcion: "Líder reportado: Norma Yarrow Lumbreras. Consultar Plataforma Electoral del JNE.", candidatos: [] },
  { id: "nuevo-peru-por-el-buen-vivir", nombre: "Nuevo Perú por el Buen Vivir", logo: "/logos/nuevo-peru-por-el-buen-vivir.png", descripcion: "Líder reportado: Vicente Alanoca. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "partido-democrata-verde", nombre: "Partido Demócrata Verde", logo: "/logos/partido-democrata-verde.png", descripcion: "Líder reportado: Alex Gonzales. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "batalla-peru", nombre: "Batalla Perú", logo: "/logos/batalla-peru.png", descripcion: "Líder reportado: Zósimo Cárdenas. Consultar Plataforma Electoral del JNE.", candidatos: [] },
  { id: "partido-aprista-peruano", nombre: "Partido Aprista Peruano (APRA)", logo: "/logos/partido-aprista-peruano.png", descripcion: "Líder histórico: Alan García Pérez. Revisar documentos históricos y Plataforma Electoral del JNE.", candidatos: [] },
  { id: "partido-democratico-federal", nombre: "Partido Democrático Federal", logo: "/logos/partido-democratico-federal.png", descripcion: "Líder reportado: Virgilio Acuña. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "fe-en-el-peru", nombre: "Fe en el Perú", logo: "/logos/fe-en-el-peru.png", descripcion: "Líder reportado: Álvaro Gonzalo Paz de la Barra Freigeiro. Consultar Plataforma Electoral del JNE.", candidatos: [] },
  { id: "ciudadanos-por-el-peru", nombre: "Partido Ciudadanos por el Perú", logo: "/logos/ciudadanos-por-el-peru.png", descripcion: "Líder reportado: Dina Boluarte. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "somos-peru", nombre: "Partido Democrático Somos Perú", logo: "/logos/somos-peru.png", descripcion: "Líder reportado: José Jerí. Consultar Plataforma Electoral del JNE.", candidatos: [] },
  { id: "frepap", nombre: "FREPAP (Frente Popular Agrícola FIA del Perú)", logo: "/logos/frepap.png", descripcion: "Líder reportado: Jonas Ataucusi Molina. Partido con presencia parlamentaria en periodos recientes. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "partido-civico-obras", nombre: "Partido Cívico Obras", logo: "/logos/partido-civico-obras.png", descripcion: "Líder no especificado en este resumen. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "frente-de-la-esperanza-2021", nombre: "Frente de la Esperanza 2021", logo: "/logos/frente-de-la-esperanza-2021.png", descripcion: "Líder reportado: Ricardo Belmont Cassinelli. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "partido-morado", nombre: "Partido Morado", logo: "/logos/partido-morado.png", descripcion: "Líder reportado: Luis Durán Rojo. Consultar Plataforma Electoral del JNE.", candidatos: [] },
  { id: "peru-accion", nombre: "Partido Político Perú Acción", logo: "/logos/peru-accion.png", descripcion: "Líder reportado: Francisco Diez Canseco Távara. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "peru-moderno", nombre: "Perú Moderno", logo: "/logos/peru-moderno.png", descripcion: "Líder reportado: Carlos Anderson. Consultar Plataforma Electoral del JNE.", candidatos: [] },
  { id: "pais-para-todos", nombre: "Partido País para Todos", logo: "/logos/pais-para-todos.png", descripcion: "Líder reportado: Vladimir Meza Villarreal. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "peru-primero", nombre: "Partido Político Perú Primero", logo: "/logos/peru-primero.png", descripcion: "Líder reportado: Cesar Roberto Figueredo Muñoz. Consultar Plataforma Electoral del JNE.", candidatos: [] },
  { id: "podemos-peru", nombre: "Podemos Perú", logo: "/logos/podemos-peru.png", descripcion: "Líder reportado: José Luna Gálvez. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "partido-patriotico-del-peru-antauro", nombre: "Partido Patriótico del Perú", logo: "/logos/partido-patriotico-del-peru-antauro.png", descripcion: "Líder reportado: Antauro Humala. Consultar Plataforma Electoral del JNE.", candidatos: [] },
  { id: "peruanos-unidos-somos-libres-tomas", nombre: "Partido Político Peruanos Unidos ¡Somos Libres!", logo: "/logos/peruanos-unidos-somos-libres-tomas.png", descripcion: "Líder reportado: Tomás Aladino Gálvez. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "primero-la-gente-miguel", nombre: "Primero la Gente", logo: "/logos/primero-la-gente-miguel.png", descripcion: "Líder reportado: Miguel Del Castillo. Consultar Plataforma Electoral del JNE.", candidatos: [] },
  { id: "cooperacion-popular-carlos", nombre: "Partido Político Cooperación Popular", logo: "/logos/cooperacion-popular-carlos.png", descripcion: "Líder reportado: Carlos Zeballos Madariaga. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "voces-del-pueblo-ronald", nombre: "Partido Político Popular Voces del Pueblo", logo: "/logos/voces-del-pueblo-ronald.png", descripcion: "Líder reportado: Ronald Atencio Sotomayor. Consultar Plataforma Electoral del JNE.", candidatos: [] },
  { id: "progresemos-paul", nombre: "Progresemos", logo: "/logos/progresemos-paul.png", descripcion: "Líder reportado: Paul Jaimes Blanco. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "fuerza-moderna-fiorella", nombre: "Partido Político Fuerza Moderna", logo: "/logos/fuerza-moderna-fiorella.png", descripcion: "Líder reportado: Fiorella Molinelli Aristondo. Consultar Plataforma Electoral del JNE.", candidatos: [] },
  { id: "prin-juan", nombre: "Partido Político PRIN", logo: "/logos/prin-juan.png", descripcion: "Líder reportado: Juan Chávez. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "renovacion-popular-lopez-aliaga", nombre: "Renovación Popular", siglas: "RP", logo: "/logos/renovacion-popular-lopez-aliaga.png", descripcion: "Líder reportado: Rafael López Aliaga. Consultar Plataforma Electoral del JNE.", candidatos: [] },
  { id: "integridad-democratica-wolfgang", nombre: "Partido Político Integridad Democrática", logo: "/logos/integridad-democratica-wolfgang.png", descripcion: "Líder reportado: Wolfgang Grozo. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "ppc-carlos-neuhaus", nombre: "Partido Popular Cristiano (PPC)", siglas: "PPC", logo: "/logos/ppc-carlos-neuhaus.png", descripcion: "Líder reportado: Carlos Neuhaus Tudela. Consultar Plataforma Electoral del JNE.", candidatos: [] },
  { id: "salvemos-al-peru-cesar", nombre: "Salvemos al Perú", logo: "/logos/salvemos-al-peru-cesar.png", descripcion: "Líder reportado: Cesar Gamboa Cerna. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "nacional-peru-libre-vladimir", nombre: "Partido Político Nacional Perú Libre", logo: "/logos/nacional-peru-libre-vladimir.png", descripcion: "Líder reportado: Vladimir Cerrón. Ideario de corte izquierdista; consultar documentos del partido y Plataforma Electoral del JNE.", candidatos: [] },
  { id: "si-creo-carlos", nombre: "Partido Sí Creo", logo: "/logos/si-creo-carlos.png", descripcion: "Líder reportado: Carlos Espá. Ver Plataforma Electoral del JNE.", candidatos: [] },
  { id: "un-camino-diferente-arturo", nombre: "Un Camino Diferente", logo: "/logos/un-camino-diferente-arturo.png", descripcion: "Líder reportado: Arturo Fernández. Consultar Plataforma Electoral del JNE.", candidatos: [] },
  { id: "unidad-y-paz-roberto", nombre: "Partido Unidad y Paz", logo: "/logos/unidad-y-paz-roberto.png", descripcion: "Líder reportado: Roberto Chiabra León. Ver Plataforma Electoral del JNE.", candidatos: [] }
];

export default PARTIDOS;