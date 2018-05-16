var express = require('express'),
    router = express.Router();

var ngjsR = require('./ngjsR'),
    vueR = require('./vueR'),
    ngR = require('./ngR.js'),
    httpIndex = require('./http'),
    //HttpR = require('./httpCacheHtml.js'),
    statusR = require('./statusR.js');

var bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

var logger = require('./logger');
var timeout = require('./timeout');
var template = require('./template');

module.exports = exports = function(app){
    app.use(timeout);
    app.use(logger);
    // Populate EJS Content
    app.use(template);
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.get('/', function(req, res){
        res.redirect('/NGJS/tSuite/1');
    });
    app.use('/NGJS', ngjsR);
    app.use('/Vue', vueR);
    app.use('/angular', ngR);
    app.use('/HTTP', httpIndex);
    //app.use('/HTTP', HttpR);
    app.use('/StatusCode', statusR);
}