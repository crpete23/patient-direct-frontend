import React from 'react'
import { Segment, List } from 'semantic-ui-react'

import tempModels from '../../models/templates.js'

const TemplateList = ({hpiTemps, selectTemplate, userId, current, deselect }) => {

  function upperCase (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let templatesList = [];
  templatesList.push(
    <List.Item className={current==='ros'? 'selectedTemplate': null} key={templatesList.length} onClick={()=>selectTemplate('ros')}>ROS
    </List.Item>
  );

  hpiTemps.forEach(temp => {
    templatesList.push(
      <List.Item className={current===temp? 'selectedTemplate': null} key={templatesList.length} onClick={()=>selectTemplate(temp)}> {upperCase(temp)}
          <a onClick={async()=>{
            await tempModels.deleteHpiTemplate(userId, temp)
            deselect()
          }}>Delete</a>
        </List.Item>
    );
  })

  templatesList.push(
    <List.Item className={current==='new'? 'selectedTemplate': null} key={templatesList.length} onClick={()=>selectTemplate('new')}>
      <List.Content>
        <List.Header>--- Create New HPI Template ---</List.Header>
      </List.Content>
    </List.Item>
  );

  return (
      <List celled className="scrollableTempList">
        {templatesList}
      </List>
  )
}

export default TemplateList
