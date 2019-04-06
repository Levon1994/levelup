const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const CourseInfo = require('../models/course-info');

router.get('/', (req, res, next) => {
    CourseInfo.find()
        .exec()
        .then(result => {
            const response = {
                count: result.length,
                data: result[0].courseInfo,
            }
            if(result.length >= 0) {
                res.status(200).json(response)
            } else {
                res.status(404).json({ message: 'No entries found' })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err, message: "1111" })
        })
});

router.post('/', (req, res, next) => {
    const courseInfoSchema = new CourseInfo({
        courseInfo: req.body.courseInfo
    });
    courseInfoSchema.save().then(result => {
        res.status(201).json({
            message: 'Handling POST requests to /products',
            courseInfoContacts: result
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err, message: "222"
        })
    });

});

module.exports = router;
