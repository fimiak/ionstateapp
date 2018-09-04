var express = require('express');
var router = express.Router();

var summits_controller = require('../controllers/summitsController');

/* GET summit list listing. */
router.get('/', summits_controller.summit_list);

/* GET summit create form */
router.get('/create', summits_controller.summits_create_get);

/* POST summit create form */
router.post('/create', summits_controller.summits_create_post);

module.exports = router;
