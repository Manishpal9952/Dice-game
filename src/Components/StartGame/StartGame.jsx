import React from 'react'
import '/src/App.css'
import './StartGame.css'
import Dice2 from '/src/assets/dice2.jpeg'


function StartGame({toggle}) {
  return (
    <>
      <div className="container">
        <div className="left">
            <img src={Dice2} alt="" />
        </div>
        <div className="right">
            <h1>Dice Game</h1>
            <button onClick={toggle}>Play Now</button>
        </div>
      </div>
    </>
  )
}

export default StartGame
