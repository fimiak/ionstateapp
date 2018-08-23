var Leaders = require('../models/leaders');
var Nations = require('../models/nations');
var Summits = require('../models/summits');

var async = require('async');

// Display nations API data on GET
exports.index = function(req, res) {
  async.parallel(
    {
      nation_count: function(callback) {
        Nations.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
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
