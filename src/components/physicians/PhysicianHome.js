import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'

import SelectedEncounter from './SelectedEncounter'
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
        <Grid.Row>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={5}>
          <DateFormInline changedDate={this.changedDate} />
          </Grid.Column>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={8}>
            <h1>Patient List</h1>
            <h3>{this.state.selectedDate}</h3>
            <EncounterList date={this.state.selectedDate} />
          </Grid.Column>
          <Grid.Column width={1}>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={8}>
            {
              (this.props.encounters.selected_encounter.id ?
                <Segment>
                  <SelectedEncounter {...this.props.encounters.selected_encounter} />
                </Segment>
                : null)
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps(state){
  return {
    encounters: state.encounters,
    auth: state.auth
  }
}

export default connect(mapStateToProps, null)(PhysicianHome);
