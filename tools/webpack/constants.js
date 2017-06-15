// @flow

const { resolve } = require('path');

module.exports = {
  app: resolve('../../src'),
  output: resolve(__dirname, '../../public'),
  port: 8000,
  context: resolve(__dirname, '../../'),
  clientEntry: resolve('./client/index.jsx'),
  serverEntry: resolve('./server/index.jsx')
};
