var express = require('express');
var jsR = express.Router();

jsR.use('/Ajax', require('./ajax'));

module.exports = jsR;