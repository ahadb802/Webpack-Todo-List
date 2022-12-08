import './style.css';
import createTodo from './modules/displayTask.js';
import addTasks from './modules/addTodoTask.js';
import toDoItemStatus from './modules/clearAll.js';

window.onload = createTodo();
addTasks();
toDoItemStatus();
