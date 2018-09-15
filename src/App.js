import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { Nav, Main, Login, Signup, AuthenticatedRoute } from './components';

export const App = (props) => {

    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Redirect to="/" />
        </Switch>
      </div>
    );

}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default App;
