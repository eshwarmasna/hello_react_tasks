import React, { useState } from "react";

function Todo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const ClickHandler = () => {
        if (input.trim()) {
            setTodos((todos) =>
                todos.concat({
                    text: input,
                    id: Date.now(), // Generate a unique ID
                })
            );
            setInput(""); // Clear the input after adding a todo
        }
    };

    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((t) => t.id !== id));
    };

    return (
        <div>
            <input
                type="text"
                style={{ width: "150px", height: "50px" }}
                placeholder="New Todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={ClickHandler}>Add</button>
            <ul>
                {todos.map(({ text, id }) => (
                    <li key={id}>
                        {text}
                        <button onClick={() => removeTodo(id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
