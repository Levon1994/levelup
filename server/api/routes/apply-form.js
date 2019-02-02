const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', (req, res, next) => {
    nodemailer.createTestAccount((err, account) =>{
        const htmlElement = `<h3>Level Up Mailer</h3>`;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'leveluparmenia@gmail.com',
                pass: 'levelup6560'
            }
        });

        console.log(req.body)

        let mailOptions = {
            from: 'leveluparmenia@gmail.com',
            to: 'yanlevon94@gmail.com',
            replyTo: 'leveluparmenia@gmail.com',
            subject: 'New Message',
            text: 'text',
            html: htmlElement
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log('sended error :::',err)
            }
        })
    })

});

module.exports = router;
