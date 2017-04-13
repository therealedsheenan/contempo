import axios from 'axios'

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

const getGreetingError = (error) => {
  return {
    type: GET_GREETING_ERROR,
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
    type: GET_GREETING_SUCCESS,
    greeting: greeting
  }
}

export const greetingEpic = action$ => {
  return (
  action$.ofType(GET_GREETING)
    .mergeMap(action => {
      return axios.get('./data/greeting.json')
        .then(res => getGreetingSuccess(res))
        .catch(error => getGreetingError(error))
    })
  )
}

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
