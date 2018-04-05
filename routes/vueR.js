var express = require('express');
var vueR = express.Router();

vueR.route('/')
    .get(function(req, res){
        var pathPrefix = __dirname + '/../views/Vue/';
        res.render(pathPrefix + 'playground.html');
    });

module.exports = vueR;

