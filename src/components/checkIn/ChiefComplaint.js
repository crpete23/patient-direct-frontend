import React, { Component } from 'react';
import { Button, Form, Grid, Segment, Label, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './styles/styles.css';
import CCdropdown from './CCdropdown'

export class ChiefComplaint extends Component {
  state = {
    chief_complaints: []
  }

  render(){
    return (
      <Grid centered id='bodyGrid'>
        <Grid.Column width={10}>
          <Grid.Row>
            <h2>{`Welcome ${this.props.encounter.first_name} ${this.props.encounter.last_name}. Your appointment today is scheduled with ${this.props.encounter.doc_first_name} ${this.props.encounter.doc_last_name} at ${this.props.encounter.time}.`}</h2>
            <Segment>
              <h2>What is the reason for your visit today? (may select multiple reasons in the dropdown below, please select in order of importance)</h2>
              <CCdropdown />
            </Segment>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    encounter: state.patients.checkInEncounter
  }
}

export default connect(mapStateToProps, null)(ChiefComplaint)
