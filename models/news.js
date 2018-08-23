var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NewsSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  author: { type: String, required: true },
  url: { type: String },
  date: { type: Date }
});

module.exports = mongoose.model('News', NewsSchema);
