import React from 'react';
import '../css/about.css';
import Accordeon from './Accordeon';
import Portfolio from '../components/Portfolio';
const About = () => {
  return (
    <div className="about-container">
      <h1>Acerca de mí</h1>
      <div className="accordeon-container">
        <Accordeon />
      </div>
      <Portfolio />
    </div>
  );
};

export default About;
