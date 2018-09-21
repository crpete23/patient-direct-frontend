import React, { Component } from 'react'
import { Grid, Form } from 'semantic-ui-react'
import {connect} from 'react-redux'

class Hpi extends Component {
  state = {
    'quality' : ''
  }

  handleChange = (e, { name, value }) => {
    console.log(name, value)
    this.setState({ [name] : value })
    }

  render() {
    const cc = this.props.encounter.hx.hpi.cc[0]
    return (
      <Grid columns={3}>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={12}>
          <Form>
            <Form.Group inline>
              <label>{`What Quality best describes your ${cc}?`}</label>
              <Form.Radio
                label='Sharp'
                name='quality'
                value='sharp'
                checked={this.state.quality === 'sharp'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='Dull'
                name='quality'
                value='dull'
                checked={this.state.quality === 'dull'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='Pressure'
                name='quality'
                value='pressure'
                checked={this.state.quality === 'pressure'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='Ache'
                name='quality'
                value='ache'
                checked={this.state.quality === 'ache'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='Other (describe below)'
                name='quality'
                value='other'
                checked={!['sharp', 'dull', 'pressure', 'ache'].includes(this.state.quality)}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.TextArea name='quality' disabled={['sharp', 'dull', 'pressure', 'ache'].includes(this.state.quality)} placeholder={`Please Describe the Quality of your ${cc}`} onChange={this.handleChange} />
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
