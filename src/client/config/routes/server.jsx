/* eslint-disable */

import React from 'react';
import { Route } from 'react-router-dom';

// react containers
import Root from '../../components/Root/index';
import Navigation from '../../components/Navigation/NavigationComponent';
import Async from '../../components/AsyncComponent/AsyncComponent';
// import { asyncComponent } from 'react-async-component';

import Home from '../../containers/Home/HomeContainer';
import Styleguide from '../../containers/Styleguide/StyleguideContainer';



const routes = () => (
  <Root>
    <Route path="/" component={Navigation} />
    <Route exact path="/" component={Home}/>
    <Route exact path="/style" component={Styleguide}/>
  </Root>
);

export default routes;
