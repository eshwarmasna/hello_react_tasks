import React, { useState } from 'react';

const Hello21 = () => {
  const [change, setChange] = useState('');
  const handleChange = () => {
    setChange('Thank You For Subscribing');
  };

  return (
    <div>
      <h1>{change ? change : 'Subscibe the channel'}</h1>
      <button onClick={handleChange}>Click</button>
    </div>
  );
};

export default Hello21;
