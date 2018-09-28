import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'

import TemplateForm from './TemplateForm'
import TemplateList from './TemplateList.js'
import tempModels from '../../models/templates.js'
import './styles/styles.css';

export class UpdateTemplates extends Component {
  state = {
    hpiTempOptions: [],
    selected: ''
  }

  async componentDidMount(){
    const resp = await tempModels.getCCList(this.props.user.userId)
    const chief_complaints = resp.data.chief_complaints;
    this.setState({
      ...this.state,
      hpiTempOptions: chief_complaints
    })
  }

  selectTemplate = (value) => {
    this.setState({
      ...this.state,
      selected: value
    })
  }

  render(){
    return (
      <Grid id='bodyGrid'>
        <Grid.Row>
          <Grid.Column width={6}>
            <TemplateList hpiTemps={this.state.hpiTempOptions} selectTemplate={this.selectTemplate}/>
          </Grid.Column>
          <Grid.Column width={10}>
            {this.state.selected ? < TemplateForm temp={this.state.selected} userId={this.state.user.userId} /> : null }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, null)(UpdateTemplates)
