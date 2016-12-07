import React from 'react'

const MainContainer = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },
  render () {
    return (
      <div className='Main' role='main'>
        { this.props.children }
      </div>
    )
  }
})

export default MainContainer
