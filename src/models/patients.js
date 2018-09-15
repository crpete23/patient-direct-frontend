import axios from 'axios'
const BASE_URL = 'http://localhost:3200/api/patients'

function getAllPatients(){
  return axios.get(`${BASE_URL}`)
}

function getPatient(id){
  return axios.get(`${BASE_URL}/${id}`)
}

function createPatient(post){
  return axios.post(`${BASE_URL}`, post)
}

function deletePatient(id){
  return axios.delete(`${BASE_URL}/${id}`)
}

export default {
  getAllPatients,
  getPatient,
  createPatient,
  deletePatient
}
