import React from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import logo from '../../logo.svg';
import './styles/styles.css';

const Nav = (props) => (
  <Menu>
    <Menu.Menu>
      <Menu.Item onClick={() => props.history.push('/')}>
        PatientDirect <img src={logo} alt="logo" className="NavBar-logo"/>
      </Menu.Item>
    </Menu.Menu>
    <Menu.Menu position="right">
      <Menu.Item active={props.history.location.pathname === '/signup'} onClick={() => props.history.push('/signup')}>
        Sign Up
      </Menu.Item>
      <Menu.Item active={props.history.location.pathname === '/login'} onClick={() =>
        props.history.push('/login')}>
        Login
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default withRouter(Nav);
