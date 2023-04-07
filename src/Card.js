import React, { useState } from "react";

const Card = ({ type, increment, reset }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          if (isClicked) {
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
