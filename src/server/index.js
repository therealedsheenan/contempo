const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router');
const _ = require('lodash');
const fs = require('fs');
const App = require('../client/App');

require('babel-register');

const port = 8000;
const baseTemplate = fs.readFileSync('./src/server/index.html');
const template = _.template(baseTemplate);


const server = express();

server.use('/public', express.static('./public'));
server.use('/assets', express.static('./public/assets'));

server.use((req, res) => {
  const context = {};
  const body = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  res.write(template({ body }));
  res.end();
});

console.log(`listening on${port}`);
server.listen(port);
