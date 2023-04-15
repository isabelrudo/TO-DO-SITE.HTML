// Select the form and the task list
const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form from reloading the page

  // Get the new task input value and create a new list item
  const newTaskInput = document.querySelector('#new-task');
  const newTask = document.createElement('li');
  const newTaskText = document.createTextNode(newTaskInput.value);

  // Add the new task text to the list item
  newTask.appendChild(newTaskText);

  // Add the list item to the task list
  taskList.appendChild(newTask);

  // Clear the new task input value
  newTaskInput.value = '';
});

// Handle clicks on list items
taskList.addEventListener('click', (e) => {
  const listItem = e.target.closest('li');

  // If the click was on the delete button, remove the list item
  if (e.target.matches('.delete')) {
    listItem.remove();
  }

  // If the click was on the list item text, toggle the completed class
  if (e.target.matches('li')) {
    listItem.classList.toggle('completed');
  }
});
