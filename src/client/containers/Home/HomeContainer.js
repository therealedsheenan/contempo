import React, { PropTypes, Component } from 'react'
import ActivityComponent from 'components/Activity/ActivityComponent'
import HeaderComponent from 'components/Header/HeaderComponent'

export default class HomeContainer extends Component {

    constructor ( props ) {
        super( props )
    }

    render () {
        return (
            <div>
              <HeaderComponent />
              <ActivityComponent />
            </div>
        )
    }
}
