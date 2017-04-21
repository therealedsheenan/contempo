import React from 'react';
import PropTypes from 'prop-types';

import {
  Title,
  SubTitle,
  Wrapper
} from './styles';

const GreetingComponent = props => (
  <Wrapper>
    <Title>Good {props.message}!</Title>
    <SubTitle>Welcome to contempo!</SubTitle>
  </Wrapper>
  );

GreetingComponent.defaultProps = {
  message: 'No message passed.'
};

GreetingComponent.propTypes = {
  message: PropTypes.string
};

export default GreetingComponent;
