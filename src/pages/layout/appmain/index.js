import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Todo from '../../todo/index'
import Demo from '../../reduxDemo/index'
import Todolist from '../../todolist/index'
import HookPage from '../../hookPage/index'
class Appmain extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Switch>
          <Route path='/todo' render={() => (<Todo />)} />
          <Route path='/demo' component={Demo} />
          <Route path='/todolist' component={Todolist} />
          <Route path='/hookpage' render={(props) => (<HookPage {...props} />)} />
        </Switch>
      </div>
    )
  }
}

export default Appmain