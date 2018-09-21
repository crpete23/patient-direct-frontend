import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'Chest Pain', text: 'Chest Pain', value: 'Chest Pain' },
  { key: 'Shortness of Breath', text: 'Shortness of Breath', value: 'Shortness of Breath' },
  { key: 'Palpitations', text: 'Palpitations', value: 'Palpitations' },
  { key: 'Routine Check Up', text: 'Routine Check Up', value: 'Routine Check Up' }
]


export class CCdropdown extends Component {
  state = {
    chief_complaints: this.props.value
  }

  renderLabel = (label) => {
    const cc = this.state.chief_complaints;
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
