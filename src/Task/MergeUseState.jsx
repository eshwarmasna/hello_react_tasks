import React, { useState } from 'react';

const ExampleFunctionalComponent = () => {
  const [state, setState] = useState({ name: 'John', age: 25 });

  const updateName = () => {
    setState((prevState) => ({ ...prevState, name: 'Nilon' }));
  };

  return (
    <div>
      <p>Name: {state.name}</p>
      <p>Age: {state.age}</p>
      <button onClick={updateName}>Update Name</button>
    </div>
  );
};

export default ExampleFunctionalComponent;
