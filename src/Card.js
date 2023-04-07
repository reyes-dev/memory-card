import React from "react";

const Card = ({ type, increment }) => {
  return (
    <div>
      <button
        onClick={() => {
          increment();
        }}
      >
        {type}
      </button>
    </div>
  );
};

export default Card;
