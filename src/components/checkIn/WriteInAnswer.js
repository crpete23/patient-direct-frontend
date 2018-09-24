import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'

class WriteInAnswer extends Component {

  state = {
    [this.props.element] : ''
  }

  handleChange = (e, { name, value }) => {
    this.props.passChange(name, value)
    this.setState({
      [name] : value
    })
    }


  render() {
    return (
      <Segment>
          <label>{this.props.label}</label>
          <Form.TextArea name={this.props.element} placeholder={`Please Describe the ${this.props.element} of your ${this.props.cc}`} onChange={this.handleChange} />
      </Segment>
    )
  }

}


export default WriteInAnswer
