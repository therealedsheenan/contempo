/* eslint-disable */

import React from 'react';
import { Route } from 'react-router-dom';

// react containers
import Root from '../../components/Root/index';
import Navigation from '../../components/Navigation/NavigationComponent';
import Async from '../../components/AsyncComponent/AsyncComponent';
// import { asyncComponent } from 'react-async-component';

import AsyncRoute from '../../components/AsyncRoute/AsyncRoute';

const routes = () => (
  <Root>
    <Route path="/" component={Navigation} />
    <Route
      exact
      path="/style"
      component={
        props => <AsyncRoute
          {...props}
          loadingPromise={System.import('../../containers/Styleguide/StyleguideContainer')} />
      }
    />
    <Route
      exact
      path="/"
      component={
        props => <AsyncRoute
          {...props}
          loadingPromise={System.import('../../containers/Home/HomeContainer')} />
      }
    />
    />
  </Root>
);

export default routes;
