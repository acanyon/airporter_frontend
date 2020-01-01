import React from 'react';
import ReactDOM from 'react-dom';

import App from './js/views/App';

function renderApp() {
  const wrapper = document.getElementById("trend_app");
  wrapper ? ReactDOM.render(<App />, wrapper) : false;
}

renderApp();

if (module.hot) {
  if (module.hot.status() === 'ready') {
    renderApp();
  }
}
