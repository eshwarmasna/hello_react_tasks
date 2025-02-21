import React, { useState, useRef } from "react";

function StopWatch() {
    const [incre, setIncre] = useState(0);
    const [isRunning, setIsRunning] = useState(false); // Track if running
    const intervalRef = useRef(null);

    const start = () => {
        if (!intervalRef.current) { // Prevent multiple intervals
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setIncre(prevIncre => prevIncre + 1);
            }, 1000);
        }
    };

    const stop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
    };

    const clear = () => {
        stop(); // Ensure it also stops
        setIncre(0);
    };

    return (
        <div>
            <h1>StopWatch</h1>
            <h1>{incre} sec</h1>
            <button style={{ margin: "10px", padding: "10px" }} onClick={start} disabled={isRunning}>Start</button>
            <button style={{ margin: "10px", padding: "10px" }} onClick={stop} disabled={!isRunning}>Stop</button>
            <button style={{ margin: "10px", padding: "10px" }} onClick={clear}>Clear</button>
        </div>
    );
}

export default StopWatch;
