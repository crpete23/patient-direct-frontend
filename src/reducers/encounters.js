import {
  GET_ALL_ENCOUNTERS,
  SELECTED_ENCOUNTER
} from '../actions/encounters'

let initialState = {
  encounters : [],
  selected_encounter: {}
}

export default(state = initialState, action) =>{
  switch(action.type){
    case GET_ALL_ENCOUNTERS:
      return { encounters: action.payload, selected_encounter: {} }
    case SELECTED_ENCOUNTER:
      return { ...state, selected_encounter : action.payload }
    default:
      return state;
  }
}
