
import React from 'react';
import { Route } from 'react-router-dom';

// react containers
import Root from '../../../src/components/Root/index';
import Navigation from '../../../src/components/Navigation/NavigationComponent';
import Home from '../../../src/containers/Home/HomeContainer';
import StyleGuide from '../../../src/containers/Styleguide/StyleguideContainer';

const routes = () => (
  <Root>
    <Route path="/" component={Navigation} />
    <Route exact path="/style" component={StyleGuide} />
    <Route exact path="/" component={Home} />
  </Root>
);

export default routes;
