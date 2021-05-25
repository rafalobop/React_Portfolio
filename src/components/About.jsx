import React from 'react';
import '../css/about.css';
import Accordeon from './Accordeon';
const About = () => {
  return (
    <div className="about-container">
      <h1>Acerca de mí</h1>
      <div className="accordeon-container">
        <Accordeon />
      </div>
    </div>
  );
};

export default About;
