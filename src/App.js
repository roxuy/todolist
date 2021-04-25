
import './App.css';
import {useState} from 'react';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Rocío's To Do List</h1>
      </header>
      <body>
        <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
        <TodoList todos={todos}/>
      </body>
    </div>
  );
};

export default App;
