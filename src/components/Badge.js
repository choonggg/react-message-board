import React from 'react'

const Badge = ({ count }) => {
  return (
    <p className="Badge">
      <span className="ca2ougy">There are </span>
      <span className="Badge__counter c1lerdlx">{ count }</span>
      <span className="ca2ougy">messages showing</span>
    </p>
  )
}

export default Badge
