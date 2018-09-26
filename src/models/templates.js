import axios from 'axios'
const BASE_URL = 'http://localhost:3200/api/templates'

function getCCList(doctor_id){
  return axios.get(`${BASE_URL}/${doctor_id}`)
}

function getTemplate(doctor_id, cc){
  return axios.get(`${BASE_URL}/${doctor_id}/cc/${cc}`)
}

export default {
  getCCList,
  getTemplate
}
