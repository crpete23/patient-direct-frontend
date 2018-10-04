import React from 'react'
import {List} from 'semantic-ui-react'

const Ros = (ros) => {

  function upperCase (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const keys = Object.keys(ros);

  let rosList = [];

  for(let i=0; i<keys.length; i++){
    let valuesObject = ros[keys[i]]
    const valuesKeys = Object.keys(valuesObject)
    let valueArr = []

    for(let j=0; j<valuesKeys.length; j++){
      if(j!==0){
        valueArr.push(', ')
      }
      if(valuesObject[valuesKeys[j]]){
        valueArr.push(<strong key={j}>{`+ ${valuesKeys[j].toUpperCase()}`}</strong>)
      } else {
        valueArr.push(`- ${valuesKeys[j]}`)
      }
    }

    rosList.push(
      <List.Item key={i}>
        {`${upperCase(keys[i])}: `} {valueArr}
      </List.Item>
    )
  }

  return (
    <List celled>
      {rosList}
    </List>
  )
}

export default Ros
