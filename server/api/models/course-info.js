const mongoose = require('mongoose');

const courseInfoSchema = mongoose.Schema({
  courseInfo: Object
});

module.exports = mongoose.model('CourseInfo', courseInfoSchema);
