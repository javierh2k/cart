import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Detail from './Detail'

// The Roster component matches one of two different routes
// depending on the full pathname
const DetailRoute = () => (
  <Switch>
    <Route exact path='/' component={MsgNoProduct}/>
    <Route path='/detail/:id' component={Detail}/>
  </Switch>
)

class MsgNoProduct extends Component {
    render() {
        return(
            <div>
                <h1>Seleccione un Producto</h1>
            </div>        
        )
    }
}


export default DetailRoute
