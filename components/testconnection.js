const connection = require('./db'); // Import the connection file

// Run a simple query to check connection and retrieve data
connection.query('SELECT 1 + 1 AS solution', (err, results) => {
  if (err) {
    console.error('Error executing query:', err.stack);
    return;
  }
  console.log('Query result:', results[0].solution); // Expected output: 2
});

// Close the connection after testing
connection.end((err) => {
  if (err) {
    console.error('Error closing the connection:', err.stack);
    return;
  }
  console.log('MySQL connection closed');
});
