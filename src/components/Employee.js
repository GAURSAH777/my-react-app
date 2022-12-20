import React from 'react'

export const Employee = (props) => {
  return (
    <div>
        Employee Details
        <h3>Welcome {props.name}</h3>
        <h3> Employee ID: {props.id}</h3>
    </div>

  )
}
