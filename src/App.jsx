import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio';
import Candidatos from './components/Candidatos/Candidatos';
import PartidosPoliticos from './components/PartidosPoliticos/PartidosPoliticos';
import ReniecConsultas from './components/reniec/ReniecConsultas';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/candidatos" component={Candidatos} />
          <Route path="/partidos" component={PartidosPoliticos} />
          <Route path="/reniec" component={ReniecConsultas} />
        </Switch>
      </div>
    </Router>
<<<<<<< Updated upstream
  )
}
=======
  );
};
>>>>>>> Stashed changes

export default App
