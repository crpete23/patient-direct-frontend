import React, {Component} from 'react';
import {
  Button,
  Form,
  Grid,
  Segment,
  Label,
  Divider
} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import './styles/styles.css';
import CCdropdown from './CCdropdown'

import { updateHx } from '../../actions/patients'

export class ChiefComplaint extends Component {
  state = {
    chief_complaints: []
  }

  componentDidMount(){
    try {
      const initialCC = this.props.encounter.hx.hpi.cc
      this.setState({
        chief_complaints: initialCC
      })
    } catch (e) {
    }
  }

  updateCC = (cc) => {
    this.setState({chief_complaints: cc})
  }

  submitCC = async (e) => {
    e.preventDefault()
    const encounter = this.props.encounter
    let hpi = null;
    if(encounter.hx.hpi){
      hpi = encounter.hx.hpi
    }
    let hx = {
      ...encounter.hx,
      hpi: {
        ...hpi,
        cc : this.state.chief_complaints
      }
    }
    await this.props.updateHx(encounter.patient_id, encounter.id, hx)
    this.props.submitted()
  }

  upperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  render() {
    let noCC;
    try{
      noCC = !this.state.chief_complaints.length
    } catch(e){
      noCC = true
    }

    return (<Grid centered>
      <Grid.Column width={10}>
        <Grid.Row>
          <h2>{`Welcome ${this.upperCase(this.props.encounter.first_name)} ${this.upperCase(this.props.encounter.last_name)}. Your appointment today is scheduled with ${this.upperCase(this.props.encounter.doc_first_name)} ${this.upperCase(this.props.encounter.doc_last_name)} at ${this.props.encounter.time}.`}</h2>
          <Segment>
            <Form onSubmit={this.submitCC}>
              <Grid>
                <Grid.Row centered>
                  <Grid.Column width={14}>
                    <h2>What is the reason for your visit today? (may select multiple reasons in the dropdown below, please select in order of importance)</h2>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                  <Grid.Column width={12}>
                    <CCdropdown updateCC={this.updateCC} value={this.state.chief_complaints} doctor_id={this.props.encounter.doctor_id} />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={6}></Grid.Column>
                  <Grid.Column stretched width={4}>
                    <Button disabled={noCC} type="submit">Submit</Button>
                  </Grid.Column>
                  <Grid.Column width={6}></Grid.Column>
                </Grid.Row>
              </Grid>
            </Form>
          </Segment>
        </Grid.Row>
      </Grid.Column>
    </Grid>)
  }
}

function mapStateToProps(state) {
  return {encounter: state.patients.checkInEncounter}
}

function mapDispatchToProps(dispatch){
  return{
    updateHx: bindActionCreators(updateHx, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChiefComplaint)
