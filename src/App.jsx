import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Navbar>
      </Router>
    </div>
  );
};

export default App;
