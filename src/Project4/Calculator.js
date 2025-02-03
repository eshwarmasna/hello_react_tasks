import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
    const [count, setCount] = useState("");

    const cancel = () => {
        setCount("");
    };

    const display = (value) => {
        setCount(count + value);
    };
    const calculate = () => {
        var answers = eval(count)
        setCount(answers)
    }
    return (
        <div className="calculator-container">
            <input
                type="text"
                className="calculator-input"
                value={count}
                onChange={(e) => setCount(e.target.value)} // Allow input changes if needed
            />
            <table className="table_Container">
                <tbody>
                    <tr className="helo">
                        <th colSpan={2} className="can" onClick={cancel}>C</th>
                        <th className="can">A</th>
                        <th className="mul" onClick={() => { display("*") }}>X</th>
                    </tr>
                    <tr className="helo">
                        <th className="num" onClick={() => display("7")}>7</th>
                        <th className="num" onClick={() => display("8")}>8</th>
                        <th className="num" onClick={() => display("9")}>9</th>
                        <th className="mul" onClick={() => display("+")}>+</th>
                    </tr>
                    <tr className="helo">
                        <th className="num" onClick={() => display("4")}>4</th>
                        <th className="num" onClick={() => display("5")}>5</th>
                        <th className="num" onClick={() => display("6")}>6</th>
                        <th className="mul" onClick={() => display("-")}>-</th>
                    </tr>
                    <tr className="helo">
                        <th className="num" onClick={() => display("3")}>3</th>
                        <th className="num" onClick={() => display("2")}>2</th>
                        <th className="num" onClick={() => display("1")}>1</th>
                        <th className="mul" onClick={() => display("/")}>/</th>
                    </tr>
                    <tr className="helo">
                        <th className="num" onClick={() => display("0")}>0</th>
                        <th className="num" onClick={() => display("00")}>00</th>
                        <th colSpan={2} className="equal" onClick={calculate}>=</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Calculator;
