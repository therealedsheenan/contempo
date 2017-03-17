import React from 'react'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

// react containers
import Root from '../components/Root'
import AsyncRoute from '../components/AsyncRoute/AsyncRoute'

const routes = () => (
  <BrowserRouter>
    <Root>
      <Route strict exact path='/' render={props => (
        <AsyncRoute
          props={props}
          loadingPromise={
            System.import('../containers/Home/HomeContainer')
          } />
      )} />

      <Route strict exact path='/style' render={props => (
        <AsyncRoute
          props={props}
          loadingPromise={
            System.import('../containers/Styleguide/StyleguideContainer')
          } />
        )} />
    </Root>
  </BrowserRouter>
)

export default routes
