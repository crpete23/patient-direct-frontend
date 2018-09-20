import patientsModel from '../models/patients'

var moment = require('moment')

export const CHECKED_IN = 'CHECKED IN'
export const FAILED_CHECK_IN = 'FAILED_CHECK_IN'

export const checkIn = (first_name, last_name, dob) => {
  const dobNumber = dob.replace(/\-/g, '')
  const today = moment().format(`YYYYMMDD`)
  //const today = '20180830'
  return async(dispatch) => {
    try {
      let response = await patientsModel.checkIn(first_name, last_name, dobNumber, today)
      if(response.data.encounter){
        let fullEncounterInfoResp = await patientsModel.getFullEncoutnerInfo(response.data.encounter.patient_id, response.data.encounter.id)
        dispatch({
          type: CHECKED_IN,
          payload: fullEncounterInfoResp.data.encounter
        })
      } else {
        dispatch({
          type: FAILED_CHECK_IN,
          payload: {}
        })
      }
    } catch (e){
      dispatch({
        type: FAILED_CHECK_IN,
        payload: {}
      })
    }
  }
}
