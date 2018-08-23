var Elections = require('../models/elections');
/**
 ** API for JSON list.
 ** GET LIST INDEX page for Elections page.
 ** GET DETAIL page for Elections.
 ** CREATE GET
 ** CREATE POST
 ** DELETE GET
 ** DELETE POST
 ** UPDATE GET
 ** UPDATE POST
 **/

// API GET JSON

// GET LIST INDEX
exports.elections_list = function(req, res) {
  Elections.find({}, 'country date_of_election type_of_election')
    .populate('author')
    .exec(function(err, list_books) {
      if (err) {
        return next(err);
      }
      res.json(list_books);
    });
};

// Get DETAIL
// exports.elections_detail = function(req, res) {};
/*
// CREATE GET
exports.elections_create_get = function(req, res, next) {
  async.parallel(
    {
      elections: function(callback) {
        Elections.find(callback);
      }
    },
    function(err, results) {
      if (err) {
        return next(err);
      }
      res.render('book_form', { elections: results.elections });
    }
  );
};
*/
/*
// CREATE POST
exports.elections_create_post = [
  (req, res, next) => {
    next();
  },

  //validate
  body('country', 'Must not be empty')
    .isLength({ min: 1 })
    .trim(),
  body('date_of_election', 'Must not be empty')
    .isLength({ min: 1 })
    .trim(),
  sanitizeBody('*')
    .trim()
    .escape(),

  (req, res, next) => {
    const errors = validationResult(req);

    var election = new Elections({
      // Create object with escaped and trimmed data.
      country: req.body.country,
      date_of_election: req.body.date_of_election
    });

    if (!errors.isEmpty()) {
      // Fix errors and try again
      async.parallel(
        {
          elections: function(callback) {
            Election.find(callback);
          }
        },
        function(err, results) {
          if (err) {
            return next(err);
          }

          for (let i = 0; i < results.genres.length; i++) {}
          res.render('book_form', { elections: results.elections, errors: errors.array() });
        }
      );
      return;
    } else {
      election.save(function(err) {
        if (err) {
          return next(err);
        }
        res.redirect(election.url);
      });
    }
  }
];
*/
// Display Election delete form on GET
exports.elections_delete = function(req, res) {};

// DELETE GET
// DELETE POST
// UPDATE GET
// UPDATE POST
