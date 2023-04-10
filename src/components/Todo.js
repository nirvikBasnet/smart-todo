import React from "react";
import "../styles/Todo.css";

const Todo = ({ todo, completeTodo, deleteTodo }) => {
  const handleCheckboxClick = () => {
    completeTodo(todo.id);
  };

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="todo-container">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxClick}
      />
      <span
        className={todo.completed ? "completed" : ""}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          marginLeft: "10px",
        }}
      >
        {todo.text}
      </span>
      <button className="delete" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
