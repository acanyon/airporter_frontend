import React, { Component } from 'react';

import AirporterLogo from '../assets/airporter_logo_white.svg';
import Home from './Home';
import {
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

  renderTripTable(trips, {isDeparting, isCheckout}) {
    const {departingId, returningId} = this.state;
    return (
      <div>
        {!isCheckout ? (
          <div className={styles.title}>
            {isDeparting ? 'departing' : 'returning'}
          </div>
        ) : ''}
        <div className={styles.flights}>
          <table className={styles.table}>
            <tr>
              <th>num</th>
              <th>date</th>
              <th>time</th>
              <th>departing</th>
              <th>arriving</th>
              <th>price</th>
              {!isCheckout ? (
                <th></th>
              ) : ''}
            </tr>
            {trips.map((trip, i) => (
              <tr key={i}>
                <td>{trip.id}</td>
                <td>{trip.date}</td>
                <td>{trip.time}</td>
                <td>{trip.departing}</td>
                <td>{trip.arriving}</td>
                <td>${trip.price}</td>
                {!isCheckout ? (
                  <td className={styles.rightAlign}>
                    <div
                      className={`${styles.selectTrip} ${departingId === trip.id || returningId === trip.id ? styles.selected : ''}`}
                      onClick={() => this.onSelectTrip(trip.id, {isDeparting})}
                    >
                      {departingId === trip.id || returningId === trip.id ? 'Selected' : 'Select'}
                    </div>
                  </td>
                ) : ''}
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
        time: '10:10am',
        price: 65,
      },
      {
        id: 456,
        departing: 'San Diego',
        arriving: 'San Francisco',
        date: '4/20/20',
        time: '7:40pm',
        price: 80,
      },
      {
        id: 567,
        departing: 'San Diego',
        arriving: 'San Francisco',
        date: '4/20/20',
        time: '9:30',
        price: 110,
      },
      {
        id: 789,
        departing: 'San Francisco',
        arriving: 'San Diego',
        date: '5/1/20',
        time: '12:15pm',
        price: 60,
      },
      {
        id: 901,
        departing: 'San Francisco',
        arriving: 'San Diego',
        date: '5/1/20',
        time: '3:00pm',
        price: 75,
      },
    ];

    const departingTrips = trips.filter(trip => (trip.departing === 'San Diego'));
    const returningTrips = trips.filter(trip => (trip.departing === 'San Francisco'));


    return (
      <div className={styles.container}>
        <div className={styles.travelResults}>
          {this.renderTripTable(departingTrips, {isDeparting: true})}
          <br/>
          <br/>
          {this.renderTripTable(returningTrips, {isDeparting: false})}
        </div>
        <br />
        {this.state.departingId || this.state.returningId ? (
          <div className={styles.travelResults}>
            <div className={styles.title}>
              Confirm Travel
            </div>
            {this.renderTripTable(
              [...trips.filter(trip => trip.id === this.state.departingId),
                ...trips.filter(trip => trip.id === this.state.returningId)],
              {isCheckout: true}
            )}
            <br/>
            <br/>
            <div className={styles.rightAlign}>
              <Link className={styles.confirmTravel} to="/payment_details">Reserve Travel</Link>
            </div>
          </div>
        ) : ''}
      </div>
    );
  }
}

export default TravelResults;
