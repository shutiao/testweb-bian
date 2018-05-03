var express = require('express');
var vueR = express.Router();

vueR.route('/:testSuite')
    .get(function(req, res){
        var testSuite = req.params.testSuite;
        var pathPrefix = __dirname + '/../views/Vue/';
        res.locals = {headers: req.headers};
        switch(testSuite){
            case "tSuite-1-basics":
                res.render(pathPrefix + 'tSuite-1-basics.html');
                break;
            default:
                res.render(pathPrefix + 'tSuite-1-basics.html');
        }
    });

module.exports = vueR;

