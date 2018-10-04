import axios from 'axios'
const BASE_URL = 'https://patient-direct-backend.herokuapp.com/api/patients'

function checkIn(first_name, last_name, dob, today){
  return axios.patch(`${BASE_URL}/${first_name}/${last_name}/${dob}/${today}`)
}

function updateHx(patient_id, encounter_id, updatesForEncounter){
  return axios.patch(`${BASE_URL}/${patient_id}/encounters/${encounter_id}`, updatesForEncounter)
}

function getFullEncoutnerInfo(patient_id, encounter_id){
  return axios.get(`${BASE_URL}/${patient_id}/encounters/${encounter_id}`)
}

export default {
  checkIn,
  getFullEncoutnerInfo,
  updateHx
}
