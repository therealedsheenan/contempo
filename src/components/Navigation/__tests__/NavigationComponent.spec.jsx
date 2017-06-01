// @flow

import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

// components
import NavigationComponent from '../NavigationComponent';

test('Navigation existence', () => {
  const component = renderer
    .create(
      <Router>
        <NavigationComponent />
      </Router>
    )
    .toJSON();
  expect(component).toMatchSnapshot();
});
