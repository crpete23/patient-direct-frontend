import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

import HelperTempForm from './HelperTempForm'
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

  selectTemplate = async (value) => {
    try{
      const resp = await tempModels.getCCList(this.props.user.userId)
      const chief_complaints = resp.data.chief_complaints;
      this.setState({
        ...this.state,
        selected: value,
        hpiTempOptions: chief_complaints
      })
    } catch (e){
      console.log(e)
    }
  }

  deselect = async () => {
    const resp = await tempModels.getCCList(this.props.user.userId)
    const chief_complaints = resp.data.chief_complaints;
    this.setState({
      ...this.state,
      selected: '',
      hpiTempOptions: chief_complaints
    })
  }

  render(){
    return (
      <Grid id='updateTempBodyGrid'>
        <div className="bg"></div>
        <Grid.Row>
          <Grid.Column width={2}>
          </Grid.Column>
          <Grid.Column width={4} className="tempListContainer">
            <h2>Select Template to Edit</h2>
            <TemplateList hpiTemps={this.state.hpiTempOptions} selectTemplate={this.selectTemplate} userId={this.props.user.userId} current={this.state.selected} deselect={this.deselect} />
          </Grid.Column>
          <Grid.Column width={8}>
            {this.state.selected ? < HelperTempForm temp={this.state.selected} userId={this.props.user.userId} selectTemplate={this.selectTemplate} /> : null }
          </Grid.Column>
          <Grid.Column width={2}>
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
