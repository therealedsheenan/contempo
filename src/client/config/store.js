import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux'

// redux settings
// import * as reducers from '../redux/modules'
import greeting from '../redux/modules'

let nodeEnv = 'development'

const store = createStore(
  combineReducers({
    greeting,
    routing: routerReducer}),
  compose(
    applyMiddleware(thunk),
    nodeEnv !== 'production' ? window.devToolsExtension() : (f) => f
  )
)

module.exports = { store }
