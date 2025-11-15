import { useState } from 'react';
import { getDniData } from '../../api/sunat';

const ReniecConsultas = () => {
  const [dni, setDni] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await getDniData(dni);
      setResult(data);
    } catch (error) {
      setResult(error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={dni}
        onChange={e => setDni(e.target.value)}
        placeholder="Ingrese DNI"
      />
      <button onClick={handleSearch}>Consultar</button>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};

export default ReniecConsultas;