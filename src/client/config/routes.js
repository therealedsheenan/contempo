import React from 'react'

// react containers
const routes = () => (
  <Route path='/' component={MainContainer} >
    <Route path='styleguide' component={StyleguideContainer} />
    <IndexRoute component={HomeContainer} />
  </Route>
)

export default routes
