import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import Header from './components/Header';
import './css/app.css';
import Home from './pages/Home';
import About from './pages/About';
import ContactForm from './pages/ContactForm';
import Portfolio from './components/Portfolio';
import Technologies from './pages/Technologies';
import Footer from './components/Footer';
import Scroll from './components/Scroll';

const App = () => {
  return (
    <>
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
        <Scroll />
        <Header />
        <About />
        <ContactForm />
        <Technologies />
        <Footer />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={ContactForm} />
          <Route path="/Technologies" component={Technologies} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
