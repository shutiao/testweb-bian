var express = require('express');
var app = express();
var server = require('http').createServer(app);
var routers = require('./routes');
var chattr = require('./public/NGJS/tSuite-5-SocketServer.js');

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

routers(app);
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/lib'));
app.use(express.static(__dirname + '/angular-app/dist'));

chattr(server);

module.exports = server;