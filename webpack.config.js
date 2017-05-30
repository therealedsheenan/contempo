// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Merge = require('webpack-merge');

const clientConfig = require('./tools/webpack/client-config');
const serverConfig = require('./tools/webpack/server-config');
const commonConfig = require('./tools/webpack/common-config');

// different webpack configurations on client and server
// the webpack.common.js file is the common webpack config for all of the environment
module.exports = function webpackConfig(env) {
  switch (env) {
    case 'server:dev':
      return Merge(commonConfig, serverConfig('DEV'));
    case 'server:prod':
      return Merge(commonConfig, serverConfig('PROD'));
    case 'client:dev':
      return Merge(commonConfig, clientConfig('DEV'));
    case 'client:prod':
      return Merge(commonConfig, clientConfig('PROD'));
    default:
      return commonConfig;
  }
};
