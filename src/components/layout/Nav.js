import React from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogout } from '../../actions/auth.actions'
import { checkinComplete } from '../../actions/patients'
import logo from '../../logo.svg';
import './styles/styles.css';

const Nav = (props) => {
  let userId;
  try {
    userId = props.auth.user.userId
  } catch (e) {
    userId = false
  }

  let checkInEncounterId;
  try {
    checkInEncounterId = props.encounter.id
  } catch (e) {
    checkInEncounterId = false
  }

  return (
    <Menu>
      <Menu.Menu>
        <Menu.Item onClick={async() => {
          if(checkInEncounterId){
            await props.checkinComplete()
          }
          props.history.push( userId ? '/physicianHome' : '/' )}}>
          PatientDirect <img src={logo} alt="logo" className="NavBar-logo"/>
        </Menu.Item>
      </Menu.Menu>
      {
        userId ?
      <Menu.Menu position="right">
        <Menu.Item active={props.history.location.pathname === '/physicianHome'} onClick={() => props.history.push('/physicianHome')}>
          Physician Home
        </Menu.Item>
        <Menu.Item active={props.history.location.pathname === '/templates'} onClick={() =>
          props.history.push('/templates')}>
          Update Templates
        </Menu.Item>
        <Menu.Item onClick={ async() => {
          await props.userLogout()
          props.history.push('/login')
        }}>
          Sign Out
        </Menu.Item>
      </Menu.Menu>
      :
      <Menu.Menu position="right">
        <Menu.Item disabled={checkInEncounterId? true: false} active={props.history.location.pathname === '/signup'} onClick={() => props.history.push('/signup')}>
          Physician Sign Up
        </Menu.Item>
        <Menu.Item disabled={checkInEncounterId? true: false} active={props.history.location.pathname === '/login'} onClick={() =>
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
    userLogout: bindActionCreators(userLogout, dispatch),
    checkinComplete: bindActionCreators(checkinComplete, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
