const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Students = require('../models/students');

router.get('/', (req, res, next) => {
    Students.find()
        .exec()
        .then(students => {
            const response = {
                count: students.length,
                data: students,
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
    studentsSchema.save(()=>{
        Students.find()
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

router.patch('/:studentsId', (req, res, next) => {
    const _id = req.params.studentsId;
    Students.findOneAndUpdate({_id}, { $set: req.body }, (err) =>{
        if(!err) {
            Students.find()
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

router.delete('/:studentsId', (req, res, next) => {
    const _id = req.params.studentsId;
    Students.findByIdAndRemove({_id}, (err, doc)=> {
        if(!err) {
            Students.find().then((result) =>{
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
