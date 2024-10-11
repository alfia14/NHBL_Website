<?php
// Database connection credentials
$servername = "localhost";
$username = "nhblstudies_alfiap";  // Replace with your MySQL database username
$password = "Alfia@123";  // Replace with your MySQL database password
$dbname = "nhblstudies_user_authentication";         // Replace with your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get POST data
$email = $_POST['email'];
$password = $_POST['password'];

// Fetch user from the database
$sql = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    // Verify the password
    if (password_verify($password, $row['password'])) {
        echo json_encode(["status" => "success", "message" => "Login successful"]);
        // You can create a session or token here for authenticated users
        session_start();
        $_SESSION['user'] = $row['email']; // Store the user session
    } else {
        echo json_encode(["status" => "error", "message" => "Incorrect password"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "User not found"]);
}

// Close the connection
$conn->close();
?>
