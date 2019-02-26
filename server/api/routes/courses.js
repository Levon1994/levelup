const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Courses = require('../models/courses');

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
            res.status(500).json({ error: err })
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
                    error: err
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
                        error: err
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
                        error: err
                    })
                });
        }
    });
});

module.exports = router;