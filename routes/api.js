var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/apiController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/nations', api_controller.nations_api);

router.get('/summits', api_controller.summits_api);

module.exports = router;
