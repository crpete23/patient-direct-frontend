import React from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogout } from '../../actions/auth.actions'
import logo from '../../logo.svg';
import './styles/styles.css';

const Nav = (props) => {
  let userId;
  try {
    userId = props.auth.user.userId
  } catch (e) {
    userId = false
  }

  return (
    <Menu>
      <Menu.Menu>
        <Menu.Item onClick={() => props.history.push( userId ? '/physicianHome' : '/' )}>
          PatientDirect <img src={logo} alt="logo" className="NavBar-logo"/>
        </Menu.Item>
      </Menu.Menu>
      {
        userId ?
      <Menu.Menu position="right">
        <Menu.Item onClick={ async() => {
          await props.userLogout()
          props.history.push('/login')
        }}>
          Sign Out
        </Menu.Item>
      </Menu.Menu>
      :
      <Menu.Menu position="right">
        <Menu.Item active={props.history.location.pathname === '/signup'} onClick={() => props.history.push('/signup')}>
          Physician Sign Up
        </Menu.Item>
        <Menu.Item active={props.history.location.pathname === '/login'} onClick={() =>
          props.history.push('/login')}>
          Physician Login
        </Menu.Item>
      </Menu.Menu>
      }
    </Menu>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    encounter: state.patients.checkInEncounter
  }
}

function mapDispatchToProps(dispatch){
  return{
    userLogout: bindActionCreators(userLogout, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
