require('babel-register')

import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import _ from 'lodash'
import fs from 'fs'

const port = 8000
const baseTemplate = fs.readFileSync('./src/server/index.html')
const template = _.template(baseTemplate)
import App from '../client/app'
const server = express()

server.use('/public', express.static('./public'))

server.use((req, res) => {
  const context = {}
  let body = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )
  res.write(template({body: body}))
  res.end()
})

console.log('listening on' + port)
server.listen(port)
