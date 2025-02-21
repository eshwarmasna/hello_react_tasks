import React, { useState } from 'react';

function SetStateComp() {
  const [count, setCount] = useState(0);
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default SetStateComp;
