import React from 'react'
import { IndexRoute, Route } from 'react-router'

// react containers
import { MainContainer, HomeContainer, StyleguideContainer } from 'containers'

const getRoutes = () => (
  <Route path='/' component={MainContainer} >
    <Route path='styleguide' component={StyleguideContainer} />
    <IndexRoute component={HomeContainer} />
  </Route>
)

export default getRoutes
