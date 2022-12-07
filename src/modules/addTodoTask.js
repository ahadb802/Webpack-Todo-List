import { Todo, toDoObject } from './toDoObject.js';
import createTodoList from './displayTask.js';

const addTask = document.querySelector('#add-todo');
const task = document.querySelector('#todo');
const notification = document.querySelector('.notification');

const isSuccess = () => {
  notification.style.display = 'flex';
  notification.textContent = 'Task added successfully!';
  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

const isError = () => {
  notification.style.display = 'flex';
  notification.textContent = 'Please enter a task';
  notification.style.color = 'red';
  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
};

const addScroll = () => {
  const todoList = document.querySelector('#todoList');
  if (toDoObject.length >= 5) {
    todoList.style.height = '30vh';
  } else {
    todoList.style.height = 'auto';
  }
};

const addTasks = () => {
  addTask.addEventListener('click', () => {
    if (task.value === '') {
      isError();
    } else {
      const todo = new Todo(task.value);
      toDoObject.push(todo);
      createTodoList();
      task.value = '';
      addScroll();
      isSuccess();
    }
  });
};

export default addTasks;
