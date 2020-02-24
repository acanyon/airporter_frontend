import React, { Component } from 'react';

import AirporterLogo from '../assets/airporter_logo_white.svg';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import styles from './TravelResults.scss';

class TravelResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departingId: null,
      returningId: null,
    };
  }

  onSelectTrip(id, {isDeparting}) {
    if (isDeparting) {
      this.setState({departingId: id});
    } else {
      this.setState({returningId: id});
    }
  }

  renderTripTable(trips, {isDeparting}) {
    return (
      <div>
        <div className={styles.title}>
          {isDeparting ? 'departing' : 'returning'}
        </div>
        <div className={styles.flights}>
          <table className={styles.table}>
            <tr>
              <th>num</th>
              <th>date</th>
              <th>time</th>
              <th>departing</th>
              <th>arriving</th>
              <th>price</th>
              <th></th>
            </tr>
            {trips.map((trip, i) => (
              <tr key={i}>
                <td>{trip.id}</td>
                <td>{trip.date}</td>
                <td>{trip.time}</td>
                <td>{trip.departing}</td>
                <td>{trip.arriving}</td>
                <td>${trip.price}</td>
                <td>
                  <div
                    className={styles.selectTrip}
                    onClick={() => this.onSelectTrip(trip.id, {isDeparting})}
                  >Select</div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }

  render() {
    const trips = [
      {
        id: 123,
        departing: 'San Diego',
        arriving: 'San Francisco',
        date: '4/20/20',
        time: '7:40',
        price: '65',
      },
      {
        id: 456,
        departing: 'San Diego',
        arriving: 'San Francisco',
        date: '4/20/20',
        time: '7:40',
        price: 65,
      },
    ];

    return (
      <div className={styles.container}>
        <div className={styles.travelResults}>
          {this.renderTripTable(trips, {isDeparting: true})}
          <br/>
          <br/>
          {this.renderTripTable(trips, {isDeparting: false})}
        </div>
        <br />
        {this.state.departingId ? (
          <div className={styles.travelResults}>
            {this.renderTripTable(
              trips.filter(trip => trip.id === this.state.departingId),
              {isDeparting: true}
            )}
          </div>
        ) : ''}
      </div>
    );
  }
}

export default TravelResults;
