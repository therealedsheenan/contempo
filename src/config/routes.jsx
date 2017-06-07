// @flow

import React from 'react';
import { Route } from 'react-router-dom';
import creasync from 'creasync';

// react containers
import Root from '../components/Root/index';
import Navigation from '../components/Navigation/NavigationComponent';

const defaultError = () => <div>Something went wrong...</div>;
const defaultLoading = () => <div>Component is loading...</div>;

const routes = () => (
  <Root>
    <Route path="/" component={Navigation} />

    <Route
      exact
      path="/style"
      component={creasync({
        component: import('../containers/Styleguide/StyleguideContainer'),
        error: () => <defaultError />,
        loading: () => <defaultLoading />
      })}
    />
    <Route
      exact
      path="/"
      component={creasync({
        component: import('../containers/Home/HomeContainer'),
        error: () => <defaultError />,
        loading: () => <defaultLoading />
      })}
    />
  </Root>
);

export default routes;
