import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(4);
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </>
  );
};

export default UseStateCounter;
