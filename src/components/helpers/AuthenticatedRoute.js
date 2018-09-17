import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


const AuthenticatedRoute = (props) => {
  let userId;
  try {
    userId = props.auth.user.response.id
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

export default connect(mapStateToProps, null)(AuthenticatedRoute)
