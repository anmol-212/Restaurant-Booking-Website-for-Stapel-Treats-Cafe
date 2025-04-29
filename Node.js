const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Simple in-memory database of users (replace this with a real database in a production environment)
const users = [
    { username: 'admin', password: 'password' }
];

// Route for handling login POST requests
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Check if user exists in the database
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        // Successful login
        res.json({ message: `Welcome, ${username}!` });
    } else {
        // Invalid credentials
        res.status(401).json({ message: 'Invalid username or password. Please try again.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
