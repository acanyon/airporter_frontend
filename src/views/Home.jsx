import React, { Component } from 'react';

import AirporterLogo from '../assets/airporter_logo_white.svg';

import styles from './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departure: '',
      arrival: '',
      passengers: '',
    };
  }

  renderForm() {
    return (
      <div className={styles.flightSubmission}>
        <div className={styles.flightSubmissionContainer}>
          <div className={styles.formTitle}>Search Travel Availability</div>
          <br/>
          <div>Departure</div>
          <input
            className={styles.input}
            value={this.state.departure}
            onChange={event => this.setState({departure: event.currentTarget.value})}
          />
          <br/>
          <br/>
          <div>Arrival</div>
          <input
            className={styles.input}
            value={this.state.arrival}
            onChange={event => this.setState({arrival: event.currentTarget.value})}
          />
          <br/>
          <br/>
          <div>Passenger Count</div>
          <input
            className={styles.input}
            value={this.state.passengers}
            onChange={event => this.setState({passengers: event.currentTarget.value})}
          />
          <br/>
          <br/>
          <button className={styles.formSubmitButton}>GO!</button>
        </div>
      </div>
    );
  }
        
  render() {
    return (
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.column}>
            {this.renderForm()}
          </div>
          <div className={styles.column}>
            <div className={styles.heroText}>The reolvutionary portal airport.</div>
            <img className={styles.heroImage} src="/src/assets/womanTraveling.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
