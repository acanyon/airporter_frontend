import React, { Component } from 'react';

import AirporterLogo from '../assets/airporter_logo_white.svg';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import styles from './PaymentDetails.scss';

class PaymentDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.paymentDetails}>Payment Details</div>
      </div>
    );
  }
}

export default PaymentDetails;
