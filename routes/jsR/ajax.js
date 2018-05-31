var express = require('express');
var ajaxR = express.Router();

var cors = require('cors');
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

ajaxR.route('/')
    .get(function (req, res) {
        res.render(__dirname + '/../../views/JS/tSuite-2-Ajax.html');
    });

ajaxR.route('/JS-2-1')
    .options(cors())
    .all(cors(corsOptions), function(req, res){
        res.json(res.locals);
    })

module.exports = ajaxR;