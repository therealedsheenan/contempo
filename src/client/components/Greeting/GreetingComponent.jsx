import React from 'react';
import PropTypes from 'prop-types';

import { Title, SubTitle } from './styles';

const GreetingComponent = props => (
  <div className="Greeting">
    <Title>Good {props.message}!</Title>
    <SubTitle>Welcome to contempo!</SubTitle>
  </div>
  );

GreetingComponent.defaultProps = {
  message: 'No message passed.'
};

GreetingComponent.propTypes = {
  message: PropTypes.string
};

export default GreetingComponent;
