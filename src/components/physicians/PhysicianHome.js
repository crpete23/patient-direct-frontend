import React, { Component } from 'react';
import { Button, Form, Grid, Segment, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogin } from '../../actions/auth.actions'
import { withRouter } from 'react-router-dom';
import DateFormInline from './DateFormInline';
import EncounterList from './EncounterList';
import './styles/styles.css';
var moment = require('moment')

export class PhysicianHome extends Component {
  state = {
    selectedDate: moment().format(`YYYY/MM/DD`)
  }

  changedDate = (date) => {
    this.setState(
      {
        selectedDate: date
      }
    );
  }

  render(){
    return (
      <Grid id='bodyGrid'>
        <Grid.Column width={6}>
          <h1>Calendar</h1>
        <DateFormInline changedDate={this.changedDate} />
        </Grid.Column>
        <Grid.Column width={10}>
          <h1>Patient List</h1>
          <Segment>
            <EncounterList />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default PhysicianHome;
