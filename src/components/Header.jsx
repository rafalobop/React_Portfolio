import React from 'react';
import '../css/header.css';
import Fondo from '../images/fondo.png';
import Typed from 'react-typed';

const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="col-lg-6 col-md-12 left">
          <div className="img-container">
            <img className="header-img" src={Fondo} alt="fondo" />
          </div>
        </div>
        <div className="col-6 right">
          <div className="main-info">
            <h1>Lobo Plaza Rafael</h1>
            <Typed
              className="typed-text"
              strings={['Full Stack Developer', 'Front End Developer']}
              typeSpeed={40}
              backSpeed={60}
              backDelay={1000}
              loop={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
