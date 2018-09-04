var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var SummitsSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  date: { type: Date, required: true },
  img: { type: String, max: 100 },
  location: { type: String, max: 100 },
  url: { type: String }
});

SummitsSchema.virtual('date_formatted').get(function() {
  return moment(this.date).format('MMMM Do, YYYY');
});

SummitsSchema.virtual('img_url').get(function() {
  return 'static/media/' + this.img;
});

module.exports = mongoose.model('Summits', SummitsSchema);
