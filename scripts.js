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
]

// Ask the user for the title, description, and status then  make sure the status is in lowercase
for (let i = 0; i < 3; i++) {
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

} 
console.log("All Tasks:", tasks);

/*


// If neither task1 nor task2 is done, show a motivational message
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}
*/
