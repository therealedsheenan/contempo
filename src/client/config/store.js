import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux'
import { createEpicMiddleware } from 'redux-observable'

// redux settings
import greetingReducer, { greetingEpic } from '../redux/modules/greeting'

const epicMiddleWare = createEpicMiddleware(greetingEpic)

export const store = createStore(
  combineReducers({
    greetingReducer,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(epicMiddleWare),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
  )
)

