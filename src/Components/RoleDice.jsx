import React from "react";
import "./RoleDice.css";
import Dice_1 from "../assets/Dice_1.png";
import Dice_2 from "../assets/Dice_1.png";
import Dice_3 from "../assets/Dice_1.png";
import Dice_4 from "../assets/Dice_1.png";
import Dice_5 from "../assets/Dice_1.png";
import Dice_6 from "../assets/Dice_1.png";

function RoleDice({currentDice, roleDice}) {

  return (
    <>
    <div className="dice">

      <div onClick={roleDice} className="number">
        <p>{currentDice}</p>
      </div>

        <div className="para">
          <p>Click on the dice</p>
        </div>
        <div className="button">
          <button>Reset Button</button>
          <button>Show Rules</button>
        </div>

    </div>  

    </>
  );
}

export default RoleDice;
