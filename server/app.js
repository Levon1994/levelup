const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const ejs = require('ejs');
// const fs = require('fs');
// const pdf = require('html-pdf');

//routers
const contacts = require('./api/routes/contacts');
const courseInfo = require('./api/routes/course-info');
const students = require('./api/routes/students');
const teamMembers = require('./api/routes/team-members');
const videoCartoon = require('./api/routes/video-cartoon');
const applyForm = require('./api/routes/apply-form');
const userRoutes = require('./api/routes/user');
const courses = require('./api/routes/courses');

const config = require('./config');

mongoose.connect(config.mongodb.url, config.mongodb.options, err => err ? console.error(err) : console.log('Mongodb connected'));
mongoose.Promise = global.Promise;

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// var html = fs.readFileSync('./index.html', 'utf8');
// var options = { format: 'Letter' };
//
// pdf.create(html, options).toFile('./businesscard.pdf', function(err, res) {
//     if (err) return console.log(err);
//     console.log(res); // { filename: '/app/businesscard.pdf' }
// });

// app.get('/', (req,res) => {
//   res.render('./index.ejs', { name: 'Contacts Page' })
// });

//Headers
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//Routes which should handle requests
app.use('/contacts', contacts);
app.use('/course-info', courseInfo);
app.use('/students', students);
app.use('/team-members', teamMembers);
app.use('/video-cartoon', videoCartoon);
app.use('/apply-form', applyForm);
app.use('/user', userRoutes);
app.use('/courses', courses);

//Error handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status(404);
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;
