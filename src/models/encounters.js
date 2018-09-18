import axios from 'axios'
const BASE_URL = 'http://localhost:3200/api/encounters'

function getAll(token){
  return axios.get(`${BASE_URL}`, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
}

function getAllByDate(dateNumber, token){
  return axios.get(`${BASE_URL}/${dateNumber}`, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
}

function getById(encounter_id, dateNumber, token){
  console.log('requesting', encounter_id, dateNumber, token)
  return axios.get(`${BASE_URL}/${dateNumber}/${encounter_id}`, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
}

export default {
  getAll,
  getAllByDate,
  getById
}
