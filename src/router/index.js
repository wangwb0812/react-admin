import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/login/index'
import Layout from '../pages/layout/index'
import { connect } from 'react-redux'
class RouteConfig extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" >
            {!this.props.userInfo ? <Redirect to="/login" /> : <Layout />}
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default connect(state=>state.common)(RouteConfig)