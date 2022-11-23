import React, { useState }  from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo"
import NewTodo from "./components/NewTodo"

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // const todos = [
  //   new Todo("Learn React"),
  //   new Todo("Learn TypeScript")
  // ];

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevState) => [...prevState, newTodo]);
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
