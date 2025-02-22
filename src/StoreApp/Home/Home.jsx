import React, { useEffect, useState } from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
function Home() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((fs) => fs.json())
      .then((res) => setData(res));
  }, []);
  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setFiltered(data);
    } else {
      const filtered = data.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFiltered(filtered);
    }
  };
  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <h1>Welcome Home</h1>
      <div className="HomeGrid">
        {filtered.map((fever) => (
          <div key={fever.id} className="UnderCarts">
            <div>{fever.id}</div>
            <div>{fever.title}</div>
            <img src={fever.image} alt="" className="CartImages" />
            <div>{fever.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
