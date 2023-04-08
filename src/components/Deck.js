import React, { useState, useEffect } from "react";
import Card from "./Card";
import { cardData } from "../data";
import "../styles/Board.css";

const Deck = ({ reset, highScore, updateHighScore, updateGameOver }) => {
  const [currentScore, setCurrentScore] = useState(0);
  // Use functional update form to increment based on previous score
  const incrementScore = () => {
    setCurrentScore((currentScore) => currentScore + 1);
  };
  // This method takes an array and returns a randomized version of it
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      // A random index
      const j = Math.floor(Math.random() * (i + 1));
      // Using destructuring, alter the array so that the current index
      // is now the randomly generated index
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  // Collection of card components built from cardData
  let cardItems = cardData.map((item) => (
    <Card
      type={item.type}
      filePath={item.filePath}
      key={item.id}
      increment={incrementScore}
      reset={reset}
      score={currentScore}
      highScore={highScore}
      updateHighScore={updateHighScore}
    />
  ));

  useEffect(() => {
    if (currentScore === 12) {
      updateGameOver();
    }
  }, [currentScore]);

  return (
    <div className="board">
      <div className="score">
        <p>Current Score: {currentScore}</p>
        <p>High Score: {highScore}</p>
      </div>
      {shuffle(cardItems)}
    </div>
  );
};

export default Deck;
