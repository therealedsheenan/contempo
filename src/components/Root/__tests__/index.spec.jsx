import React from 'react';
import renderer from 'react-test-renderer';

import Root from '../index';

const mockComponent = () => <div>My component.</div>;

test('Home existence', () => {
  const component = renderer
    .create(
      <Root>
        <mockComponent />
      </Root>
    )
    .toJSON();

  // correct home component
  expect(component).toMatchSnapshot();
});
