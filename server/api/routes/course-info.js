const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Course info data'
    })
});

router.get('/:course', (req, res, next) => {
    res.status(200).json({
        message: 'Course info data'
    })
});

module.exports = router;