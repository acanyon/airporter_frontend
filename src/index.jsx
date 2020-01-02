import React from 'react';
import ReactDOM from 'react-dom';

import App from './js/views/App';
import styles from './style.scss';

function renderApp() {
  const wrapper = document.getElementById("airporter_app");
  wrapper ? ReactDOM.render(<App />, wrapper) : false;
}

renderApp();

if (module.hot) {
  if (module.hot.status() === 'ready') {
    renderApp();
  }
}
