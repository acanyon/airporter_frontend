import React, { Component } from 'react';

import AirporterLogo from '../assets/airporter_logo_white.svg';

import styles from './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderForm() {
    return (
      <div className={styles.flightSubmission}>
        <div className={styles.flightSubmissionContainer}>
          <div className={styles.formTitle}>Search Travel Availability</div>
          <br/>
          <div>Departure</div>
          <input className={styles.input} value="" onChange={() => {}} />
          <br/>
          <br/>
          <div>Arrival</div>
          <input className={styles.input} value="" onChange={() => {}} />
          <br/>
          <br/>
          <div>Passengers</div>
          <input className={styles.input} value="" onChange={() => {}} />
          <br/>
          <br/>
          <button className={styles.formSubmitButton}>GO!</button>
        </div>
      </div>
    );
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
        <div className={styles.body}>
          <div className={styles.container}>
            <div className={styles.column}>
              {this.renderForm()}
            </div>
            <div className={styles.column}>
              <img className={styles.heroImage} src="/src/assets/womanTraveling.jpg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
