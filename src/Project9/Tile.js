import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

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

function Tile(props) {
    return (
        <button style={style.letter} onClick={() => props.onClick(props.letter)}>
            {props.letter}
        </button>
    );
}

function Application() {
    const [output, setOutput] = useState('');

    const handleLetterClick = (letter) => {
        let newOutput = output + letter;
        let result = [];
        let count = 1;

        for (let i = 0; i < newOutput.length; i++) {
            if (i > 0 && newOutput[i] === newOutput[i - 1]) {
                count++;
            } else {
                count = 1;
            }

            if (count === 3) {
                result[result.length - 1] = '_'; // Replace previous letter with '_'
                count = 1; // Reset the count after replacing
            } else {
                result.push(newOutput[i]);
            }
        }

        setOutput(result.join(''));
    };

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    return (
        <section>
            <aside style={style.letterContainer} id="letterContainer">
                {alphabet.split('').map((letter) => (
                    <Tile key={letter} letter={letter} onClick={handleLetterClick} />
                ))}
            </aside>
            <div id="outputString">{output}</div>
        </section>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application />);
