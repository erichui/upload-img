var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var photos = require('./routes/photos')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // 默认的模版引擎 index === index.ejs
app.set('photos', path.join(__dirname, 'public/photos'))

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(path, cb)
//   -- 其中cb可以是router对象或普通函数
//   -- express4新的路由定义
//   -- cb为router对象时
//      -- 可以在path基础上定义多个子路由
//         eg1: router.get(/a, cb1)  path/a
//         eg2: router.get(/b, cb2)  path/b
//      -- 可以在path路由及其子路有中使用middleware.位置必须放在子路有之前
//         router.user(function(req, res, next) {})
// app.get(path, cb) 其中cb只能是普通的函数 -- 旧写法
//
// 也可以用const route = app.route(path)定义简介的路由
// route.get(functioin(req, res) {})
// route.post(function(req, res) {})

// app.use('/', index);

app.use('/', photos)
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
