import React from 'react'
import {Grid, List} from 'semantic-ui-react'
import { connect } from 'react-redux'
import History from './History'


const SelectedEncounter = ({id, date, dob, first_name, last_name, sex, time, hx }) => {
  const dateOfBirth = `${dob.slice(5)}/${dob.slice(0,4)}`

  return (
    <Grid>
      <Grid.Row>
        <h1>{`${first_name} ${last_name}`}</h1>
      </Grid.Row>
      <Grid.Row>
        <h3>{`Appointment Time: ${time}`}</h3>
      </Grid.Row>
      <Grid.Row>
        <History {...hx} />
      </Grid.Row>
    </Grid>
)
}

export default SelectedEncounter
