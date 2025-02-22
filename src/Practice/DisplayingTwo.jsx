import React, { useEffect, useState } from 'react';

function DisplayingTwo() {
  const [change, setChange] = useState('');
  const [data, setData] = useState([]);
  const [res, setRes] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((products) => {
        setData(products);
        setRes(products); // Initialize `res` with all products
      });
  }, []); // Runs only once when the component mounts

  const Clicker = () => {
    let filteredData = data.filter((product) =>
      product.title.toLowerCase().includes(change.toLowerCase())
    );
    setRes(filteredData);
  };

  return (
    <div>
      <h1>Displaying Carts</h1>
      <input
        type="text"
        value={change}
        onChange={(e) => setChange(e.target.value)}
      />
      <button onClick={Clicker}>Search</button>
      <ul>
        {res.map((product) => (
          <li
            key={product.id}
            style={{
              border: '1px solid green',
              marginBottom: '10px',
              padding: '10px',
            }}
          >
            <strong>ID:</strong> {product.id} <br />
            <strong>Title:</strong> {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayingTwo;
