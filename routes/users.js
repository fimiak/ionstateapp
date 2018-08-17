var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
      id: 0,
      country: 'Brazil',
      date: 'October 7, 2018'
    },
    {
      id: 1,
      country: 'Madagascar',
      date: 'October 21, 2018'
    }
  ]);
});

module.exports = router;
