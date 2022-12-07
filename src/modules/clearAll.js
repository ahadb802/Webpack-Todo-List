import { toDoObject } from './toDoObject.js';
import TodoMagazine from './TodoMagazine.js';

const toDoItemStatus = () => {
  const checked = document.querySelectorAll('input[type=checkbox]');
  const listItem = document.querySelectorAll('#listItem');
  checked.forEach((input, index) => input.addEventListener('change', () => {
    if (input.checked) {
      toDoObject[index].completed = true;
      listItem[index].style.textDecoration = 'line-through';
      listItem[index].style.color = 'grey';
    } else {
      toDoObject[index].completed = false;
      listItem[index].style.textDecoration = 'none';
      listItem[index].style.color = 'black';
    }
    TodoMagazine(toDoObject);
  }));
};

export default toDoItemStatus;
