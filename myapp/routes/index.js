var express = require('express');
var router = express.Router();
var app = express();
var http = require('http');
/* GET home page. */
console.log(app.get("number"))

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
app.get("/", function (req, res) {
  console.log('and this matches too')
  res.end();
})
module.exports = router;
