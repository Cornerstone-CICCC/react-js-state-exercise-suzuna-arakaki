import { useState } from "react";

const clickCounter = () => {
  const [count, setCount] = useState<number>(0);

  const handleCount = () => {
    setCount((current) => current + 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={handleCount}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default clickCounter;
