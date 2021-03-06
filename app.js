'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var index = require('./routes/index');
var parents = require('./routes/parents');
var users = require('./routes/users');
var children = require('./routes/children');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
console.log("which directory"+__dirname);
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.use('/api/parents', parents);
app.use('/api/users', users);
app.use('/api/children', children);

module.exports = app;