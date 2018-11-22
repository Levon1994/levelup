const mongoose = require('mongoose');

const videoCartoonSchema = mongoose.Schema({
  videoCartoon: Object
});

module.exports = mongoose.model('VideoCartoon', videoCartoonSchema);
