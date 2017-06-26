// @flow

import React from 'react';
import { pure } from 'recompose';

import { StyledLink, Navigation } from './styles';

const NavigationComponent = () =>
  <Navigation>
    <StyledLink to="/">Home</StyledLink> | <StyledLink to="/style">Styleguide</StyledLink>
  </Navigation>;

export default pure(NavigationComponent);
