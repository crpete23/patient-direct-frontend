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
      <Grid id='physicianHomeBodyGrid' className="fontSize140">
        <div className='bg'></div>
        <Grid.Row only="mobile">
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={14}>
          <DateFormInline changedDate={this.changedDate} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row only="mobile">
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column className="physicianHomeWhiteContainer" width={14} >
            <Grid.Row className={"listHeader"}>
              <h1>Patient List</h1>
            </Grid.Row>
            <Grid.Row className={"listHeader2"}>
              <h3>{this.state.selectedDate}</h3>
            </Grid.Row>
            <Grid.Row>
              <EncounterList date={this.state.selectedDate} />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={2}>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered only="mobile">
          <Grid.Column width={16} >
            {
              (this.props.encounters.selected_encounter.id ?
                  <SelectedEncounter {...this.props.encounters.selected_encounter} />
                : null)
            }
          </Grid.Column>
        </Grid.Row>

        <Grid.Row only="tablet computer">
          <Grid.Column width={2}>
          </Grid.Column>
          <Grid.Column width={5}>
          <DateFormInline changedDate={this.changedDate} />
          </Grid.Column>
          <Grid.Column className="physicianHomeWhiteContainer" width={7}>
            <Grid.Row className={"listHeader"}>
              <h1>Patient List</h1>
            </Grid.Row>
            <Grid.Row className={"listHeader2"}>
              <h3>{this.state.selectedDate}</h3>
            </Grid.Row>
            <Grid.Row>
              <EncounterList date={this.state.selectedDate} />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={2}>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered only="tablet computer">
          <Grid.Column width={8} >
            {
              (this.props.encounters.selected_encounter.id ?
                  <SelectedEncounter {...this.props.encounters.selected_encounter} />
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
