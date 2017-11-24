// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import SomePage from '../SomePage';

test('Home existence', () => {
  const component = renderer.create(<SomePage />).toJSON();

  // correct home component
  expect(component).toMatchSnapshot();
});
