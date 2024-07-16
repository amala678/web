const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static('public'));
app.set('view engine', 'ejs');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/studentDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Student schema and model
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String
});

const Student = mongoose.model('Student', studentSchema);

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/insert', (req, res) => {
  res.render('insert');
});

app.post('/insert', (req, res) => {
  const newStudent = new Student({
    name: req.body.name,
    age: req.body.age,
    grade: req.body.grade
  });

  newStudent.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send('Successfully added a new student!');
    }
  });
});

app.get('/update', (req, res) => {
  res.render('update');
});

app.post('/update', (req, res) => {
  Student.updateOne(
    { name: req.body.name },
    { age: req.body.age, grade: req.body.grade },
    (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send('Successfully updated student!');
      }
    }
  );
});

app.get('/delete', (req, res) => {
  res.render('delete');
});

app.post('/delete', (req, res) => {
  Student.deleteOne({ name: req.body.name }, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send('Successfully deleted student!');
    }
  });
});

app.get('/display', (req, res) => {
  Student.find({}, (err, students) => {
    if (err) {
      res.send(err);
    } else {
      res.render('display', { studentsList: students });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
