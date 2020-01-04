import React, { Component } from 'react';

import AirporterLogo from '../assets/airporter_logo_white.svg';
import Home from './Home';

import styles from './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={styles.header}>
          <div className={styles.container}>
            <AirporterLogo />
            <div className={styles.navigational}>
              travel - hotel - rental cars
            </div>
          </div>
        </div>
        <Home />
      </div>
    );
  }
}

export default App;
