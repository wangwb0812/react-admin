import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Todo from '../../todo/index'
import Demo from '../../reduxDemo/index'
import Todolist from '../../todolist/index'
class Appmain extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Switch>
          <Route path='/todo' component={Todo} />
          <Route path='/demo' component={Demo} />
          <Route path='/todolist' component={Todolist} />
        </Switch>
      </div>
    )
  }
}

export default Appmain