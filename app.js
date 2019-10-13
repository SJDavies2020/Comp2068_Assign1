// Vairable Definitions
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const nodemailer = require('nodemailer')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
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
app.use('/users', usersRouter);

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

// POST route from contact form
app.post('/ContactMe', (req, res) => {
  Console.bodyParser();
  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: saltymcblasty,
      pass: Bonnied029$
    }
  })
  // Specify what the email will look like
  const mailOpts = {
    from: 'Your sender info here', // This is ignored by Gmail
    to: GMAIL_USER,
    subject: 'New message from contact form at sdavies.ca',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  }
  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.render('contact-failure') // Show a page indicating failure
    }
    else {
      res.render('contact-success') // Show a page indicating success
    }
  })
})

module.exports = app;
