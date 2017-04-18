import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Root = (props) => {
  return (
    <main>
      <Link to='/'>Home</Link> | <Link to='/style'>Styleguide</Link>
      {props.children}
    </main>
  )
}

Root.propTypes = {
  children: PropTypes.array
}

export default Root
