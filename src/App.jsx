import Candidatos from './components/Candidatos/Candidatos.jsx'
import { getCandidatoById } from './data/candidatos.js'
import './App.css'

function App() {
  // Obtener un candidato de ejemplo (Keiko Fujimori - Fuerza Popular)
  const candidato = getCandidatoById('fuerza-popular');

  // Si no se encuentra el candidato, mostrar mensaje
  if (!candidato) {
    return <div>Candidato no encontrado</div>;
  }

  return (
    <>
      <Candidatos candidato={candidato} />
    </>
  )
}

export default App
