import React, { useState, useEffect } from 'react';
import { getDatos } from '../helpers/rutaDatos';

const Accordeon = () => {
  const [datos, setDatos] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getDatos().then((dato) => {
      setDatos({
        data: dato,
        loading: false,
      });
    });
  }, []);
  // console.log(datos);

  const datosInfo = datos.data.map((dato) => {
    // console.log(dato);
    return dato;
  });
  return (
    <>
      <div className="accordion">
        {datosInfo.map((info) => {
          return (
            <div key={info.id} className={`box a${info.id}`}>
              <div className="image_1">
                <div className="text">
                  <h2>{info.title}</h2>
                  <p>{info.detalle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Accordeon;
