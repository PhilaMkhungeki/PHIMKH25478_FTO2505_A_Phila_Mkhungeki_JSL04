import { initialTasks } from "./initialData.js";

let tasks = document.querySelector(".tasks-container");

//create a html div for each task in the array
tasks.forEach(task => {
    const taskDiv = document.createElement('div');
    console.log(taskDiv);
});


