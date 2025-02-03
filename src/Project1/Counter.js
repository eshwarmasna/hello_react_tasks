import React, { useState } from 'react'

function Counter() {
    const [state, SetState] = useState(0);
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={(e) => SetState(state + 1)} value={state}>Increase</button>
            <button onClick={(e) => SetState(state - 1)} value={state}>Decrease</button>
        </div>
    )
}

export default Counter
