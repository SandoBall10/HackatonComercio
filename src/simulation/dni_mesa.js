const colegios = [
  {
    nombre: 'Colegio Nacional Ricardo Palma',
    direccion: 'Av. Los Próceres 123, Lima',
    lat: -12.0464,
    lon: -77.0428,
  },
  {
    nombre: 'IEP Santa Rosa',
    direccion: 'Calle Ficticia 456, Lima',
    lat: -12.0500,
    lon: -77.0300,
  },
  {
    nombre: 'Colegio San Martín',
    direccion: 'Jr. Simulación 789, Lima',
    lat: -12.0450,
    lon: -77.0350,
  },
  {
    nombre: 'Colegio República de Chile',
    direccion: 'Av. Ejemplo 321, Lima',
    lat: -12.0480,
    lon: -77.0400,
  },
];

export function getSimulatedVotingData(dni) {
  const lastDigit = parseInt(dni[dni.length - 1], 10);
  const colegio = colegios[parseInt(dni.slice(-2), 10) % colegios.length];

  const isMiembro = parseInt(dni.slice(-3), 10) % 6 === 0;
  const mesa = 1000 + (parseInt(dni.slice(-3), 10) % 500);
  const fecha = `2025-11-${isMiembro ? 15 : 16}`;
  const roles = isMiembro ? 'Miembro de mesa' : 'Votante';
  const salon = `Salón ${1 + (parseInt(dni.slice(-1), 10) % 5)}`;
  const piso = `${1 + (parseInt(dni.slice(-2), 10) % 3)}° piso`;
  const guiaPdf = 'https://www.onpe.gob.pe/guia-votante.pdf';

  return {
    rol: roles,
    mesa,
    fecha,
    salon,
    piso,
    ubicacion: {
      ...colegio,
    },
    guiaPdf,
  };
}