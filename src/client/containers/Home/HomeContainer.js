import React from 'react'
import { Link } from 'react-router'
import { GreetingComponent } from 'components'

const HomeContainer = React.createClass({
  render () {
    return (
      <div>
        <GreetingComponent />
        <Link to='/styleguide'>{'Styleguide'}</Link>
      </div>
    )
  }
})

export default HomeContainer
