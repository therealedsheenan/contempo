// @flow

import * as type from './types';

const initialState = {
  greeting: '',
  fetching: true
};

const greetingReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case type.GET_GREETING:
      return Object.assign({}, state, {
        fetching: true
      });
    case type.GET_GREETING_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        fetching: false
      });
    case type.GET_GREETING_SUCCESS:
      return Object.assign(
        {},
        {
          fetching: false,
          error: '',
          greeting: action.greeting
        }
      );
    default:
      return state;
  }
};

export default greetingReducer;
