import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import Header from './components/Header';
import './css/app.css';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Portfolio from './components/Portfolio';
import Technologies from './components/Technologies';

const App = () => {
  return (
    <div>
      <Router>
        <Particles
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
            },
          }}
        />
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={ContactForm} />
          <Route path="/technologies" component={Technologies} />
        </Switch>
        <Header />
        <About />
        <ContactForm />
        <Technologies />
      </Router>
    </div>
  );
};

export default App;
