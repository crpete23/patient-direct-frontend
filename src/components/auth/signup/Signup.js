import React, { Component } from 'react';
import { Button, Checkbox, Form, Grid, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userSignup } from '../../../actions/auth.actions'

const styles = {
  root: {
    marginTop: '5%'
  }
}

export class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    verify_password: ''
  }

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  signup = (e) => {
    e.preventDefault()
    const newUser = {
      first_name : this.state.firstName,
      last_name : this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }
    this.props.userSignup(newUser)
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      verify_password: ''
    })
  }

  render(){
    return (
        <Grid centered style={styles.root}>
          <Grid.Column width={6}>
            <Form onSubmit={this.signup}>
              <Form.Field>
                <label>First Name</label>
                <input name="firstName" type="text" placeholder="First Name" onChange={this.onChange} value={this.state.firstName} />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input name="lastName" type="text" placeholder="Last Name" onChange={this.onChange} value={this.state.lastName} />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input name="email" type="email" placeholder="Email" onChange={this.onChange} value={this.state.email} />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input name="password" type="password" placeholder="Password" onChange={this.onChange} value={this.state.password} />
              </Form.Field>
              <Form.Field>
                <label>Confirm Password</label>
                <input name="verify_password" type="password" placeholder="Confirm Password" onChange={this.onChange} value={this.state.verify_password} />
              </Form.Field>
              <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions" ></Checkbox>
              </Form.Field>
              <Button type="submit">Sign Up</Button>
              {this.props.auth.showSignupError ? <Segment >
                Unable to Register User
              </Segment> : null }
            </Form>
          </Grid.Column>
        </Grid>
      )
    }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch){
  return{
    userSignup: bindActionCreators(userSignup, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
