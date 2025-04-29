// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create Express app
const app = express();

// Use bodyParser middleware to parse JSON and urlencoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Array to store submitted feedback
let feedbackData = [];

// Define a route handler for submitting feedback form
app.post('/submit-feedback', (req, res) => {
    console.log('Received feedback data:', req.body);

    const { name, email, age, role, userRecommend, mostLike, prefer, comment } = req.body;

    // Add submitted feedback to the array
    feedbackData.push({ name, email, age, role, userRecommend, mostLike, prefer, comment });

    console.log('Feedback submitted successfully');
    res.status(200).send('Feedback submitted successfully');
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
