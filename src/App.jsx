import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartGame from './Components/StartGame/StartGame'
import GamePlay from './Components/GamePlay/GamePlay'

function App() {
   
  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev)
  }

  return (
    <>
     {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay} />}
     {/* <StartGame/> */}
    </>
  )
}

export default App
