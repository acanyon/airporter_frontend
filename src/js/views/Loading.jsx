import React, { Component } from 'react';

const styles = {
  body: {
    backgroundColor: 'rgba(255,255,255,80%)',
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: '99',
  },
  icon: {
    background: 'url("//cdn.trendclub.co/assets/TrendClubIcon-590a943b6838cdda1b2e4386fc81f1207ecf87d89028d40c6b6be75b85f12d9b.svg") bottom no-repeat',
    backgroundSize: '150px',
    margin: 'auto',
    height: '165px',
    marginBottom: '20px',
  },
  h1: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
};

class Loading extends Component {
  render() {
    return (
      <div style={styles.body}>
        <div>
          <div style={styles.icon}></div>
          <div style={styles.h1}>Trend Mobile Prototype</div>
          <div style={styles.h2}>Alyssa Canyon</div>
          <div style={styles.h2}>alysa@trendclub.co</div>
        </div>
      </div>
    );
  }
}

export default Loading;
