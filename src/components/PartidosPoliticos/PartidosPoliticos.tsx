import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './PartidosPoliticos.css';
import '../Inicio/Inicio.css';
import { candidatos } from '../../data/candidatos';


interface Partido {
  id: number;
  nombre: string;
  siglas: string;
  logo: string;
  planGobierno?: string;
  ideologia?: 'izquierda' | 'centro-izquierda' | 'centro' | 'centro-derecha' | 'derecha';
  tamano?: 'grande' | 'mediano' | 'pequeño';
  fundacion?: 'tradicional' | 'moderno' | 'nuevo';
  propuestas?: string[];
}

const PartidosPoliticos: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filtroPropuestas, setFiltroPropuestas] = useState<string>('todos');
  const [mostrarComparador, setMostrarComparador] = useState(false);
  const [partidosSeleccionados, setPartidosSeleccionados] = useState<Partido[]>([]);

  const obtenerCandidato = (partidoNombre: string) => {
    // Mapeo COMPLETO de nombres de partidos a candidatos en candidatos.js
    const mapeoPartidos: { [key: string]: string } = {
      // Candidatos encontrados en candidatos.js
      'Acción Popular': 'accion-popular',
      'Fuerza Popular': 'fuerza-popular',
      'Partido de los Trabajadores PTE–Perú': 'partido-trabajadores-pte-peru',
      'Ahora Nación': 'ahora-nacion',
      'Juntos por el Perú': 'juntos-por-el-peru',
      'Partido del Buen Gobierno': 'partido-del-buen-gobierno',
      'Alianza para el Progreso': 'alianza-para-el-progreso',
      'Libertad Popular': 'libertad-popular',
      'Partido Demócrata Unido Perú': 'partido-democrata-unido-peru',
      'Avanza País – Partido de Integración Social': 'avanza-pais',
      'Nuevo Perú por el Buen Vivir': 'nuevo-peru-por-el-buen-vivir',
      'Partido Demócrata Verde': 'partido-democrata-verde',
      'Batalla Perú': 'batalla-peru',
      'Partido Aprista Peruano': 'partido-aprista-peruano',
      'Partido Democrático Federal': 'partido-democratico-federal',
      'Fe en el Perú': 'fe-en-el-peru',
      'Partido Ciudadanos por el Perú': 'partido-ciudadanos-por-el-peru',
      'Partido Democrático Somos Perú': 'partido-democratico-somos-peru',
      'Partido Cívico Obras': 'partido-civico-obras',
      'Frente de la Esperanza 2021': 'frente-de-la-esperanza-2021',
      'Partido Morado': 'partido-morado',
      'Partido Político Perú Acción': 'partido-politico-peru-accion',
      'Perú Moderno': 'peru-moderno',
      'Partido País para Todos': 'partido-pais-para-todos',
      'Partido Político Perú Primero': 'partido-peru-primero',
      'Podemos Perú': 'podemos-peru',
      'Partido Patriótico del Perú': 'partido-patriotico-del-peru',
      'Peruanos Unidos – Somos Libres': 'peruanos-unidos-somos-libres',
      'Primero la Gente': 'primero-la-gente',
      'Cooperación Popular': 'cooperacion-popular',
      'Voces del Pueblo': 'voces-del-pueblo',
      'Progresemos': 'progresemos',
      'Fuerza Moderna': 'fuerza-moderna',
      'PRIN': 'prin',
      'Renovación Popular': 'renovacion-popular',
      'Integridad Democrática': 'integridad-democratica',
      'Partido Popular Cristiano': 'partido-popular-cristiano',
      'Salvemos al Perú': 'salvemos-al-peru',
      'Perú Libre': 'peru-libre',
      'Partido Sí Creo': 'partido-si-creo',
      'Un Camino Diferente': 'un-camino-diferente',
      'Partido Unidad y Paz': 'unidad-y-paz',
    };

    const candidatoId = mapeoPartidos[partidoNombre];
    if (candidatoId) {
      const candidato = candidatos.find(c => c.id === candidatoId);
      if (candidato) {
        return candidato;
      }
    }
    
    // Búsqueda alternativa por nombre del partido
    return candidatos.find(c => 
      c.partido.toUpperCase().includes(partidoNombre.toUpperCase()) ||
      partidoNombre.toUpperCase().includes(c.partido.toUpperCase())
    );
  };

  const puntuacionesComparador: { [key: string]: { [key: string]: number } } = {
    'Renovación Popular': { 'Economía': 8, 'Seguridad': 7, 'Infraestructura': 6, 'Salud': 5, 'Política': 6 },
    'Fuerza Popular': { 'Economía': 7, 'Seguridad': 8, 'Infraestructura': 7, 'Salud': 5, 'Política': 5 },
    'Alianza para el Progreso': { 'Economía': 7, 'Seguridad': 6, 'Infraestructura': 8, 'Salud': 6, 'Política': 5 },
    'Acción Popular': { 'Economía': 6, 'Seguridad': 5, 'Infraestructura': 6, 'Salud': 8, 'Política': 7 },
    'Partido Aprista Peruano': { 'Economía': 6, 'Seguridad': 6, 'Infraestructura': 5, 'Salud': 6, 'Política': 8 },
    'Perú Libre': { 'Economía': 7, 'Seguridad': 5, 'Infraestructura': 5, 'Salud': 8, 'Política': 7 },
    'Podemos Perú': { 'Economía': 6, 'Seguridad': 8, 'Infraestructura': 7, 'Salud': 5, 'Política': 5 },
    'Partido Democrático Somos Perú': { 'Economía': 6, 'Seguridad': 5, 'Infraestructura': 5, 'Salud': 7, 'Política': 8 },
    'Avanza País – Partido de Integración Social': { 'Economía': 7, 'Seguridad': 7, 'Infraestructura': 7, 'Salud': 5, 'Política': 5 },
    'Partido Morado': { 'Economía': 5, 'Seguridad': 5, 'Infraestructura': 5, 'Salud': 7, 'Política': 8 },
    'Frente de la Esperanza 2021': { 'Economía': 6, 'Seguridad': 6, 'Infraestructura': 7, 'Salud': 6, 'Política': 6 },
    'Nuevo Perú por el Buen Vivir': { 'Economía': 5, 'Seguridad': 5, 'Infraestructura': 6, 'Salud': 8, 'Política': 7 },
    'Juntos por el Perú': { 'Economía': 5, 'Seguridad': 5, 'Infraestructura': 6, 'Salud': 7, 'Política': 8 },
    'Fe en el Perú': { 'Economía': 5, 'Seguridad': 6, 'Infraestructura': 5, 'Salud': 7, 'Política': 7 },
    'Partido País para Todos': { 'Economía': 5, 'Seguridad': 5, 'Infraestructura': 6, 'Salud': 8, 'Política': 6 },
    'Ahora Nación': { 'Economía': 6, 'Seguridad': 5, 'Infraestructura': 6, 'Salud': 6, 'Política': 6 },
    'Partido Demócrata Verde': { 'Economía': 5, 'Seguridad': 5, 'Infraestructura': 7, 'Salud': 6, 'Política': 6 },
    'Partido Demócrata Unido Perú': { 'Economía': 5, 'Seguridad': 6, 'Infraestructura': 5, 'Salud': 6, 'Política': 7 },
    'Partido del Buen Gobierno': { 'Economía': 6, 'Seguridad': 6, 'Infraestructura': 7, 'Salud': 6, 'Política': 7 },
    'Libertad Popular': { 'Economía': 7, 'Seguridad': 6, 'Infraestructura': 5, 'Salud': 5, 'Política': 6 },
    'Partido Cívico Obras': { 'Economía': 6, 'Seguridad': 5, 'Infraestructura': 8, 'Salud': 5, 'Política': 5 },
    'Batalla Perú': { 'Economía': 5, 'Seguridad': 6, 'Infraestructura': 5, 'Salud': 6, 'Política': 6 },
    'Partido Ciudadanos por el Perú': { 'Economía': 6, 'Seguridad': 5, 'Infraestructura': 6, 'Salud': 6, 'Política': 7 },
    'Primero la Gente': { 'Economía': 5, 'Seguridad': 5, 'Infraestructura': 6, 'Salud': 8, 'Política': 6 },
    'Peruanos Unidos – Somos Libres': { 'Economía': 5, 'Seguridad': 5, 'Infraestructura': 6, 'Salud': 6, 'Política': 7 },
    'Cooperación Popular': { 'Economía': 6, 'Seguridad': 5, 'Infraestructura': 6, 'Salud': 6, 'Política': 7 },
    'Partido Político Perú Acción': { 'Economía': 7, 'Seguridad': 5, 'Infraestructura': 6, 'Salud': 5, 'Política': 5 },
    'Perú Moderno': { 'Economía': 6, 'Seguridad': 5, 'Infraestructura': 7, 'Salud': 5, 'Política': 5 },
    'Partido Político Perú Primero': { 'Economía': 6, 'Seguridad': 6, 'Infraestructura': 6, 'Salud': 5, 'Política': 6 },
    'Partido Patriótico del Perú': { 'Economía': 5, 'Seguridad': 8, 'Infraestructura': 5, 'Salud': 5, 'Política': 6 },
    'Voces del Pueblo': { 'Economía': 5, 'Seguridad': 5, 'Infraestructura': 6, 'Salud': 7, 'Política': 7 },
    'Progresemos': { 'Economía': 6, 'Seguridad': 5, 'Infraestructura': 7, 'Salud': 6, 'Política': 6 },
    'Fuerza Moderna': { 'Economía': 7, 'Seguridad': 6, 'Infraestructura': 6, 'Salud': 5, 'Política': 5 },
    'PRIN': { 'Economía': 6, 'Seguridad': 5, 'Infraestructura': 7, 'Salud': 5, 'Política': 5 },
    'Integridad Democrática': { 'Economía': 6, 'Seguridad': 7, 'Infraestructura': 6, 'Salud': 5, 'Política': 7 },
    'Partido Popular Cristiano': { 'Economía': 5, 'Seguridad': 6, 'Infraestructura': 5, 'Salud': 6, 'Política': 7 },
    'Salvemos al Perú': { 'Economía': 6, 'Seguridad': 6, 'Infraestructura': 6, 'Salud': 6, 'Política': 6 },
    'Partido Sí Creo': { 'Economía': 5, 'Seguridad': 6, 'Infraestructura': 5, 'Salud': 6, 'Política': 6 },
    'Un Camino Diferente': { 'Economía': 6, 'Seguridad': 5, 'Infraestructura': 6, 'Salud': 6, 'Política': 6 },
    'Partido Unidad y Paz': { 'Economía': 5, 'Seguridad': 5, 'Infraestructura': 6, 'Salud': 6, 'Política': 7 },
    'Partido Democrático Federal': { 'Economía': 6, 'Seguridad': 5, 'Infraestructura': 6, 'Salud': 5, 'Política': 6 },
    'Partido de los Trabajadores PTE–Perú': { 'Economía': 5, 'Seguridad': 5, 'Infraestructura': 5, 'Salud': 7, 'Política': 8 },
  };

  const rubros = ['Salud', 'Infraestructura', 'Economía', 'Seguridad', 'Política'];

  const obtenerPuntuacion = (partidoNombre: string, rubro: string): number => {
    return puntuacionesComparador[partidoNombre]?.[rubro] || 5;
  };

  const agregarPartidoComparador = (partido: Partido) => {
    if (partidosSeleccionados.length < 2 && !partidosSeleccionados.find(p => p.id === partido.id)) {
      setPartidosSeleccionados([...partidosSeleccionados, partido]);
    }
  };

  const removerPartidoComparador = (partidoId: number) => {
    setPartidosSeleccionados(partidosSeleccionados.filter(p => p.id !== partidoId));
  };

  const limpiarComparador = () => {
    setPartidosSeleccionados([]);
  };

  const getPartidoKey = (nombre: string): string => {
    const keyMap: { [key: string]: string } = {
      'Renovación Popular': 'renovacion-popular',
      'Fuerza Popular': 'fuerza-popular',
      'Alianza para el Progreso': 'alianza-para-el-progreso',
      'Acción Popular': 'accion-popular',
      'Partido Aprista Peruano': 'partido-aprista',
      'Perú Libre': 'peru-libre',
      'Partido Político Nacional Perú Libre': 'peru-libre',
      'Podemos Perú': 'podemos-peru',
      'Partido Democrático Somos Perú': 'somos-peru',
      'Avanza País – Partido de Integración Social': 'avanza-pais',
      'Partido Morado': 'partido-morado',
      'Frente de la Esperanza 2021': 'frente-esperanza',
      'Nuevo Perú por el Buen Vivir': 'nuevo-peru',
      'Juntos por el Perú': 'juntos-por-el-peru',
      'Frente Popular Agrícola FIA del Perú (Frepap)': 'frepap',
      'Fe en el Perú': 'fe-en-el-peru',
      'Partido País para Todos': 'pais-para-todos',
      'Ahora Nación': 'ahora-nacion',
      'Partido Demócrata Verde': 'partido-democrata-verde',
      'Partido Demócrata Unido Perú': 'partido-democrata-unido',
      'Partido del Buen Gobierno': 'partido-buen-gobierno',
      'Libertad Popular': 'libertad-popular',
      'Partido Cívico Obras': 'partido-civico-obras',
      'Batalla Perú': 'batalla-peru',
      'Partido Ciudadanos por el Perú': 'partido-ciudadanos',
      'Primero la Gente': 'primero-la-gente',
      'Peruanos Unidos – Somos Libres': 'peruanos-unidos',
      'Cooperación Popular': 'cooperacion-popular',
      'Partido Político Perú Acción': 'peru-accion',
      'Perú Moderno': 'peru-moderno',
      'Partido Político Perú Primero': 'peru-primero',
      'Partido Patriótico del Perú': 'partido-patriotico',
      'Voces del Pueblo': 'voces-del-pueblo',
      'Progresemos': 'progresemos',
      'Fuerza Moderna': 'fuerza-moderna',
      'PRIN': 'prin',
      'Integridad Democrática': 'integridad-democratica',
      'Partido Popular Cristiano': 'partido-popular-cristiano',
      'Salvemos al Perú': 'salvemos-al-peru',
      'Partido Sí Creo': 'partido-si-creo',
      'Un Camino Diferente': 'un-camino-diferente',
      'Partido Unidad y Paz': 'unidad-y-paz',
      'Partido de los Trabajadores PTE–Perú': 'pte-peru',
      'Partido Democrático Federal': 'partido-democratico-federal'
    };
    return keyMap[nombre] || nombre.toLowerCase().replace(/\s+/g, '-');
  };

  const partidos: Partido[] = [
    { "id": 36, "nombre": "Renovación Popular", "siglas": "RP", "logo": "/logos/renovacion-popular.png", "ideologia": "derecha", "tamano": "grande", "fundacion": "nuevo", "propuestas": ["Economía", "Seguridad"] },
    { "id": 2, "nombre": "Fuerza Popular", "siglas": "FPu", "logo": "/logos/fuerza-popular.png", "ideologia": "derecha", "tamano": "grande", "fundacion": "moderno", "propuestas": ["Economía", "Infraestructura"] },
    { "id": 7, "nombre": "Alianza para el Progreso", "siglas": "APP", "logo": "/logos/alianza-para-el-progreso.png", "ideologia": "centro-derecha", "tamano": "grande", "fundacion": "moderno", "propuestas": ["Infraestructura", "Economía"] },
    { "id": 1, "nombre": "Acción Popular", "siglas": "AP", "logo": "/logos/accion-popular.png", "ideologia": "centro", "tamano": "grande", "fundacion": "tradicional", "propuestas": ["Salud", "Educación"] },
    { "id": 14, "nombre": "Partido Aprista Peruano", "siglas": "APRA", "logo": "/logos/partido-aprista-peruano.png", "ideologia": "centro-izquierda", "tamano": "grande", "fundacion": "tradicional", "propuestas": ["Economía", "Política"] },
    { "id": 40, "nombre": "Perú Libre", "siglas": "PL", "logo": "/logos/peru-libre.png", "ideologia": "izquierda", "tamano": "grande", "fundacion": "nuevo", "propuestas": ["Salud", "Economía"] },
    { "id": 27, "nombre": "Podemos Perú", "siglas": "PP", "logo": "/logos/podemos-peru.png", "ideologia": "centro-derecha", "tamano": "mediano", "fundacion": "nuevo", "propuestas": ["Seguridad", "Infraestructura"] },
    { "id": 18, "nombre": "Partido Democrático Somos Perú", "siglas": "DSP", "logo": "/logos/somos-peru.png", "ideologia": "centro", "tamano": "mediano", "fundacion": "tradicional", "propuestas": ["Salud", "Política"] },
    { "id": 10, "nombre": "Avanza País – Partido de Integración Social", "siglas": "APIS", "logo": "/logos/avanza-pais.png", "ideologia": "centro-derecha", "tamano": "mediano", "fundacion": "nuevo", "propuestas": ["Economía", "Seguridad"] },
    { "id": 22, "nombre": "Partido Morado", "siglas": "PM", "logo": "/logos/partido-morado.png", "ideologia": "centro", "tamano": "mediano", "fundacion": "nuevo", "propuestas": ["Política", "Salud"] },
    { "id": 21, "nombre": "Frente de la Esperanza 2021", "siglas": "F21", "logo": "/logos/frente-esperanza-2021.png", "ideologia": "centro-izquierda", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Infraestructura", "Seguridad"] },
    { "id": 11, "nombre": "Nuevo Perú por el Buen Vivir", "siglas": "NPBV", "logo": "/logos/nuevo-peru-por-el-buen-vivir.png", "ideologia": "izquierda", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Salud", "Economía"] },
    { "id": 5, "nombre": "Juntos por el Perú", "siglas": "JPP", "logo": "/logos/juntos-por-el-peru.png", "ideologia": "izquierda", "tamano": "mediano", "fundacion": "moderno", "propuestas": ["Política", "Infraestructura"] },
    { "id": 16, "nombre": "Fe en el Perú", "siglas": "FEP", "logo": "/logos/fe-en-el-peru.png", "ideologia": "derecha", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Salud", "Seguridad"] },
    { "id": 25, "nombre": "Partido País para Todos", "siglas": "PPT", "logo": "/logos/pais-para-todos.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Economía", "Política"] },
    { "id": 4, "nombre": "Ahora Nación", "siglas": "AN", "logo": "/logos/ahora-nacion.png", "ideologia": "centro-derecha", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Infraestructura", "Seguridad"] },
    { "id": 12, "nombre": "Partido Demócrata Verde", "siglas": "PDV", "logo": "/logos/partido-democrata-verde.png", "ideologia": "centro-izquierda", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Salud", "Economía"] },
    { "id": 9, "nombre": "Partido Demócrata Unido Perú", "siglas": "PDU", "logo": "/logos/partido-democrata-unido.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Política", "Seguridad"] },
    { "id": 6, "nombre": "Partido del Buen Gobierno", "siglas": "PBG", "logo": "/logos/partido-buen-gobierno.png", "ideologia": "centro-derecha", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Economía", "Infraestructura"] },
    { "id": 8, "nombre": "Libertad Popular", "siglas": "LP", "logo": "/logos/libertad-popular.png", "ideologia": "derecha", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Seguridad", "Economía"] },
    { "id": 20, "nombre": "Partido Cívico Obras", "siglas": "PCO", "logo": "/logos/partido-civico-obras.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Infraestructura", "Política"] },
    { "id": 13, "nombre": "Batalla Perú", "siglas": "BP", "logo": "/logos/batalla-peru.png", "ideologia": "centro-derecha", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Seguridad", "Salud"] },
    { "id": 17, "nombre": "Partido Ciudadanos por el Perú", "siglas": "CPP", "logo": "/logos/ciudadanos-por-el-peru.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Economía", "Política"] },
    { "id": 30, "nombre": "Primero la Gente", "siglas": "PLC", "logo": "/logos/primero-la-gente.png", "ideologia": "centro-izquierda", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Salud", "Infraestructura"] },
    { "id": 29, "nombre": "Peruanos Unidos – Somos Libres", "siglas": "PUSL", "logo": "/logos/peruanos-unidos.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Política", "Economía"] },
    { "id": 31, "nombre": "Cooperación Popular", "siglas": "CP", "logo": "/logos/cooperacion-popular.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "tradicional", "propuestas": ["Infraestructura", "Salud"] },
    { "id": 23, "nombre": "Partido Político Perú Acción", "siglas": "PA", "logo": "/logos/peru-accion.png", "ideologia": "centro-derecha", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Seguridad", "Economía"] },
    { "id": 24, "nombre": "Perú Moderno", "siglas": "PMo", "logo": "/logos/peru-moderno.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Economía", "Política"] },
    { "id": 26, "nombre": "Partido Político Perú Primero", "siglas": "PP1", "logo": "/logos/peru-primero.png", "ideologia": "centro-derecha", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Infraestructura", "Seguridad"] },
    { "id": 28, "nombre": "Partido Patriótico del Perú", "siglas": "PPP", "logo": "/logos/partido-patriotico-del-peru.png", "ideologia": "derecha", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Seguridad", "Política"] },
    { "id": 32, "nombre": "Voces del Pueblo", "siglas": "VP", "logo": "/logos/voces-del-pueblo.png", "ideologia": "izquierda", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Salud", "Economía"] },
    { "id": 33, "nombre": "Progresemos", "siglas": "PRG", "logo": "/logos/progresemos.png", "ideologia": "centro-izquierda", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Política", "Infraestructura"] },
    { "id": 34, "nombre": "Fuerza Moderna", "siglas": "FM", "logo": "/logos/fuerza-moderna.png", "ideologia": "centro-derecha", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Economía", "Seguridad"] },
    { "id": 35, "nombre": "PRIN", "siglas": "PRIN", "logo": "/logos/prin.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "moderno", "propuestas": ["Infraestructura", "Salud"] },
    { "id": 37, "nombre": "Integridad Democrática", "siglas": "ID", "logo": "/logos/integridad-democratica.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Política", "Seguridad"] },
    { "id": 38, "nombre": "Partido Popular Cristiano", "siglas": "PPC", "logo": "/logos/partido-popular-cristiano.png", "ideologia": "centro-derecha", "tamano": "mediano", "fundacion": "tradicional", "propuestas": ["Salud", "Política"] },
    { "id": 39, "nombre": "Salvemos al Perú", "siglas": "SP", "logo": "/logos/salvemos-al-peru.png", "ideologia": "centro-derecha", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Economía", "Infraestructura"] },
    { "id": 41, "nombre": "Partido Sí Creo", "siglas": "SC", "logo": "/logos/si-creo.png", "ideologia": "centro-derecha", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Seguridad", "Salud"] },
    { "id": 42, "nombre": "Un Camino Diferente", "siglas": "UCD", "logo": "/logos/un-camino-diferente.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Política", "Economía"] },
    { "id": 43, "nombre": "Partido Unidad y Paz", "siglas": "UyP", "logo": "/logos/unidad-y-paz.png", "ideologia": "centro", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Infraestructura", "Seguridad"] },
    { "id": 3, "nombre": "Partido de los Trabajadores PTE–Perú", "siglas": "PTE", "logo": "/logos/pte-peru.png", "ideologia": "izquierda", "tamano": "pequeño", "fundacion": "tradicional", "propuestas": ["Salud", "Economía"] },
    { "id": 15, "nombre": "Partido Democrático Federal", "siglas": "PDF", "logo": "/logos/partido-democratico-federal.png", "ideologia": "centro-izquierda", "tamano": "pequeño", "fundacion": "nuevo", "propuestas": ["Política", "Infraestructura"] }
  ];

  const handlePartidoClick = (partidoId: number) => {
    navigate(`/partido/${partidoId}`);
  };

  const partidosFiltrados = partidos.filter(partido => {
    const searchLower = searchTerm.toLowerCase();
    const nombreTraducido = t(`partidos.nombres.${getPartidoKey(partido.nombre)}`).toLowerCase();
    
    const cumpleBusqueda = searchTerm === '' || (
      nombreTraducido.includes(searchLower) ||
      partido.siglas.toLowerCase().includes(searchLower) ||
      partido.nombre.toLowerCase().includes(searchLower)
    );

    const cumplePropuestas = filtroPropuestas === 'todos' || (partido.propuestas && partido.propuestas.includes(filtroPropuestas));

    return cumpleBusqueda && cumplePropuestas;
  });

  return (
    <>


      <div className="partidos-container">
        <h1 className="titulo-principal">{t('partidos.titulo')} - {t('partidos.eleccionesPeru2026')}</h1>
      <p className="subtitulo">{partidosFiltrados.length} {t('partidos.descripcion').toLowerCase()}</p>

      <div className="buscador-container">
        <div className="buscador-input-wrapper">
          <svg className="buscador-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            className="buscador-input"
            placeholder={t('partidos.buscador.placeholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              className="buscador-clear"
              onClick={() => setSearchTerm('')}
              aria-label="Limpiar búsqueda"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="filtros-container">
        <div className="filtro-group">
          <label htmlFor="filtro-propuestas" className="filtro-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            Filtrar por rubro de Propuesta
          </label>
          <select
            id="filtro-propuestas"
            className="filtro-select"
            value={filtroPropuestas}
            onChange={(e) => setFiltroPropuestas(e.target.value)}
          >
            <option value="todos">{t('partidos.filtros.todas')}</option>
            <option value="Salud">Salud</option>
            <option value="Infraestructura">Infraestructura</option>
            <option value="Economía">Economía</option>
            <option value="Seguridad">Seguridad</option>
            <option value="Política">Política</option>
          </select>
        </div>

        {filtroPropuestas !== 'todos' && (
          <button
            className="filtro-reset"
            onClick={() => setFiltroPropuestas('todos')}
          >
            {t('partidos.filtros.limpiar')}
          </button>
        )}

        <button
          className="comparar-btn"
          onClick={() => setMostrarComparador(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8" cy="4" r="1"></circle>
            <circle cx="16" cy="4" r="1"></circle>
            <circle cx="12" cy="4" r="1"></circle>
            <path d="M8 6v12"></path>
            <path d="M16 6v12"></path>
          </svg>
          Comparar candidatos
        </button>
      </div>

      {partidosFiltrados.length === 0 && (
        <div className="no-resultados">
          <p>{t('partidos.buscador.noResultados')}</p>
        </div>
      )}

      <div className="partidos-grid">
        {partidosFiltrados.map((partido) => (
          <div
            key={partido.id}
            className="partido-card"
            onClick={() => handlePartidoClick(partido.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="partido-logo">
              <img src={partido.logo} alt={`Logo ${partido.nombre}`} />
            </div>
            <div className="partido-info">
              <h3 className="partido-nombre">{t(`partidos.nombres.${getPartidoKey(partido.nombre)}`)}</h3>
              <p className="partido-siglas">{partido.siglas}</p>
            </div>
          </div>
        ))}
      </div>

      {mostrarComparador && (
        <div className="comparador-overlay" onClick={() => setMostrarComparador(false)}>
          <div className="comparador-modal" onClick={(e) => e.stopPropagation()}>
            <div className="comparador-header">
              <h2>Comparar Candidatos por Partidos</h2>
              <button
                className="comparador-close"
                onClick={() => setMostrarComparador(false)}
              >
                ✕
              </button>
            </div>

            <div className="comparador-seleccion">
              <div className="comparador-control-panel">
                {partidosSeleccionados.length === 2 && (
                  <>
                    <div className="comparador-selector">
                      <h3>Cambiar selección</h3>
                      <div className="comparador-seleccionados">
                        <div className="comparador-grid-selector">
                          {partidosSeleccionados.map((partido) => (
                            <button
                              key={partido.id}
                              className="comparador-partido-btn selected"
                              onClick={() => removerPartidoComparador(partido.id)}
                            >
                              <img src={partido.logo} alt={partido.nombre} className="comparador-logo" />
                              <span>{t(`partidos.nombres.${getPartidoKey(partido.nombre)}`)}</span>
                              <span className="remove-btn">✕</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <button
                      className="comparador-limpiar"
                      onClick={limpiarComparador}
                    >
                      Limpiar selección
                    </button>
                  </>
                )}
                {partidosSeleccionados.length < 2 && (
                  <div className="comparador-selector">
                    <h3>Selecciona 2 partidos para comparar:</h3>
                    <div className="comparador-grid-selector">
                      {partidos.map((partido) => (
                        <button
                          key={partido.id}
                          className={`comparador-partido-btn ${partidosSeleccionados.find(p => p.id === partido.id) ? 'selected' : ''} ${partidosSeleccionados.length === 2 && !partidosSeleccionados.find(p => p.id === partido.id) ? 'disabled' : ''}`}
                          onClick={() => {
                            if (partidosSeleccionados.find(p => p.id === partido.id)) {
                              removerPartidoComparador(partido.id);
                            } else if (partidosSeleccionados.length < 2) {
                              agregarPartidoComparador(partido);
                            }
                          }}
                        >
                          <img src={partido.logo} alt={partido.nombre} className="comparador-logo" />
                          <span>{t(`partidos.nombres.${getPartidoKey(partido.nombre)}`)}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {partidosSeleccionados.length === 2 && (
                <div className="comparador-resultado">
                  <div className="comparador-candidatos-header">
                    {partidosSeleccionados.map((partido) => {
                      const candidato = obtenerCandidato(partido.nombre);
                      const nombreCandidato = candidato?.nombre || partido.nombre;
                      const nombrePartido = t(`partidos.nombres.${getPartidoKey(partido.nombre)}`);
                      return (
                        <div key={partido.id} className="comparador-candidato-info">
                          <div className="comparador-candidato-foto">
                            <img 
                              src={candidato?.foto || partido.logo} 
                              alt={nombreCandidato}
                              onError={(e) => { e.currentTarget.src = partido.logo; }}
                            />
                          </div>
                          <h3>{nombreCandidato}</h3>
                          <p className="partido-label">{nombrePartido}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="comparador-rubros">
                    {rubros.map((rubro) => (
                      <div key={rubro} className="comparador-rubro-card">
                        <h4 className="rubro-titulo">{rubro}</h4>
                        <div className="comparador-puntuaciones-flex">
                          {partidosSeleccionados.map((partido) => {
                            const puntuacion = obtenerPuntuacion(partido.nombre, rubro);
                            const nivel = puntuacion <= 3 ? 'bajo' : puntuacion <= 6 ? 'moderado' : 'alto';
                            const nivelTexto = puntuacion <= 3 ? 'BAJO' : puntuacion <= 6 ? 'MODERADO' : 'ALTO';
                            return (
                              <div key={partido.id} className="comparador-puntuacion-item">
                                <span className="puntuacion-etiqueta">{t(`partidos.nombres.${getPartidoKey(partido.nombre)}`)}</span>
                                <div className="puntuacion-display">
                                  <div className="puntuacion-numero-grande">{puntuacion}</div>
                                  <div className="puntuacion-barra-vertical">
                                    <div className={`barra-relleno ${nivel}`} style={{ height: `${puntuacion * 10}%` }}></div>
                                  </div>
                                  <div className={`nivel-badge ${nivel}`}>{nivelTexto}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <p className="rubro-descripcion">
                          {rubro === 'Salud' && 'Propuestas relacionadas con sistema de salud y bienestar'}
                          {rubro === 'Infraestructura' && 'Inversión en carreteras, puentes y obras públicas'}
                          {rubro === 'Economía' && 'Políticas económicas y desarrollo empresarial'}
                          {rubro === 'Seguridad' && 'Seguridad pública y orden interno'}
                          {rubro === 'Política' && 'Gobernanza y reformas institucionales'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default PartidosPoliticos;