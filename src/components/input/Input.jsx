import React, { useState } from "react";
import "./input.css";

const Input = ({ placeholder, userTodo }) => {
  const [todo, setTodo] = useState("");

  const submit = (e) => {
    setTodo("");
    e.preventDefault();
    userTodo(todo.trim());
  };

  const onHandleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="inp-container">
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder={placeholder}
          onChange={onHandleChange}
          value={todo}
          className="userInput"
        />
      </form>
    </div>
  );
};

export default Input;
