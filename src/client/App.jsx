import React from 'react';
import { Provider } from 'react-redux';
// change routes to split or server
import routes from './config/router';
// import routes from './config/routes/server';
import store from './config/store';

if (global) global.System = { import() {} };

const App = () => (
  <Provider store={store}>
    { routes() }
  </Provider>
);

export default App;
