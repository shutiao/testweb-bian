var express = require('express'),
    router = express.Router();

var ngjsR = require('./ngjsR'),
    vueR = require('./vueR'),
    statusR = require('./statusR.js');

module.exports = exports = function(app){
    app.get('/', function(req, res){
        res.redirect('/NGJS/main');
    });
    app.use('/NGJS', ngjsR);
    app.use('/Vue', vueR);
    app.use('/StatusCode', statusR);
}