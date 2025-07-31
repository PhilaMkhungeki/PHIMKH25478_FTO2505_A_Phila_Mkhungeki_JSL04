const addTaskBtn = document.getElementById("task-button");

const initialTasks = [
    {
      id: 1,
      title: "Launch Epic Career",
      description: "Create a killer Resume",
      status: "todo",
    },
    {
      id: 2,
      title: "Master JavaScript",
      description: "Get comfortable with the fundamentals",
      status: "doing",
    },
    {
      id: 3,
      title: "Contribute to Open Source Projects",
      description:
        "Gain practical experience and collaborate with others in the software development community",
      status: "done",
    },
]; 

//Add an event on click of the button
addTaskBtn.addEventListener('click', function() {
    
    const taskTitle = prompt("Enter task title:");
    const taskDescription = prompt("Enter task description:");
    let taskStatus = prompt(
      "Enter task status (todo, doing, done):"
    ).toLowerCase();

    while (
      taskStatus !== "todo" &&
      taskStatus !== "doing" &&
      taskStatus !== "done"
    ) {
      alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
      taskStatus = prompt(
        "Enter task status (todo, doing, done):"
      ).toLowerCase();
    }

    //set each task to have a unique id that increments from the last existing task
    let lastTask = initialTasks[initialTasks.length - 1];
    let newId = lastTask.id + 1;

    // Store the task to the existing array
    initialTasks.push({
        id: newId,
        title: taskTitle,
        description: taskDescription,
        status: taskStatus.toLowerCase()
    });

    if(initialTasks.length === 6){
      alert("There are enough tasks on your board, please check them in the console");
    }

    console.log("All tasks: ");
    console.log(initialTasks);
    FilterTasks();
});

// Function to check tasks that are "done"
function FilterTasks() {

    const doneTasks = initialTasks.filter(task => task.status === "done");
    console.log("Completed Tasks: ");
    console.log(doneTasks);
}