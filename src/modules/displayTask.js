import { Todo, toDoObject } from './toDoObject.js';
import toDoItemStatus from './clearAll.js';
import TodoMagazine from './TodoMagazine.js';

const todoList = document.querySelector('#todoList');
const createTodoList = () => {
  TodoMagazine(toDoObject);
  todoList.innerHTML = toDoObject
    .map((data) => `<li id="todoItem" class="todoItem"><input type="checkbox" id="checked" ${
      data.completed ? 'checked' : ''} >
      <input type="text" id="listItem" value= "${data.description}">
      <i title="Click to Delete" class="fa-solid fa-ellipsis-vertical move"></i>
      <i class="fa-solid fa-trash-can" id="delete"></i></li>`)
    .join('');
  const deleteBtn = document.querySelectorAll('#delete');
  const move = document.querySelectorAll('.move');
  const todo = document.querySelectorAll('#todoItem');
  const listItem = document.querySelectorAll('#listItem');
  const trash = document.querySelectorAll('.fa-trash-can');
  const clear = document.querySelector('.clearCompleted');

  move.forEach((button, index) => button.addEventListener('click', () => {
    move[index].style.display = 'none';
    deleteBtn[index].style.display = 'flex';
    trash[index].style.color = 'red';
    todo[index].style.backgroundColor = '#DFDEAB';
    listItem[index].style.backgroundColor = '#DFDEAB';
    deleteBtn[index].backgroundColor = '#DFDEAB';
  }));

  deleteBtn.forEach((button, index) => button.addEventListener('click', () => {
    const item = index + 1;
    Todo.removeTodo(item);
    createTodoList();
  }));

  listItem.forEach((input, index) => input.addEventListener('click', () => {
    todo[index].style.backgroundColor = '#dfdeab';
    listItem[index].style.backgroundColor = '#dfdeab';
    deleteBtn[index].backgroundColor = '#dfdeab';
  }));

  listItem.forEach((input, index) => input.addEventListener('change', () => {
    toDoObject[index].description = input.value;
    TodoMagazine(toDoObject);
  }));

  clear.addEventListener('click', () => {
    const completed = toDoObject.filter((data) => data.completed === true);
    completed.forEach((data) => {
      const index = toDoObject.indexOf(data);
      toDoObject.splice(index, 1);
    });
    TodoMagazine(toDoObject);
    createTodoList();
  });
  toDoItemStatus();
};

export default createTodoList;
