import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: red;
`

export default function GreetingComponent (props) {
  return (
    <div className='Greeting'><Title>Hello Contempo</Title></div>
  )
}
