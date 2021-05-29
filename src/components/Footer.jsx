import React from 'react';
import '../css/footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="links">
              <ul>
                <li>Github</li>
                <li>Instagram</li>
                <li>Linkedin</li>
              </ul>
            </div>
          </div>
          <div className="footer-center">
            <div className="content">
              <p>Todos los derechos reservados | 2020 | Rafael Lobo Plaza</p>
            </div>
          </div>
          <div className="footer-right">
            <div className="sites">
              <ul>Inicio</ul>
              <ul>Acerca de</ul>
              <ul>Portfolio</ul>
              <ul>Contacto</ul>
              <ul>Tecnologias</ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
