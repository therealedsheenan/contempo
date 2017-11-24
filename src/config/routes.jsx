// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
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

const AsyncSomePage = Loadable({
  loader: () => import('../containers/SomePage/SomePage'),
  loading: props => <LoadingComponent {...props} />
});

const AsyncHome = Loadable({
  loader: () => import('../containers/Home/HomeContainer'),
  loading: props => <LoadingComponent {...props} />
});


/* eslint-disable */
const routes = () => (
  <Route
    render={props => (
      <Root>
        <Navigation />
        <section className="fix-container">
          <Switch location={props.location}>
            <Route exact path="/style" component={AsyncSomePage} />
            <Route exact path="/" component={AsyncHome} />
          </Switch>
        </section>
      </Root>
    )}
  />
);

export default routes;
