var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = express.Router();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter = require("./routes/test");

const fs = require('fs')
const data = fs.readFileSync('/Users/edz/mlwork/myapp/myapp/myapp/public/test.html', 'utf8');
var app = express();
var ejs = require("ejs");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);
// app.use('/test.html',);
// app.use(express.static('test'))
// catch 404 and forward to error handler
/* GET users listing. */
num = 0;
app.get('/add', function (req, res, next) {
  this.num++;
  res.send(`{"num": ${this.num}}`);
});
app.get('/reduce', function (req, res, next) {
  this.num--;
  res.send(`{"num": ${this.num}}`);
});
app.get('/load', function (req, res, next) {
  res.send(`{"num": ${this.num}}`);
});
app.get("/test.html", function (req, res, next) {
  let html = ejs.render(data, { num: this.num })
  res.send(html);
})
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// app.get('/add', function (req, res) {
//   res.send('Hello World!')  
// })
app.get('/users', function (req, res) {
  res.send('Got a PUT request at /user')
})

module.exports = app;
