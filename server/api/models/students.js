const mongoose = require('mongoose');

const studentssSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    course: String,
    imgUrl: String,
});

module.exports = mongoose.model('Students', studentssSchema);
