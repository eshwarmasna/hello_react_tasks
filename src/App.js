import React, { useState, useEffect } from 'react';

function App() {
  const [circles, set Circles] = useState([]);
  const containerRef = React.createRef();

  useEffect(() => {
    document.addEventListener('click', handleMouseClick);
    return () => {
      document.removeEventListener('click', handleMouseClick);
    };
  }, []);

  const handleMouseClick = (e) => {
    const radius = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    const circle = document.createElement('div');
    circle.style.width = `${radius * 2}px`;
    circle.style.height = `${radius * 2}px`;
    circle.style.backgroundColor = 'lightblue';
    circle.style.borderRadius = '50%';
    circle.style.position = 'absolute';
    circle.style.top = `${e.clientY}px`;
    circle.style.left = `${e.clientX}px`;
    containerRef.current.appendChild(circle);
    if (circles.length > 0) {
      circle.style.backgroundColor = 'red';
    }
    set Circles([...circles, circle]);
  };

  return (
    <div className="container" ref={containerRef}>
      <h1>Circle On the Browser</h1>
      {circles.map((circle, index) => (
        <div key={index} style={{ position: 'relative' }}>
          {circle}
        </div>
      ))}
    </div>
  );
}

export default App;