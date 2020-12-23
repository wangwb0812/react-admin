import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Todo from '../../todo/index'

class Appmain extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Switch>
          <Route path='/todo' component={Todo} />
        </Switch>
      </div>
    )
  }
}

export default Appmain