import React, { useState } from "react";
import "./App.css";
import Section from "./conponents/section";
import Navbar from "./conponents/navbar";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const upDataTodo = (text, i) => {
    todo.filter((elem) => {
      if (elem.id === i) {
        elem.text = text
      }
      return elem
    });
    setTodo({todo})
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Section
          todo={todo}
          setTodo={setTodo}
          input={input}
          setInput={setInput}
          upDataTodo={upDataTodo}
        />
      </div>
    </div>
  );
}

export default App;
