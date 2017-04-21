import React from 'react';
import PropTypes from 'prop-types';

class AsyncRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  componentDidMount() {
    this.props.loadingPromise.then((module) => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }

  render() {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />;
    }
    return <h1>loading...</h1>;
  }
}

AsyncRoute.propTypes = {
  props: PropTypes.object.isRequired,
  loadingPromise: PropTypes.object.isRequired
};

export default AsyncRoute;
