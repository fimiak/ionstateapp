var express = require('express');
var router = express.Router();

var news_controller = require('../controllers/newsController');

/* GET users listing. */
router.get('/', news_controller.news_list);

/* GET summit create form */
router.get('/create', news_controller.news_create_get);

/* POST election */
router.get('/:query', news_controller.news_create_post);

module.exports = router;
