import React, { useState } from "react";
import Deck from "./Deck";

const Game = ({ highScore, updateHighScore, updateGameOver }) => {
  const [isGameA, setIsGameA] = useState(true);

  const resetGame = () => {
    if (isGameA) {
      setIsGameA(false);
    } else {
      setIsGameA(true);
    }
  };

  return (
    <div>
      {isGameA ? (
        <Deck
          key="A"
          reset={resetGame}
          highScore={highScore}
          updateHighScore={updateHighScore}
          updateGameOver={updateGameOver}
        />
      ) : (
        <Deck
          key="B"
          reset={resetGame}
          highScore={highScore}
          updateHighScore={updateHighScore}
          updateGameOver={updateGameOver}
        />
      )}
    </div>
  );
};

export default Game;
