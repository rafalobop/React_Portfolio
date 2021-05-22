import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './components/Home';
import Particles from 'react-particles-js';
import Header from './components/Header';
import './css/app.css';
import About from './components/About';
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
        <Switch>{/* <Route exact path="/" component={Home} /> */}</Switch>
        <Header />
        <About />
      </Router>
    </div>
  );
};

export default App;
