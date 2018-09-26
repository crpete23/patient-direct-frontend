import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import tempModels from '../../models/templates.js'

export class CCdropdown extends Component {
  state = {
    chief_complaints: this.props.value,
    options: []
  }

  async componentDidMount(){
    const resp = await tempModels.getCCList(this.props.doctor_id)
    let options = resp.data['chief_complaints'].map(cc => {
      return { key: cc, text: cc, value: cc}
    })
    this.setState({
      ...this.state,
      options
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
      <Dropdown placeholder='Reason For Visit' fluid multiple selection options={this.state.options}
        onChange = {this.handleChange} renderLabel={this.renderLabel} value={this.props.value} />
    )
  }

}

export default CCdropdown
