import React from
"react";
import {useState} from 'react';


const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: Math.random() * 1000 ,text: inputText, completed:false },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);

  };
  return(
    <form>
  <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
  <button onClick={submitTodoHandler} className="todo-button" type="submit">
    <i className="fas fa-plus-square"></i>
  </button>
  <div className="select">
    <select onChange = {statusHandler} name="todos" className="filter-todo" label="state">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="uncompleted">Uncompleted</option>
    </select>
  </div>
</form>
);
};

export default Form;
