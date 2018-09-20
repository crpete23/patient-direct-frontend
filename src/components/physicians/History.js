import React from 'react'
import {Grid } from 'semantic-ui-react'
import Hpi from './Hpi'
import Ros from './Ros'

const History = ({hpi, ros}) => {

  return (
    <Grid columns={2}>
      <Grid.Column>
        <Grid.Row centered>
          <h4>History of Present Illness: </h4>
        </Grid.Row>
        <Grid.Row centered>
          <Hpi {...hpi} />
        </Grid.Row>
      </Grid.Column>
      <Grid.Column>
        <Grid.Row centered>
          <h4>Review of Systems: </h4>
        </Grid.Row>
        <Grid.Row centered>
          <Ros {...ros} />
        </Grid.Row>
      </Grid.Column>
    </Grid>
)
}

export default History
