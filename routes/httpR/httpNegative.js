var express = require('express');
var httpNegative = express.Router();

httpNegative.route('/negative')
    .get(function (req, res) {
        res.render(__dirname + '/../../views/HTTP/negative.html');
    });

module.exports = httpNegative;