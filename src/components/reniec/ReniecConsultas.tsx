import React, { useState } from 'react';
import { getDniData } from '../api/sunat'; // Ajusta la ruta si es necesario

const ReniecConsultas: React.FC = () => {
  const [dni, setDni] = useState('');
  const [resultado, setResultado] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleConsulta = async (e: React.FormEvent) => {
    e.preventDefault();
    if (dni.length !== 8) {
      setError('El DNI debe tener 8 dígitos');
      return;
    }

    setLoading(true);
    setError('');
    setResultado(null);

    try {
      const data = await getDniData(dni);
      setResultado({
        dni: data.document_number,
        nombres: data.first_name,
        apellidoPaterno: data.first_last_name,
        apellidoMaterno: data.second_last_name,
        //fechaNacimiento: '-',
      });
    } catch (err: any) {
      setError('No se pudo obtener la información. Verifica el DNI o intenta más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Consulta RENIEC</h1>
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        Verifica la información de ciudadanos registrados en RENIEC
      </p>

      <form onSubmit={handleConsulta} style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <input
            type="text"
            value={dni}
            onChange={(e) => setDni(e.target.value.replace(/\D/g, '').slice(0, 8))}
            placeholder="Ingrese DNI (8 dígitos)"
            style={{
              flex: 1,
              padding: '0.75rem',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
          <button
            type="submit"
            disabled={loading || dni.length !== 8}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              backgroundColor: '#0066cc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading || dni.length !== 8 ? 0.6 : 1
            }}
          >
            {loading ? 'Consultando...' : 'Consultar'}
          </button>
        </div>
        {error && <p style={{ color: 'red', fontSize: '0.9rem' }}>{error}</p>}
      </form>

      {resultado && (
        <div style={{
          padding: '1.5rem',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          border: '1px solid #ddd'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>Resultado de la Consulta</h2>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <div>
              <strong>DNI:</strong> {resultado.dni}
            </div>
            <div>
              <strong>Nombres:</strong> {resultado.nombres}
            </div>
            <div>
              <strong>Apellido Paterno:</strong> {resultado.apellidoPaterno}
            </div>
            <div>
              <strong>Apellido Materno:</strong> {resultado.apellidoMaterno}
            </div>
            <div>
              <strong>Fecha de Nacimiento:</strong> {resultado.fechaNacimiento}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReniecConsultas;