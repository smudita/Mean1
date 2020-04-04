const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
  day: { type: String, required: true},
  title: { type: String, required: true},
  count: { type: String, required: true},


});

module.exports = mongoose.model('Sched', postSchema);
