import React from 'react';
import PropTypes from 'prop-types';

import Navigation from '../Navigation/NavigationComponent';

// reset styles
import '../../styles/base';

const Root = props => (
  <main>
    <Navigation />
    {props.children}
  </main>
);

Root.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Root;
