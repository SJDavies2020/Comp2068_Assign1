//- File Name: apps.js
//- Author: Steven Davies
//- Website Name: www.sdavies.ca
//- Description: This is the app.js for the site and contains all the required in modules.
//- Updated : 2019-10-13
// Vairable Definitions
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const nodemailer = require('nodemailer')
var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const bodyParser = require('body-parser')

// Create the APP instance
var app = express();
// body parser for nodemailer.
app.use(bodyParser.urlencoded({ extended: true }))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// app.use('/users', usersRouter);

// catch 404 and forward to error handler
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

module.exports = app;
