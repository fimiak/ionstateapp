var express = require('express');
var router = express.Router();

var nations_controller = require('../controllers/nationsController');

/* GET users listing. */
router.get('/', nations_controller.nation_list);

/* GET summit create form */
router.get('/create', nations_controller.nations_create_get);

/* POST election */
//router.post('/', nations_controller.elections_add);

module.exports = router;
