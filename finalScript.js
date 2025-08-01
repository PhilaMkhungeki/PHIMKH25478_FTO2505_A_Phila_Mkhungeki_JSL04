import { initialTasks } from "./initialData.js";

let tasks = document.querySelector(".tasks-container");

initialTasks.forEach(task => {
  //create a html div for tasks
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task-div');
  taskDiv.textContent = task.title; // Set the text inside the div to the title of the task object.

  // Find the correct column based on status
  const column = document.querySelector(`.column-div[data-status="${task.status}"] .tasks-container`);
  
  if (column) {
    column.appendChild(taskDiv);
  } else {
    console.warn(`No column found for status: ${task.status}`);
  }
});


