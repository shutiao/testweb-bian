var express = require('express');
var ngR = express.Router();

ngR.route('/*')
    .get(function(req, res){
        res.render(__dirname + '/../angular-app/dist/toh-index.html');
    });

module.exports = ngR;

