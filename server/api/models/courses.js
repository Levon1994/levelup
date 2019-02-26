const mongoose = require('mongoose');

const trainerSchema = mongoose.Schema({
    name: String,
    path: String,
    position: String,
});

const coursesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: [ String ],
    info: {
        duration: String,
        effort: String,
        price: String,
    },
    path: String,
    trainerInfo: [ trainerSchema ],
});

module.exports = mongoose.model('Courses', coursesSchema);
