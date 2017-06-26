// @flow

import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';

// react containers
import Root from '../components/Root/index';
import Navigation from '../components/Navigation/NavigationComponent';

const LoadingComponent = (props: { isLoading: boolean, timedOut: boolean, error: boolean }) => {
  if (props.isLoading) {
    // While our other component is loading...
    return props.timedOut ? <div>loader timed out!</div> : <div>loading...</div>;
  }
  if (props.error) {
    // If something went wrong
    return <div>Something went wrong...</div>;
  }
  return null;
};

const AsyncStyleGuide = Loadable({
  loader: () => import('../containers/Styleguide/StyleguideContainer'),
  loading: props => <LoadingComponent {...props} />
});

const AsyncHome = Loadable({
  loader: () => import('../containers/Home/HomeContainer'),
  loading: props => <LoadingComponent {...props} />
});

const routes = () =>
  <Root>
    <Route path="/" component={Navigation} />
    <Route exact path="/style" component={AsyncStyleGuide} />
    <Route exact path="/" component={AsyncHome} />
  </Root>;

export default routes;
