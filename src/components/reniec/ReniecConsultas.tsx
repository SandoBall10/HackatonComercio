import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ReniecConsultas: React.FC = () => {
  const { t } = useTranslation();
  const [dni, setDni] = useState('');
  const [resultado, setResultado] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleConsulta = async (e: React.FormEvent) => {
    e.preventDefault();
    if (dni.length !== 8) {
      setError(t('reniec.errorDni'));
      return;
    }

    setLoading(true);
    setError('');
    
    // Simulación de consulta - Aquí irá la integración real con RENIEC
    setTimeout(() => {
      setResultado({
        dni: dni,
        nombres: 'Ejemplo de Consulta',
        apellidoPaterno: 'Pendiente',
        apellidoMaterno: 'Integración',
        fechaNacimiento: '01/01/1990'
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{t('reniec.titulo')}</h1>
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        {t('reniec.descripcion')}
      </p>

      <form onSubmit={handleConsulta} style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <input
            type="text"
            value={dni}
            onChange={(e) => setDni(e.target.value.replace(/\D/g, '').slice(0, 8))}
            placeholder={t('reniec.placeholderDni')}
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
            {loading ? t('reniec.consultando') : t('reniec.btnConsultar')}
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
          <h2 style={{ marginBottom: '1rem' }}>{t('reniec.resultadoTitulo')}</h2>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            <div>
              <strong>{t('reniec.dni')}:</strong> {resultado.dni}
            </div>
            <div>
              <strong>{t('reniec.nombres')}:</strong> {resultado.nombres}
            </div>
            <div>
              <strong>{t('reniec.apellidoPaterno')}:</strong> {resultado.apellidoPaterno}
            </div>
            <div>
              <strong>{t('reniec.apellidoMaterno')}:</strong> {resultado.apellidoMaterno}
            </div>
            <div>
              <strong>{t('reniec.fechaNacimiento')}:</strong> {resultado.fechaNacimiento}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReniecConsultas;