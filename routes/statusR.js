var express = require('express');
var statusR = express.Router();

statusR.route('/StatusCode/:code').get(function(req, res){
    var statusCode = req.params.code;
    res.status(statusCode).send(statusCode + ' 了哈');
});

module.exports = statusR;

