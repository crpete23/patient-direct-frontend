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

function updateRosTemplate(doctor_id, updatesForTemplate){
  const token = localStorage.getItem('token')
  return axios.patch(`${BASE_URL}/${doctor_id}/ros`, updatesForTemplate, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
}

function createHpiTemplate(doctor_id, newTemp){
  const token = localStorage.getItem('token')
  return axios.post(`${BASE_URL}/${doctor_id}/hpi`, newTemp, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
}

function deleteHpiTemplate(doctor_id, cc){
  const token = localStorage.getItem('token')
  return axios.delete(`${BASE_URL}/${doctor_id}/hpi/${cc}`, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
}

export default {
  getCCList,
  getHpiTemplate,
  getRosTemplate,
  updateHpiTemplate,
  updateRosTemplate,
  createHpiTemplate,
  deleteHpiTemplate
}
