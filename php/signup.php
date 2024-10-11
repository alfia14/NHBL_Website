<?php
header('Access-Control-Allow-Origin: *');  // Allow all origins (replace * with your domain in production)
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Database connection credentials
$servername = "localhost";
$username = "nhblstudies_alfiap";  // Replace with your MySQL database username
$password = "Alfia@123";  // Replace with your MySQL database password
$dbname = "nhblstudies_user_authentication";        // Replace with your MySQL database name


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get POST data
$email = $_POST['email'];
$password = $_POST['password'];

// Hash the password for security
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Check if the user already exists
$sql = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode(["status" => "error", "message" => "User already exists"]);
} else {
    // Insert the new user into the database
    $sql = "INSERT INTO users (email, password) VALUES ('$email', '$hashed_password')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success", "message" => "User registered successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error: " . $conn->error]);
    }
}

// Close the connection
$conn->close();
?>
