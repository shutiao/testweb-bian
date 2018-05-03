var express = require('express'),
    router = express.Router();

var ngjsR = require('./ngjsR'),
    vueR = require('./vueR'),
    ng2R = require('./ng2R.js'),
    HttpR = require('./HttpR.js'),
    statusR = require('./statusR.js');

var bodyParser = require('body-parser');

var logger = require('./logger');
var timeout = require('./timeout');
var template = require('./template');

module.exports = exports = function(app){
    app.use(timeout);
    app.use(logger);
    app.use(template);
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.get('/', function(req, res){
        res.redirect('/NGJS/tSuite/1');
    });
    app.use('/NGJS', ngjsR);
    app.use('/Vue', vueR);
    app.use('/NG2', ng2R);
    app.use('/HTTP', HttpR);
    app.use('/StatusCode', statusR);
}