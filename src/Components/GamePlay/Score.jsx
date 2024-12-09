import React from 'react'
import './Score.css'


function Score({score}) {
  return (
    <div>
      <h1>{score}</h1>
      <h2>Total Score</h2>
    </div>
  )
}

export default Score
