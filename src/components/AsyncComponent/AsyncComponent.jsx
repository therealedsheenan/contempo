/* eslint-disable react/prop-types */

import React from 'react';

import { asyncComponent } from 'react-async-component';

const Async = route => (
  asyncComponent({
    resolve: () => route,
    LoadingComponent: () => <h1>Loading...</h1>,
    ErrorComponent: ({ error }) => <div>{error.message}</div>
  })
);

export default Async;
