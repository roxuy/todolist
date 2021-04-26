
import './App.css';
import {useState, useEffect } from 'react';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  //State stuff
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState([]);
  const[filteredTodos, setFilteredTodos] = useState([]);

  //Run once when the App start
  useEffect(() => {
    getLocalTodos();
  }, []);
  //useEffect
  useEffect(() => {
    filteredHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Functions
  const filteredHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  //Save local

  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    };
  };

  return (
    <div className="App">
      <header>
        <h1>Tasks</h1>
      </header>
      <body>
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          status={status}
          setStatus={setStatus}/>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}/>
      </body>
    </div>
  );
};

export default App;
