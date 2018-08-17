var Elections = require('../models/elections');

exports.index = function(req, res) {
  //res.json({ hello: 'hi ' });
  Elections.find({}, 'country date_of_election type_of_election')
    .populate('author')
    .exec(function(err, list_books) {
      if (err) {
        return next(err);
      }
      console.log(list_books);
      res.render('index', { title: 'Book List', book_list: list_books });
    });
};

exports.elections_list = function(req, res) {
  Elections.find({}, 'country date_of_election type_of_election')
    .populate('author')
    .exec(function(err, list_books) {
      if (err) {
        return next(err);
      }
      console.log(list_books);
      res.json(list_books);
    });
};
