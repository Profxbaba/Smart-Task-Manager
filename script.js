// script.js

// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {

    // Function to add a new task
    function addTask(taskName) {
        const taskList = document.getElementById("task-list");

        // Create a new list item (li) element
        const listItem = document.createElement("li");
        listItem.className = "task-item";

        // Create a checkbox for marking the task as complete
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                listItem.classList.add("completed");
            } else {
                listItem.classList.remove("completed");
            }
        });

        // Create a span to hold the task name
        const taskSpan = document.createElement("span");
        taskSpan.className = "task-name";
        taskSpan.textContent = taskName;

        // Create a delete button for removing the task
        const deleteButton = document.createElement("button");
        deleteButton.className = "task-delete";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            taskList.removeChild(listItem);
        });

        // Append the checkbox, task name, and delete button to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);
    }

    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault();
        const taskInput = document.getElementById("task-input");
        const taskName = taskInput.value.trim();

        if (taskName !== "") {
            addTask(taskName);
            taskInput.value = ""; // Clear the input field
        }
    }

    // Attach the form submit event listener
    const taskForm = document.getElementById("task-form");
    taskForm.addEventListener("submit", handleFormSubmit);
});