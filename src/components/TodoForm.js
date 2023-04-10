import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "../styles/TodoForm.css";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const id = Date.now();
    addTodo({ id, text, dueDate, completed: false });
    setText("");
    setDueDate("");
  }

  return (
    <form className="todoForm-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Datetime
        value={dueDate}
        onChange={(value) => setDueDate(value.toDate())}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
