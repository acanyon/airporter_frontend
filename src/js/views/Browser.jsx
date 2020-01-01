import React, { Component } from 'react';

const styles = {
  body: {
    display: 'flex',
    flexDirection: 'column',
    height: '1 1 auto',
    height: '100%',
  },
  urlBarContainer: {
    flex: '0 0 auto',
    backgroundColor: 'lightgray',
    borderBottom: '1px solid darkgray',
    display: 'flex',
  },
  urlBar: {
    flex: '1 1 auto',
  },
  submitButton: {
    width: '40px',
    textAlign: 'center',
    lineHeight: '30px',
  },
  browserContainer: {
    height: '100%',
    backgroundColor: 'white',
  },
  iframe: {
    height: '100%',
    width: '100%',
    border: 'none',
  },
};

class Browser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeUrl: 'http://hello.com',
      url: 'http://hello.com',
    };
  }

  onUrlBarChange(event) {
    this.setState({url: event.currentTarget.value});
  }

  submitUrl() {
    this.setState({activeUrl: this.state.url});
  }

  render() {
    return (
      <div style={styles.body}>
        <div style={styles.urlBarContainer}>
          <input onChange={this.onUrlBarChange.bind(this)} value={this.state.url} style={styles.urlBar} />
          <div
            style={styles.submitButton}
            className={'fas fa-arrow-right'}
            onClick={this.submitUrl.bind(this)}
          ></div>
        </div>
        <div style={styles.browserContainer}>
          <iframe src={this.state.activeUrl} style={styles.iframe}/>
        </div>
      </div>
    );
  }
}

export default Browser;
