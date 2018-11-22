const mongoose = require('mongoose');

const contactsSchema = mongoose.Schema({
  contactsImages: Array
});

module.exports = mongoose.model('Contacts', contactsSchema);
