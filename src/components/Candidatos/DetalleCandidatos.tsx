import React from "react";
import { Link } from "react-router-dom";
import { PARTIDOS } from "../../data/partidos";
import "./DetalleCandidato.css";

const DetalleCandidatos: React.FC = () => {
  return (
    <div className="candidatos-page">
      <h1>Partidos</h1>
      <div className="grid">
        {PARTIDOS.map(p => (
          <Link to={`/partido/${p.id}`} key={p.id} className="card">
            <img src={p.logo || `/logos/${p.id}.svg`} alt={p.nombre} />
            <div className="card-body">
              <h3>{p.nombre}</h3>
              {p.siglas && <small>{p.siglas}</small>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DetalleCandidatos;