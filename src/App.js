import React, { useState, useEffect } from "react";
import Game from "./Game";
import Winner from "./Winner";
// This is the main component where the game takes place
const App = () => {
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const updateHighScore = (value) => {
    setHighScore(value);
  };
  const updateGameOver = () => {
    setGameOver(true);
  };
  return (
    <div>
      {gameOver ? (
        <div>
          <Winner />
        </div>
      ) : (
        <div>
          <p>{highScore}</p>
          <Game
            highScore={highScore}
            updateHighScore={updateHighScore}
            updateGameOver={updateGameOver}
          />
        </div>
      )}
    </div>
  );
};

export default App;
