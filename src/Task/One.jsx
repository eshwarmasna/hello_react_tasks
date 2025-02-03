import React, { useRef, useEffect } from 'react';

const One = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div>
      <h1>Focusing the Input</h1>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default One;
