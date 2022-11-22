//creating a todo type
// type or interface or class

class Todo {
  id: string;
  text: string;

  //a constructor to make sure these properties will get a value 
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;