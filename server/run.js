require('babel-core/register')({
  // presets: ['es2015', 'react']
  presets: ['es2015', 'stage-0', 'latest', 'react']
});

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router');
const _ = require('lodash');
const fs = require('fs');
const App = require('./ServerApp.jsx').default;

const port = 8000;
const baseTemplate = fs.readFileSync('./server/markup/index.html');
const template = _.template(baseTemplate);

const server = express();

server.use('/', express.static('./public'));
server.use('/assets', express.static('./public/assets'));

server.use((req, res) => {
  const context = {};

  const body = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, { location: req.url, context }, React.createElement(App))
  );
  res.write(template({ body }));
  res.end();
});

/* eslint-disable no-console */
console.log(`listening on ${port}`);
server.listen(port);
