import { useState, useRef } from 'react';
import React from 'react';

    function MultiColor() {
    const [state, setState] = useState('white');
    const interValRef = useRef(null);
    const backgroundColor = () => {
        clearInterval(interValRef.current);
        console.log(interValRef.current);
        setState('black');
    };

  const RandomColor = () => {
    interValRef.current = setInterval(() => {
      let colors = ['orange', 'green', 'grey', 'yellow', 'black'];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      console.log(randomColor);
      setState(randomColor);
    }, 100);
  };

  return (
    <div style={{ backgroundColor: state, height: '100vh' }}>
      <h1>Color Changer</h1>
      <button onClick={RandomColor}>Start</button>
      <br />
      <br />
      <button onClick={backgroundColor}>Stop</button>
    </div>
  );
}

export default MultiColor;
