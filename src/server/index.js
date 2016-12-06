import getRoutes from '../client/config/routes.js'
import { store } from '../client/config/store.js'
import express from 'express'
import React from 'react'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'
import fs from 'fs'
import { renderToString } from 'react-dom/server'
import { sync as globSync } from 'glob'
import * as path from 'path'

const template = fs.readFileSync('./index.html')
const port = 5000

const app = express()

app.use('/public', express.static('./public'))

app.use((req, res) => {
    match({ routes: getRoutes(), location: req.url  }, (error, redirectLocation, renderProps) => {
        if ( error ) {
            res.status( 500 ).send( error.message )
            console.log( error.message );
        } else if ( redirectLocation ) {
            //redirect URL
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if ( renderProps ) {
            // render react to string
            const content = renderToString(
                React.createElement(
                    Provider,
                    { store },
                    React.createElement(
                        RouterContext,
                        renderProps
                    )
                )
            )
            res.status(200).send(template({ content }))
        } else {
            //cannot find URL
            res.status( 404 ).send('Not Found')
        }
    })
});

console.log('listening on port ' + port)
app.listen(port)
