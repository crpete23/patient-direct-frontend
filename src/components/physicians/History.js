import React from 'react'
import {Grid, List} from 'semantic-ui-react'
import { connect } from 'react-redux'

const History = ({hpi, ros}) => {

  return (
    <List as='ol'>
        <List.Item as='li' value='*'>
          Signing Up
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

export default History
