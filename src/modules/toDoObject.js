const toDoObject = JSON.parse(localStorage.getItem('todoList')) || [];

class Todo {
  constructor(task) {
    this.description = task;
    this.completed = false;
    this.index = toDoObject.length + 1;
  }

  addTodo = () => {
    toDoObject.push(this);
  };

  static updateIndex = () => {
    toDoObject.forEach((data, index) => {
      data.index = index + 1;
    });
  };

  static removeTodo = (index) => {
    toDoObject.splice(index - 1, 1);
    this.updateIndex();
  };
}

export { Todo, toDoObject };
