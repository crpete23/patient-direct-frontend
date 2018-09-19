import React from 'react'
import {Grid, List} from 'semantic-ui-react'
import { connect } from 'react-redux'

const Ros = (ros) => {
  const keys = Object.keys(ros);

  let rosList = [];

  for(let i=0; i<keys.length; i++){
    let valuesObject = ros[keys[i]]
    const valuesKeys = Object.keys(valuesObject)
    let valueString = ''
    let valueArr = []

    for(let j=0; j<valuesKeys.length; j++){
      if(j!==0){
        valueArr.push(', ')
      }
      if(valuesObject[valuesKeys[j]]){
        valueString+= `+ ${valuesKeys[j].toUpperCase()}`
        valueArr.push(<strong>{`+ ${valuesKeys[j].toUpperCase()}`}</strong>)
      } else {
        valueString += `- ${valuesKeys[j]}`
        valueArr.push(`- ${valuesKeys[j]}`)
      }
    }

    rosList.push(
      <List.Item key={i}>
        {`${keys[i]}: `} {valueArr}
      </List.Item>
    )
  }

  return (
    <List>
      {rosList}
    </List>
  )
}

export default Ros
