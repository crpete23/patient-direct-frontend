import axios from 'axios'
const BASE_URL = 'http://localhost:3200/api/templates'

function getCCList(doctor_id){
  return axios.get(`${BASE_URL}/${doctor_id}/hpi`)
}

function getHpiTemplate(doctor_id, cc){
  return axios.get(`${BASE_URL}/${doctor_id}/hpi/${cc}`)
}

function getRosTemplate(doctor_id){
  return axios.get(`${BASE_URL}/${doctor_id}/ros`)
}

function updateHpiTemplate(doctor_id, cc, updatesForTemplate){
  const token = localStorage.getItem('token')
  return axios.patch(`${BASE_URL}/${doctor_id}/hpi/${cc}`, updatesForTemplate, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
}

export default {
  getCCList,
  getHpiTemplate,
  getRosTemplate,
  updateHpiTemplate
}
