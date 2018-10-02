import React, { Component } from 'react';
import { Button, Form, Grid, Segment, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import './styles/styles.css';
import { bindActionCreators } from 'redux'
import { checkIn } from '../../actions/patients'

export class PatientHome extends Component {
  state = {
    first_name: '',
    last_name: '',
    dob: ''
  }

  checkInAttempt = async (e) => {
    e.preventDefault()
    await this.props.checkIn(this.state.first_name, this.state.last_name, this.state.dob)

    const patientsInfo = this.props.patients
    if(!patientsInfo.checkInError){
      this.props.history.push(`./patients/${patientsInfo.checkInEncounter.patient_id}/encounters/${patientsInfo.checkInEncounter.id}`)
    }
  }

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  render(){
    return (
      <Grid centered id='patientHomeBodyGrid'>
        <Grid.Column stretched width={3}>
          <Form onSubmit={this.checkInAttempt}>
            <Segment>
              <Label as='a' size='massive' color='teal' ribbon='right'>
                Patient Portal
              </Label>
            <Form.Field>
              <label>First Name</label>
              <input name='first_name' type='text' placeholder='First Name' onChange={this.onChange} value={this.state.first_name} />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input name='last_name' type='text' placeholder='Last Name' onChange={this.onChange} value={this.state.last_name} />
            </Form.Field>
            <Form.Field>
              <label>Date of Birth</label>
              <input name='dob' type='date' placeholder='Date of Birth' onChange={this.onChange} value={this.state.dob} />
            </Form.Field>
            <Grid>
              <Grid.Column width={3}></Grid.Column>
              <Grid.Column stretched width={10}>
               <Button type="submit">Check In</Button>
             </Grid.Column>
             <Grid.Column width={3}></Grid.Column>
            </Grid>
          </Segment>
          </Form>
          {this.props.patients.checkInError ? <Segment color='red' align='center'>
          Either user information was input incorrectly or we do not have a scheduled appointment for you today. We apologize for the confusion. Please speak to the front desk.
        </Segment> : null }
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps(state){
  return {
    patients: state.patients
  }
}

function mapDispatchToProps(dispatch){
  return{
    checkIn: bindActionCreators(checkIn, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientHome);
