const mongoose = require('mongoose');

const applyFormSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    phone: String,
    email: String,
    age: String,
    lang: String,
    course: String,
    date: String,
});

module.exports = mongoose.model('ApplyForm', applyFormSchema);
