import axios from 'axios'
const BASE_URL = 'https://patient-direct-backend.herokuapp.com/api/users'

function login(body){
  return axios.post(`${BASE_URL}/login`, body)
}

function signUp(newUser){
  return axios.post(`${BASE_URL}/signup`, newUser)
}

function verify(token){
  return axios.get(`${BASE_URL}/verify`, {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  })
}

export default {
  login,
  signUp,
  verify
}
