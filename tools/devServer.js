// @flow

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server'); // eslint-disable-line

const CONFIG = require('./webpack/constants');

const webpackConfig = require('../webpack.config');

// merge the common-config to client-config
const compiler = webpack(webpackConfig('client:dev'));

// important settings for webpack-dev-server and webpack-dashboard
const server = new WebpackDevServer(compiler, {
  contentBase: CONFIG.output,
  port: CONFIG.port,
  hot: true,
  quiet: true, // lets WebpackDashboard do its thing
  historyApiFallback: true
});

server.listen(CONFIG.port);
