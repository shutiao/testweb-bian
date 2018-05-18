var express = require('express'),
    router = express.Router();

var ngjsR = require('./ngjsR'),
    vueR = require('./vueR'),
    ngR = require('./ngR.js'),
    httpR = require('./httpR'),
    statusR = require('./statusR.js'),
    htmlR = require('./htmlR'),
    miscR = require('./miscR');

var bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

var logger = require('./logger');
var timeout = require('./timeout');
var template = require('./template');

module.exports = exports = function(app){
    app.use(timeout);
    app.use(logger);
    app.use(template);    // Populate EJS Content
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.get('/', function(req, res){
        res.redirect('/NGJS/tSuite/1');
    });
    app.use('/NGJS', ngjsR);
    app.use('/Vue', vueR);
    app.use('/angular', ngR);
    app.use('/HTTP', httpR);
    app.use('/StatusCode', statusR);
    app.use('/HTML', htmlR);
    app.use('/Misc/', miscR);
}