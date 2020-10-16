import React, { useState } from "react";
import "./App.css";
import Section from "./conponents/section";
import Navbar from "./conponents/navbar";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const upDataTodo = (text, i) => {
    setTodo(todo.map((elem) => {
      if (elem.id === i) {
       return {...elem,text:text}
      }
      return elem
    })) 
  }

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
