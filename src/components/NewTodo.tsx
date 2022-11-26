import { FormEvent, useRef, useContext } from "react";
import { TodosContext } from "../context/todos-context";
import classes from "./NewTodo.module.css";

// const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="todo">Todo text</label>
      <input type="text" id="todo" ref={todoTextInputRef} />
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
