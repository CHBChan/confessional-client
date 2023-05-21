import React from 'react'

// Simple component to display confessions retrieved from backend
function ConfessionCard({confession, theme}) {
  return (
    <div className={`confessionCard ${theme}`}>
        <p>"{confession.confessionText}"</p>
    </div>
  )
}

export default ConfessionCard;