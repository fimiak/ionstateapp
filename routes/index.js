var express = require('express');
var router = express.Router();

var nations_controller = require('../controllers/nationsController');

// Home page
router.get('/', nations_controller.index);

module.exports = router;
