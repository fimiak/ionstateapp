var express = require('express');
var router = express.Router();

var news_controller = require('../controllers/newsController');

/* GET users listing. */
router.get('/', news_controller.news_list);

/* GET summit create form */
router.get('/create', news_controller.news_create_get);

/* POST election */
//router.post('/', news_controller.news_add);

// Fetch NYTimes API
router.get('/fetch', news_controller.news_push_db);

// Update NYTimes API
router.get('/update', news_controller.news_create_post);

module.exports = router;
