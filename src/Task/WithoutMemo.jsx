import React, { useState } from 'react';

const ChildComponent = ({ message }) => {
  console.log('Child component re-rendered!');
  return <h2>{message}</h2>;
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent message="Hello, I am a child!" />
    </div>
  );
};

export default ParentComponent;
