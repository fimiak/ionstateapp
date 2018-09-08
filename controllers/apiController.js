var Leaders = require('../models/leaders');
var Nations = require('../models/nations');
var Summits = require('../models/summits');
var News = require('../models/news');
var async = require('async');
var fetch = require('node-fetch');

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
    .sort([['date', 'ascending']])
    .exec(function(err, list_books) {
      if (err) {
        return next(err);
      }
      res.json(list_books);
    });
};

// pushes data to mlab, logs any failures
exports.news_request = function(req, res, next) {
  const query = 'trump,donald';
  const url = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=$${query}&page=0&fq=source:("The New York Times")&sort=newest&api-key=177f9a3c753d409887be6d5291df7d48`;
  const getNews = async url => {
    // async function
    try {
      const response = await fetch(url); // Set await before calling fetch
      const json = await response.json(); // declare json response after response resolves
      json.query = query;
      const data = await json;
      res.json(data);
    } catch (error) {
      console.log(error);
    }
  };
  getNews(url);
};
