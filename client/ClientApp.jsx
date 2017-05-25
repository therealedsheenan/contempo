import React from 'react';
import { Provider } from 'react-redux';

// change routes to split or server
// import routes from './config/routes';
import routes from '../src/config/clientRoutes';
import store from '../src/config/store';

if (global) global.System = { import() {} };

const App = () => (
  <Provider store={store}>
    { routes() }
  </Provider>
);

export default App;
