import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userVerify } from './actions/auth.actions'

import { Nav, PatientHome, Login, Signup, AuthenticatedRoute, PhysicianHome } from './components';

export class App extends Component {

  componentDidMount(){
    const token = localStorage.getItem('token')
    if(token && !this.props.auth.user.userId){
      this.props.userVerify()
      .then(()=>{
        if(this.props.auth.user.userId){
            this.props.history.push('/physicianHome')
        }
      })
    }
  }

  render(){
    return (
      <div>
        <Nav />
        <Switch>
          <AuthenticatedRoute exact path="/physicianHome" render={()=>{
            return <PhysicianHome />
          }} />
          <Route exact path="/" component={ PatientHome } />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch){
  return{
    userVerify: bindActionCreators(userVerify, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
