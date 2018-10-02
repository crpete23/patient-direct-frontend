import React from 'react'
import {List, Grid, Label} from 'semantic-ui-react'
import { getEncounterById } from '../../actions/encounters'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const Encounter = ({id, date, dob, first_name, last_name, sex, time, getEncounterById, checkedIn, selected }) => {
  const dateOfBirth = `${dob.slice(5)}/${dob.slice(0,4)}`

  const isSelected = selected===id ? 'selected' : '';

  function upperCase (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  return (
    <List.Item onClick={()=>getEncounterById(id, date)} className={`${isSelected}`}>
     <List.Content>
      <List.Header>{time}</List.Header>
      <Grid>
        <Grid.Column width={2}>
          {checkedIn? <Label color='green'>Checked In</Label>: <Label color='grey'>Not Arrived</Label> }
        </Grid.Column>
        <Grid.Column width={14}>
          {`Patient: ${upperCase(first_name)} ${upperCase(last_name)}, Sex: ${upperCase(sex)}, Date of Birth: ${dateOfBirth}`}
        </Grid.Column>
      </Grid>
     </List.Content>
   </List.Item>
  )
}

function mapStateToProps(state){
  return {
    selected: state.encounters.selected_encounter.id
    }
}

function mapDispatchToProps(dispatch){
  return{
    getEncounterById: bindActionCreators(getEncounterById, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Encounter)
