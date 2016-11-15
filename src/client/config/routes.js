import React from 'react'
import { Router, IndexRoute, Route } from 'react-router'

//react containers
// import { MainContainer, HomeContainer  } from '../containers'
import MainContainer from '../containers/Main/MainContainer'
import HomeContainer from '../containers/Home/HomeContainer'


const getRoutes = () => (
    <Route path='/' component={ MainContainer }>
        <Route path='/' component={ HomeContainer } />
        <IndexRoute component={ HomeContainer } />
    </Route>
)

module.exports = getRoutes
