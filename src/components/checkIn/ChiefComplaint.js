import React, { Component } from 'react';
import { Button, Form, Grid, Segment, Label, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import './styles/styles.css';
import { bindActionCreators } from 'redux'

export class ChiefComplaint extends Component {
  state = {
    chief_complaints: []
  }

  render(){
    return (
      <h2>ChiefComplaint</h2>
    )
  }
}

function mapStateToProps(state){
  return {
    encounter: state.patients.checkInEncounter
  }
}

export default connect(mapStateToProps, null)(ChiefComplaint)
