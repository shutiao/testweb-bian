var express = require('express');
var httpIndex = express.Router();

httpIndex.use('', require('./httpCacheHtml.js'));
httpIndex.use('', require('./httpCacheOthers.js'));
httpIndex.use('', require('./httpFunctionality.js'));
httpIndex.use('', require('./httpMethod.js'));

module.exports = httpIndex;