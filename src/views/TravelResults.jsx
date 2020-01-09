import React, { Component } from 'react';

import AirporterLogo from '../assets/airporter_logo_white.svg';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import styles from './TravelResults.scss';

class TravelResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Travel results.
      </div>
    );
  }
}

export default TravelResults;
