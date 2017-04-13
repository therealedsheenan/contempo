import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { requestGreeting } from '../../redux/greeting/actions'

import GreetingComponent from '../../components/Greeting/GreetingComponent'

// base css
import '../../styles/base.scss'

const HomeContainer = React.createClass({
  propTypes: {
    requestGreeting: PropTypes.func.isRequired,
    greeting: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ])
  },
  componentDidMount () {
    this.props.requestGreeting()
  },
  render () {
    return (
      <GreetingComponent message={this.props.greeting.content} />
    )
  }
})

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
