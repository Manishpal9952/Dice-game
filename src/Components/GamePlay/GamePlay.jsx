import React,{useState} from "react";
import Score from "./Score";
import Number from "./Number";
import "./GamePlay.css";
import RoleDice from "../RoleDice";

function GamePlay() {

  const [error, setError] = useState("")
  const [score, setScore] = useState(0)
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomNo = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {

    if(!selectedNum){
      setError("You have not selected any number")
      return
    }
    setError("")

    const noGenerated = generateRandomNo(1, 7);
    setCurrentDice((prev) => noGenerated);

    if(selectedNum == noGenerated){
      setScore( (prev) => prev + noGenerated)
    }else{
      setScore( (prev) => prev - 2)
    }
    setSelectedNum(undefined)
  };


  return (
    <>
      <div className="scoreBox">
        <Score score={score} />
        <Number setSelectedNum={setSelectedNum} selectedNum={selectedNum} error={error} />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
    </>
  );
}

export default GamePlay;
