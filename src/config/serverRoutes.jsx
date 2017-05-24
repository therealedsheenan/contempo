
import React from 'react';
import { Route } from 'react-router-dom';
import creasync from 'creasync';

// react containers
import Root from '../components/Root/index';
import Navigation from '../components/Navigation/NavigationComponent';
// import Home from '../../containers/Home/HomeContainer';
// import StyleGuideComp from '../../containers/Styleguide/StyleguideContainer';

if (global) global.System = { import() {} };

const defaultError = () => (
  <div>Something went wrong...</div>
);

const defaultLoading = () => (
  <div>Component is loading...</div>
);

const routes = () => (
  <Root>
    <Route path="/" component={Navigation} />
    <Route
      exact
      path="/style"
      component={
        creasync({
          component: System.import('../containers/Styleguide/StyleguideContainer'),
          error: () => (<defaultError />),
          loading: () => (<defaultLoading />)
        })
      }
    />
    <Route
      exact
      path="/style"
      component={
        creasync({
          component: System.import('../containers/Home/HomeContainer'),
          error: () => (<defaultError />),
          loading: () => (<defaultLoading />)
        })
      }
    />
  </Root>
);

export default routes;
