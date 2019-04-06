const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Courses = require('../models/courses');


router.get('/', (req, res, next) => {
    Courses.find()
        .exec()
        .then(courses => {
            const response = {
                count: courses.length,
                data: courses,
            }
            if (courses.length >= 0) {
                res.status(200).json(response)
            } else {
                res.status(404).json({ message: 'No entries found' })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err ,message:"1111"})
        })
});


router.get('/:name', (req, res, next) => {
    const name = req.params.name;
    Courses.find({ name })
        .exec()
        .then(course => {
            const response = {
                count: course.length,
                data: course,
            }
            if(course.length >= 0) {
                res.status(200).json(response)
            } else {
                res.status(404).json({ message: 'No entries found' })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err, message: "222" })
        })
});

router.post('/', (req, res, next) => {
    const coursesSchema = new Courses({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        info: {...req.body.info},
        path: req.body.path,
        trainerInfo: [...req.body.trainerInfo],
    });
    coursesSchema.save(()=>{
        Courses.find()
            .then((result) =>{
                const response = {
                    count: result.length,
                    data: result,
                };
                res.status(200).json(response)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err,
                    message: "333"
                })
            });
    });
});

router.patch('/:course', (req, res, next) => {
    const _id = req.params.course;
    Courses.findOneAndUpdate({_id}, { $set: req.body }, (err) =>{
        if(!err) {
            Courses.find()
                .then((result) =>{
                    const response = {
                        count: result.length,
                        data: result,
                    };
                    res.status(200).json(response)
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err, 
                        message: "444"
                    })
                });
        }
    })
});

router.delete('/:course', (req, res, next) => {
    const _id = req.params.course;
    Courses.findByIdAndRemove({_id}, (err, doc)=> {
        if(!err) {
            Courses.find().then((result) =>{
                const response = {
                    count: result.length,
                    data: result,
                };
                res.status(200).json(response)
            })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err, message: "555"
                    })
                });
        }
    });
});

module.exports = router;