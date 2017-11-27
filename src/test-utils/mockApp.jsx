// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { mount } from 'enzyme';

import AppRoutes from '../config/routes';
import createStore from '../config/store';

export default () => {
  const store = createStore;
  const history = createMemoryHistory({ initialEntries: ['/'] });
  const wrapper = mount(
    <Provider store={store}>
      <Router history={history}>
        <AppRoutes />
      </Router>
    </Provider>
  );
  return { history, store, wrapper };
};
