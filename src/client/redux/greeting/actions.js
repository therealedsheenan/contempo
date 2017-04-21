import axios from 'axios';
import { API_URL } from '../../helpers/constants';
import * as type from './types';

export const requestGreeting = () => ({
  type: type.GET_GREETING
});

const getGreetingError = error => ({
  type: type.GET_GREETING_ERROR,
  error
});

const getGreetingSuccess = (payload) => {
  const hr = new Date().getHours();
  let greeting;

  if (hr >= 0 && hr <= 12) {
    greeting = payload.data.greetings[0];
  }

  if (hr >= 12 && hr <= 18) {
    greeting = payload.data.greetings[1];
  }

  if (hr >= 18 && hr <= 24) {
    greeting = payload.data.greetings[2];
  }

  return {
    type: type.GET_GREETING_SUCCESS,
    greeting
  };
};

export const greetingEpic = action$ =>
  action$
    .ofType(type.GET_GREETING)
    .mergeMap(() =>
      axios
        .get(`${API_URL}/data/greeting.json`)
        .then(res => getGreetingSuccess(res))
        .catch(error => getGreetingError(error))
    );
