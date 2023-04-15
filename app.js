var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');
var flash = require('express-flash');
const session = require('express-session');

var indexRouter = require('./routes/index');
var driverRouter = require('./routes/driver');
var driver_left = require('./routes/driver_left');
var driver_right = require('./routes/driver_right');
var addUser = require('./routes/addUser');
var logoutRouter = require('./routes/logout');
var techRouter = require('./routes/tech');
var tech_left = require('./routes/tech_left');
var tech_right = require('./routes/tech_right');
var addRequest = require('./routes/addRequest');
var newRequest = require('./routes/newRequest');
var driver_history = require('./routes/driver_history');
var driver_active_request = require('./routes/driver_active_request');
var tech_active_request = require('./routes/tech_active_request');
var accept = require('./routes/accept');
var tech_history = require('./routes/tech_history');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
  secret: 'cs7319',
  resave: false,
  saveUninitialized: true
}));

// Login page.
app.use('/', indexRouter);
// Add user.
app.use('/addUser', addUser);

// Driver page.
app.use('/driver', driverRouter);
app.use('/driver_left', driver_left);    // Left banner in driver view
app.use('/driver_right', driver_right);    // Right banner in driver view
app.use('/logout', logoutRouter);

// Technician Page
app.use('/tech', techRouter);
app.use('/tech_left', tech_left);
app.use('/tech_right', tech_right);

// Submit request.
app.use('/addRequest', addRequest);
app.use('/newRequest', newRequest);

// Driver active request
app.use('/driver_active_request', driver_active_request);

// Look up driver request history
app.use('/driver_history', driver_history);

// Technician accepting job
app.use('/tech_active_request', tech_active_request);
app.use('/accept', accept);

// Look up technician service history
app.use('/tech_history', tech_history);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
