import React from 'react';
import { Provider } from 'react-redux';
import routes from './config/routes';
import store from './config/store';

if (global) global.System = { import() {} };

const App = () => (
  <Provider store={store}>
    { routes() }
  </Provider>
);


export default App;
