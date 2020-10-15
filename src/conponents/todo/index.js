import React from "react";
import "./Todo.css";

const Todo = ({ input, upDataTodo, id, setTodo, todo, completed }) => {

  const handleDelete = () => {
    setTodo(todo.filter((elem) => elem.id !== id));
  };
  const handleCompleted = () => {
    setTodo(
      todo.map((elem) => {
        if (elem.id === id) {
          return { ...elem, completed: !elem.completed };
        }
        return elem;
      })
    );
  };
  return (
    <div className="todo" id={id}>
      <input
        className={`text ${completed ? "completed" : ""}`}
        onChange={(e) => upDataTodo(e.target.value, id)}
        value={input}
      />
      <div className="btn">
        <button
          type="button"
          onClick={handleCompleted}
          className="btn-completed"
        >
          ✔️
        </button>
        <button type="button" onClick={handleDelete} className="btn-delete">
          ❌
        </button>
      </div>
    </div>
  );
};

export default Todo;
