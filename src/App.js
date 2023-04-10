import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [permission, setPermission] = useState("default");

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        setPermission(permission);
      });
    } else {
      setPermission(Notification.permission);
    }
  }, []);

  useEffect(() => {
    todos.forEach((todo) => {
      if (todo.dueDate && !todo.completed) {
        const dueDate = new Date(todo.dueDate);
        if (dueDate.getTime() < Date.now() && permission === "granted") {
          new Notification(`Task ${todo.text} is due!`);
        }
      }
    });
  }, [todos, permission]);

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1 className="appname">Add Tasks</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
