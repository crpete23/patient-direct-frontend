import React from 'react'
import {List} from 'semantic-ui-react'
import { connect } from 'react-redux'


const SelectedEncounter = ({id, date, dob, first_name, last_name, sex, time }) => {
  const dateOfBirth = `${dob.slice(5)}/${dob.slice(0,4)}`

  return (
    <List as='ol'>
  <List.Item as='li' value='*'>
    {`${first_name} ${last_name}`}
  </List.Item>
  <List.Item as='li' value='*'>
    User Benefits
  </List.Item>
  <List.Item as='li' value='*'>
    User Types
    <List.Item as='ol'>
      <List.Item as='li' value='-'>
        Admin
      </List.Item>
      <List.Item as='li' value='-'>
        Power User
      </List.Item>
      <List.Item as='li' value='-'>
        Regular User
      </List.Item>
    </List.Item>
  </List.Item>
  <List.Item as='li' value='*'>
    Deleting Your Account
  </List.Item>
</List>
)
}

export default SelectedEncounter
