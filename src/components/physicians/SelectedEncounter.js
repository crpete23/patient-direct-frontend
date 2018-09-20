import React from 'react'
import {Grid } from 'semantic-ui-react'
import History from './History'


const SelectedEncounter = ({id, date, dob, first_name, last_name, sex, time, hx }) => {

  return (
    <Grid padded>
      <Grid.Row centered>
        <h1>{`${first_name} ${last_name}`}</h1>
      </Grid.Row>
      <Grid.Row centered>
        <h3>{`Appointment Time: ${time}`}</h3>
      </Grid.Row>
      <Grid.Row centered>
        <History {...hx} />
      </Grid.Row>
    </Grid>
)
}

export default SelectedEncounter
