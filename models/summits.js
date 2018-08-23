var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var SummitsSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  date: { type: Date, required: true },
  location: { type: String, max: 100 },
  url: { type: String }
});

SummitsSchema.virtual('date_formatted').get(function() {
  return moment(this.date).format('MMMM Do, YYYY');
});

module.exports = mongoose.model('Summits', SummitsSchema);
