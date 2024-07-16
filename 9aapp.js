const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the public directory
//app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
// Routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/registration', (req, res) => {
    res.render('registration');
});

app.get('/announcements', (req, res) => {
    res.render( 'announcements');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

// Start the server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
