const express = require('express');
const router = express.Router();

const TeamMemebrs = require('../models/team-members');

const teamMembers = [
    {
        name: 'Levon Azizyan',
        position: 'CEO',
        aboutWork: 'Software Engineer at EPAM System',
        imageUrl: 'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/39585392_1935113263247213_3492294344247869440_n.jpg?_nc_cat=0&oh=0bf38bea245e52b1a44e815e8c0ed6b1&oe=5C04D15B',
        facebook: 'https://www.facebook.com/yan.levon',
        linkedin: 'https://www.linkedin.com/in/levon-azizyan-a5391a90/',
        instagram: 'https://www.instagram.com/levonazizyan5/',
    },
    {
        name: 'Arman Ghazaryan',
        position: 'CTO',
        aboutWork: 'Software Engineer at EPAM System',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/CTO.jpeg?alt=media&token=5983ea53-0887-42c6-a10c-70ed61e62671',
        facebook: 'https://www.facebook.com/arman.ghazaryan1',
        linkedin: 'https://www.linkedin.com/in/arman-ghazaryan-288138146/',
        instagram: 'https://www.instagram.com/ghazaryan575/',
    },
    {
        name: 'Armen Zakaryan',
        position: 'System Administrator',
        aboutWork: 'IT Support specialist at Betconstruct',
        imageUrl: 'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/38612374_2182245488514324_1494754189304135680_n.jpg?_nc_cat=0&oh=6ce192d36c33fa87fa416a5bbe1d5521&oe=5BF5A963',
        facebook: 'https://www.facebook.com/armen.zaqaryan.92',
        linkedin: 'https://www.linkedin.com/in/armen-zakaryan-72302a134/',
        instagram: 'https://www.instagram.com/armen.zakaryan96/',
    },
    {
        name: 'Ann Grigoryan',
        position: 'English Mentor',
        aboutWork: 'DC tutor at School of Languages and Professional Development',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/English-mentor.jpg?alt=media&token=531b9fcb-2104-4806-aeb1-cd26c2823772',
        facebook: 'https://www.facebook.com/dnalrednow.84',
        instagram: 'https://www.instagram.com/dnalrednow.84/',
    },
    {
        name: 'Eléonore Ghazaryan',
        position: 'French Mentor',
        aboutWork: 'Fulfillment Specialist at E-World',
        imageUrl: 'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/36228724_474169206353501_8724168104004812800_n.jpg?_nc_cat=0&oh=f914b3630700b38d26bd08e905289d25&oe=5BFB02CA',
        facebook: 'https://www.facebook.com/eleonore.ghazaryan',
        linkedin: 'https://www.linkedin.com/in/eleanor-ghazaryan-a4992b152/',
        instagram: 'https://www.instagram.com/ghazzarian_/',
    },
    {
        name: 'Karen Mkhitaryan',
        position: 'Java & Automation Testing Mentor',
        aboutWork: 'Software Test Automation Engineer at EPAM System',
        imageUrl: 'https://instagram.fevn1-1.fna.fbcdn.net/vp/1be8c0fa15ba0d7bad2058157f64ca0f/5C38426F/t51.2885-15/e35/28151246_220091888552110_3841051315090227200_n.jpg',
        facebook: null,
        linkedin: 'https://www.linkedin.com/in/karen-mkhiataryan-b19386113/',
        instagram: 'https://www.instagram.com/karen11mkhitaryan/',
    },
    {
        name: 'Levon Aloyan',
        position: 'Java Mentor',
        aboutWork: 'Software Engineer at EPAM System',
        imageUrl: 'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/17951854_1271342939652426_2607015650935029356_n.jpg?_nc_cat=0&oh=10a335eab5deea7fffc254ccfd10bcea&oe=5C29540B',
        facebook: 'https://www.facebook.com/levonaloyan',
        linkedin: 'https://www.linkedin.com/in/levonaloyan/',
        instagram: 'https://www.instagram.com/levonaloyan/',
    },
    {
        name: 'Lilit Tamrazyan',
        position: 'PHP Mentor',
        aboutWork: 'Web Developer at Academy Of Justice',
        imageUrl: 'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/39167114_1766206993434498_4654911329503543296_n.jpg?_nc_cat=0&oh=577fec387757d5362cc6dfd6f09f3090&oe=5C37A0A3',
        facebook: 'https://www.facebook.com/lilit.tamrazyan.97',
        linkedin: 'https://www.linkedin.com/in/lilit-tamrazyan-30bb82b7/',
        instagram: 'https://www.instagram.com/_lilit_tamrazyan/',
    },
    {
        name: 'Karen Sargsyan',
        position: 'JS Mentor',
        aboutWork: 'Js Mentor at Level Up IT Center',
        imageUrl: 'https://scontent.fevn1-1.fna.fbcdn.net/v/t1.0-9/30411704_1891292654300956_8283930248660193744_n.jpg?_nc_cat=0&oh=c0da44a46bc7c4f4933897020ae90442&oe=5C31F81A',
        facebook: 'https://www.facebook.com/karen9618',
        linkedin: null,
        instagram: 'https://www.instagram.com/karen.__.sargsyan/',
    },
    {
        name: 'Ruben Aprikyan',
        position: 'NodeJS Mentor',
        aboutWork: 'Software Engineer at Brainstorm Technologies',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/nodejs-mentor.png?alt=media&token=56ce5a20-c29b-4847-a3de-fdbb165aefd9',
        facebook: 'https://www.facebook.com/rubenaprikyan8.01',
        linkedin: null,
        instagram: null,
    },
];

router.get('/', (req, res, next) => {
    teamMembersSchema.find()
        .exec()
        .then(docs => {
            const response = {
              message: 'Team members data',
              data: teamMembers,
            }
            if(docs.length >= 0) {
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
    teamMembersSchema.save().then(result => {
        res.status(201).json({
            message: 'Handling POST requests to /products',
            createdProduct: result
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });

});

module.exports = router;
