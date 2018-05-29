var express = require('express');
var jsR = express.Router();

jsR.use('/ajax', require('./ajax'));

module.exports = jsR;