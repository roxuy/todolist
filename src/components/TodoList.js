
import {useState} from "react";
import Todo from './Todo';

const TodoList = ({todos}) => {
  console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id} text={todo.text} completed={todo.completed}/>
      ))}
      </ul>
    </div>
  );
};

export default TodoList;
