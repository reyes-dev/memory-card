import React from "react";
import "../styles/Winner.css";
import { cardData } from "../data";

const Winner = () => {
  return (
    <div className="winner">
      <img src={cardData[0].filePath}></img>
      <h1>You won!</h1>
      <img src={cardData[0].filePath}></img>
    </div>
  );
};

export default Winner;
