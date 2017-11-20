// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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

// import HomeContainer from '../containers/Home/HomeContainer';
// import StyleguideContainer from '../containers/Styleguide/StyleguideContainer';

/* eslint-disable */
const routes = () => (
  <Route
    render={props => (
      <Root>
        <Navigation />
        <TransitionGroup>
          <CSSTransition key={props.location.pathname} classNames="fade" timeout={1000} mountOnEnter unmountOnExit>
            <section className="fix-container">
              <Switch location={props.location}>
                <Route exact path="/style" component={AsyncStyleGuide} />
                <Route exact path="/" component={AsyncHome} />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </Root>
    )}
  />
);

export default routes;
