import React from 'react';
import { connect } from 'react-redux'
import { Grid, Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux'
import { checkinComplete } from '../../actions/patients'
import { withRouter } from 'react-router-dom';

const Complete = (props) => {
  return (
    <Grid className="checkInContainer">
      <Grid.Row>
        <Grid.Column centered>
          <h2>Thank you. You are all checked in now and may return the tablet to the front desk</h2>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={6}>
        </Grid.Column>
        <Grid.Column stretched width={4}>
          <Button id="finishedButton" onClick={async()=> {
            await props.checkinComplete()
            props.history.push('/')
          }}>Finished
          </Button>
        </Grid.Column>
        <Grid.Column width={6}>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}


function mapDispatchToProps(dispatch){
  return{
    checkinComplete: bindActionCreators(checkinComplete, dispatch)
  }
}

export default withRouter(connect(null,mapDispatchToProps)(Complete));
