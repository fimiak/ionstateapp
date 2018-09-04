var Leaders = require('../models/leaders');
var Nations = require('../models/nations');
var News = require('../models/news');
var async = require('async');
var fetch = require('node-fetch');

// Display list of all News
exports.news_list = function(req, res, next) {
  News.find({}, 'headline web_url leader pub_date')
    .populate('leader')
    .exec(function(err, list_news) {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.render('news_list', { title: 'News List', news_list: list_news });
    });
};

// Display create form
exports.news_create_get = function(req, res, next) {
  res.render('news_form', { title: 'Create News' });
};

// pushes data to mlab, logs any failures

exports.news_push_db = function(req, res, next) {
  const url = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=$trump,donald&page=0&fq=source:("The New York Times")&sort=newest&api-key=177f9a3c753d409887be6d5291df7d48`;
  const getNews = async url => {
    // async function
    try {
      const response = await fetch(url); // Set await before calling fetch
      const json = await response.json(); // declare json response after response resolves
      res.json(json);
    } catch (error) {
      console.log(error);
    }
  };
  getNews(url);
};

exports.news_create_post = function(req, res, next) {
  const url = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=$trump,donald&page=0&fq=source:("The New York Times")&sort=newest&api-key=177f9a3c753d409887be6d5291df7d48`;
  const getNews = async url => {
    // async function
    try {
      const response = await fetch(url); // Set await before calling fetch
      const json = await response.json(); // declare json response after response resolves
      var news = await new News(json);

      await news.save(function(err) {
        if (err) {
          return next(err);
        }
        res.json();
      });
    } catch (error) {
      console.log(error);
    }
  };
  getNews(url);
};
