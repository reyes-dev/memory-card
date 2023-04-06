import React, { useState, useEffect } from "react";
// This is the main component where the game takes place
const App = () => {
  // Here, I am declaring a state and a function to alter that state
  // The array represents the cards of the deck numerically
  const [cards, setCards] = useState([1, 2, 3, 4]);
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
  // Method that sets the state of cards to the result of shuffling
  // the current state of currents
  const shuffleCards = () => {
    const shuffledCards = shuffle(cards);
    setCards(listCards(shuffledCards));
  };
  /* A variable for storing the result of mapping the state of cards
   so that it is an array of (JSX objects) */
  const listCards = (cards) => {
    return cards.map((card) => (
      <button key={card.toString()} onClick={shuffleCards}>
        {card}
      </button>
    ));
  };
  /* This hook sets the cards, upon mounting, to the listCards variable */
  useEffect(() => {
    setCards(listCards(cards));
  }, []);

  return <div>{cards}</div>;
};

export default App;
