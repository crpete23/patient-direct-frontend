import encounterModel from '../models/encounters'

export const GET_ALL_ENCOUNTERS = 'GET_ALL_ENCOUNTERS'
export const SELECTED_ENCOUNTER = 'SELECTED_ENCOUNTER'

export const getAllEncounters = () => {
  const token = localStorage.getItem('token')
  return async(dispatch) => {
    try {
      let response = await encounterModel.getAll(token)
      dispatch({
        type: GET_ALL_ENCOUNTERS,
        payload: response.data.encounters
      })
    } catch (e){
      console.log(e)
    }
  }
}

export const getAllEncountersByDate = (date) => {
  const token = localStorage.getItem('token')
  const dateNumber = date.replace(/\//g, '')
  return async(dispatch) => {
    try {
      let response = await encounterModel.getAllByDate(dateNumber, token)
      dispatch({
        type: GET_ALL_ENCOUNTERS,
        payload: response.data.encounters
      })
    } catch (e){
      console.log(e)
    }
  }
}

export const getEncounterById = (encounter_id, date) => {
  const token = localStorage.getItem('token')
  const dateNumber = date.replace(/\//g, '')
  return async(dispatch) => {
    try {
      let response = await encounterModel.getById(encounter_id, dateNumber, token)
      dispatch({
        type: SELECTED_ENCOUNTER,
        payload: response.data.encounter
      })
    } catch (e){
      console.log(e)
    }
  }
}
