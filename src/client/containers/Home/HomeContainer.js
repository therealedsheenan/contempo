import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { requestGreeting } from '../../redux/greeting/actions'

import GreetingComponent from '../../components/Greeting/GreetingComponent'

// base css
import '../../styles/base.scss'

class HomeContainer extends React.Component {

  componentDidMount () {
    this.props.requestGreeting()
  }

  render () {
    return (
      <GreetingComponent message={this.props.greeting.content} />
    )
  }
}

HomeContainer.propTypes = {
  requestGreeting: PropTypes.func.isRequired,
  greeting: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

const mapStateToProps = ({greetingReducer}) => {
  let { fetching, greeting } = greetingReducer

  return {
    fetching: fetching,
    greeting: greeting
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestGreeting: () => dispatch(requestGreeting())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
