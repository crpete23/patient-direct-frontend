import { combineReducers } from 'redux';
import auth from './auth.reducers';
import patientsReducer from './patients'

const reducers = combineReducers({
  auth,
  patients: patientsReducer
})

export default reducers
