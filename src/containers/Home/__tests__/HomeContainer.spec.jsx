import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import HomeContainer from '../HomeContainer';
import store from '../../../config/store';

test('Home existence', () => {
  const component = renderer
    .create(
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    )
    .toJSON();

  // correct home component
  expect(component).toMatchSnapshot();
});
