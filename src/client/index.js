import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import { Router, IndexRoute, Route } from 'react-router'
import { Provider } from 'react-redux'
import enLocaleData from 'react-intl/locale-data/en'
import jaLocaleData from 'react-intl/locale-data/ja'
import {
    injectIntl,
    IntlProvider,
    FormattedRelative,
    addLocaleData,
    FormattedMessage
} from 'react-intl'

//configurations
import getRoutes from './config/routes.js'
import getRoutesTranslate from '../translation/config/routes.js'
import { store } from './config/store.js'

const App = React.createClass({
  render () {
    return (
      <Provider store={ store }>
        <Router history={ browserHistory }>
          { getRoutes() }
        </Router>
      </Provider>
    )
  }
})

module.exports = App
