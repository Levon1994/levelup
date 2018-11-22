const express = require('express');
const router = express.Router();

const VideoCartoon = require('../models/video-cartoon');

router.get('/', (req, res, next) => {
    VideoCartoon.find()
        .exec()
        .then(videoCartoon => {
            const response = {
                count: videoCartoon.length,
                data: videoCartoon[0].videoCartoon,
            }
            if(videoCartoon.length >= 0) {
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
    const videoCartoonSchema = new VideoCartoon({
        videoCartoon: req.body.videoCartoon
    });
    videoCartoonSchema.save().then(result => {
        res.status(201).json({
            message: 'Handling POST requests to /products',
            createdVideoCartoon: result
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });

});

module.exports = router;
