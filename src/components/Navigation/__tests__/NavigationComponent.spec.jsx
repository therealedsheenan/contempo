import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
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

test('Link count', () => {
  const component = shallow(<NavigationComponent />);
  expect(component.find('a').root.length).toEqual(1);
});
