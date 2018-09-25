import React, { Component } from 'react'
import { Grid, Form, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { updateHx } from '../../actions/patients'
import RadioChoices from './RadioChoices'
import CheckboxChoices from './CheckboxChoices'
import WriteInAnswer from './WriteInAnswer'

const hpiInfo = {
  quality: {
    type: 'radio',
    choices: ['sharp', 'dull', 'pressure', 'ache'],
    label: `What quality best describes your chest pain?`,
    other: true
  },
  timing: {
    type: 'radio',
    choices: ['constant', 'intermittent', 'waxing and waning'],
    label: `What is the frequency/ timing of your chest pain?`,
    other: true
  },
  severity: {
    type: 'radio',
    choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    label: `What is the severity of your chest pain?`,
    other: false
  },
  duration: {
    type: 'radio',
    choices: ['less than a minute', 'several minutes', 'one hour', 'several hours', 'one day', 'several days', 'several weeks', 'several months'],
    label: 'When symptoms are present, how long do they usually last?',
    other: true
  },
  location: {
    type: 'radio',
    choices: ['central chest', 'left chest', 'right chest', 'left shoulder/arm', 'right shoulder/arm'],
    label: `What is the location of your chest pain?`,
    other: true
  },
  alleviatingFactors: {
    type: 'check',
    choices: ['nitroglycerin', 'stretching or massaging the area', 'exertion', 'pain medications'],
    label: 'What, if anything, makes your symptoms better? (select all that apply)'
  },
  exacerbatingFactors: {
    type: 'check',
    choices: ['movement', 'exertion', 'deep breathing', 'eating/drinking'],
    label: 'What, if anything, induces or makes your symptoms worse? (select all that apply)'
  },
  associatedSx: {
    type: 'check',
    choices: ['shortness of breath', 'diaphoresis (sweating)', 'nausea', 'vomitting', 'fatigue', 'dizziness/light headedness'],
    label: `Have you experienced any other symptoms that you feel are related to your chest pain? (select all that apply)`
  },
  context: {
    type: 'write',
    label: `Briefly describe the context of your chest pain`
  }
}

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

    const keyArr = Object.keys(hpiInfo)
    let hpiJSX = keyArr.map(element => {
      if (hpiInfo[element].type === 'radio'){
        return (
          <RadioChoices key={element} choices={hpiInfo[element].choices} element={element} cc={cc} passChange={this.passChange} label={hpiInfo[element].label} otherChoice={hpiInfo[element].other} />
        )
      }
      if (hpiInfo[element].type === 'check'){
        return (
          <CheckboxChoices key={element} choices={hpiInfo[element].choices} element={element} cc={cc} passChange={this.passMultiple} label={hpiInfo[element].label} />
        )
      }
      if (hpiInfo[element].type === 'write'){
        return (
          <WriteInAnswer key={element} element={element} cc={cc} passChange={this.passChange} label={hpiInfo[element].label} />
        )
      }
    })

    return (
      <Grid columns={3}>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={12}>
          <Form onSubmit={this.submitHPI}>
            {hpiJSX}
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
