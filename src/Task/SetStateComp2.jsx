import React, { useState } from 'react';

function SetStateComp2() {
  const [arr, setArr] = useState(['Apple', 'Mango']);

  const fruits = ['Orange', 'Banana', 'Grapes', 'Pineapple', 'Strawberry'];

  const addNew = () => {
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    setArr([...arr, randomFruit]); // Add a random fruit
  };

  return (
    <div>
      <h1>Iterating and adding the array</h1>
      <ul>
        {arr.map((item, ind) => (
          <li key={ind}>{item}</li>
        ))}
      </ul>
      <button onClick={addNew}>ADD</button>
    </div>
  );
}

export default SetStateComp2;
