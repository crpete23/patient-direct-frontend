import React, { Component } from 'react';
import { Button, Checkbox, Form, Grid, Segment, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export class TemplateForm extends Component {
  state = {

  }

  render(){
    return(
      <h2>{this.props.temp}</h2>
    )
  }
}

export default TemplateForm
