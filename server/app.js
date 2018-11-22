const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const contacts = require('./api/routes/contacts');
const courseInfo = require('./api/routes/course-info');
const students = require('./api/routes/students');
const teamMembers = require('./api/routes/team-members');
const videoCartoon = require('./api/routes/video-cartoon');

mongoose.connect('mongodb://NodeJs:'+process.env.MONGO_ATLAS_PW +'@nodejs-shard-00-00-1ava4.mongodb.net:27017,nodejs-shard-00-01-1ava4.mongodb.net:27017,nodejs-shard-00-02-1ava4.mongodb.net:27017/test?ssl=true&replicaSet=NodeJs-shard-0&authSource=admin&retryWrites=true', {
    useNewUrlParser: true,
});

mongoose.Promise = global.Promise;

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
