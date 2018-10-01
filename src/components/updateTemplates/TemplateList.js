import React from 'react'
import { Segment, List } from 'semantic-ui-react'

import tempModels from '../../models/templates.js'

const TemplateList = ({hpiTemps, selectTemplate, userId, current, deselect }) => {

  let templatesList = [];
  templatesList.push(
    <List.Item key={templatesList.length} onClick={()=>selectTemplate('ros')}>ROS
    </List.Item>
  );

  hpiTemps.forEach(temp => {
    templatesList.push(
      <List.Item key={templatesList.length} onClick={()=>selectTemplate(temp)}> {temp}
          <a onClick={async()=>{
            await tempModels.deleteHpiTemplate(userId, temp)
            deselect()
          }}>Delete</a>
        </List.Item>
    );
  })

  templatesList.push(
    <List.Item key={templatesList.length} onClick={()=>selectTemplate('new')}>
      <List.Content>
        <List.Header>--- Create New HPI Template ---</List.Header>
      </List.Content>
    </List.Item>
  );

  return (
    <Segment>
      <h2>Select Template to Edit</h2>
      <List celled>
        {templatesList}
      </List>
    </Segment>
  )
}

export default TemplateList
