import React from 'react';
import PropTypes from 'prop-types';

// Test usage of Async Component
import Async from '../Async/AsyncComponent';

import {
  Title,
  SubTitle,
  Wrapper
} from './styles';


const GreetingComponent = props => (
  <Wrapper>
    <Title>Good {props.message}!</Title>
    <SubTitle>Hello there! Welcome to contempo.</SubTitle>
    <img src="./assets/images/contempo.png" alt="" />
  </Wrapper>
  );

GreetingComponent.defaultProps = {
  message: 'No message passed.'
};

GreetingComponent.propTypes = {
  message: PropTypes.string
};

export default GreetingComponent;
