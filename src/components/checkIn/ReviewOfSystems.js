import React, { Component } from 'react'
import { Grid, Form, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { updateHx } from '../../actions/patients'
import SystemChecker from './SystemChecker'

const rosInfo = {
  constitutional: {
            fatigue: false, fever: false,
            unintentionalWeightLoss: false
          },
          eyes: {
            eyePain: false,
            blurryVision: false
          },
          ENT: {
            soreThroat: false,
            epistaxis: false
          },
          Cardiovascular: {
            cp: true, palpitations: false, dyspnea: true
          },
          Respiratory: {
            sob: true,
            cough: false
          },
          GI: {
            nausea: false,
            vomiting: false,
            hematochezia: false,
            melena: false
          },
          GU: {
            hematuria: false
          },
          Musc: {
            musclePain: false,
            jointPain: false
          },
          Neuro: {
            hxCVA: false,
            hxTIA: false,
            headache: true,
            lightheadedness: false
          },
          Endocrine: {
            dm: false
          },
          Hematologic: {
            anticoagulants: false
          }
        }

class ReviewOfSystems extends Component {
  state = {

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
        hpi: {
          ...ros,
          ...this.state
        }
      }


      await this.props.updateHx(encounter.patient_id, encounter.id, hx)
      this.props.submitted()
    }

  render() {
    const keyArr = Object.keys(rosInfo)
    let rosJSX = keyArr.map(system => {
      return (
        <SystemChecker key={system} system={system} options={rosInfo[system]} passChange={this.passChange}/>
      )
    })

    return (
      <Grid columns={3}>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={12}>
          <Form onSubmit={this.submitROS}>
            {rosJSX}
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

export default connect(mapStateToProps, mapDispatchToProps)(ReviewOfSystems)
