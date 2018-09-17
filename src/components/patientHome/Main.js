import React, { Component } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import './styles/styles.css';

export class Main extends Component {
  state = {
    first_name: '',
    last_name: '',
    dob: ''
  }

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  render(){
    return (
      <Grid centered id='bodyGrid'>
        <Grid.Column width={3}>
          <Form>
            <Form.Field>
              <label>First Name</label>
              <input name='first_name' type='text' placeholder='First Name' onChange={this.onChange} value={this.state.first_name} />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input name='last_name' type='text' placeholder='Last Name' onChange={this.onChange} value={this.state.last_name} />
            </Form.Field>
            <Form.Field>
              <label>Date of Birth</label>
              <input name='dob' type='date' placeholder='Date of Birth' onChange={this.onChange} value={this.state.dob} />
            </Form.Field>
            <Grid>
              <Grid.Column width={3}></Grid.Column>
              <Grid.Column stretched width={10}>
               <Button type="submit">Check In</Button>
             </Grid.Column>
             <Grid.Column width={3}></Grid.Column>
            </Grid>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps(state){
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, null)(Main);
