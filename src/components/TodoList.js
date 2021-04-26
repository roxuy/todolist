
import {useState} from "react";
import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos}) => {
  console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <Todo
        key={todo.id}
        text={todo.text}
        todo={todo}
        todos={todos}
        setTodos={setTodos}/>
      ))}
      </ul>
    </div>
  );
};

export default TodoList;
