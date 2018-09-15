import {
  GET_ALL_PATIENTS,
  FILTER_PATIENTS
} from '../actions/patients'

const initialPatients = []

function patients(state=initialPatients, {type, payload}){
  switch(type){
    case GET_ALL_PATIENTS:
      return payload
    case FILTER_PATIENTS:
      return payload
    default: return state
  }
}

export default patients
