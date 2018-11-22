const mongoose = require('mongoose');

const teamMembersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    position: String,
    aboutWork: String,
    imageUrl: String,
    facebook: String,
    linkedin: String,
    instagram: String,
});

module.exports = mongoose.model('TeamMemebrs', teamMembersSchema);
