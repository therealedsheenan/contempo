import React from 'react';

import { StyledLink, Navigation } from './styles';

const NavigationComponent = () => (
  <Navigation>
    <StyledLink to="/">Home</StyledLink> | <StyledLink to="/style">Styleguide</StyledLink>
  </Navigation>
);

export default NavigationComponent;
