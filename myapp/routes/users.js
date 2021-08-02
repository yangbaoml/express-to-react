var express = require('express');
var router = express.Router();
var app = express();
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send("users");
});
app.get("/users", function (req, res) {
  console.log('users')
  res.end();
})
app.set('trust proxy', function (ip) {
  if (ip === '127.0.0.1') return true // trusted IPs
  else return false
})
module.exports = router;
