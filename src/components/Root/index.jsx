// @flow

import React from 'react';

// $FlowFixMe
import { ThemeProvider } from 'styled-components';

import theme from './theme';

// reset styles
import '../../styles/base';

const Root = (props: { children: Object }) =>
  <ThemeProvider theme={theme}>
    <main>
      {props.children}
    </main>
  </ThemeProvider>;

export default Root;
