import React from "react";
import "./Section.css";
import Todo from "../todo";
import Input from "../input";

const Section = ({ setInput, input, setTodo, todo,upDataTodo }) => {
  return (
    <div className="section">
      <Input setInput={setInput} setTodo={setTodo} todo={todo} input={input} />

      {todo.map((elem) => (
        <Todo
          input={elem.text}
          upDataTodo={upDataTodo}
          todo={todo}
          setTodo={setTodo}
          key={elem.id}
          id={elem.id}
          completed={elem.completed}
        />
      ))}
    </div>
  );
};

export default Section;
