var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var NewsSchema = new Schema({
  name: { type: String },
  author: { type: String },
  web_url: { type: String },
  headline: {
    main: { type: String }
  },
  description: { type: String },
  pub_date: { type: Date },
  snippet: { type: String },
  response: {
    docs: [
      {
        byline: {
          original: { type: String }
        },
        headline: {
          main: { type: String }
        },
        multimedia: [
          {
            rank: { type: Number },
            subtype: { type: String },
            url: { type: String }
          }
        ],
        news_desk: { type: String },
        pub_date: { type: Date },
        snippet: { type: String },
        source: { type: String },
        web_url: { type: String }
      }
    ]
  },
  query: { type: String }
});

NewsSchema.virtual('date_formatted').get(function() {
  return moment(this.pub_date).format('MMMM Do, YYYY');
});

module.exports = mongoose.model('News', NewsSchema);
