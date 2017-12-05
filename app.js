var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var auth = require('./routes/auth');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// enable to bearer token.
var bearerToken = require('express-bearer-token');
app.use(bearerToken({
  'bodyKey': 'access_token', // The key access_token in the request body. (this key used to POST method)
  'queryKey': 'access_token', // The key access_token in the request params. (this key used to GET methods)
  'headerKey': 'Bearer', // The value from the header Authorization: Bearer <token>.
  'reqKey': 'token' // req.token to express request of router.
}));
app.use(function (req, res, next) {
  console.log('info %s %s', 'bear-token', req.token);
  next();
});

// see ip address for all routers.
app.use(function (req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('info %s %s', 'ip', ip);
  next();
});

// boostrap4
app.use(function(req, res, next){
  var bootstrap4 = require('bootstrap');
  console.log('info %s', bootstrap4);
  return next();
});

app.use('/', index);
app.use('/auth', auth);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

//module.exports = app;
app.listen(80, function (err) {
  if (err) { console.log('info %s', 'could not be loaded to expressJS web server of NodeJs.'); }
  console.log('info %s', 'succss to loaded web server of NodeJs.');
});