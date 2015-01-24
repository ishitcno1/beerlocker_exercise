/**
 * Modules dependencies
 */

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var route = require('./route');

mongoose.connect('mongodb://localhost:27017/beerlocker');

var port = process.env.PORT || 6601;
var app = express();

// middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(passport.initialize());

route(app);

app.listen(port);
console.log('Insert beer on port ' + port);
