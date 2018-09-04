var Leaders = require('../models/leaders');
var Nations = require('../models/nations');
var News = require('../models/news');
var Summits = require('../models/summits');

var async = require('async');

// Display INDEX on GET
exports.index = function(req, res) {
  async.parallel(
    {
      nation_count: function(callback) {
        Nations.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
      },
      leader_count: function(callback) {
        Leaders.countDocuments({}, callback);
      },
      article_count: function(callback) {
        News.countDocuments({}, callback);
      },
      summit_count: function(callback) {
        Summits.countDocuments({}, callback);
      }
    },
    function(err, results) {
      res.render('index', { title: 'Admin Home', error: err, data: results });
    }
  );
};

// Display list of all Nations
exports.nation_list = function(req, res, next) {
  Nations.find({}, 'name leader')
    .populate('leader')
    .sort({ name: 'ascending' })
    .exec(function(err, list_nations) {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.render('nation_list', { title: 'Nation List', nation_list: list_nations });
    });
};

// Display create form
exports.nations_create_get = function(req, res, next) {
  res.render('nation_form', { title: 'Create Nation' });
};
