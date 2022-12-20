import React from 'react'
import PropTypes from 'prop-types';

export const Employee = (props) => {
    Employee.propTypes={
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }
  return (
    <div>
        Employee Details
        <h3>Welcome {props.name}</h3>
        <h3> Employee ID: {props.id}</h3>
    </div>

  )
}
