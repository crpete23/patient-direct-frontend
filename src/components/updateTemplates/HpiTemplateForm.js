import React, { Component } from 'react';
import { Button, Form, Segment, List, Message, Label } from 'semantic-ui-react'

import tempModels from '../../models/templates.js'

const blankTemp = {
"quality": {
  "type": "radio",
  "choices": [],
  "label": "What quality best describes your symptoms?",
  "other": true
},
"timing": {
  "type": "radio",
  "choices": [
      "constant",
      "intermittent",
      "waxing and waning"
  ],
  "label": "What is the frequency/ timing of your symptoms?",
  "other": true
},
"severity": {
  "type": "radio",
  "choices": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
  ],
  "label": "What is the severity of your symtpoms?",
  "other": false
},
"duration": {
  "type": "radio",
  "choices": [
      "less than a minute",
      "several minutes",
      "one hour",
      "several hours",
      "one day",
      "several days",
      "several weeks",
      "several months"
  ],
  "label": "When symptoms are present, how long do they usually last?",
  "other": true
},
"location": {
  "type": "radio",
  "choices": [],
  "label": "What is the location of your symptoms?",
  "other": true
},
"alleviatingFactors": {
  "type": "check",
  "choices": [],
  "label": "What, if anything, makes your symptoms better? (select all that apply)"
},
"exacerbatingFactors": {
  "type": "check",
  "choices": [],
  "label": "What, if anything, induces or makes your symptoms worse? (select all that apply)"
},
"associatedSx": {
  "type": "check",
  "choices": [],
  "label": "Have you experienced any other symptoms that you feel are related to your symptoms? (select all that apply)"
},
"context": {
  "type": "write",
  "label": "Briefly describe the context of your symptoms"
}
}

export class HpiTemplateForm extends Component {
  state = {
    template:{},
    success: false,
    cc: ''
  }

  async componentDidMount(){
    if(this.props.temp!=='new'){
      const resp = await tempModels.getHpiTemplate(this.props.userId, this.props.temp)
      this.setState({
        ...this.state,
        template: resp.data.template,
        cc: this.props.temp
      })
    } else {
      this.setState({
        ...this.state,
        template: blankTemp,
        success: false,
        cc: ''
      })
    }
  }

  async componentDidUpdate(prevProps){
    if(this.props.temp!==prevProps.temp){
      if(this.props.temp!=='new'){
        const resp = await tempModels.getHpiTemplate(this.props.userId, this.props.temp)
        this.setState({
          ...this.state,
          template: resp.data.template,
          success: false,
          cc: this.props.temp
        })
      } else {
        this.setState({
          ...this.state,
          template: blankTemp,
          success: false,
          cc: ''
        })
      }
    }
  }

    handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      this.setState({ ...this.state,
      [name]: value })
    }

    submitChange = async () => {

      if(this.props.temp!=='ros' && this.props.temp!=='new'){
        await tempModels.updateHpiTemplate(this.props.userId, this.props.temp, {template: this.state.template})
        this.setState({
          ...this.state,
          success: true
        })
      } else {
        const newTemp = {
          cc: this.state.cc,
          doctor_id: this.props.userId,
          template: this.state.template
        }
        await tempModels.createHpiTemplate(this.props.userId, newTemp)
        this.props.selectTemplate(this.state.cc)
      }
    }

    upperCase = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }


  render(){
      const keyArr = Object.keys(this.state.template)
      let updateTemplate = keyArr.map(element =>{
        if (this.state.template[element].type === 'radio' || this.state.template[element].type === 'check'){
          return (
            <List.Item key={element}>
              <h3>{this.upperCase(element)}</h3>
              <List.Content>
                <label><b><u>Label</u></b></label>
                <Form>
                  <Form.Field>
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
                  <label><b><u>Choices</u></b></label>
                  {this.state.template[element].choices.map((choice, i)=>{
                    return (
                      <List.Item key={choice}>
                        {this.upperCase(choice)} <a className="removeButtons" onClick={()=>{ this.state.template[element].choices.splice(i,1);
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
      <div className="updateTempWhiteContainer">
        <h2>{this.upperCase(this.props.temp)}</h2>
        { this.props.temp==='new' ?
        <Form>
        <Form.Field>
        <label>Chief Complaint</label>
        <input name='cc' placeholder='Name of CC' value={this.state.cc} onChange={((e)=>{
          this.setState({
            ...this.state,
            cc: e.target.value
          })
        })} />
      </Form.Field>
    </Form>
        : null}
        <Button content={(this.props.temp==='new') ? 'Submit New Template':'Submit Changes'} onClick={this.submitChange}/>
        { this.state.success ?   <Message positive>
    <Message.Header>{this.props.temp==='new' ? "New template has been successfully submitted" : "Changes have been successfully submitted" }</Message.Header>
  </Message> : null }
        <List celled>
          { updateTemplate }
        </List>
      </div>

    )
  }
}

export default HpiTemplateForm
