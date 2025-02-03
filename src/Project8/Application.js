import React, { useState } from 'react';


const style = {
    letterContainer: {
        overflow: 'auto',
        marginBottom: '10px',
    },
    letter: {
        float: 'left',
        padding: '10px 10px',
        background: '#c9e4ed',
        borderRadius: '5px',
        marginRight: '5px',
        cursor: 'pointer',
    },
};

function Tile({ letter, handleClick }) {
    return (
        <button style={style.letter} onClick={() => handleClick(letter)}>
            {letter}
        </button>
    );
}

function Application() {
    const [output, setOutput] = useState('');

    const handleLetterClick = (letter) => {
        let newOutput = output + letter;
        // Replace three or more consecutive identical letters with underscores
        newOutput = newOutput.replace();
        setOutput(newOutput);
    };

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <section>
            <aside style={style.letterContainer} id="letterContainer">
                {alphabet.map((letter) => (
                    <Tile key={letter} letter={letter} handleClick={handleLetterClick} />
                ))}
            </aside>
            <div id="outputString">{output}</div>
        </section>
    );
}

export default Application;
