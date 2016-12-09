import React from 'react'
import { Match } from 'react-router'
import { Provider } from 'react-redux'
import { AsyncRoute } from './components'

import { store } from './config/store.js'

if (global) global.System = { import () {} }

const App = () => {
  return (
    <Provider store={store}>
      <div className='Main' role='main'>
        <Match
          exactly
          pattern='/'
          component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./containers/Home/HomeContainer')} />}
        />
        <Match
          exactly
          pattern='/styleguide'
          component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./containers/Styleguide/StyleguideContainer')} />}
        />
      </div>
    </Provider>
  )
}

export default App
