import React, { useEffect, useState } from "react";
import Card from "./Card";
// This is the main component where the game takes place
const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  // Card Data
  const cardData = [
    {
      id: 0,
      type: "mushroom",
      clicked: false,
    },
    {
      id: 1,
      type: "slime",
      clicked: false,
    },
    {
      id: 2,
      type: "pig",
      clicked: false,
    },
    {
      id: 3,
      type: "stump",
      clicked: false,
    },
  ];
  // Use functional update form to increment based on previous score
  const incrementScore = () => {
    setCurrentScore((currentScore) => currentScore + 1);
  };
  // Collection of card components built from cardData
  let cardItems = cardData.map((item) => (
    <Card type={item.type} key={item.id} increment={incrementScore} />
  ));
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

  return (
    <div>
      <p>{currentScore}</p>
      {shuffle(cardItems)}
    </div>
  );
};

export default App;
