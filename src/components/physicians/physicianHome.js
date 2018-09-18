import React, { Component } from 'react';
import { Button, Form, Grid, Segment, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogin } from '../../actions/auth.actions'
import { withRouter } from 'react-router-dom';

export class PhysicianHome extends Component {

  render(){
    return (
      <h1>physicianHome</h1>
    );
  }
}

export default PhysicianHome;
