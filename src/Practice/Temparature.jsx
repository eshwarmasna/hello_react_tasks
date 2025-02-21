import React, { useState } from 'react';
import './Temparature.css';

function Temparature() {
  const [input, setInput] = useState('');
  const [res, setRes] = useState('');

  const GetTemp = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.main) {
          const kelvin = data.main.temp;
          const celsius = (kelvin - 273.15).toFixed(2);
          setRes(`${celsius}°C`);
        } else {
          setRes('Enter the Correct City°C');
        }
      })
      .catch(() => {
        setRes('Enter the Correct City°C');
      });
  };

  return (
    <div className="weather-container">
      <h1 className="title">Weather App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input-box"
        placeholder="Enter city name"
      />
      <button onClick={GetTemp} className="button">
        Get Temperature
      </button>
      <h1 className="result">
        Temperature at {input} is <span className="temp">{res}</span>
      </h1>
    </div>
  );
}

export default Temparature;
