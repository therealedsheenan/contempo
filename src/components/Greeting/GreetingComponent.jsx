// @flow

import React from 'react';
import { Title, SubTitle, Wrapper } from './styles';

const GreetingComponent = ({ message }: { message?: string }) =>
  <Wrapper>
    <Title>Good {message}</Title>
    <SubTitle>Welcome to</SubTitle>
    <div>
      <img style={{ width: '100%' }} src="./assets/images/contempo.png" alt="" />
    </div>
  </Wrapper>;

GreetingComponent.defaultProps = {
  message: 'Day!'
};

export default GreetingComponent;
