import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'
import App from './app.js'
require('./styles/main.scss')

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))
