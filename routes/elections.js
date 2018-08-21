var express = require('express');
var router = express.Router();

var elections_controller = require('../controllers/electionsController');

/* GET users listing. */
router.get('/', elections_controller.elections_list);

/* GET users listing. */
router.get('/list', elections_controller.index);

/* POST election */
//router.post('/', elections_controller.elections_add);

module.exports = router;
