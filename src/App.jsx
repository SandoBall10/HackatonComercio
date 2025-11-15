import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReniecConsultas from './components/reniec/ReniecConsultas';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReniecConsultas />} />
      </Routes>
    </Router>
  );
}

export default App;
