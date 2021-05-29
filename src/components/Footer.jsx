import React from 'react';
import '../css/footer.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
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
                  <a href="http://wa.link/9cxpdj">
                    <FaWhatsapp />
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
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link"
                    activeClass="active"
                    to="tech"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Tecnologias
                  </Link>
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
