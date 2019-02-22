const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const config = require('../../config');
const mailDesign = require('../../views/mailDesign');
const mongoose = require('mongoose');

const ApplyForm = require('../models/apply-form');

router.get('/', (req, res, next) => {
    ApplyForm.find()
        .exec()
        .then(applyers => {
            const response = {
                count: applyers.length,
                data: applyers,
            }
            if(applyers.length >= 0) {
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
    let transporter = nodemailer.createTransport({
        host: config.clientSecret.web.host,
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: config.clientSecret.web.email,
            clientId: config.clientSecret.web.cliendId,
            clientSecret: config.clientSecret.web.clientSecret,
            refreshToken: config.clientSecret.web.refreshToken,
        }
    });

    const requestedMailInfo = {
      name: req.body.name,
      surname: req.body.surname,
      course: req.body.course,
      lang: req.body.lang,
    };

    const htmlElement = mailDesign(requestedMailInfo);

    let mailOptions = {
        from: config.clientSecret.web.email,
        to: req.body.email,
        subject: 'New Message',
        html: htmlElement
    };

    const applyFormSchema = new ApplyForm({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        age: req.body.age,
        lang: req.body.lang,
        course: req.body.course,
        date: new Date(),
    });
    applyFormSchema.save(()=>{
        ApplyForm.find()
            .then((result) =>{
                if(result){
                    transporter.sendMail(mailOptions, (err, info) => {
                        if (err) {
                            console.log('sended error :::',err)
                        } else {
                            return res.status(200).json({
                                message: "Email Sended",
                                send: true
                            });
                        }
                    });
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
            });
    });
});

router.delete('/:applyerId', (req, res, next) => {
    const _id = req.params.applyerId;
    ApplyForm.findByIdAndRemove({_id}, (err, doc)=> {
        if(!err) {
            ApplyForm.find().then((result) =>{
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
