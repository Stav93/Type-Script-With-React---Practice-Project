import { FormEvent } from "react"

const NewTodo = () => {

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">Todo text</label>
      <input type="text" id="todo" />
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
