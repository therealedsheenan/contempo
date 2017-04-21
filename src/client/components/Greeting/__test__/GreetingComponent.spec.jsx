import React from 'react';
import renderer from 'react-test-renderer';
import GreetingComponent from '../GreetingComponent';

test('Link changes the class when hovered', () => {
  const component = renderer.create(<GreetingComponent />).toJSON();
  expect(component).toMatchSnapshot();
});
