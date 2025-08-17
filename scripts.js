// Initial task list
const tasks = [
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

let taskLimit = 6;

// Ask the user for the title, description, and status then  make sure the status is in lowercase
for (let i = 0; i < taskLimit; i++) {
  let title = prompt("Enter title for task " + (i + 1) + ":");
  let description = prompt("Enter description for task " + (i + 1) + ":");
  let status = prompt("Enter status for task " + (i + 1) + " (todo, doing, done):").toLowerCase();

  // validation for task status
  while( status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter the status (todo, doing, done):").toLowerCase();
  }

  // Add the new task to the tasks array
  tasks.push({
    id: tasks.length + 1,
    title: title,
    description: description,
    status: status,
  });
  // Check if the task limit has been reached
if (tasks.length === taskLimit) {
    alert("There are enough tasks on your board, please check them in the console");
    break;
  }

} 
console.log("All Tasks:", tasks);

  // Display completed tasks or motivational message
let completedTasks = tasks.filter(function(task) {
  return task.status === "done";
});

if (completedTasks.length > 0) {
    console.log("Completed Task:", completedTasks);
} else {  
  console.log("No tasks completed, let's get to work!");
}

