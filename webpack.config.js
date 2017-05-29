// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Merge = require('webpack-merge');
const common = require('./common.js');
const clientConfig = require('./client/bundleConfig');
const serverConfig = require('./server/bundleConfig');

// different webpack configurations on client and server
// the webpack.common.js file is the common webpack config for all of the environment
module.exports = function (env) {
  switch (env) {
    case 'server-dev':
      return Merge(common, serverConfig('DEV'));
    case 'server-prod':
      return Merge(common, serverConfig('PROD'));
    case 'client-dev':
      return Merge(common, clientConfig('DEV'));
    case 'client-prod':
      return Merge(common, clientConfig('PROD'));
    default:
      return common;
  }
};
