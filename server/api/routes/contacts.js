const express = require('express');
const router = express.Router();

const Contacts = require('../models/contacts');

router.get('/', (req, res, next) => {
    Contacts.find()
        .exec()
        .then(contacts => {
            const response = {
                count: contacts.length,
                data: contacts[0].contactsImages,
            }
            if(contacts.length >= 0) {
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
    const contactsSchema = new Contacts({
        contactsImages: req.body.contactsImages
    });
    contactsSchema.save().then(result => {
        res.status(201).json({
            message: 'Handling POST requests to /products',
            createdContacts: result
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });

});

module.exports = router;
