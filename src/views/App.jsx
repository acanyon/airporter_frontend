import React, { Component } from 'react';

import AirporterLogo from '../assets/airporter_logo_white.svg';
import Home from './Home';
import TravelResults from './TravelResults';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import styles from './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.body}>
        <Router>
          <div className={styles.header}>
            <div className={styles.container}>
              <AirporterLogo />
              <div className={styles.navigational}>
                <Link to="/">travel</Link>
                - 
                <Link to="/hotels">hotel</Link>
                -
                <Link to="/rental_cars">rental cars</Link>
              </div>
            </div>
          </div>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/travel_results">
              <TravelResults />
            </Route>
          </Switch>
        </Router>
        <div className={styles.footer}>
          Airporter
        </div>
      </div>
    );
  }
}

export default App;
