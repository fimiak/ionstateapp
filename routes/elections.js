var express = require('express');
var router = express.Router();

var elections_controller = require('../controllers/electionsController');

/* GET users listing. */
router.get('/', elections_controller.index);

/* GET users listing. */
router.get('/list', elections_controller.elections_list);

module.exports = router;
