import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const CheckedInRoute = (props) => {
  let encounterId;
  try{
    encounterId = props.encounter.id
  } catch (e) {
    encounterId = false;
  }
  return (
    <Route {...props} render={()=>{
      return encounterId ? props.render() : <Redirect to="/" />
    }} />
  )
}

function mapStateToProps(state) {
  return {
    encounter: state.patients.checkInEncounter
  }
}

export default connect(mapStateToProps, null)(CheckedInRoute)
