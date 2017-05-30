/* eslint global-require: "off"*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// main app content
import ServerApp from './ServerApp';

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}

ReactDOM.render(
  <BrowserRouter>
    <ServerApp />
  </BrowserRouter>,
  document.getElementById('root')
);
