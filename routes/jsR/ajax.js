var express = require('express');
var ajaxR = express.Router();

ajaxR.route('/')
    .get(function (req, res) {
        res.render(__dirname + '/../../views/JS/tSuite-2-Ajax.html');
    });

    ajaxR.route('/JS-2-1')
    .get(function(req, res){
        res.sendStatus(200);
    })

module.exports = ajaxR;