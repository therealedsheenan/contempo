import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestGreeting } from '../../redux/greeting/actions';

import GreetingComponent from '../../components/Greeting/GreetingComponent';

class HomeContainer extends React.Component {
  componentDidMount() {
    this.props.requestGreeting();
  }

  render() {
    return <GreetingComponent message={this.props.greeting.content} />;
  }
}

HomeContainer.propTypes = {
  requestGreeting: PropTypes.func.isRequired,
  greeting: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired
};

const mapStateToProps = ({ greetingReducer }) => {
  const { fetching, greeting } = greetingReducer;

  return {
    fetching,
    greeting
  };
};

const mapDispatchToProps = dispatch => ({
  requestGreeting: () => dispatch(requestGreeting())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
