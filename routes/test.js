var express = require('express');
var router = express.Router();
var app = express();
/* GET users listing. */
router.get('/test.html', function (req, res, next) {
  res.send();
});

module.exports = router;
