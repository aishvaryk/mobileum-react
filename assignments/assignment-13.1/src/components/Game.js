import React from "react";
import Status from "./Status";
import Board from "./Board";

const playGame = function(gameArray) {
    const winningCombinations = [
        [0,1,2],[3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
    ];
    for ( let combination of winningCombinations) {
        if (combination[0]===combination[1] && combination[1]===combination[2] && combination[2]==='X') {
            if (combination[0]=='X') {
                return "Winner is X";
            }
            else if (combination[0]=='O') {
                return "Winner is O";
            }
        }
    }

    for ( let position of gameArray) {
        if (position==='_') {
            return "Continue the game"
        }
    }
    return "Game is Drawn"
}


const Game = (props) => {
  return (
    <div className="game">
      <Status />
      <Board />
    </div>
  );
};

export default Game;
