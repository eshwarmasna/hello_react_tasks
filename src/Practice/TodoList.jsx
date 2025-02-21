import React, { useState } from 'react';

function TodoList() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');

  const ClickHandler = () => {
    if (input.trim()) {
      setTodo((todos) => {
        todos.concat({
          text: input,
          id: Date.now(),
        });
      });
    }
  };
  const removeTodo = () => {};
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={ClickHandler}>Add</button>
      {
        <ul>
          {todo.map(({ text, id }) => (
            <li key={id}>
              {text}
              <button onClick={() => removeTodo(id)}>Remove</button>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

export default TodoList;
