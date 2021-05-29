import React from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-left">
            <div className="links">
              <ul>
                <li>
                  <a href="http://github.com/rafalobop">
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a href="http://instagram.com/rafalobop">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/rafael-lobo-plaza/">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-center">
            <div className="footer-content">
              <p>
                Todos los derechos reservados | 2020 <br /> Rafael Lobo Plaza
              </p>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-right">
            <div className="sites">
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/about">Acerca de</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/contact">Contacto</Link>
                </li>
                <li>
                  <Link to="/technologies">Tecnologias</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
