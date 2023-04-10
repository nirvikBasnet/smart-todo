import React, { useState } from "react";
import "../styles/TodoForm.css";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const id = Date.now();
    addTodo({ id, text, completed: false });
    setText("");
  }

  return (
    <form className="todoForm-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="submitButton" type="submit">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
