const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Students = require('../models/students');

const studentsImages = [
    'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/IMG-2439.JPG?alt=media&token=56b2d964-ff1b-4ccf-8dfd-fe13c79c2ed0',
    'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/IMG-2439.JPG?alt=media&token=56b2d964-ff1b-4ccf-8dfd-fe13c79c2ed0',
    'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/IMG-2439.JPG?alt=media&token=56b2d964-ff1b-4ccf-8dfd-fe13c79c2ed0',
    'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/IMG-2439.JPG?alt=media&token=56b2d964-ff1b-4ccf-8dfd-fe13c79c2ed0',
];

router.get('/', (req, res, next) => {
    Students.find()
        .exec()
        .then(students => {
            const response = {
                count: students.length,
                data: {
                  studentsImages: studentsImages,
                  studentsInfo: students,
                }
            }
            if(students.length >= 0) {
                res.status(200).json(response)
            } else {
                res.status(404).json({ message: 'No entries found' })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        })
});

router.post('/', (req, res, next) => {
    const studentsSchema = new Students({
          _id: new mongoose.Types.ObjectId(),
          name: req.body.name,
          course: req.body.course,
          imgUrl: req.body.imgUrl,
    });
    studentsSchema.save().then(result => {
        res.status(201).json({
            message: 'Handling POST requests to /products',
            createdStudents: result
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });

});

module.exports = router;
