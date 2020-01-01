import React, { Component } from 'react';

class UrlApp extends Component {
  render () {
    return (
      <div style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
        <iframe src={this.props.url} style={{width: '100%', height: '100%', border: 'none'}}></iframe>
      </div>
    );
  }
}

export default UrlApp;
