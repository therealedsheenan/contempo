import React, { PropTypes, Component } from 'react'

export default class MainContainer extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='Main' role='main'>
        { this.props.children }
      </div>
    )
  }
}
