/* eslint-disable */

import React from 'react';
import { Route } from 'react-router-dom';

// react containers
import Root from '../../components/Root/index';
import Navigation from '../../components/Navigation/NavigationComponent';
import Async from '../../components/AsyncComponent/AsyncComponent';
// import { asyncComponent } from 'react-async-component';

import Bundle from '../../components/BundleLoader/BundleLoader';

import Home from 'bundle-loader?lazy!../../containers/Home/HomeContainer';
import Styleguide from 'bundle-loader?lazy!../../containers/Styleguide/StyleguideContainer';
// import AsyncRoute from "../../components/AsyncRoute/AsyncRoute";

const routes = () => (
  <Root>
    <Route path="/" component={Navigation} />
    <Route
      exact
      path="/style"
      component={
        props => <Bundle {...props} component={Styleguide} />
      }
    />
    <Route
      exact
      path="/"
      component={
        props => <Bundle {...props} component={Home} />
      }
    />
    />
  </Root>
);

export default routes;
