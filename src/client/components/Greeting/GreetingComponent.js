import React from 'react'
import {Motion, spring} from 'react-motion'
import PropTypes from 'prop-types'

import {
  Title,
  SubTitle
} from './styles'

const GreetingComponent = (props) => {
  return (
    <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
      {val =>
        <div className='Greeting'>
          <Title>Good {props.message}!</Title>
          <SubTitle>Welcome to contempo!</SubTitle>
        </div>
      }
    </Motion>
  )
}

GreetingComponent.propTypes = {
  message: PropTypes.string
}

export default GreetingComponent
