import React, { Component } from 'react'
import { Grid, Form, Label, Button } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import tempModels from '../../models/templates.js'
import { updateHx } from '../../actions/patients'
import SystemChecker from './SystemChecker'

class ReviewOfSystems extends Component {
  state = {
    template: {}
  }

  async componentDidMount(){
    const resp = await tempModels.getRosTemplate(this.props.encounter.doctor_id)
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

    submitROS = async (e) => {
      e.preventDefault()
      const encounter = this.props.encounter
      let ros = null;
      if(encounter.hx.ros){
        ros = encounter.hx.ros
      }
      let hx = {
        ...encounter.hx,
        ros: {
          ...ros,
          ...this.state
        }
      }

      delete hx.ros.template


      await this.props.updateHx(encounter.patient_id, encounter.id, hx)
      this.props.submitted()
    }

  render() {
    const keyArr = Object.keys(this.state.template)
    let rosJSX = keyArr.map(system => {
      return (
        <SystemChecker key={system} system={system} options={this.state.template[system]} passChange={this.passChange}/>
      )
    })

    return (
      <Grid columns={3}>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={12} className="checkInContainer">
          <Grid>
            <Grid.Column width={1}>
              <Label as='a' size="massive" color='teal' ribbon='left'>Review of Systems</Label>
            </Grid.Column>
            <Grid.Column className="marginTop5" width={14}>
            <h4>Please select all that apply</h4>
            <Form onSubmit={this.submitROS}>
              <Grid>
                <Grid.Row>
                  {rosJSX}
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={6}>
                  </Grid.Column>
                  <Grid.Column stretched width={4}>
                    <Button id="rosSubmitButton">Submit</Button>
                  </Grid.Column>
                  <Grid.Column width={6}>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
             </Form>
            </Grid.Column>
            <Grid.Column width={1}>
            </Grid.Column>
          </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(ReviewOfSystems)
