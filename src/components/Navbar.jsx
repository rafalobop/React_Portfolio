import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light nav-layout">
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
              <Link className="nav-link" to="/About">
                Acerca de
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-i" to="/Technologies">
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
