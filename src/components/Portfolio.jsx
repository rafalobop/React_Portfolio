import React, { useState, useEffect } from 'react';
import { getProyect } from '../helpers/rutaDatos';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [proyect, setProyect] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getProyect().then((proyecto) => {
      setProyect({
        data: proyecto,
        loading: false,
      });
    });
  }, []);

  const datosProyecto = proyect.data.map((datos) => {
    return datos;
  });
  console.log(datosProyecto);
  return (
    <>
      <div className="portfolio">
        <div className="portfolio-container">
          {datosProyecto.map((elem) => {
            return (
              <div className="card" key={elem.id}>
                <div className="card-header">
                  <h3>{elem.title}</h3>
                </div>
                <div className="card-body">
                  <img src={elem.imagen} alt={elem.title} />
                </div>
                <div className="card-footer">
                  <Link to="https://github.com/rafalobop/portafolio2">
                    <button>Repositorio</button>
                  </Link>
                  <Link to={elem.link}>
                    <button>Ver sitio Web</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
