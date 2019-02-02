const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const TeamMemebrs = require('../models/team-members');

router.get('/', (req, res, next) => {
    TeamMemebrs.find()
        .exec()
        .then(tembers => {
            const response = {
                count: tembers.length,
                data: tembers,
            }
            if(tembers.length >= 0) {
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
    const teamMembersSchema = new TeamMemebrs({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        position: req.body.position,
        aboutWork: req.body.aboutWork,
        imageUrl: req.body.imageUrl,
        facebook: req.body.facebook,
        linkedin: req.body.linkedin,
        instagram: req.body.instagram,
    });
    teamMembersSchema.save(()=>{
        TeamMemebrs.find()
            .then((result) =>{
                const response = {
                    count: result.length,
                    data: [...result],
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

router.patch('/:teamMemberId', (req, res, next) => {
    const _id = req.params.teamMemberId;
    TeamMemebrs.findOneAndUpdate({_id}, { $set: req.body }, (err) =>{
        if(!err) {
            TeamMemebrs.find()
                .then((result) =>{
                    const response = {
                        count: result.length,
                        data: [...result],
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

router.delete('/:teamMemberId', (req, res, next) => {
    const _id = req.params.teamMemberId;
    TeamMemebrs.findByIdAndRemove({_id}, (err, doc)=> {
        if(!err) {
            TeamMemebrs.find().then((result) =>{
                const response = {
                    count: result.length,
                    data: [...result],
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
