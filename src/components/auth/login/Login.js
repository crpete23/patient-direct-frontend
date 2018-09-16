import React from 'react';
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react'

const styles = {
  root: {
    marginTop: '5%'
  }
}

const Login = () => (
  <Grid centered style={styles.root}>
    <Grid.Column width={6}>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input type="email" placeholder="Email"/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder="Password"/>
        </Form.Field>
        <Button type="submit">Log In</Button>
      </Form>
    </Grid.Column>
  </Grid>
);

export default Login;
