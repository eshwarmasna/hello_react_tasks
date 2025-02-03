import React, { useState } from 'react';
import './Color.css';

function Colors() {
    const [backgroundColor, setBackgroundColor] = useState("white");
    const [textColor, setTextColor] = useState("green");

    const changeColor = () => {
        const newBackgroundColor = backgroundColor === "white" ? "black" : "white";
        const newTextColor = newBackgroundColor === "black" ? "white" : "green";  // Adjust text color based on background
        setBackgroundColor(newBackgroundColor);
        setTextColor(newTextColor);
    };

    return (
        <div style={{ backgroundColor: backgroundColor, height: '100vh', width: '100vw', margin: '0', padding: '30px', color: textColor }}>
            <section className="Styles">Welcoming to the 2025</section>
            <button className="buto" onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default Colors;
