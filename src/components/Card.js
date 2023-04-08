import React, { useState } from "react";
import "../styles/Card.css";

const Card = ({
  type,
  filePath,
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
        className="card"
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
        <img src={filePath} alt="maplestory-monster"></img>
        {type}
      </button>
    </div>
  );
};

export default Card;
