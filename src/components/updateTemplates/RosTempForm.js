import React, { Component } from 'react';
import { Button, Checkbox, Form, Grid, Segment, Label, List, Message } from 'semantic-ui-react'

import tempModels from '../../models/templates.js'

export class RosTempForm extends Component {
  state = {
    template:{},
    success: false
  }

  async componentDidMount(){
      const resp = await tempModels.getRosTemplate(this.props.userId)
      this.setState({
        ...this.state,
        template: resp.data.template,
        success: false
      })
    }

    handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      this.setState({ ...this.state,
      [name]: value })
    }

    submitChange = async () => {
        await tempModels.updateRosTemplate(this.props.userId, {template: this.state.template})
        this.setState({
          ...this.state,
          success: true
        })
      }

      upperCase = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

  render(){
    const keyArr = Object.keys(this.state.template)
    let updateTemplate = keyArr.map(system => {
      return (<List.Item key={system}>
        <h3>{this.upperCase(system)}</h3>
        <List.Content>
          <List>
            {
              Object.keys(this.state.template[system]).map(symptom => {
                return (<List.Item key={symptom}>{this.upperCase(symptom)}<a onClick={() => {
                    delete this.state.template[system][symptom]
                    this.setState({
                      ...this.state
                    })
                  }}>Remove</a>
                </List.Item>)
              })
            }
          </List>
          <Form onSubmit={ (e)=>{
            e.preventDefault;
            this.state.template[system][this.state[system]]=false;
            this.setState({
              ...this.state,
              [system]:''
            })
          }}>
            <Form.Group>
              <Form.Input name={system} placeholder='Add to System Template' value={this.state[system]} onChange={this.handleChange}/>
              <Form.Button content={`Add to ${system}`} />
            </Form.Group>
          </Form>
        </List.Content>
      </List.Item>)
    })

    return(
      <Segment>
        <h2>Review of Systems Template</h2>
        <Button content={'Submit Changes'} onClick={this.submitChange}/>
        { this.state.success ?   <Message positive>
    <Message.Header>{"Changes have been successfully submitted" }</Message.Header>
  </Message> : null }
        <List celled>
          { updateTemplate }
        </List>
      </Segment>
    )
  }
}

export default RosTempForm
