// @flow

import React from 'react';

import { asyncComponent } from 'react-async-component';

const Async = (props: { route: Function }) =>
  asyncComponent({
    resolve: () => props.route,
    LoadingComponent: () => <h1>Loading...</h1>,
    ErrorComponent: error => <div>{error.message}</div>
  });
export default Async;
