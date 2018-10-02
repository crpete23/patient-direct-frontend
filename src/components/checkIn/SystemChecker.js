import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'

class SystemChecker extends Component {
  state =
  {
    [this.props.system] : {
    }
  }

  handleChange = (e, { name, value }) => {
    let index = name.indexOf('_')
    const system = name.slice(0,index)
    const symptom = name.slice(index+1)

    let bool = true;
    if(value==='false'){
      bool = false;
    }

    let updatedSystem = {
      ...this.state[system],
      [symptom] : bool
    }

    this.props.passChange(system, updatedSystem)

    this.setState({
      ...this.state,
      [system] : updatedSystem
    })
    }

    upperCase = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    let optionsArr = Object.keys(this.props.options)
    const optionsJSX = optionsArr.map(option => {
      return (
        <Form.Group inline key={option}>
          <label>{this.upperCase(option)}</label>
          <Form.Radio
            label='Yes'
            name={`${this.props.system}_${option}`}
            value='true'
            checked={this.state[this.props.system][option]===true}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='No'
            name={`${this.props.system}_${option}`}
            value='false'
            checked={this.state[this.props.system][option]===false}
            onChange={this.handleChange}
          />
        </Form.Group>
      )
    })

    return (
      <Segment>
        <label><b>{this.props.system}</b></label>
        { optionsJSX }
      </Segment>
    )
  }
}

export default (SystemChecker)
