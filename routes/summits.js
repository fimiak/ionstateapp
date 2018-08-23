var express = require('express');
var router = express.Router();

var summits_controller = require('../controllers/summitsController');

/* GET users listing. */
router.get('/', summits_controller.summit_list);

/* POST election */
//router.post('/', summits_controller.summits_add);

module.exports = router;
