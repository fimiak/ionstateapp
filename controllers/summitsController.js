var Summits = require('../models/summits');
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Display list of all Summits
exports.summit_list = function(req, res, next) {
  Summits.find()
    .sort({ date: 'descending' })
    .exec(function(err, list_summits) {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.render('summit_list', { title: 'Summit List', summit_list: list_summits });
    });
};

exports.summits_create_get = function(req, res, next) {
  res.render('summit_form', { title: 'Create Summit' });
};

exports.summits_create_post = [
  // Validate body not empty
  body('name', 'Summit name required')
    .isLength({ min: 1 })
    .trim(),

  // Sanitize /trim and escape/ the name field
  sanitizeBody('name')
    .trim()
    .escape(),

  // Process request
  (req, res, next) => {
    // Extract validation errors from a request
    const errors = validationResult(req);

    var summit = new Summits({
      name: req.body.name,
      date: req.body.date,
      img: req.body.img,
      location: req.body.location,
      url: req.body.url
    });

    if (!errors.isEmpty()) {
      // Errors present, re render form with error messages
      res.render('summit_form', { title: 'Create Summit', summit: summit, errors: errors.array() });
      return;
    } else {
      // Data from form is valid
      // Check if same name exists
      Summits.findOne({ name: req.body.name }).exec(function(err, found_summit) {
        if (err) {
          return next(err);
        }
        if (found_summit) {
          // Summit exists, redirect to its page
          res.redirect('../summits');
        } else {
          summit.save(function(err) {
            if (err) {
              return next(err);
            }
            // Summit saved. Redirect
            res.redirect('../summits');
          });
        }
      });
    }
  }
];
