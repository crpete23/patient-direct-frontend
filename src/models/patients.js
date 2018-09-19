import axios from 'axios'
const BASE_URL = 'http://localhost:3200/api/patients'

function checkIn(first_name, last_name, dob, today){
  return axios.patch(`${BASE_URL}/${first_name}/${last_name}/${dob}/${today}`)
}

export default {
  checkIn
}
