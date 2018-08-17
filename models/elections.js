var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ElectionsSchema = new Schema({
  country: { type: String, required: true, max: 100 },
  date_of_election: { type: Date },
  type_of_election: { type: String, required: false, max: 100 }
});

module.exports = mongoose.model('Elections', ElectionsSchema);
