import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import 'rxjs';

// redux settings
import greetingReducer from '../src/redux/greeting/reducer';
import { greetingEpic } from '../src/redux/greeting/actions';

const combinedEpics = combineEpics(greetingEpic);

const epicMiddleWare = createEpicMiddleware(combinedEpics);

const store = createStore(
  combineReducers({
    greetingReducer,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(epicMiddleWare),
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  )
);

export default store;
