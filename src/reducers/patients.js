import {
  CHECKED_IN,
  FAILED_CHECK_IN
} from '../actions/patients'

const initialState = {
  checkInEncounter: {},
  checkInError: false
}

function patients(state=initialState, {type, payload}){
  switch(type){
    case CHECKED_IN:
      return { checkInEncounter: payload, checkInError: false }
    case FAILED_CHECK_IN:
      return { checkInEncounter: {}, checkInError: true }
    default: return state
  }
}

export default patients
