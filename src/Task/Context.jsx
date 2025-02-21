import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Context = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === 'light' ? '#f0f0f0' : '#444',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      <p>This is some content. The current theme is {theme}.</p>
    </div>
  );
};

export default Context;
