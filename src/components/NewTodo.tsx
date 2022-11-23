import { FormEvent, useRef } from "react"

const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw an error 
      return;
    } 

    props.onAddTodo(enteredText);

  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">Todo text</label>
      <input type="text" id="todo" ref={todoTextInputRef} />
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
