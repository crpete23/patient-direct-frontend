import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userVerify } from './actions/auth.actions'

import { Nav, PatientHome, Login, Signup, AuthenticatedRoute, CheckedInRoute, PhysicianHome, CheckInShell, UpdateTemplates } from './components';

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
          <AuthenticatedRoute exact path="/templates" render={()=>{
            return <UpdateTemplates />
          }} />
          <Route exact path="/" component={ PatientHome } />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <CheckedInRoute exact path="/patients/:patient_id/encounters/:encounter_id" render={()=>{
            return <CheckInShell />
          }} />
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
