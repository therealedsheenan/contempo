import {Observable} from 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax'

const GET_GREETING = 'GREETING_REQUEST'
const GET_GREETING_ERROR = 'GREETING_ERROR'
const GET_GREETING_SUCCESS = 'GREETING_SUCCESS'

const initialState = {
  greeting: '',
  fetching: true
}

export const requestGreeting = () => {
  return {
    type: GET_GREETING
  }
}

const getGreetingError = () => Observable.of({
  type: GET_GREETING_ERROR,
  error: 'Loading Error.'
})

const getGreetingSuccess = (payload) => {
  let hr = new Date().getHours()
  let greeting

  if (hr >= 0 && hr <= 12) {
    greeting = payload.greetings[0]
  }

  if (hr >= 12 && hr <= 18) {
    greeting = payload.greetings[1]
  }

  if (hr >= 18 && hr <= 24) {
    greeting = payload.greetings[2]
  }

  return {
    type: GET_GREETING_SUCCESS,
    greeting: greeting
  }
}

export const greetingEpic = action$ =>
  action$.ofType(GET_GREETING)
    .mergeMap(action =>
      ajax.getJSON('./data/greeting.json')
        .map(response => getGreetingSuccess(response))
        .catch(getGreetingError)
    )

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return {
        ...state,
        fetching: true
      }
    case GET_GREETING_ERROR:
      return {
        ...state,
        error: action.error,
        fetching: false
      }
    case GET_GREETING_SUCCESS:
      return {
        fetching: false,
        error: '',
        greeting: action.greeting
      }
    default:
      return state
  }
}

export default greetingReducer
