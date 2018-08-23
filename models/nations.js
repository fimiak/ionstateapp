var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NationsSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  population: { type: Number },
  popgrowth: { type: Number },
  pop50: { type: Number },
  currency: { type: String, required: true },
  elections: { type: Date },
  life: { type: Number },
  urban: { type: Number }
  //leader: [{ type: Schema.Types.ObjectId, ref: 'Leaders' }],
  //map: { type: String }
});

module.exports = mongoose.model('Nations', NationsSchema);
