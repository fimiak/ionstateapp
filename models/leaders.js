var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LeadersSchema = new Schema({
  first_name: { type: String, required: true, max: 100 },
  last_name: { type: String, required: true, max: 100 },
  nation: { type: Schema.Types.ObjectId, ref: 'Nations', required: true },
  age: { type: Number },
  deputy: { type: String, max: 100 },
  position: { type: Number },
  birthdate: { type: Date },
  inauguration: { type: Date },
  news: { type: Schema.Types.ObjectId, ref: 'News' },
  url: { type: String, max: 100 }
});

LeadersSchema.virtual('name').get(function() {
  return this.first_name + ', ' + this.last_name;
});

module.exports = mongoose.model('Leaders', LeadersSchema);
