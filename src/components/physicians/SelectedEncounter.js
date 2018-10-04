import React from 'react'
import {Grid, Divider } from 'semantic-ui-react'
import History from './History'


const SelectedEncounter = ({id, date, dob, first_name, last_name, sex, time, hx }) => {

  function upperCase (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  return (
    <Grid padded className='physicianHomeWhiteContainer'>
      <Grid.Row centered id="ptNameH">
        <h1>{`${upperCase(first_name)} ${upperCase(last_name)}`}</h1>
      </Grid.Row>
      <Grid.Row centered id="selectedAptTimeH">
        <h3>{`Appointment Time: ${time}`}</h3>
      </Grid.Row>
      <Grid.Row centered id="selectedPtHxNoTop">
        <History {...hx} />
      </Grid.Row>
    </Grid>
)
}

export default SelectedEncounter
