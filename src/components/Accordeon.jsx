import React from 'react';

const Accordeon = () => {
  return (
    <>
      <div className="accordion">
        <div className="box a1">
          <div className="image_1">
            <div className="text">
              <h2>¿Quien soy?</h2>
              <p>
                Tengo 28 años, soy papa de una hermosa hija, un loco de los
                deportes y fanatico de ponerme nuevos desafios cada dia.
              </p>
            </div>
          </div>
        </div>
        <div className="box a2">
          <div className="image_2">
            <div className="text">
              <h2>¿Como llegué hasta aqui?</h2>
              <p>
                Empece a estudiar programacion en el inicio de la pandemia,
                buscando nuevos objetivos laborales, y encontrandome con un
                mundo que no tiene techo, y eso me motiva a crecer y aprender
                cada dia cosas nuevas.
              </p>
            </div>
          </div>
        </div>
        <div className="box a3">
          <div className="image_3">
            <div className="text">
              <h2>¿Que aspiraciones tengo?</h2>
              <p>
                Quiero insertarme al mercado laboral del mundo IT, ansioso de
                empezar, con muchisimas energias para aportar al equipo que me
                dé una oportunidad, y en donde pueda mostrar las ganas de
                aprender y de lograr mi trabajo de la mejor forma posible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordeon;
