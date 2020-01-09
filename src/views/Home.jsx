import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Blog from './Blog';

import AirporterLogo from '../assets/airporter_logo_white.svg';

import styles from './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departureCity: 'San Francisco',
      departureDate: '8/29/2020',
      returnCity: 'San Diego',
      returnDate: '8/31/2020',
      passengers: '1',
    };
  }

  renderForm() {
    return (
      <div className={styles.flightSubmission}>
        <div className={styles.flightSubmissionContainer}>
          <div className={styles.formTitle}>Search Travel Availability</div>
          <br/>
          <div>Departure</div>
          <div className={styles.inputRow}>
            <input
              className={styles.input}
              value={this.state.departureCity}
              onChange={event => this.setState({departureCity: event.currentTarget.value})}
            />
            <div className={styles.inputDateContainer}>
              <input
                className={styles.input}
                value={this.state.departureDate}
                onChange={event => this.setState({departureDate: event.currentTarget.value})}
              />
            </div>
          </div>
          <br/>
          <br/>
          <div>Return</div>
          <div className={styles.inputRow}>
            <input
              className={styles.input}
              value={this.state.returnCity}
              onChange={event => this.setState({returnCity: event.currentTarget.value})}
            />
            <div className={styles.inputDateContainer}>
              <input
                className={styles.input}
                value={this.state.returnDate}
                onChange={event => this.setState({returnDate: event.currentTarget.value})}
              />
            </div>
          </div>
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
          <br/>
          <Link to="/travel_results" className={styles.formSubmitButton}>GO!</Link>
          <br/>
          <br/>
        </div>
      </div>
    );
  }
        
  render() {
    return (
      <div>
        <div className={styles.body}>
          <div className={styles.container}>
            <div className={styles.heroText}>The reolvutionary portal airport</div>
            <div className={styles.column}>
              {this.renderForm()}
            </div>
          </div>
        </div>
        <Blog />
      </div>
    );
  }
}

export default Home;
