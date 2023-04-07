import React, { useState } from "react";
import Deck from "./Deck";
// This is the main component where the game takes place
const App = () => {
  const [isGameA, setIsGameA] = useState(true);
  const [highScore, setHighScore] = useState(0);

  const resetGame = () => {
    if (isGameA) {
      setIsGameA(false);
    } else {
      setIsGameA(true);
    }
  };
  const updateHighScore = (value) => {
    setHighScore(value);
  };
  return (
    <div>
      <p>{highScore}</p>
      {isGameA ? (
        <Deck
          key="A"
          reset={resetGame}
          highScore={highScore}
          updateHighScore={updateHighScore}
        />
      ) : (
        <Deck
          key="B"
          reset={resetGame}
          highScore={highScore}
          updateHighScore={updateHighScore}
        />
      )}
    </div>
  );
};

export default App;
