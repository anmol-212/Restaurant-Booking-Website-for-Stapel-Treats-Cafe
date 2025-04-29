// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
// Create Express app
const app = express();

// Use bodyParser middleware to parse JSON and urlencoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Array to store submitted feedback
let feedbackData = [];

// MySQL connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Anmol911@',
    database: 'restuarant'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});


// Define a route handler for submitting feedback form
app.post('/submit-feedback', (req, res) => {
    console.log('Received feedback data:', req.body);

    const { name, email, age, role,user_recommend, mostLike, prefer, comment } = req.body;

    // Add submitted feedback to the array
    // Inside the POST request handler
    // Add submitted feedback to the array
    feedbackData.push({ name, email, age, role, user_recommend, mostLike, prefer, comment });

    // MySQL query to insert the feedback into the database
    connection.query('INSERT INTO feedback_data (name, email, age, role, user_recommend, most_like, prefer, comment) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [name, email, age, role,user_recommend, mostLike, prefer, comment],
        (error, results, fields) => {
            if (error) {
                console.error('Error inserting feedback into MySQL:', error.stack);
                res.status(500).send('Error inserting feedback into MySQL');
                return;
            }
            console.log('Feedback inserted into MySQL successfully');
            res.status(200).send('Feedback submitted successfully');
        });
});

// Define a route handler to get all feedback data
app.get('/feedback-data', (req, res) => {
    res.json(feedbackData);
});

// Start the server
const port = 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// JavaScript source code
