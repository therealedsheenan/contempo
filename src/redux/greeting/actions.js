// @flow

import axios from 'axios';

import { API_URL } from '../../helpers/constants';
import * as type from './types';

export const requestGreeting = () => ({
  type: type.GET_GREETING
});

const getGreetingError = (error: Object) => ({
  type: type.GET_GREETING_ERROR,
  error
});

const getGreetingSuccess = (payload: Object) => {
  const hr = new Date().getHours();
  let greeting;

  if (hr >= 0 && hr <= 12) {
    greeting = payload.data.greeting[0];
  }

  if (hr >= 12 && hr <= 18) {
    greeting = payload.data.greeting[1];
  }

  if (hr >= 18 && hr <= 24) {
    greeting = payload.data.greeting[2];
  }

  return {
    type: type.GET_GREETING_SUCCESS,
    greeting
  };
};

export const greetingEpic = (action$: Object) =>
  action$
    .ofType(type.GET_GREETING)
    .mergeMap(() =>
      axios
        .get(`${API_URL}/assets/data/greeting.json`)
        .then(res => getGreetingSuccess(res))
        .catch(error => getGreetingError(error))
    );
