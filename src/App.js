import React, { useState } from "react";
import Game from "./components/Game";
import Winner from "./components/Winner";
import "./styles/App.css";
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
