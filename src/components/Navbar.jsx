import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light nav-layout"
        id="home"
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} className="toggle-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
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
            <li className="nav-item">
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
            <li className="nav-item">
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
            <li className="nav-item">
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
      </nav>
    </>
  );
};

export default Navbar;
