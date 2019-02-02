const mongoose = require('mongoose');

const studentsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    course: String,
    imgUrl: String,
});

module.exports = mongoose.model('Students', studentsSchema);
