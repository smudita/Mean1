const mongoose = require('mongoose');

const proSchema = mongoose.Schema({
  imagePath: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  


});

module.exports = mongoose.model('Lower', proSchema);
