const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const connection = require('./db'); // Assuming you already set up MySQL connection in a 'db.js' file

app.use(express.json()); // To parse incoming JSON requests

// Sign-up route
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // Check if email is already registered
  connection.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).send('Database error');
    
    if (results.length > 0) {
      return res.status(400).send('User already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the database
    connection.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err, results) => {
      if (err) return res.status(500).send('Error inserting user');
      
      res.status(201).send('User created successfully');
    });
  });
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
