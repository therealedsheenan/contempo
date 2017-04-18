import React from 'react'
import PropTypes from 'prop-types'

import {
  Title,
  SubTitle
} from './styles'

const GreetingComponent = (props) => {
  return (
    <div className='Greeting'>
      <Title>Good {props.message}!</Title>
      <SubTitle>Welcome to contempo!</SubTitle>
    </div>
  )
}

GreetingComponent.propTypes = {
  message: PropTypes.string
}

export default GreetingComponent
