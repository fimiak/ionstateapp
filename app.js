var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var apiRouter = require('./routes/api');
var indexRouter = require('./routes/index');
var leadersRouter = require('./routes/leaders');
var nationsRouter = require('./routes/nations');
var newsRouter = require('./routes/news');
var summitsRouter = require('./routes/summits');
var usersRouter = require('./routes/users');

var app = express();

// Mongoose mLab Database access
var mongoose = require('mongoose');
var mongoDB = 'mongodb://jgreve:practice1@ds058369.mlab.com:58369/prime';
mongoose.connect(
  mongoDB,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors());
app.listen(/*process.env.PORT ||*/ 3001, function() {
  console.log('Express server listening.');
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// push data that has been fetched to the database
// app.use(push);

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/leaders', leadersRouter);
app.use('/nations', nationsRouter);
app.use('/news', newsRouter);
app.use('/summits', summitsRouter);
app.use('/users', usersRouter);

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
