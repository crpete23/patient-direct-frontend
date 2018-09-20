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
    chief_complaints: []
  }

  renderLabel = (label) => {
      return ({
      color: 'blue',
      content: `${label.text}`
    })
  }

  render(){
    return (
      <Dropdown placeholder='Reason For Visit' fluid multiple selection options={options} renderLabel={this.renderLabel} />
    )
  }

}

export default CCdropdown
