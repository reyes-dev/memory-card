import React, { useState } from "react";
import Card from "./Card";
import { cardData } from "./data";

const Deck = ({ reset }) => {
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
      key={item.id}
      increment={incrementScore}
      reset={reset}
    />
  ));

  return (
    <div>
      <p>{currentScore}</p>
      {shuffle(cardItems)}
    </div>
  );
};

export default Deck;
