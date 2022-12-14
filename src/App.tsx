import React, { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./context/todos-context"

function App() {
  return (
    <TodosContextProvider>
        <NewTodo />
        <Todos />
    </TodosContextProvider>
  );
}

//Before we created the Context API
// const [todos, setTodos] = useState<Todo[]>([]);

// const todos = [
//   new Todo("Learn React"),
//   new Todo("Learn TypeScript")
// ];

// const addTodoHandler = (todoText: string) => {
//   const newTodo = new Todo(todoText);
//   setTodos((prevState) => [...prevState, newTodo]);
// }
// const removeTodoHandler = (todoId: string) => {
//   setTodos((prevTodos) => {
//     return prevTodos.filter(todo => todo.id !== todoId)
//   });
// }

// return (
//   <div className="App">
//     <NewTodo onAddTodo={addTodoHandler} />
//     <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
//   </div>
// );

export default App;
