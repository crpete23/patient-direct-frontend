import React, { Component } from 'react'
import { Grid, Form } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { updateHx } from '../../actions/patients'
import tempModels from '../../models/templates.js'
import RadioChoices from './RadioChoices'
import CheckboxChoices from './CheckboxChoices'
import WriteInAnswer from './WriteInAnswer'

class Hpi extends Component {
  state = {
    template: {}
  }

  async componentDidMount(){
    const resp = await tempModels.getHpiTemplate(this.props.encounter.doctor_id, this.props.encounter.hx.hpi.cc[0])
    const template = resp.data.template
    this.setState({
      ...this.state,
      template
    })
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

      delete hx.hpi.template

      await this.props.updateHx(encounter.patient_id, encounter.id, hx)
      this.props.submitted()
    }

  render() {
    const cc = this.props.encounter.hx.hpi.cc[0]

    const keyArr = Object.keys(this.state.template)
    let hpiJSX = keyArr.map(element => {
      if (this.state.template[element].type === 'radio'){
        return (
          <RadioChoices key={element} choices={this.state.template[element].choices} element={element} cc={cc} passChange={this.passChange} label={this.state.template[element].label} otherChoice={this.state.template[element].other} />
        )
      }
      if (this.state.template[element].type === 'check'){
        return (
          <CheckboxChoices key={element} choices={this.state.template[element].choices} element={element} cc={cc} passChange={this.passMultiple} label={this.state.template[element].label} />
        )
      }
      if (this.state.template[element].type === 'write'){
        return (
          <WriteInAnswer key={element} element={element} cc={cc} passChange={this.passChange} label={this.state.template[element].label} />
        )
      }
    })

    return (
      <Grid columns={3}>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={12}>
          <h2>History of Present Illness</h2>
          <h4>{`Please answer a few questions about your ${this.props.encounter.hx.hpi.cc[0]}`}</h4>
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
