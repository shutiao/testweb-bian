var express = require('express');
var app = express();
var server = require('http').createServer(app);
var routers = require('./routes');
var chattr = require('./public/NGJS/tSuite-5-SocketServer.js');

// Use Content-Encoding entity header to compress the media-type
var compress = require('compression');
//app.use(compress());

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/lib'));
app.use(express.static(__dirname + '/angular-app/dist'));
app.use(express.static(__dirname + '/react-app/dist'));
routers(app);

chattr(server);

module.exports = server;