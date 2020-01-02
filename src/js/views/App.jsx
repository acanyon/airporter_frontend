import React, { Component } from 'react';

import AirporterLogo from '../../assets/airporter_logo_white.svg';

const styles = {
  header: {
    backgroundColor: '#D71717',
    padding: '20px 100px 20px',
    borderBottom: '5px solid #a91212',
    display: 'flex',
    justifyContent: 'space-between',
  },
  body: {
    marginTop: '100px',
  },
  container: {
    display: 'flex',
    width: '800px',
    justifyContent: 'space-between',
    margin: 'auto',
  },
  navigational: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '1px',
    verticalAlign: 'bottom',
    paddingTop: '27px',
  },
  column: {
    width: '50%',
  },
  flightSubmission: {
    backgroundColor: '#D71717',
    padding: '20px',
  },
  flightSubmissionContainer: {
    background: 'white',
    border: '5px solid #a91212',
    padding: '15px',
  },
  formTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  input: {
    width: '100%',
    boxSizing: 'borderBox',
    border: '1px solid black',
  },
  formSubmitButton: {
    border: 'none',
    backgroundColor: '#D71717',
    color: 'white',
    width: '100%',
    cursor: 'pointer',
    fontWeight: '600',
    letterSpacing: '1px',
    minWidth: '105px',
    outline: 'none',
    padding: '10px 20px',
    position: 'relative',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  heroImage: {
    width: '100%',
    width: '100%',
    marginTop: '-90px',
    marginLeft: '50px',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderForm() {
    return (
      <div style={styles.flightSubmission}>
        <div style={styles.flightSubmissionContainer}>
          <div style={styles.formTitle}>Search Travel Availability</div>
          <br/>
          <div>Departure</div>
          <input style={styles.input} value="" onChange={() => {}} />
          <br/>
          <br/>
          <div>Arrival</div>
          <input style={styles.input} value="" onChange={() => {}} />
          <br/>
          <br/>
          <div>Passengers</div>
          <input style={styles.input} value="" onChange={() => {}} />
          <br/>
          <br/>
          <button style={styles.formSubmitButton}>GO!</button>
        </div>
      </div>
    );
  }
        
  render() {
    return (
      <div>
        <div style={styles.header}>
          <div style={styles.container}>
            <AirporterLogo />
            <div style={styles.navigational}>
              travel - hotel - rental cars
            </div>
          </div>
        </div>
        <div style={styles.body}>
          <div style={styles.container}>
            <div style={styles.column}>
              {this.renderForm()}
            </div>
            <div style={styles.column}>
              <img style={styles.heroImage} src="/src/assets/womanTraveling.jpg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
