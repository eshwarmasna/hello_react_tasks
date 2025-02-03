import React, { useRef } from 'react';

const Two = () => {
  const divRef = useRef(null);
  const handleScroll = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <h1>Scrolling Example</h1>
      <button onClick={handleScroll}>Scroll to Section</button>{' '}
      <div style={{ height: '500px' }}></div>{' '}
      {/* Step 2: Attach the ref to the div element */}{' '}
      <div
        ref={divRef}
        style={{ height: '100px', backgroundColor: 'lightblue' }}
      >
        {' '}
        Target Section{' '}
      </div>
    </div>
  );
};

export default Two;
