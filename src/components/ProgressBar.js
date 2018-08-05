import React from 'react'

const ProgressBar = ({ className }) => (
  <span className={`ProgressBar ${className || ''}`} role="progressbar">
    <div className="c183ltat" style={{ animationDelay: "-320ms", background: "black"}}></div>
    <div className="c183ltat" style={{ animationDelay: "-160ms", background: "black"}}></div>
    <div className="c183ltat" style={{ background: "black"}}></div>
  </span>
)

export default ProgressBar
