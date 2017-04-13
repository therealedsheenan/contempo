import axios from 'axios'
import * as type from './types'

export const requestGreeting = () => {
  return {
    type: type.GET_GREETING
  }
}

const getGreetingError = (error) => {
  return {
    type: type.GET_GREETING_ERROR,
    error: error
  }
}

const getGreetingSuccess = (payload) => {
  let hr = new Date().getHours()
  let greeting

  if (hr >= 0 && hr <= 12) {
    greeting = payload.data.greetings[0]
  }

  if (hr >= 12 && hr <= 18) {
    greeting = payload.data.greetings[1]
  }

  if (hr >= 18 && hr <= 24) {
    greeting = payload.data.greetings[2]
  }

  return {
    type: type.GET_GREETING_SUCCESS,
    greeting: greeting
  }
}

export const greetingEpic = action$ => {
  return (
    action$.ofType(type.GET_GREETING)
      .mergeMap(action => {
        return axios.get('./data/greeting.json')
          .then(res => getGreetingSuccess(res))
          .catch(error => getGreetingError(error))
      })
  )
}
