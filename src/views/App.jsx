import React, { Component } from 'react';

import AirporterLogo from '../assets/airporter_logo_white.svg';
import Home from './Home';
import Blog from './Blog';
import TravelResults from './TravelResults';
import NoRoute404 from './NoRoute404';
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
              <Link to="/"><AirporterLogo /></Link>
              <div className={styles.navigational}>
                <Link to="/">travel</Link>
                <div className={styles.linkSpacer} />
                <Link to="/blog">blog</Link>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/travel_results">
                <TravelResults />
              </Route>
              <Route>
                <NoRoute404 />
              </Route>
            </Switch>
          </div>
          <div className={styles.footer}>
            Airporter
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
