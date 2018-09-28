import React from 'react'
import { Segment, List } from 'semantic-ui-react'

const TemplateList = ({hpiTemps, selectTemplate}) => {

  let templatesList = [];
  templatesList.push(
    <List.Item key={templatesList.length} onClick={()=>selectTemplate('ros')}>
      <List.Content>
        <List.Header>ROS</List.Header>
      </List.Content>
    </List.Item>
  );

  hpiTemps.forEach(temp => {
    templatesList.push(
      <List.Item key={templatesList.length} onClick={()=>selectTemplate(temp)}>
        <List.Content>
          <List.Header>{temp}</List.Header>
        </List.Content>
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
