import {
  GET_ALL_ENCOUNTERS
} from '../actions/encounters'

let initialState = {
  encounters : []
}

export default(state = initialState, action) =>{
  switch(action.type){
    case GET_ALL_ENCOUNTERS:
      return { encounters: action.payload }
    default:
      return state;
  }
}
