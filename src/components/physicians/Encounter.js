import React from 'react'
import {List} from 'semantic-ui-react'

const Encounter = ({dob, first_name, last_name, sex, time}) => {
  const dateOfBirth = `${dob.slice(5)}/${dob.slice(0,4)}`
  return (
    <List.Item>
     <List.Content>
      <List.Header>{time}</List.Header>
      {`Patient: ${first_name} ${last_name}, Sex: ${sex}, Date of Birth: ${dateOfBirth}`}
     </List.Content>
   </List.Item>
  )
}


export default Encounter
