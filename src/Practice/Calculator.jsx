import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [count, setCount] = useState('');

  const displayClick = (val) => {
    setCount(count + val); // Concatenating numbers/operators correctly
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-new-func
      setCount(Function('"use strict"; return (' + count + ')')()); // Safely evaluating the expression
    } catch (error) {
      setCount('Error'); // Handling invalid expressions
    }
  };

  return (
    <div className="calculator-container">
      <h1>Calculator App</h1>
      <input
        type="text"
        className="display"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        readOnly
      />
      <table>
        <tbody>
          <tr>
            <th onClick={() => displayClick('1')}>1</th>
            <th onClick={() => displayClick('2')}>2</th>
            <th onClick={() => displayClick('3')}>3</th>
          </tr>
          <tr>
            <th onClick={() => displayClick('4')}>4</th>
            <th onClick={() => displayClick('5')}>5</th>
            <th onClick={() => displayClick('6')}>6</th>
          </tr>
          <tr>
            <th onClick={() => displayClick('7')}>7</th>
            <th onClick={() => displayClick('8')}>8</th>
            <th onClick={() => displayClick('9')}>9</th>
          </tr>
          <tr>
            <th onClick={() => displayClick('0')}>0</th>
            <th onClick={() => displayClick('+')}>+</th>
            <th onClick={() => displayClick('-')}>-</th>
          </tr>
          <tr>
            <th onClick={() => displayClick('*')}>*</th>
            <th onClick={() => displayClick('/')}>/</th>
            <th onClick={() => setCount('')}>C</th> {/* Clear button */}
          </tr>
        </tbody>
      </table>
      <button className="equals-button" onClick={calculate}>
        =
      </button>
    </div>
  );
}

export default Calculator;
