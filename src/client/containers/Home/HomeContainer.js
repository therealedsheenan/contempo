import React from 'react'
import GreetingComponent from '../../components/Greeting/GreetingComponent'
import 'styles/base.scss'

const HomeContainer = React.createClass({
  render () {
    return (
      <GreetingComponent />
    )
  }
})

export default HomeContainer
