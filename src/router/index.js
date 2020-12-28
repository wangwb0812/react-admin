import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/login/index'
import Layout from '../pages/layout/index'

class RouteConfig extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" component={Layout} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default RouteConfig