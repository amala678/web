const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 7000;

// Set the view engine to EJS
app.set('view engine', 'ejs');



// Route for CSE branch
app.get('/cse', (req, res) => {
    res.render('branch', { branch: 'Computer Science and Engineering', color: 'lightblue', font: 'Arial' });
});

// Route for ECE branch
app.get('/ece', (req, res) => {
    res.render('branch', { branch: 'Electronics and Communication Engineering', color: 'lightgreen', font: 'Verdana' });
});

// Route for ME branch
app.get('/me', (req, res) => {
    res.render('branch', { branch: 'Mechanical Engineering', color: 'lightcoral', font: 'Tahoma' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
