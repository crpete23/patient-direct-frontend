import React, { Component } from 'react'
import { Grid, Form, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux'

import RadioChoices from './RadioChoices'

class Hpi extends Component {
  state = {
    'quality' : '',
    'timing': ''
  }

  handleChange = (e, { name, value }) => {
    this.setState({
      ...this.state,
      [name] : value
    })
    }

    passChange = (updateName, updateValue) => {
      this.setState({
        ...this.state,
        [updateName]: updateValue
      })
    }

  render() {
    const cc = this.props.encounter.hx.hpi.cc[0]

    console.log(this.state['quality'])
    return (
      <Grid columns={3}>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={12}>
          <Form>
            <RadioChoices choices={['sharp', 'dull', 'pressure', 'ache']} element={'quality'} cc={cc} passChange={this.passChange} label={`What quality best describes your ${cc}?`} otherChoice={false} />
            <RadioChoices choices={['constant', 'intermittent', 'waxing and waning']} element={'timing'} cc={cc} passChange={this.passChange} label={`What is the frequency/ timing of your ${cc}?`} otherChoice={true} />
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

export default connect(mapStateToProps, null)(Hpi)
