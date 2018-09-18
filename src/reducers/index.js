import { combineReducers } from 'redux';
import auth from './auth.reducers';
import patientsReducer from './patients'
import encountersReducer from './encounters'

const reducers = combineReducers({
  auth,
  patients: patientsReducer,
  encounters: encountersReducer
})

export default reducers
