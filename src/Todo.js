import React from "react";
import "./Todo.css";

const Todo = ({ todo, completeTodo, deleteTodo }) => {
  const handleCheckboxClick = () => {
    completeTodo(todo.id);
  };

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  const formattedDate = todo.dueDate.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

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
      <span className="date">{formattedDate}</span>
      <button className="delete" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
