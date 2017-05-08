import React from 'react';
import PropTypes from 'prop-types';

class Bundle extends React.Component {

  constructor(props) {
    super(props);
    this.state = { mod: null };
  }

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      mod: null
    });
    props.load((mod) => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod
      });
    });
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null;
  }
}

Bundle.propTypes = {
  load: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
};

const BundleComponent = props => (
  <Bundle load={props.component}>
    {Component => <Component {...props} />}
  </Bundle>
);

BundleComponent.propTypes = {
  component: PropTypes.func.isRequired
};

export default BundleComponent;
