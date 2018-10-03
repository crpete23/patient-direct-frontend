import React, { Component } from 'react'
import { Form, Segment, Checkbox } from 'semantic-ui-react'

class CheckboxChoices extends Component {

  state = {
    [this.props.element] : []
  }

  handleChange = (e, { name, value }) => {
    this.props.passChange(name, value)
    let current = this.state[this.props.element]
    let index = current.indexOf(value)
    if(index>=0){
      current.splice(index,1)
    } else {
      current.push(value)
    }
    this.setState({
      [this.props.element] : current
    })
  }

  upperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


  render() {
    const choicesJSX = this.props.choices.map(choice => {
      return (
        <Checkbox
          key={choice}
          label={this.upperCase(choice)}
          name={this.props.element}
          value={choice}
          onChange={this.handleChange}
          style={{"paddingLeft": '20px'}}
        />
      )
    })

    return (
      <Segment  className="questionnaireSegment">
        <Form.Group>
          <label>{this.props.label}</label>
          {choicesJSX}
        </Form.Group>
      </Segment>
    )
  }

}


export default CheckboxChoices
