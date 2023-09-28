var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var apiK8SRouter = require('./routes/api/index');
var apiScriptRouter = require('./routes/api/script');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiK8SRouter);
app.use('/api/script', apiScriptRouter);

module.exports = app;
