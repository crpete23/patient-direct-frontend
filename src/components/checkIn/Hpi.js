import React, { Component } from 'react'
import { Grid, Form } from 'semantic-ui-react'
import {connect} from 'react-redux'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class Hpi extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    const encounter = this.props.encounter
    return (
      <Grid columns={3}>
        <Grid.Column width={2}>
        </Grid.Column>
        <Grid.Column width={12}>
          <h2>{ `Regarding your concern of: ${encounter.hx.hpi.cc[0]}` }</h2>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input fluid label='First name' placeholder='First name' />
              <Form.Input fluid label='Last name' placeholder='Last name' />
              <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
            </Form.Group>
            <Form.Group inline>
              <label>Size</label>
              <Form.Radio
                label='Small'
                value='sm'
                checked={value === 'sm'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='Medium'
                value='md'
                checked={value === 'md'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='Large'
                value='lg'
                checked={value === 'lg'}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.TextArea label='About' placeholder='Tell us more about you...'   />
            <Form.Checkbox label='I agree to the Terms and Conditions' />
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
