import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userVerify } from '../../actions/auth.actions'


const AuthenticatedRoute = (props) => {
  let userId;
  try {
    userId = props.auth.user.userId
  } catch (e) {
    userId = false
  }
  return (
    <Route {...props} render={()=>{
      return userId ? props.render() : <Redirect to="/login" />
    }} />
  )
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch){
  return{
    userVerify: bindActionCreators(userVerify, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedRoute)
