import React, { useState } from 'react'


const Seperator = ({
  id = 'drag-bar',
  dir,
  isDragging,
  ...props
}) => {


  return (
    <div
      id={id}
      data-testid={id}
      tabIndex={0}
    
   
      {...props}
    />
  )
}

export default Seperator
