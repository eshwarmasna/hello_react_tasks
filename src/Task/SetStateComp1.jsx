import { useState } from 'react';
import React from 'react';

function SetStateComp1() {
  const [arr, newArr] = useState(['Apple', 'Mango']);
  const addNew = () => {
    newArr([...arr, 'Orange']);
  };
  return (
    <div>
      <h1>Iterating and adding the array</h1>
      {arr.map((item, ind) => (
        <li key={ind}>{item}</li>
      ))}
      <button onClick={addNew}>ADD</button>
    </div>
  );
}

export default SetStateComp1;
