var express = require('express');
var router = express.Router();

var leaders_controller = require('../controllers/leadersController');

/* GET users listing. */
router.get('/', leaders_controller.leader_list);

/* GET summit create form */
router.get('/create', leaders_controller.leaders_create_get);

/* POST election */
//router.post('/', leaders_controller.leader_add);

module.exports = router;
