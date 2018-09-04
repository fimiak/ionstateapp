var Leaders = require('../models/leaders');
var Nations = require('../models/nations');
var News = require('../models/news');
var Summits = require('../models/summits');

var async = require('async');

// Display list of all Leaders
exports.leader_list = function(req, res, next) {
  Leaders.find({}, 'first_name last_name nation url')
    .populate('nation')
    .sort({ last_name: 'ascending' })
    .exec(function(err, list_leaders) {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.render('leader_list', { title: 'Leader List', leader_list: list_leaders });
    });
};

// Display create form
exports.leaders_create_get = function(req, res, next) {
  res.render('leader_form', { title: 'Create Leader' });
};
