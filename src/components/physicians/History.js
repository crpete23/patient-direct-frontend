import React from 'react'
import {Grid } from 'semantic-ui-react'
import Hpi from './Hpi'
import Ros from './Ros'

const History = ({hpi, ros}) => {

  return (
    <Grid>
      <Grid.Row only="computer tablet">
        <Grid.Column width={8}>
          <Grid.Row centered>
            <h4>History of Present Illness: </h4>
          </Grid.Row>
          <Grid.Row>
            <Hpi {...hpi} />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={8}>
          <Grid.Row centered>
            <h4>Review of Systems: </h4>
          </Grid.Row>
          <Grid.Row>
            <Ros {...ros} />
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row only="mobile">
        <Grid.Column width={16}>
          <Grid.Row centered>
            <h4>History of Present Illness: </h4>
          </Grid.Row>
          <Grid.Row>
            <Hpi {...hpi} />
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row only="mobile">
        <Grid.Column width={16}>
          <Grid.Row centered>
            <h4>Review of Systems: </h4>
          </Grid.Row>
          <Grid.Row>
            <Ros {...ros} />
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>

    </Grid>
)
}

export default History
