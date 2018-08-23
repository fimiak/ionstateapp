var Leaders = require('../models/leaders');
var Nations = require('../models/nations');
var Summits = require('../models/summits');

// Display nations API data on GET
exports.nations_api = function(req, res, next) {
  Nations.find()
    .sort({ elections: 'ascending' })
    .exec(function(err, list_books) {
      if (err) {
        return next(err);
      }
      res.json(list_books);
    });
};

// Display summits API data on GET
exports.summits_api = function(req, res, next) {
  Summits.find({}, 'name date url')
    .sort([['date', 'descending']])
    .exec(function(err, list_books) {
      if (err) {
        return next(err);
      }
      res.json(list_books);
    });
};
