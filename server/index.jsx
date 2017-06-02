/* eslint global-require: "off"*/
// @flow

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// main app content
import ServerApp from './ServerApp';

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}

const renderApp = () => {
  render(
    <BrowserRouter key={Math.random()}>
      <ServerApp />
    </BrowserRouter>,
    document.getElementById('root')
  );
};
renderApp();

if (module.hot) {
  module.hot.accept('./ServerApp', () => {
    renderApp();
  });
}
