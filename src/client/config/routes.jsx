import React from 'react';
import { Route } from 'react-router-dom';

// react containers
import Root from '../components/Root';
import AsyncRoute from '../components/AsyncRoute/AsyncRoute';
import Navigation from '../components/Navigation/NavigationComponent';

const routes = () => (
  <Root>
    <Route path="/" component={Navigation} />
    <Route
      strict exact path="/" render={props => (
        <AsyncRoute
          props={props}
          loadingPromise={
            System.import('../containers/Home/HomeContainer.jsx')
          }
        />
      )}
    />

    <Route
      strict exact path="/style" render={props => (
        <AsyncRoute
          props={props}
          loadingPromise={
          System.import('../containers/Styleguide/StyleguideContainer.jsx')
        }
        />
      )}
    />
  </Root>
);

export default routes;
