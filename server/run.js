// require('babel-core/register')({
//   // presets: ['es2015', 'react']
//   presets: ['es2015', 'stage-0', 'latest', 'react']
// });
require('babel-register');

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router');
const _ = require('lodash');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const fs = require('fs');
const webpack = require('webpack');
const Merge = require('webpack-merge');

const commonConfig = require('../tools/webpack/common-config');
const serverConfig = require('../tools/webpack/server-config');
const App = require('./ServerApp.jsx').default;

const compiler = webpack(Merge(commonConfig, serverConfig('DEV')));

const port = 8000;
const baseTemplate = fs.readFileSync('./server/markup/index.html');
const template = _.template(baseTemplate);

const server = express();

if (process.env.NODE_ENV === 'development') {
  server.use(
    webpackDevMiddleware(compiler, {
      publicPath: commonConfig.output.publicPath
    })
  )

  server.use(webpackHotMiddleware(compiler));
}

server.use('/', express.static('./public'));
server.use('/assets', express.static('./public/assets'));

server.use((req, res) => {
  const context = {};

  const body = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, { location: req.url, context }, React.createElement(App))
  );

  if (context.url) {
    res.redirect(301, context.url);
  }

  res.write(template({ body }));
  res.end();
});

/* eslint-disable no-console */
console.log(`listening on ${port}`);
server.listen(port);
