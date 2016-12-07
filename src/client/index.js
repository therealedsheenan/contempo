import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'

// configurations
import getRoutes from './config/routes.js'
// import getRoutesTranslate from '../translation/config/routes.js'
import { store } from './config/store.js'

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          { getRoutes() }
        </Router>
      </Provider>
    )
  }
})

module.exports = App
