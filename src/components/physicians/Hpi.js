import React from 'react'
import {List} from 'semantic-ui-react'

const Hpi = (hpi) => {
  const keys = Object.keys(hpi);

  let historyList = [];

  for(let i=0; i<keys.length; i++){
    let value = hpi[keys[i]]
    let valueString = ''
    if(Array.isArray(value)){
      valueString = value[0];
      for(let j=1; j<value.length; j++){
        valueString += `, ${value[j]}`
      }
    } else {
      valueString = value
    }
    historyList.push(
      <List.Item key={i}>
        {`${keys[i]}: ${valueString}`}
      </List.Item>
    )
  }

  return (
    <List>
      {historyList}
    </List>
  )
}

export default Hpi
