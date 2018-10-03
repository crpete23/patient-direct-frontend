import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'

class RadioChoices extends Component {

  state = {
    [this.props.element] : ''
  }

  handleChange = (e, { name, value }) => {
    this.props.passChange(name, value)
    this.setState({
      [name] : value
    })
    }

    upperCase = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }


  render() {
    const choicesJSX = this.props.choices.map(choice => {
      return (
        <Form.Radio
          key={choice}
          label={this.upperCase(choice)}
          name={this.props.element}
          value={choice}
          checked={this.state[this.props.element]===choice}
          onChange={this.handleChange}
        />
      )
    })

    return (
      <Segment className="questionnaireSegment">
        <Form.Group inline>
          <label>{this.props.label}</label>
          {choicesJSX}
          { this.props.otherChoice ?
            <Form.Radio
              label='Other (describe below)'
              name={this.props.element}
              value='other'
              checked={!(this.props.choices.includes(this.state[this.props.element]))}
              onChange={this.handleChange}
            />
            : null }
        </Form.Group>
        { this.props.otherChoice ?
          <Form.TextArea name={this.props.element} disabled={(this.props.choices.includes(this.state[this.props.element]))} placeholder={`Please Describe the ${this.props.element} of your ${this.props.cc}`} onChange={this.handleChange} />
        :null }
      </Segment>
    )
  }

}


export default RadioChoices
