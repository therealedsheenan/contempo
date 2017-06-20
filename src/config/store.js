// @flow

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
// the only needed rx files for redux-observables
import 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toPromise';

// redux settings
import greetingReducer from '../redux/greeting/reducer';
import { greetingEpic } from '../redux/greeting/actions';

const combinedEpics = combineEpics(greetingEpic);

const epicMiddleWare = createEpicMiddleware(combinedEpics);

const store = createStore(
  combineReducers({
    greetingReducer,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(epicMiddleWare),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
);

export default store;
