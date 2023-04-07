import React, { useState } from "react";
import Deck from "./Deck";
// This is the main component where the game takes place
const App = () => {
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
        <Deck key="A" reset={resetGame} />
      ) : (
        <Deck key="B" reset={resetGame} />
      )}
    </div>
  );
};

export default App;
