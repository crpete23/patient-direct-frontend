import axios from 'axios'
const BASE_URL = 'http://localhost:3200/api/templates'

function getCCList(doctor_id){
  return axios.get(`${BASE_URL}/${doctor_id}`)
}

export default {
  getCCList
}
