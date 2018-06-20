var express = require('express');
var httpIndex = express.Router();

httpIndex.use('', require('./httpCacheHtml.js'));
httpIndex.use('', require('./httpCacheOthers.js'));
httpIndex.use('/', require('./httpFunctionality.js'));
httpIndex.use('/methods', require('./httpMethod.js'));
httpIndex.use('/negative', require('./httpNegative.js'));
httpIndex.use('/cookie', require('./httpCookie.js'));

module.exports = httpIndex;