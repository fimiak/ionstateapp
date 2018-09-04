var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var NewsSchema = new Schema({
  name: { type: String },
  leader: { type: Schema.Types.ObjectId, ref: 'Leaders' },
  author: { type: String },
  web_url: { type: String },
  headline: {
    main: { type: String }
  },
  description: { type: String },
  pub_date: { type: Date },
  snippet: { type: String }
});

NewsSchema.virtual('date_formatted').get(function() {
  return moment(this.pub_date).format('MMMM Do, YYYY');
});

module.exports = mongoose.model('News', NewsSchema);
