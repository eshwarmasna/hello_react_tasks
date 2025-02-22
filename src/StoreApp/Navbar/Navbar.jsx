/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Navbar.css';
function Navbar({ onSearch }) {
  const [change, setChange] = useState('');
  const ClickSearch = () => {
    onSearch(change);
  };
  return (
    <>
      <div className="MainF">
        <div>
          <a href="#">Shopify</a>
          <a href="#">Home</a>
          <a href="#">Prices</a>
          <a href="#">Contact </a>
          <a href="#">Login/SignUp</a>
        </div>
        <div className="search-container">
          <input
            type="text"
            value={change}
            onChange={(e) => setChange(e.target.value)}
          />
          <button onClick={ClickSearch}>Search</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
