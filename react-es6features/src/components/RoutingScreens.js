import React from 'react'
import ReactDOM from 'react-dom';  

import { Route, Router } from 'react-router-dom'
import Counter from './Counter'
import HelooWorld from './HelooWorld'
import ListRendering from './ListRendering'

const RoutingScreens = () => {
    
    return (
        <Router>
            <div>
                <h1>Routing Screens</h1>
            <Route path='/' component={HelooWorld}></Route>
            <Route path='/counter' component={Counter}></Route>
            <Route path='/ListOfItems' component={ListRendering}></Route>
            </div>
        </Router>
    )
   
}

export default RoutingScreens