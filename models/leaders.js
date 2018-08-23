var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LeadersSchema = new Schema({
  first_name: { type: String, required: true, max: 100 },
  last_name: { type: String, required: true, max: 100 },
  country: { type: String, required: true, max: 100 },
  age: { type: Number },
  deputy: { type: String, max: 100 },
  position: { type: Number },
  birthdate: { type: Date },
  homepage: { type: String },
  news: { type: Schema.Types.ObjectId, ref: 'News' }
});

module.exports = mongoose.model('Leaders', LeadersSchema);
