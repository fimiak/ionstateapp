var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/apiController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/leaders', api_controller.leaders_api);

router.get('/nations', api_controller.nations_api);

router.get('/news', api_controller.news_api);

router.get('/summits', api_controller.summits_api);

module.exports = router;
