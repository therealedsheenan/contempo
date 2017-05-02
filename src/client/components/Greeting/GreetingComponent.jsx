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
    <SubTitle>Hello there! Welcome to contempo.</SubTitle>
    <div>
      <img style={{ width: '100%' }} src="./assets/images/contempo.png" alt="" />
    </div>
  </Wrapper>
  );

GreetingComponent.defaultProps = {
  message: 'No message passed.'
};

GreetingComponent.propTypes = {
  message: PropTypes.string
};

export default GreetingComponent;
