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
    return <div>Loading...</div>;
  }
}

AsyncRoute.propTypes = {
  props: PropTypes.shape({
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object
  }).isRequired,
  loadingPromise: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]).isRequired
};

export default AsyncRoute;
