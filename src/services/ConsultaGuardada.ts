interface ConsultaGuardada {
  dni: string;
  resultado: {
    dni: string;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
  };
  simulado: {
    rol: string;
    fecha: string;
    mesa: string;
    piso: string;
    salon: string;
    ubicacion: {
      nombre: string;
      direccion: string;
      lat: number;
      lon: number;
    };
  };
  fechaGuardado: string;
}

const STORAGE_KEY = 'onpe_consulta_offline';

export const guardarConsultaOffline = (consulta: ConsultaGuardada): boolean => {
  try {
    const consultaConFecha = {
      ...consulta,
      fechaGuardado: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consultaConFecha));
    return true;
  } catch (error) {
    console.error('Error al guardar consulta:', error);
    return false;
  }
};

export const obtenerConsultaOffline = (): ConsultaGuardada | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    return JSON.parse(data);
  } catch (error) {
    console.error('Error al obtener consulta:', error);
    return null;
  }
};

export const eliminarConsultaOffline = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

export const tieneConsultaGuardada = (): boolean => {
  return localStorage.getItem(STORAGE_KEY) !== null;
};