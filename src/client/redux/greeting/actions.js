import * as type from './types'

export const requestGreeting = () => {
  return {
    type: type.GET_GREETING
  }
}

const getGreetingError = () => Observable.of({
  type: type.GET_GREETING_ERROR,
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
    type: type.GET_GREETING_SUCCESS,
    greeting: greeting
  }
}

export const greetingEpic = action$ =>
  action$.ofType(type.GET_GREETING)
    .mergeMap(action =>
      ajax.getJSON('./data/greeting.json')
        .map(response => getGreetingSuccess(response))
        .catch(getGreetingError)
    )
