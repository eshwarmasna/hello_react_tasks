import React, { useEffect, useState } from 'react';

function DisplayingCarts() {
  const [change, setChange] = useState('');
  const [data, setData] = useState([]);
  const [sum, setSum] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((res) => {
        setData(res);
        setSum(res); // Initialize sum with all the data
      });
  }, []);

  const changeAvail = () => {
    let filtered = data.filter((item) =>
      item.title.toLowerCase().includes(change.toLowerCase())
    );
    setSum(filtered);
  };

  return (
    <div>
      <input
        type="text"
        style={{ width: '200px', height: '40px' }}
        value={change}
        onChange={(e) => setChange(e.target.value)}
      />
      <button
        style={{ width: '100px', height: '40px', borderRadius: '20px' }}
        onClick={changeAvail}
      >
        Search
      </button>
      <h1>Displaying Dummy Data</h1>
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          border: '2px solid green',
        }}
      >
        {sum.map((s) => (
          <li key={s.id} style={{ border: '2px solid black' }}>
            <h2>{s.title}</h2>
            <h3>{s.description}</h3>
            <h5>Price: ${s.price}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayingCarts;
