// @flow

import React from 'react';

class AsyncRoute extends React.Component {
  state = {
    loaded: false
  };

  componentDidMount() {
    this.props.loadingPromise.then(module => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }

  component: Function;

  props: {
    loadingPromise: Function,
    props: Object
  };

  render() {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />;
    }
    return <div>Loading...</div>;
  }
}

export default AsyncRoute;
