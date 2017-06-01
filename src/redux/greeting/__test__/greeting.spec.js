import 'rxjs';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

// modules
import { requestGreeting, greetingEpic } from '../actions';

import greetingReducer from '../reducer';
import * as type from '../types';

const combinedEpics = combineEpics(greetingEpic);

const epicMiddleware = createEpicMiddleware(combinedEpics);
const mockStore = configureMockStore([epicMiddleware]);

const initialState = {
  greeting: '',
  fetching: true
};

describe('Greeting Actions', () => {
  it('Should create action to request the greeting', () => {
    const expectedAction = {
      type: type.GET_GREETING
    };
    expect(requestGreeting()).toEqual(expectedAction);
  });
});

describe('Greeting reducer', () => {
  let store;
  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    nock.cleanAll();
    epicMiddleware.replaceEpic(greetingEpic);
  });

  it('Should show the initial state', () => {
    expect(greetingReducer(undefined, {})).toEqual(initialState);
  });

  it('Should show request a greeting', () => {
    expect(greetingReducer(initialState, requestGreeting())).toEqual({
      fetching: true,
      greeting: ''
    });
  });

  it('Should show the successful greeting', () => {
    const mockGreeting = {
      type: type.GET_GREETING_SUCCESS,
      greeting: {
        type: 1,
        content: 'Evening'
      }
    };

    store.dispatch(requestGreeting());
    store.dispatch(mockGreeting);

    expect(store.getActions()).toEqual([requestGreeting(), mockGreeting]);
  });
});
