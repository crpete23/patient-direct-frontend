import React from 'react'
import HpiTemplateForm from './HpiTemplateForm'
import RosTempForm from './RosTempForm'

const HelperTempForm = (props) => {
  if (props.temp==='ros'){
    return (
      <RosTempForm {...props} />
    )
  } else {
    return (
      <HpiTemplateForm {...props} />
    )
  }
}

export default HelperTempForm
