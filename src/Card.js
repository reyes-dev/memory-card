import React, { useState } from "react";

const Card = ({
  type,
  increment,
  reset,
  score,
  highScore,
  updateHighScore,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          if (isClicked) {
            if (score > highScore) {
              updateHighScore(score);
            }
            reset();
          } else {
            increment();
            setIsClicked(true);
          }
        }}
      >
        {type}
      </button>
    </div>
  );
};

export default Card;
