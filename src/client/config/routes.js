import React from 'react'
import { Route } from 'react-router-dom'

// react containers
import Root from '../components/Root'
import AsyncRoute from '../components/AsyncRoute/AsyncRoute'
import HomeContainer from '../containers/Home/HomeContainer'

const routes = () => (
  <Root>
    <Route exact path='/' component={HomeContainer} />

    {/*<Route strict exact path='/' render={props => (*/}
      {/*<AsyncRoute*/}
        {/*props={props}*/}
        {/*loadingPromise={*/}
          {/*System.import('../containers/Home/HomeContainer')*/}
        {/*} />*/}
    {/*)} />*/}

    <Route strict exact path='/style' render={props => (
      <AsyncRoute
        props={props}
        loadingPromise={
          System.import('../containers/Styleguide/StyleguideContainer')
        } />
      )} />
  </Root>
)

export default routes
