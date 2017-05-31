import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from './theme';

// reset styles
import '../../styles/base';

const Root = props => (
  <ThemeProvider theme={theme}>
    <main>
      {props.children}
    </main>
  </ThemeProvider>
);

Root.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default Root;
