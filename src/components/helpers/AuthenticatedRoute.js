import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


const AuthenticatedRoute = (props) => {

  return (
    <Route {...props} render={()=>{
      return props.user.id ? props.render() : <Redirect to="/login" />
    }} />
  )
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, null)(AuthenticatedRoute)
