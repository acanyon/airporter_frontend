import React, { Component } from 'react';
import APPS, { appLookup } from '../appConfig';

import UrlApp from './UrlApp';
import App404 from './App404';
import Loading from './Loading';

const styles = {
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderLogo() {
    return (
      <svg>
        <title>airporter_logo_2</title>
        <path d="M82.12,91s-4.08.41-4.93-16.64C76.67,63.88,86.87,5,78.6,4s-37.28,73.7-37.28,73.7S31.7,98,16,90.27c-22.5-11-8.81-34.3,3.67-36.2,1-.15,84.4-14.4,84.4-14.4" transform="translate(0.02 0)" style="fill:none;stroke:#231f20;stroke-miterlimit:10;stroke-width:8px"/>
        <polygon points="94.84 37.19 96.54 44.57 103.05 39.46 94.84 37.19" style="fill:none;stroke:#231f20;stroke-miterlimit:10;stroke-width:9px"/>
        <path d="M96.69,87.67V52.82H103V87.67H96.69Z" transform="translate(0.02 0)" style="fill:#231f20;stroke:#231f20;stroke-miterlimit:10"/>
        <path d="M113.51,63.69c0-4.1-.07-7.63-0.29-10.87h5.54L119,59.66h0.29c1.58-4.68,5.4-7.63,9.65-7.63a6.83,6.83,0,0,1,1.8.22v6a9.48,9.48,0,0,0-2.16-.22c-4.46,0-7.63,3.38-8.5,8.14a17.9,17.9,0,0,0-.29,3v18.5h-6.26v-24Z" transform="translate(0.02 0)" style="fill:#231f20;stroke:#231f20;stroke-miterlimit:10"/>
        <path d="M137.37,64.2c0-4.46-.14-8.07-0.29-11.38h5.69l0.29,6h0.14A13.7,13.7,0,0,1,155.58,52c8.42,0,14.76,7.13,14.76,17.71,0,12.53-7.63,18.72-15.84,18.72-4.61,0-8.64-2-10.73-5.47h-0.14V102h-6.26V64.2h0Zm6.26,9.29a14.31,14.31,0,0,0,.29,2.59,9.78,9.78,0,0,0,9.5,7.42C160.12,83.5,164,78,164,70c0-7-3.67-13-10.37-13A10.11,10.11,0,0,0,144,64.89a10.29,10.29,0,0,0-.43,2.59v6h0Z" transform="translate(0.02 0)" style="fill:#231f20;stroke:#231f20;stroke-miterlimit:10"/>
        <path d="M209.88,70c0,12.89-8.93,18.51-17.35,18.51-9.43,0-16.71-6.91-16.71-17.93,0-11.67,7.63-18.51,17.28-18.51C203.11,52,209.88,59.27,209.88,70Zm-27.65.31c0,7.63,4.39,13.39,10.58,13.39S203.39,78,203.39,70.12c0-5.91-3-13.39-10.44-13.39S182.23,63.69,182.23,70.27Z" transform="translate(0.02 0)" style="fill:#231f20;stroke:#231f20;stroke-miterlimit:10"/>
        <path d="M217.87,63.69c0-4.1-.07-7.63-0.29-10.87h5.54l0.22,6.84h0.29C225.21,55,229,52,233.28,52a6.83,6.83,0,0,1,1.8.22v6a9.48,9.48,0,0,0-2.16-.22c-4.46,0-7.63,3.38-8.5,8.14a17.9,17.9,0,0,0-.29,3v18.5h-6.26v-24Z" transform="translate(0.02 0)" style="fill:#231f20;stroke:#231f20;stroke-miterlimit:10"/>
        <path d="M250.77,42.81v10h9.07v4.82h-9.07V76.44c0,4.32,1.22,6.77,4.75,6.77a14.1,14.1,0,0,0,3.67-.43l0.32,4.75a15.51,15.51,0,0,1-5.62.86,8.78,8.78,0,0,1-6.84-2.66c-1.8-1.87-2.45-5-2.45-9.07v-19h-5.4V52.82h5.4V44.47Z" transform="translate(0.02 0)" style="fill:#231f20;stroke:#231f20;stroke-miterlimit:10"/>
        <path d="M270.07,71.4c0.14,8.57,5.62,12.1,12,12.1a22.92,22.92,0,0,0,9.65-1.8l1,4.57a28.22,28.22,0,0,1-11.59,2.16c-10.73,0-17.14-7.06-17.14-17.57s6.19-18.79,16.35-18.79c11.38,0,14.4,10,14.4,16.42a23.86,23.86,0,0,1-.22,3H270.07V71.4Zm18.58-4.54c0.07-4-1.66-10.3-8.79-10.3-6.41,0-9.22,5.9-9.72,10.3h18.51Z" transform="translate(0.02 0)" style="fill:#231f20;stroke:#231f20;stroke-miterlimit:10"/>
        <path d="M302.61,63.69c0-4.1-.07-7.63-0.29-10.87h5.54l0.22,6.84h0.29C310,55,313.77,52,318,52a6.83,6.83,0,0,1,1.8.22v6a9.48,9.48,0,0,0-2.16-.22c-4.46,0-7.63,3.38-8.5,8.14a17.9,17.9,0,0,0-.29,3v18.5h-6.26v-24Z" transform="translate(0.02 0)" style="fill:#231f20;stroke:#231f20;stroke-miterlimit:10"/>
      </svg>
    );
  }

  render() {
    return (
      <div>
        <div style={styles.header}>
          {this.renderLogo()}
        </div>
      </div>
    );
  }
}

export default App;
