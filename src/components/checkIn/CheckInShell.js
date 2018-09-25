import React, {Component} from 'react';
import {
  Button,
  Form,
  Grid,
  Segment,
  Label,
  Divider
} from 'semantic-ui-react'

import ChiefComplaint from './ChiefComplaint'
import Hpi from './Hpi'
import ReviewOfSystems from './ReviewOfSystems'

export class CheckInShell extends Component {
  state = {
    pageNum: 1,
    page: {
      '1': <ChiefComplaint submitted={
        () =>
        {
          this.setState({
            ...this.state,
            holdNext: false
          })
        }
      }/>,
      '2': <Hpi submitted={
        () =>
        {
          this.setState({
            ...this.state,
            holdNext: false
          })
        }
      }/>,
      '3': <ReviewOfSystems submitted={
        () =>
        {
          this.setState({
            ...this.state,
            holdNext: false
          })
        }
      }/>,
    },
    holdNext: true
  }

  submitted = () => {
    this.setState({
      ...this.state,
      holdNext: false
    })
  }

  pageBack = (e) =>{
    e.preventDefault()
    this.setState({
      ...this.state,
      pageNum: this.state.pageNum-1
    })
  }

  pageForward = (e) =>{
    e.preventDefault()
    this.setState({
      ...this.state,
      pageNum: this.state.pageNum+1,
      holdNext: true
    })
  }

  render() {
    return (
      <Grid centered id='bodyGrid'>
        <Grid.Row>
          {
            this.state.page[this.state.pageNum]
          }
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12}>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button.Group>
              <Button disabled={(this.state.page[this.state.pageNum-1]) ? false: true} onClick={this.pageBack} labelPosition='left' icon='left chevron' content='Back' />
              <Button disabled={(this.state.page[this.state.pageNum+1]&&(!this.state.holdNext)) ? false: true} onClick={this.pageForward} labelPosition='right' icon='right chevron' content='Next' />
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
  )
  }
}

export default CheckInShell
