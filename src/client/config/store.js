import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'

//redux settings
// import * as reducers from '../redux/modules'
import greeting from '../redux/modules'

let node_env = 'development'

const store = createStore(
    combineReducers({
        greeting,
        routing: routerReducer}),
    compose(
        applyMiddleware(thunk),
        node_env !== "production" ? window.devToolsExtension() : (f) => f
    )
)

module.exports = { store }
