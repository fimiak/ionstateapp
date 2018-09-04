var Leaders = require('../models/leaders');
var Nations = require('../models/nations');
var Summits = require('../models/summits');
var News = require('../models/news');

// Display summits API data on GET
exports.leaders_api = function(req, res, next) {
  Leaders.find()
    .sort([['last_name', 'descending']])
    .exec(function(err, list_books) {
      if (err) {
        return next(err);
      }
      res.json(list_books);
    });
};

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
  Summits.find()
    .sort([['date', 'descending']])
    .exec(function(err, list_books) {
      if (err) {
        return next(err);
      }
      res.json(list_books);
    });
};

// Display summits API data on GET
exports.news_api = function(req, res, next) {
  News.find()
    .sort([['date', 'descending']])
    .exec(function(err, list_books) {
      if (err) {
        return next(err);
      }
      res.json(list_books);
    });
};
