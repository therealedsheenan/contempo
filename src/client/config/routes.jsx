import React from 'react';
import { Route } from 'react-router-dom';

// react containers
import Root from '../components/Root';
import Navigation from '../components/Navigation/NavigationComponent';
import Async from '../components/Async/AsyncComponent';

// manually importing the files
import '../containers/Home/HomeContainer';
import '../containers/Styleguide/StyleguideContainer';

const routes = () => (
  <Root>
    <Route path="/" component={Navigation} />
    <Route exact path="/" component={Async(System.import('../containers/Home/HomeContainer'))} />
    <Route exact path="/style" component={Async(System.import('../containers/Styleguide/StyleguideContainer'))} />
  </Root>
);

export default routes;
