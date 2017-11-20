// @flow

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
const path = require('path');
const { Helmet } = require('react-helmet');

// $FlowFixMe
const { ServerStyleSheet, StyleSheetManager } = require('styled-components');

// configs
const CONFIG = require('./tools/webpack/constants');
const commonConfig = require('./tools/webpack/common-config');
const serverConfig = require('./tools/webpack/server-config');
const App = require('./server/ServerApp.jsx').default;

const port = CONFIG.port;
const baseTemplate = fs.readFileSync('./server/markup/index.html');
// $FlowFixMe
const template = _.template(baseTemplate);

const server = express();

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(Merge(commonConfig, serverConfig('DEV')));
  server.use(
    webpackDevMiddleware(compiler, {
      publicPath: CONFIG.serverPublicPath // commonConfig.output.publicPath
    })
  );

  server.use(
    webpackHotMiddleware(compiler, {
      // removing node v8.0.0 error
      log: () => {},
      heartbeat: 2000
    })
  );
}

// static files
server.use('/', express.static(path.join(__dirname, 'public')));

// $FlowFixMe
server.use((req, res) => {
  const context = {};
  // server rendering with styled-components
  const sheet = new ServerStyleSheet();
  const body = ReactDOMServer.renderToString(
    sheet.collectStyles(
      React.createElement(
        StyleSheetManager,
        { sheet: sheet.instance },
        React.createElement(StaticRouter, { location: req.url, context }, React.createElement(App))
      )
    )
  );
  // helmet hooks
  const helmet = Helmet.renderStatic();
  // add css styles to template
  const css = sheet.getStyleTags(); // or sheet.getStyleElement()
  res.write(template({ body, css, helmet }));
  res.end();
});

/* eslint-disable no-console */
console.log(`Listening on: http://localhost:${port}`);

server.listen(port);
