import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';

import Blog from './Blog';

import AirporterLogo from '../assets/airporter_logo_white.svg';

import styles from './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departureCity: '',
      departureDate: '',
      arrivalCity: '',
      returnDate: '',
      roundTrip: true,
      passengers: '1',
    };
  }

  renderForm() {
    return (
      <form className={styles.flightSubmission}>
        <div className={styles.flightSubmissionContainer}>
          <div className={styles.formTitle}>Search Travel Availability</div>
          <br/>
          <br/>
          <div className={styles.inputRow}>
            <div className={styles.inputColumn}>
              <div>Departure</div>
              <input
                className={styles.input}
                value={this.state.departureCity}
                onChange={event => this.setState({departureCity: event.currentTarget.value})}
                placeholder='San Francisco'
              />
            </div>
            <div className={styles.inputColumn}>
              <div>Arrival</div>
              <input
                className={styles.input}
                value={this.state.arrivalCity}
                onChange={event => this.setState({arrivalCity: event.currentTarget.value})}
                placeholder='San Diego'
              />
            </div>
          </div>
          <br/>
          <div className={styles.inputRow}>
            <div className={styles.inputColumn}>
              <div>Departure Date</div>
              <input
                className={styles.input}
                value={this.state.departureDate}
                onChange={event => this.setState({departureDate: event.currentTarget.value})}
                placeholder='1/21'
              />
            </div>
            <div className={styles.inputColumn}>
              <div>Return Date</div>
              <input
                className={styles.input}
                value={this.state.returnDate}
                onChange={event => this.setState({returnDate: event.currentTarget.value})}
                disabled={!this.state.roundTrip}
                placeholder='2/3'
              />
              <div>
                Round-Trip:
                <input
                  type="checkbox"
                  checked={this.state.roundTrip}
                  onChange={() => this.setState({roundTrip: !this.state.roundTrip})}
                />
              </div>
            </div>
          </div>
          <br/>
          <div>Passenger Count</div>
          <div className={styles.inputRow}>
            <i className={`fas fa-user ${styles.userIcon}`}></i>
            <input
              className={styles.input}
              value={this.state.passengers}
              onChange={event => this.setState({passengers: event.currentTarget.value})}
            />
          </div>
          <br/>
          <br/>
          <br/>
          <Link to={{pathname: "/travel_results", state: this.state}} className={styles.formSubmitButton}>Search</Link>
          <br/>
          <br/>
        </div>
      </form>
    );
  }
        
  render() {
    return (
      <div>
        <div className={styles.body}>
          <div className={styles.container}>
            <div className={styles.heroText}>The REVOLUTIONARY portal airport</div>
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
