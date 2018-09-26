import {
  CHECKED_IN,
  FAILED_CHECK_IN,
  UPDATED_HX,
  CHECKIN_COMPLETE
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
    case UPDATED_HX:
      return { checkInEncounter: payload, checkInError: false }
    case CHECKIN_COMPLETE:
      return { checkInEncounter: {}, checkInError: false }
    default: return state
  }
}

export default patients
