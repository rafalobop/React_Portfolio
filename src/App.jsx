import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/app.css';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import ContactForm from './pages/ContactForm';
import Portfolio from './components/Portfolio';
import Technologies from './pages/Technologies';

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Contact" component={ContactForm} />
            <Route path="/Technologies" component={Technologies} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;
