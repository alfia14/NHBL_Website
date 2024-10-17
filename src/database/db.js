const mysql = require('mysql2');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: '18.220.149.166', // If hosted on a remote server, use the server's IP
  user: 'nhblstudies_alfiap', // Your MySQL user
  password: 'Alfia@123', // Your MySQL password
  database: 'nhblstudies_user_authentication', // The database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to MySQL database as ID', connection.threadId);
});

module.exports = connection;
