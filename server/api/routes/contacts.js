const express = require('express');
const router = express.Router();

const contactUsImages = [
    'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/33763722_10156415795532552_6450518945576255488_n.jpg?_nc_cat=0&oh=161292d08e8fbbf1abd1de60664d4e4c&oe=5C2B0914',
    'http://www.eliteplaza.am/wp-content/gallery/global-gallery/elite-plaza-2.jpg',
    'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/33692021_10156415794522552_7456713990710755328_n.jpg?_nc_cat=0&oh=f1c9a2a9b2d7350cc4f0ec1fa1d05b97&oe=5C2ED421',
    'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/33672892_10156415794512552_274701718795583488_n.jpg?_nc_cat=0&oh=95ea1602387b4539952374598a638d5a&oe=5C2A5181',
];

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Contacts data',
        data: contactUsImages,
    })
});

module.exports = router;