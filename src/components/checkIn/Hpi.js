import React, { Component } from 'react'
import { Grid, Form, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { updateHx } from '../../actions/patients'
import RadioChoices from './RadioChoices'
import CheckboxChoices from './CheckboxChoices'
import WriteInAnswer from './WriteInAnswer'

class Hpi extends Component {
  state = {

  }

    passChange = (updateName, updateValue) => {
      this.setState({
        ...this.state,
        [updateName]: updateValue
      })
    }

    passMultiple = (updateName, updateValue) => {
      if(!this.state[updateName]){
        this.setState({
          ...this.state,
          [updateName]: [updateValue]
        })
      } else {
        let current = this.state[updateName]
        let index = current.indexOf(updateValue)
        if(index>=0){
          current.splice(index,1)
        } else {
          current.push(updateValue)
        }
        this.setState({
          ...this.state,
          [updateName]: current
        })
      }
    }

    submitHPI = async (e) => {
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
          ...this.state
        }
      }


      await this.props.updateHx(encounter.patient_id, encounter.id, hx)
      this.props.submitted()
    }

  render() {
    const cc = this.props.encounter.hx.hpi.cc[0]

    return (
      <Grid columns={3}>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={12}>
          <Form onSubmit={this.submitHPI}>
            <RadioChoices choices={['sharp', 'dull', 'pressure', 'ache']} element={'quality'} cc={cc} passChange={this.passChange} label={`What quality best describes your ${cc}?`} otherChoice={true} />
            <RadioChoices choices={['constant', 'intermittent', 'waxing and waning']} element={'timing'} cc={cc} passChange={this.passChange} label={`What is the frequency/ timing of your ${cc}?`} otherChoice={true} />
            <RadioChoices choices={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']} element={'severity'} cc={cc} passChange={this.passChange} label={`What is the severity of your ${cc}?`} otherChoice={false} />
            <RadioChoices choices={['less than a minute', 'several minutes', 'one hour', 'several hours', 'one day', 'several days', 'several weeks', 'several months']} element={'duration'} cc={cc} passChange={this.passChange} label={'When symptoms are present, how long do they usually last?'} otherChoice={true} />
            <RadioChoices choices={['central chest', 'left chest', 'right chest', 'left shoulder/arm', 'right shoulder/arm']} element={'location'} cc={cc} passChange={this.passChange} label={`What is the location of your ${cc}?`} otherChoice={true} />
            <CheckboxChoices choices={['nitroglycerin', 'stretching or massaging the area', 'exertion', 'pain medications']} element={'alleviatingFactors'} cc={cc} passChange={this.passMultiple} label={'What, if anything, makes your symptoms better? (select all that apply)'} />
            <CheckboxChoices choices={['movement', 'exertion', 'deep breathing', 'eating/drinking']} element={'exacerbatingFactors'} cc={cc} passChange={this.passMultiple} label={'What, if anything, induces or makes your symptoms worse? (select all that apply)'} />
            <CheckboxChoices choices={['shortness of breath', 'diaphoresis (sweating)', 'nausea', 'vomitting', 'fatigue', 'dizziness/light headedness']} element={'associatedSx'} cc={cc} passChange={this.passMultiple} label={`Have you experienced any other symptoms that you feel are related to your ${cc}? (select all that apply)`} />
            <WriteInAnswer element={'context'} cc={cc} passChange={this.passChange} label={`Briefly describe the context of your ${cc}`} />
            <Form.Button>Submit</Form.Button>
          </Form>
        </Grid.Column>
        <Grid.Column width={2}>
        </Grid.Column>
      </Grid>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Hpi)
