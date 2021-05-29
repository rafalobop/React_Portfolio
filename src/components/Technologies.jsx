import React, { useState, useEffect } from 'react';
import '../css/technologies.css';
import { getTech } from '../helpers/rutaDatos';

const Technologies = () => {
  const [tech, setTech] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getTech().then((tech) => {
      setTech({
        data: tech,
        loading: false,
      });
    });
  }, []);

  const datosTech = tech.data.map((datos) => {
    return datos;
  });

  return (
    <>
      <div className="tech-container">
        <h1>Technologias</h1>
        <div className="tech">
          {datosTech.map((dato) => {
            return (
              <div className="tech-card" key={dato.id}>
                <div className="img-container">
                  <img
                    src={dato.image}
                    className="tech-card-img"
                    alt={dato.name}
                  />
                </div>
                <div className="details">
                  <div className="center">
                    <h4>{dato.name}</h4>
                  </div>
                </div>
              </div>
            );
          })}
          {console.log(datosTech)}
        </div>
      </div>
    </>
  );
};

export default Technologies;
