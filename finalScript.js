import { initialTasks } from "./initialData.js";

initialTasks.forEach(task => {
  //create a html div for tasks
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task-div');
  taskDiv.textContent = task.title; // Set the text inside the div to the title of the task object.

  let container;  //variable to refer where a task should be displayed
  
    // Find the correct column based on status
  if (task.status === "todo") {
    container = document.querySelector('[data-status="todo"] .tasks-container');
  } else if (task.status === "doing") {
    container = document.querySelector('[data-status="doing"] .tasks-container');
  } else if (task.status === "done") {
    container = document.querySelector('[data-status="done"] .tasks-container');
  }

  container.appendChild(taskDiv);

  //add an event listener to the task to show task details in a modal
  taskDiv.addEventListener('click', () => showModal(task));
});

// Get modal elements
const taskModal = document.querySelector('.task-modal');
const titleInput = document.getElementById('task-title');
const descriptionInput = document.getElementById('task-description');
const statusSelect = document.getElementById('select-status');
const backdrop = document.getElementById('modal-backdrop');

/**
 * Populate modal fields with task details and shows the modal
 * @param {object} task - the task's details to display
 */
function showModal(task) {
  // Populate modal fields with task details from initialTasks
  titleInput.value = task.title;
  descriptionInput.value = task.description;
  statusSelect.value = task.status;

  // Show modal and backdrop
  taskModal.classList.remove('modal-hidden');
  backdrop.classList.remove('modal-hidden');
}

const closeIcon = document.getElementById('close-Icon');

closeIcon.addEventListener('click', function() {
    taskModal.classList.add('modal-hidden');
    backdrop.classList.add('modal-hidden');
});
