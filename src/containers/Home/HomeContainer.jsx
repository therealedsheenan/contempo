// @flow

import React from 'react';
import { connect } from 'react-redux';
import { requestGreeting } from '../../redux/greeting/actions';
import GreetingComponent from '../../components/Greeting/GreetingComponent';

class HomeContainer extends React.Component {
  componentWillMount() {
    // this.props.requestGreeting();
  }

  props: {
    // requestGreeting: Function,
    greeting: Object
  };

  render() {
    return <GreetingComponent message={this.props.greeting.content} />;
  }
}

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
