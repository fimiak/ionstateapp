var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LeadersSchema = new Schema({
  first_name: { type: String, required: true, max: 100 },
  last_name: { type: String, required: true, max: 100 },
  country: { type: String, required: true, max: 100 },
  age: { type: Number },
  date_of_election: { type: Date }
});

module.exports = mongoose.model('Leaders', LeadersSchema);
