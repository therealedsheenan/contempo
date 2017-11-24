// @flow

import React from 'react';
import { connect } from 'react-redux';
import { requestGreeting } from '../../redux/greeting/actions';
import GreetingComponent from '../../components/Greeting/GreetingComponent';

const HomeContainer = () => <GreetingComponent />;

const mapStateToProps = ({ greetingReducer }: { greetingReducer: Object }) => {
  const { fetching, greeting } = greetingReducer;

  return {
    fetching,
    greeting
  };
};

const mapDispatchToProps = (dispatch: Function) => ({
  requestGreeting: () => dispatch(requestGreeting())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
