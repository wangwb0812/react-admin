import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/login/index'
import Layout from '../pages/layout/index'

class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" component={Layout} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}

export default RouteConfig