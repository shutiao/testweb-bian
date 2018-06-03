var express = require('express'),
    router = express.Router();

var ngjsR = require('./ngjsR'),
    vueR = require('./vueR'),
    ngR = require('./ngR.js'),
    reactR = require('./reactR.js'),
    httpR = require('./httpR'),
    statusR = require('./statusR.js'),
    htmlR = require('./htmlR'),
    jsR = require('./jsR');
    miscR = require('./miscR');

var bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

var logger = require('./logger');
var timeout = require('./timeout');
var loopback = require('./loopback');

module.exports = exports = function(app){
    app.use(timeout);
    app.use(logger);
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(loopback);    // Populate EJS Content
    app.get('/', function(req, res){
        res.redirect('/NGJS/tSuite/1');
    });
    app.use('/NGJS', ngjsR);
    app.use('/Vue', vueR);
    app.use('/angular', ngR);
    app.use('/react', reactR);
    app.use('/HTTP', httpR);
    app.use('/StatusCode', statusR);
    app.use('/HTML', htmlR);
    app.use('/JS', jsR);
    app.use('/Misc/', miscR);
}