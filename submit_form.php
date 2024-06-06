<?php
// submit_form.php

// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "smart_task_manager";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the task from the form
    $task = $_POST['task'];

    // Insert the task into the database
    $sql = "INSERT INTO tasks (task, status) VALUES ('$task', 'pending')";

    if ($conn->query($sql) === TRUE) {
        echo "New task added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the connection
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Submission</title>
</head>
<body>
    <h1>Submit a New Task</h1>
    <form action="submit_form.php" method="post">
        <label for="task">Task:</label>
        <input type="text" id="task" name="task" required>
        <button type="submit">Submit</button>
    </form>
    <a href="demo.html">Back to Demo</a>
</body>
</html>
