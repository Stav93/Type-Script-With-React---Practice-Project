import React, { useContext } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import { TodosContext } from "../context/todos-context";
import classes from "./Todos.module.css";

// const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void; }> = (props) => {

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
