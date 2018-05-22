var express = require('express');
var httpNegative = express.Router();

httpNegative.route('/')
    .get(function (req, res) {
        res.render(__dirname + '/../../views/HTTP/negative.html');
    });

httpNegative.route('/http-5-2')
    .get(function(req, res){
        res.render(__dirname + '/../../views/HTTP/negative/chrome_essential_protection_report.html')
    });

module.exports = httpNegative;