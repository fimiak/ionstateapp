var Summits = require('../models/summits');

// Display list of all Summits
exports.summit_list = function(req, res, next) {
  Summits.find({}, 'name date').exec(function(err, list_summits) {
    if (err) {
      return next(err);
    }
    //Successful, so render
    res.render('summit_list', { title: 'Summit List', summit_list: list_summits });
  });
};
