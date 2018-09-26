import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import tempModels from '../../models/templates.js'

let options = [
  { key: 'Chest Pain', text: 'Chest Pain', value: 'Chest Pain' },
  { key: 'Shortness of Breath', text: 'Shortness of Breath', value: 'Shortness of Breath' },
  { key: 'Palpitations', text: 'Palpitations', value: 'Palpitations' },
  { key: 'Routine Check Up', text: 'Routine Check Up', value: 'Routine Check Up' }
]


export class CCdropdown extends Component {
  state = {
    chief_complaints: this.props.value
  }

  async componentDidMount(){
    const resp = await tempModels.getCCList(this.props.doctor_id)
    options = resp.data['chief_complaints'].map(cc => {
      return { key: cc, text: cc, value: cc}
    })
  }

  renderLabel = (label) => {
    const cc = this.props.value;
    let number = 1;
    for(let i=0; i<cc.length; i++){
      if(cc[i]===label.key){
        break;
      }
      number++;
    }
      return ({
      color: 'blue',
      content: `${number}) ${label.text}`
    })
  }

  handleChange = (e, { value }) => {
    this.props.updateCC(value)
    this.setState({ chief_complaints: value }
    )
  }

  render(){
    return (
      <Dropdown placeholder='Reason For Visit' fluid multiple selection options={options}
        onChange = {this.handleChange} renderLabel={this.renderLabel} value={this.props.value} />
    )
  }

}

export default CCdropdown
