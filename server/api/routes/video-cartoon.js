const express = require('express');
const router = express.Router();

const videoUrlData = {
    am: 'https://www.youtube.com/embed/quKWKTN_-vA',
    ru: 'https://www.youtube.com/embed/uNQ_D00EMRw',
    uk: 'https://www.youtube.com/embed/6qfhLaHeI4o',
};

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Cartoon videos data',
        data: videoUrlData,
    })
});

module.exports = router;