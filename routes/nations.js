var express = require('express');
var router = express.Router();

var nations_controller = require('../controllers/nationsController');

/* GET users listing. */
router.get('/', nations_controller.index);

/* GET users listing. */
//router.get('/list', nations_controller.nations_list);

/* POST election */
//router.post('/', nations_controller.elections_add);

module.exports = router;
