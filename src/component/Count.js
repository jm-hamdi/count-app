import React, { useState } from "react";
import "./Count.css";

const Count = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const getColor = () => {
    if (count > 0) return "blue";
    if (count < 0) return "red";
    return "black";
  };

  return (
    <div className="count-container">
      <h1 className="count-display" style={{ color: getColor() }}>{count}</h1>
      <button className="count-button decrement" onClick={decrement}>-</button>
      <button className="count-button increment" onClick={increment}>+</button>
    </div>
  );
};

export default Count;
