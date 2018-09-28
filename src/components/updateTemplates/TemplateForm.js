import React, { Component } from 'react';
import { Button, Checkbox, Form, Grid, Segment, Label, List, Message } from 'semantic-ui-react'

import tempModels from '../../models/templates.js'

export class TemplateForm extends Component {
  state = {
    template:{},
    success: false
  }

  async componentDidMount(){
    if(this.props.temp!=='ros' && this.props.temp!=='new'){
      const resp = await tempModels.getHpiTemplate(this.props.userId, this.props.temp)
      console.log('CDM', this.props.temp, resp.data)
      this.setState({
        ...this.state,
        template: resp.data.template
      })
    }
  }

  async componentDidUpdate(prevProps){
    if(this.props.temp!==prevProps.temp){
      if(this.props.temp!=='ros' && this.props.temp!=='new'){
        const resp = await tempModels.getHpiTemplate(this.props.userId, this.props.temp)
        console.log('CDU', this.props.temp, resp.data)
        this.setState({
          ...this.state,
          template: resp.data.template,
          success: false
        })
      } else {
        this.setState({
          ...this.state,
          template: {},
          success: false
        })
      }
    }
  }

    handleChange = (e, { name, value }) => this.setState({ ...this.state, [name]: value })

    submitChange = async () => {
      await tempModels.updateHpiTemplate(this.props.userId, this.props.temp, {template: this.state.template})
      this.setState({
        ...this.state,
        success: true
      })
    }

  render(){
    const keyArr = Object.keys(this.state.template)
    let hpiUpdate = keyArr.map(element =>{
      if (this.state.template[element].type === 'radio' || this.state.template[element].type === 'check'){
        return (
          <List.Item key={element}>
            <h3>{element}</h3>
            <List.Content>
              <Form>
                <Form.Field>
                  <label>Label</label>
                  <input value={this.state.template[element].label} onChange={((e)=>{
                    this.setState({
                      ...this.state,
                      template: {
                        ...this.state.template,
                        [element]:{
                          ...this.state.template[element],
                          label: e.target.value
                        }
                      }
                    })
                  })}/>
                </Form.Field>
              </Form>
              <List>
                <h5>Choices</h5>
                {this.state.template[element].choices.map((choice, i)=>{
                  return (
                    <List.Item key={choice}>
                      {choice} <a onClick={()=>{ this.state.template[element].choices.splice(i,1);
                        this.setState({
                        ...this.state
                      })
                    }}>Remove</a>
                    </List.Item>
                  )
                })}
              </List>
              <Form onSubmit={ (e)=>{
                e.preventDefault;
                this.state.template[element].choices.push(this.state[element]);
                this.setState({
                  ...this.state,
                  [element]:''
                })
              }}>
                <Form.Group>
                  <Form.Input name={element} placeholder='Add to Choices' value={this.state[element]} onChange={this.handleChange}/>
                  <Form.Button content='Add to Choices' />
                </Form.Group>
              </Form>
            </List.Content>
          </List.Item>
        )
      }
    })

    return(
      <Segment>
        <h2>{this.props.temp}</h2>
        <Button content='Submit Changes' onClick={this.submitChange}/>
        { this.state.success ?   <Message positive>
    <Message.Header>Changes have been successfully submitted</Message.Header>
  </Message> : null }
        <List celled>
          { hpiUpdate }
        </List>
      </Segment>

    )
  }
}

export default TemplateForm
