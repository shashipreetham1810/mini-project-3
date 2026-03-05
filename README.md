Task Manager — JavaScript Mini Project

Overview

This is a simple Task Manager built using core JavaScript.
It allows users to manage tasks by adding new tasks, marking tasks as completed, deleting tasks, and viewing all tasks with their current status.

This project helps practice fundamental JavaScript concepts such as arrays, objects, loops, functions, and conditions.

---

Features

- Add a new task
- View all tasks
- Mark a task as completed
- Delete a task
- Display task status (pending / completed)

---

Concepts Used

- Arrays
- Objects
- Functions
- Loops ("for")
- Conditional statements ("if")
- Array methods ("push", "splice")

---

Data Structure

Tasks are stored as objects inside an array.

Example:

let tasks = [
  { task: "learn js", done: false },
  { task: "build project", done: true }
];

Each task contains:

- "task" → task name
- "done" → completion status ("true" or "false")

---

Functions

addTask(taskName)

Adds a new task to the task list.

addTask("study blockchain");

---

showTasks()

Displays all tasks with their status.

Example output:

learn js - pending
build project - completed
study blockchain - pending

---

completeTask(taskName)

Marks a specific task as completed.

completeTask("learn js");

---

deleteTask(taskName)

Removes a task from the list.

deleteTask("build project");

---

Example Execution

addTask("learn js");
addTask("build project");
addTask("study blockchain");

showTasks();

completeTask("learn js");

deleteTask("build project");

showTasks();

---

Learning Outcome

After completing this project, you will understand:

- How to manage data using arrays and objects
- How to build simple logic-based systems in JavaScript
- How to structure functions for real-world problems

---

Author

Preetham
Aspiring Smart Contract & Web3 Developer
